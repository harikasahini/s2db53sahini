var express = require('express');
const flower_controllers= require('../controllers/flowers');
var router = express.Router();

const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET flowers */
router.get('/', flower_controllers.flower_view_all_Page);

// GET request for one flower.
router.get('/flowers/:id',flower_controllers.flower_detail);

/* GET detail costume page */
router.get('/detail', flower_controllers.flower_view_one_Page);

/* GET create costume page */
router.get('/create', flower_controllers.flower_create_Page);

/* GET create update page */
router.get('/update',secured, flower_controllers.flower_update_Page);

/* GET delete costume page */
router.get('/delete', flower_controllers.flower_delete_Page);

module.exports = router;