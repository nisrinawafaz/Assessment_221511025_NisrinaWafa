const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

router.get('/', tenanController.viewTenan);

module.exports = router;