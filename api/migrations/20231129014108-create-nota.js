'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      KodeNota: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      KodeTenan: {
        type: Sequelize.STRING
      },
      KodeKasir: {
        type: Sequelize.STRING
      },
      TglNota: {
        type: Sequelize.DATE
      },
      JamNota: {
        type: Sequelize.TIME
      },
      JumlahBelanja: {
        type: Sequelize.INTEGER
      },
      Diskon: {
        type: Sequelize.INTEGER
      },
      Total: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nota');
  }
};