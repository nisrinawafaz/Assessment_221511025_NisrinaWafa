'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nota.init({
    KodeNota: DataTypes.STRING,
    KodeTenan: DataTypes.STRING,
    KodeKasir: DataTypes.STRING,
    TglNota: DataTypes.DATE,
    JamNota: DataTypes.TIME,
    JumlahBelanja: DataTypes.INTEGER,
    Diskon: DataTypes.INTEGER,
    Total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nota',
    freezeTableName: true
  });
  return Nota;
};