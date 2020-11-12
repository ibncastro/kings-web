'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'levelId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addConstraint('Users', ['levelId'], {
        type: 'foreign key',
        name: 'fk_levels_id',
        references: {
          table: 'Levels',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'levelId')
  }
  
};

