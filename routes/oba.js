const express = require('express');
const router = express.Router();
const obaController = require('../controllers/obaController');

router.post('/search', obaController.fetchData);

module.exports = router;