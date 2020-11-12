'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    name: DataTypes.STRING
  }, {});
  Level.associate = function(models) {
    Level.hasMany(models.Class)
  };
  return Level;
};