'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lecturers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      middleName: {
        type: Sequelize.STRING
      },
      otherNames: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      isEmailConfirmed: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      verificationToken: {
        type: Sequelize.STRING
      },
      telNo: {
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
      },
      lecId: {
        type: Sequelize.STRING
      },
      countryOfOrigin: {
        type: Sequelize.STRING
      },
      passportPhoto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lecturers');
  }
};