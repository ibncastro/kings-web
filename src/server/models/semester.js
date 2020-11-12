'use strict';
module.exports = (sequelize, DataTypes) => {
  const Semester = sequelize.define('Semester', {
    startMonth: DataTypes.STRING,
    endMonth: DataTypes.STRING,
    yearRange: DataTypes.STRING,
    feesToBePaid: DataTypes.INTEGER,
    duration: DataTypes.INTEGER
  }, {});
  Semester.associate = function(models) {
    Semester.belongsToMany(models.Course, {through: 'semester_courses'})
    Semester.hasMany(models.User)
    Semester.hasOne(models.Registration)
    Semester.hasMany(models.Class)
  };
  return Semester;
};