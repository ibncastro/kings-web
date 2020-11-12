'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    semesterId: DataTypes.INTEGER,
    created: DataTypes.DATE
  }, {});
  Registration.associate = function(models) {
    Registration.belongsTo(models.User)
    Registration.belongsTo(models.Semester)
    // Registration.hasOne(models.Guardian)
  };
  return Registration;
};