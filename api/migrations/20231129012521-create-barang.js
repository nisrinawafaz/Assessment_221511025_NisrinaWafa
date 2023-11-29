'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Barang', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      KodeBarang: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      NamaBarang: {
        type: Sequelize.STRING
      },
      Satuan: {
        type: Sequelize.STRING
      },
      HargaSatuan: {
        type: Sequelize.INTEGER
      },
      Stok: {
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
    await queryInterface.dropTable('Barangs');
  }
};