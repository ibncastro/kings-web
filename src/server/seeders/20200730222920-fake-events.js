'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      title: 'A new Title',
      eventType: 'School Graduation',
      eventDate: '4/09/2020'
    }, {
      title: 'A new Title',
      eventType: 'School Graduation',
      eventDate: '4/09/2020'
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
};
