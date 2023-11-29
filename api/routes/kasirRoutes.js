const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');


router.get('/', kasirController.viewKasir);

module.exports = router;