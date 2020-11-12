'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addColumn('Courses', 'lecturerId', {
      type: Sequelize.INTEGER
    }),
    queryInterface.addConstraint('Courses', ['lecturerId'], {
      type: 'foreign key',
      name: 'fk_lecturer_id',
      references: {
        table: 'Lecturers',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
     })
   ])    
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Courses', 'lecturerId')
  }
};
