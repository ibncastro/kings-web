'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('Classes', ['hallId'], {
        type: 'foreign key',
        name: 'fk_hall_id',
        references: {
          table: 'Halls',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Classes', 'hallId')
  }
  
};
