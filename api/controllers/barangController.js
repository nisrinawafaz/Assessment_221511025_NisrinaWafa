const path = require('path');
const basename = path.basename(__filename);
const {mainModel} = require('../common/models');
const Barang = new mainModel("Barang");
const { Op } = require('sequelize');

exports.viewBarang = async (req, res) => {
    try {
      const barang = await Barang.getAll();
      res.send({
        message: "Barang sent successfully",
        data: barang
      });
      console.log("\x1b[1m" + "[" + basename + "]" + "\x1b[0m" + " Query " + "\x1b[34m" + "GET (all) " + "\x1b[0m" + "done");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.tambahBarang = async (req, res) => {
    try {
        const barang = await Barang.getAll();
        const kode = barang.length;
        const {NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
        const newKodeBarang = `BRG2215110250${kode + 1}`;
        const newNamaBarang = NamaBarang + 'Nisrina Wafa'
      await Barang.post(
        {
          KodeBarang: newKodeBarang,
          NamaBarang:newNamaBarang,
          Satuan:Satuan,
          HargaSatuan:HargaSatuan,
          Stok:Stok
        }
      );
      res.status(201).json({ msg: 'Barang created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.satuBarang = async (req, res) => {
    try {
      const { id } = req.params; // Ambil ID dari parameter URL
      const barang = await Barang.get({
        where: { KodeBarang: id },
      });
  
      if (barang) {
        res.send({
          message: "Data Kelas found successfully",
          data: barang,
        });
        console.log("\x1b[1m" + "[" + basename + "]" + "\x1b[0m" + " Query " + "\x1b[34m" + "GET (one) " + "\x1b[0m" + "done");
      } else {
        res.status(404).json({ message: "Barang not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  exports.editBarang = async (req, res) => {
    try {
      const { id } = req.params; 
      const newData = req.body;
      const whereClause = { KodeBarang: id };
  
      const [updatedRowCount] = await Barang.patch(newData, whereClause);
  
      if (updatedRowCount === 0) {
        return res.status(404).json({ msg: 'Barang not found' });
      }
  
      res.status(200).json({ msg: 'Barang updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.hapusBarang = async (req, res) => {
    try {
      const whereClause = { KodeBarang: req.params.id }; // Contoh: menghapus data berdasarkan ID
      const deletedRowCount = await Barang.delete(whereClause);
  
      if (deletedRowCount === 0) {
        return res.status(404).json({ msg: 'Barang not found' });
      }
  
      res.status(200).json({ msg: 'New Schedule deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };