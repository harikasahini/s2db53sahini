var express = require('express');
const flower_controllers= require('../controllers/flowers');
var router = express.Router();
/* GET flowers */
router.get('/', flower_controllers.flower_view_all_Page);
module.exports = router;
// GET request for one flower.
router.get('/flowers/:id',flower_controllers.flower_detail);