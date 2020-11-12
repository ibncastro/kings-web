'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    eventType: DataTypes.STRING,
    eventDate: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    Event.belongsToMany(models.User, { through: 'users_events'})
  };
  return Event;
};