const path = require('path');
const basename = path.basename(__filename);
const {mainModel} = require('../common/models');
const BarangNota = new mainModel("BarangNota");
const { Op } = require('sequelize');

