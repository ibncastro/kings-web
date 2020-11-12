'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseNo: DataTypes.STRING,
    courseName: DataTypes.STRING,
    lecturerId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    Course.belongsToMany(models.Semester, {through: 'semester_courses'})
    Course.belongsToMany(models.User, {through: 'users_courses'})
    Course.belongsTo(models.Lecturer)
    Course.belongsTo(models.Class)
  };
  return Course;
};