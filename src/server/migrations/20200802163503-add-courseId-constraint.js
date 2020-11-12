'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('Users', ['courseId'], {
        type: 'foreign key',
        name: 'fk_course_id',
        references: {
          table: 'Courses',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'courseId')
  }
};
