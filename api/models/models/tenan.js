'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tenan.init({
    KodeTenan: DataTypes.STRING,
    NamaTenan: DataTypes.STRING,
    HP: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tenan',
    freezeTableName: true
  });
  return Tenan;
};