'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init({
    KodeBarang: DataTypes.STRING,
    NamaBarang: DataTypes.STRING,
    Satuan: DataTypes.STRING,
    HargaSatuan: DataTypes.INTEGER,
    Stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang',
    freezeTableName: true
  });
  return Barang;
};