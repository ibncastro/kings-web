'use strict';

const { level } = require("winston");

module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
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
    password: DataTypes.STRING,
    lecId: DataTypes.STRING,
    countryOfOrigin: DataTypes.STRING,
    passportPhoto: DataTypes.STRING
  }, {});
  Lecturer.associate = function(models) {
    Lecturer.hasMany(models.Course)
  };
  return Lecturer;
};