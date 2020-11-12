import logger from '../../helpers/logger'
import { GraphQLScalarType } from 'graphql'
import Sequelize from 'sequelize';
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
const Op = Sequelize.Op;

export default function resolver() {

    const { db } = this;
    const { User, Event, Guardian, Course, Semester, Registration, Class, Hall, Level, Lecturer } = db.models;
    
        const resolvers = {

            User: {
                course(user, args, context){
                    return user.getCourses();
                },
                semester(user, args, context){
                    return user.getSemester();
                },
                guardian(user, args, context){
                    return user.getGuardian()
                },
                activeClass(user, args, context){
                    return user.getClass()
                },
                level(user, args, context){
                    return user.getLevel()
                }
               
            },

            Lecturer: {
                course(lecturer,args, context){
                    return lecturer.getCourses()
                }
            },

            Classs: {
                semester(classs, args, context){
                    return classs.getSemester()
                },
                user(classs, args, context){
                    return classs.getUsers()
                },
                hall(classs, args, context){
                    return classs.getHall()
                },
                level(classs, args, context){
                    return classs.getLevel()
                },
                course(classs, args, context){
                    return classs.getCourses()
                }

            },

            Guardian: {
                user(guardian, args, context) {
                    return guardian.getUsers()
                }
            },

            Semester: {
                courses(semester, args, context){
                    return semester.getCourses()
                }
            },

            Registration: {
                user(registration, args, context) {
                    return registration.getUser()
                },
                startingSemester(registration, args, context){
                    return registration.getSemester()
                },
                guardian(registration, args, contex){
                    return registration.getGuardian()
                }
            },

            Course: {
                user(course, args, context) {
                    return course.getUsers()
                },
                semester(course, args, context){
                    return course.getSemesters()
                },
                lecturer(course, args, context){
                    return course.getLecturer()
                }
            },

            RootQuery: {

                currentUser(root, args, context){
                    return context.user
                },

                userSearchName(root, { page, limit, text}, context) {
                    if(text.length < 3){
                        return {
                            users: []
                        }
                    }

                    let skip = 0;
                    if(page & limit){
                        skip = page * limit
                    }

                    var query = {
                        order: [[ 'createdAt', 'DESC']],
                        offset: skip
                    }

                    if(limit){
                        query.limit = limit
                    }
                    
                    query.where = {
                        [Op.or]: [
                            {
                                username: {
                                    [Op.like]: '%' + text + '%'
                                }
                            },
                            {
                                firstName: {
                                    [Op.like]: '%' + text + '%'
                                }
                            },
                            {
                                lastName: {
                                    [Op.like]: '%' + text + '%'
                                }
                            }
                        ]
                    }

                    return {
                        users: User.findAll(query)
                    }
                },

                filterUsers(root, { level, classs}, context) {
                
                     var query = {
                        order: [[ 'createdAt', 'DESC']],                        
                    }
                    
                    query.where = {
                        [Op.and]: [
                            {
                                classId: classs
                            },
                            {
                                levelId: level
                            }                           
                        ]
                    }

                    return {
                        users: User.findAll(query)
                    }
                },

                events(root, args, context) {
                    return Event.findAll({order: [['id', 'ASC']]})
                },
                allcourses(root, args, context){
                    return Course.findAll({
                        include: [{
                            model: Semester
                        },{
                            model: User
                        }]
                    })
                },

                allLevels(root, args, context){
                    return Level.findAll()
                },

                allReg(root, args, context){
                    return Registration.findAll({
                        include: [{
                            model: User,
                        },{
                            model: Semester
                        }]
                    })
                },
                allUsers(root, args, context){
                    return User.findAll({
                        include: [{
                            model: Guardian
                        },{
                            model: Course
                        },{
                            model: Semester
                        }]
                    })
                },
                allguardians(root, args, context){
                    return Guardian.findAll({
                        include: [{
                            model: User,
                            required: true
                        }]
                    })
                },

                SingleClass(root, { name }, context){
                    return Class.find({
                        where: {
                            name: name
                        },
                        order: [['name', 'DESC']]
                    })
                },

                AllClasses(root, args, context){
                    return Class.findAll({order: [['levelId', 'ASC']]})
                },

                studentsPerClass(root, {className}, context){
                    return Class.find({
                        where:{
                            name: className
                        }
                    }).then((newClass) => {
                        return User.findAll({
                            where:{
                                classId: newClass.id
                            }
                        })
                    }).then((users) => {
                        return users
                    })
                }, 

                fetchLecs(root, args, context){
                    return Lecturer.findAll({})
                }


            },

            RootMutation: {

                addEvent(root, { event }, context){
                    return Event.create({...event}).then((newEvent) => {
                        return newEvent;
                    })
                },
                addCourse(root, { courseDetails }, context){
                    return Course.create({ ...courseDetails }).then((newCourse) => {
                        return Promise.all([
                            newCourse.setSemester('1')
                        ]).then((newCourse) => {
                            return newCourse
                        })
                    })
                },

                login(root, { email, password }, context){
                    return User.findAll({
                        where: {
                            email
                        },
                        raw: true
                    }).then(async (users) => {
                        if(users.length = 1) {
                            const user = users[0];
                            const passwordValid = await bcrypt.compare(password, user.password);
                            if(!passwordValid) {
                                throw new Error('Password does not match');
                            }
                            const token = JWT.sign({email, id: user.id}, "thisisasupersecretstringforyou", {
                                expiresIn: '1d'
                            });

                            return {token}
                        } else {
                            throw new Error("User not found");
                        }
                    })
                },

                adminLogin(root, {username, password}, context){
                    return User.findAll({
                        where: {
                            username,
                            userType: "ADMIN"
                        },
                        raw: true
                    }).then(async (users) => {
                        if(users.length = 1) {
                            const user = users[0];
                            const passwordValid = await bcrypt.compare(password, user.password);
                            if(!passwordValid){
                                throw new Error('Password does not match');
                            }

                            const token = JWT.sign({username, id: user.id}, "thisisasupersecretstringforyou", {
                                expiresIn: '1d'
                            });

                            return {
                                token
                            }
                        } else {
                            throw new Error("User not found")
                        }
                    })
                },

                lecturerLogin(root, {username, password}, context){
                    return Lecturer.findAll({
                        where: {
                            username
                        },
                        raw: true
                    }).then(async (users) => {
                        if(users.length = 1) {
                            const user = users[0];
                            const passwordValid = await bcrypt.compare(password, user.password);
                            if(!passwordValid){
                                throw new Error('Password does not match');
                            }
                            
                            const token = JWT.sign({username, id: user.id}, "thisisasupersecretstringforyou", {
                                expiresIn: '1d'
                            });

                            return {
                                token,
                                user
                            }
                        } else {
                            throw new Error("User not found")
                        }
                    })
                },

                addLec(root, { details }, context){
                    // return Lecturer.findAll({
                    //     where: {
                    //         email: "asa@email.com"
                    //     },
                    //     raw: true
                    // }).then((lec) => {
                    //     if(lec.length){
                    //         throw new Error('Lecturer already Exist');
                    //     } else {
                            return bcrypt.hash("passwords", 10).then((hash) => {
                                return Lecturer.create({
                                    firstName: details.firstName,
                                    username: details.username,
                                    lastName: details.lastName,
                                    otherNames: details.otherNames,
                                    email: details.email,
                                    telNo: details.telNo,
                                    dob: details.dob,
                                    password: hash,
                                    lecId: "9DKN33-22",
                                    status: "ACTIVE"
                                }).then((newUser) => {
                                    return {
                                        newUser
                                    }
                                })
                            })
                    //     }
                    // })
                },


                signup(root, {username, email, password}, context){
                    return User.findAll({
                        where: {
                            [Op.or]: [{email}, {username}]
                        },
                        raw: true,
                    }).then(async (users) => {
                        if(users.length){
                            throw new Error('User already Exist');
                        } else {
                            return bcrypt.hash(password, 10).then((hash) => {
                                return User.create({
                                    email,
                                    password: hash,
                                    username,
                                    activated: 1
                                }).then((newUser) => {
                                    const token = JWT.sign({email, id: newUser.id}, "thisisasupersecretstringforyou", {expiresIn: '1d'})
                                    return {
                                        token
                                    }
                                })                                
                            })
                        }
                    })
                },

                registerUsers(root, { details, user, guardian}, context) {
                    return Guardian.create({...guardian}).then((newGuardian) => {
                        return User.create({...user}).then((newUser) => {
                            return newUser.setGuardian('1')
                        }).then(() => {
                            return Registration.create({...details}).then((newReg) => {
                                return Promise.all([
                                    newReg.setUser('1'),
                                    newReg.setSemester('1')
                                ]).then((alldone) => {
                                    return alldone
                                })
                            })
                        })
                    })
                },

                createClass(root, {details, users}, context){
                    return Class.create({...details}).then((newClass) => {
                        return Promise.all([
                            newClass.setUsers(users.users)
                        ]).then(() => {
                            return newClass
                        })                         
                    })
                },

                addUsersToClass(root, {users, classId}, context){
                    return Class.findById(classId).then((classFound) => {
                        return Promise.all([
                            classFound.setUsers(users.users)
                        ]).then(() => {
                            return classFound
                        })
                    })
                },

                

                

            },

            DateTime: new GraphQLScalarType({
                name: 'DateTime',
                description: 'A valid date time value',
                parseValue: value => new Date(value),
                serialize: value => new Date(value).toISOString(),
                parseLiteral: ast => ast.value
            })

        }

return resolvers;

}