'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kasir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kasir.init({
    KodeKasir: DataTypes.STRING,
    Nama: DataTypes.STRING,
    HP: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kasir',
    freezeTableName: true
  });
  return Kasir;
};