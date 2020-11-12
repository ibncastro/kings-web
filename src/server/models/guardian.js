'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guardian = sequelize.define('Guardian', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    otherNames: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    countryOfResidence: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Guardian.associate = function(models) {
    Guardian.hasMany(models.User)
    // Guardian.belongsTo(models.Registration)
  };
  return Guardian;
};