'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    hallId: DataTypes.INTEGER,
    semesterId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    Class.hasMany(models.User)
    Class.belongsTo(models.Hall)
    Class.belongsTo(models.Semester)
    Class.belongsTo(models.Level)
    Class.hasMany(models.Course)
  };
  return Class;
};