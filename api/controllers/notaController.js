const path = require('path');
const basename = path.basename(__filename);
const {mainModel} = require('../common/models');
const Nota = new mainModel("Nota");
const { Op } = require('sequelize');

exports.viewNota = async (req, res) => {
    try {
      const nota = await Nota.getAll();
      res.send({
        message: "nota sent successfully",
        data: nota
      });
      console.log("\x1b[1m" + "[" + basename + "]" + "\x1b[0m" + " Query " + "\x1b[34m" + "GET (all) " + "\x1b[0m" + "done");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.tambahTransaksi = async (req, res) => {
    try {
        const nota = await Nota.getAll();
        const kode = nota.length;
        const {KodeTenan, KodeKasir, WaktuNota,JumlahBelanja,Diskon } = req.body;
        const newKodeNota = `NO2215110250${kode + 1}`;
      await Barang.post(
        {
        KodeNota: newKodeNota,
          KodeTenan:KodeTenan,
          KodeKasir:KodeKasir,
          TglNota:'',
          JamNota:'',
          JumlahBelanja:JumlahBelanja,
          Diskon:Diskon,
          Total:JumlahBelanja - (JumlahBelanja* Diskon/100),
        }
      );
      res.status(201).json({ msg: 'Barang created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };