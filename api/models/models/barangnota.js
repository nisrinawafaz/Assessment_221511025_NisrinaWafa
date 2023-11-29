'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BarangNota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BarangNota.init({
    KodeNota: DataTypes.STRING,
    KodeBarang: DataTypes.STRING,
    JumlahBarang: DataTypes.INTEGER,
    HargaSatuan: DataTypes.INTEGER,
    Jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BarangNota',
    freezeTableName: true
  });
  return BarangNota;
};