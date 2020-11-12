const typeDefinitions = `
directive @auth on QUERY | FIELD_DEFINITION | FIELD
scalar DateTime

enum Gender {
    Male
    Female
}

enum UserTypes {
    STUDENT
    LECTURER
    ADMINISTRATOR
    SUPERADMIN
}

enum Halls {
    NYANSAFO
    LAB1
    LAB2
    LAB3
    ADINKRA
}

enum Months {
    JAN
    FEB
    MAR
    APR
    MAY
    JUN
    JUL
    AUG
    SEP
    OCT
    NOV
    DEC
}

enum userStatus {
    ACTIVE
    INACTIVE
}

enum regStatus {
    COMPLETE
    PENDING
}

type Auth {
    token: String
    user: User
}

type lecAuth {
    lec: Lecturer
}

type Response {
    success: Boolean
}

type User {
    id: Int
    userType: UserTypes
    username: String
    firstName: String
    lastName: String
    middleName: String
    otherNames: String
    email: String
    isEmailConfirmed: String
    status: String
    gender: Gender
    verificationToken: String
    telNo: Int
    dob: DateTime
    guardian: Guardian
    password: String
    studentId: String
    countryOfOrigin: String
    passportPhoto: String
    entryCertType: String
    entryCertPhoto: String
    coverPhoto: String
    avatar: String
    course: [Course]
    semester: Semester
    examResults: [ExamResults]
    events: [Events]
    activeClass: Classs
    level: Level
}

type Lecturer {
    id: Int
    username: String
    firstName: String
    lastName: String
    middleName: String
    otherNames: String
    email: String
    isEmailConfirmed: String
    status: String
    gender: Gender
    verificationToken: String
    telNo: Int
    dob: DateTime
    password: String
    lecId: String
    countryOfOrigin: String
    passportPhoto: String
    course: [Course]
}

type userSearchByName {
    users: [User]
}

type Hall {
    id: Int
    name: Halls
}

type Level {
   id: Int
   name: String
}

type Classs {
    id: Int
    name: String
    hall: Hall
    semester: Semester
    user: [User]
    level: Level
    course: [Course]
}

type Guardian {
    firstName: String
    lastName: String
    otherNames: String
    tel: Int
    countryOfResidence: String
    address: String
    email: String
    user: [User]
}

type feesPayment {
    user: User
    semester: Semester
    amountPaid: Int
    totalAmount: Int
}

type Semester {
    startMonth: Months
    endMonth: Months
    yearRange: String
    feesToBePaid: Int
    duration: Int
    courses: [Course]
}

type ExamResults {
    user: User
    course: [Course]
    semester: Semester
}

type Events {
    id: Int
    title: String
    eventType: String
    eventDate: DateTime
    created: DateTime
    users: [User]
}

type Registration {
    user: User
    status: regStatus
    startingSemester: Semester
    guardian: Guardian
    created: DateTime
}

type Course {
    courseNo: String
    courseName: String
    semester: [Semester]
    user: [User]
    lecturer: Lecturer
}

type Complains {
    type: String
    title: String
    message: String
    user: User
    created: DateTime!
    comments: [ComplainComments]
}

type ComplainComments {
    id: Int
    complain: Complains
    user: User
}

type RootQuery {
    userSearchName(page: Int, limit: Int, text: String): userSearchByName   
    filterUsers(level: Int, classs: Int): userSearchByName 
    guardianDetails(name: String): Guardian
    allcourses: [Course!]!
    allUsers: [User]
    allguardians: [Guardian]
    events: [Events] 
    event(title: String): Events
    usersOnEvent(title: String): [User]
    complains: [Complains]
    complaint(id: Int): Complains
    complainComments(complainid: Int): [ComplainComments]
    course(name: String): Course
    results(studentId: String, semester: String): ExamResults
    allReg: [Registration]
    currentUser: User @auth
    SingleClass(name: String): Classs
    AllClasses: [Classs]
    studentsPerClass(className: String): [User]
    allLevels: [Level]
    fetchLecs: [Lecturer]
}

input SemesterInput {
    startMonth: Months
    endMonth: Months
    feesToPay: Int
    yearRange: String
}

input EventsInput {
    title: String!
    eventType: String
    eventDate: DateTime
}

input courseInput {
    courseName: String
    courseNo: String
    semesterId: Int
}

input complainInput {
    type: String
    title: String
    message: String
}

input userInput {
    userType: UserTypes
    username: String
    firstName: String
    lastName: String
    middleName: String
    otherNames: String
    email: String
    gender: Gender
    telNo: Int
    dob: DateTime
    countryOfOrigin: String
    countryOfResidence: String
    passportPhoto: String
    entryCertType: String
    entryCertPhoto: String
    coverPhoto: String
    avatar: String
}

input guardianInput {
    firstName: String
    lastName: String
    otherNames: String
    tel: Int
    countryOfResidence: String
    address: String
    email: String
}

input registerUsersInput {    
    guardian: Int
    semesterId: Int 
    status: String
    created: DateTime
}

input classInput {
    name: String
    hallId: Int
    semesterId: Int    
}

input usersInput {
    users: [Int]
}

input lecDetails {
    firstName: String
    username: String
    lastName: String
    otherNames: String
    telNo: String
    dob: DateTime
    email:String
}

type RootMutation {
 addSemester(
     semester: SemesterInput!
 ): Semester
 addEvent(
    event: EventsInput
 ): Events
 makecomplain(
    complainDetails: complainInput!
 ): Complains
 registerUsers(
     details: registerUsersInput
     user: userInput
     guardian: guardianInput
 ): Registration
 addCourse(
     courseDetails: courseInput
 ): Course
 login (
     email: String!
     password: String!
 ): Auth
 adminLogin (
     username: String
     password: String
 ): Auth
 lecturerLogin (
     username: String
     password: String
 ): Auth
 signup (
     username: String!
     email: String!
     password: String!
 ): Auth
 createClass(
    details: classInput
    users: usersInput
 ): Classs
addUsersToClass(
    users: usersInput
    classId: Int
): Classs
addLec(
    details: lecDetails
): Lecturer

}

schema {
    query: RootQuery
    mutation: RootMutation
}

`;

export default [typeDefinitions]