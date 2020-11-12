'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hall = sequelize.define('Hall', {
    name: DataTypes.STRING
  }, {});
  Hall.associate = function(models) {
    Hall.hasOne(models.Class)
  };
  return Hall;
};