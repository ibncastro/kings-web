'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userType: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
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
      guardianId: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.STRING
      },
      countryOfOrigin: {
        type: Sequelize.STRING
      },
      passportPhoto: {
        type: Sequelize.STRING
      },
      entryCertType: {
        type: Sequelize.STRING
      },
      entryCertPhoto: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      courseId: {
        type: Sequelize.INTEGER
      },
      complaintId: {
        type: Sequelize.INTEGER
      },
      semesterId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Users');
  }
};