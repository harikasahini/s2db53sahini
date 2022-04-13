var express = require('express');
const flower_controllers= require('../controllers/flowers');
var router = express.Router();
/* GET costumes */
router.get('/', flower_controllers.flower_view_all_Page);
module.exports = router;