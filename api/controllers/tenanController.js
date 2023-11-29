const path = require('path');
const basename = path.basename(__filename);
const {mainModel} = require('../common/models');
const Tenan = new mainModel("Tenan");
const { Op } = require('sequelize');

exports.viewTenan = async (req, res) => {
    try {
      const tenan = await Tenan.getAll();
      res.send({
        message: "Tenan sent successfully",
        data: tenan
      });
      console.log("\x1b[1m" + "[" + basename + "]" + "\x1b[0m" + " Query " + "\x1b[34m" + "GET (all) " + "\x1b[0m" + "done");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };