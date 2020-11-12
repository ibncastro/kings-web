'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addColumn('Courses', 'classId', {
      type: Sequelize.INTEGER
    }),
    queryInterface.addConstraint('Courses', ['classId'], {
      type: 'foreign key',
      name: 'fk_classs_id',
      references: {
        table: 'Classes',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
     })
   ])    
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Courses', 'classId')
  }
};
