// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../../controllers/api/itemsController');

router.get('/', mainController.index); /* GET - principal */

module.exports = router;