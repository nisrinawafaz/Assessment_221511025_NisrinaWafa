const path = require('path');
const basename = path.basename(__filename);
const {mainModel} = require('../common/models');
const Kasir = new mainModel("Kasir");
const { Op } = require('sequelize');

exports.viewKasir = async (req, res) => {
    try {
      const kasir = await Kasir.getAll();
      res.send({
        message: "Kasir sent successfully",
        data: kasir
      });
      console.log("\x1b[1m" + "[" + basename + "]" + "\x1b[0m" + " Query " + "\x1b[34m" + "GET (all) " + "\x1b[0m" + "done");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };