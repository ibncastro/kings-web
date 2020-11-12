'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userType: DataTypes.STRING,
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    otherNames: DataTypes.STRING,
    email: DataTypes.STRING,
    isEmailConfirmed: DataTypes.STRING,
    status: DataTypes.STRING,
    gender: DataTypes.STRING,
    verificationToken: DataTypes.STRING,
    telNo: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    guardianId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    studentId: DataTypes.STRING,
    countryOfOrigin: DataTypes.STRING,
    passportPhoto: DataTypes.STRING,
    entryCertType: DataTypes.STRING,
    entryCertPhoto: DataTypes.STRING,
    avatar: DataTypes.STRING,
    complaintId: DataTypes.INTEGER,
    semesterId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Course, {through: 'users_courses'})
    User.belongsTo(models.Semester)
    User.belongsToMany(models.Event, { through: 'users_events'})
    User.belongsTo(models.Guardian)
    User.hasOne(models.Registration)
    User.belongsTo(models.Class)
    User.belongsTo(models.Level)
  };
  return User;
};