'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BarangNota', {
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
      KodeBarang: {
        type: Sequelize.STRING
      },
      JumlahBarang: {
        type: Sequelize.INTEGER
      },
      HargaSatuan: {
        type: Sequelize.INTEGER
      },
      Jumlah: {
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
    await queryInterface.dropTable('BarangNota');
  }
};