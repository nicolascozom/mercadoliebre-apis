// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiItemsController = require('../../controllers/api/itemsController');

router.get('/', apiItemsController.list); /* GET - principal */

router.post('/', apiItemsController.store) /* POST - principal */

module.exports = router;