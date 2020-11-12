'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('Classes', ['semesterId'], {
        type: 'foreign key',
        name: 'fk_semesterId_id',
        references: {
          table: 'Semesters',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Classes', 'semesterId')
  }
};
