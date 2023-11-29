const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

router.post('/', barangController.tambahBarang);
router.patch('/update/:id', barangController.editBarang);
router.get('/', barangController.viewBarang);
router.get('/:id', barangController.satuBarang);
router.delete('/delete/:id', barangController.hapusBarang);

module.exports = router;