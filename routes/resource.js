var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var flower_controller = require('../controllers/flowers');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/flowers', flower_controller.flower_create_post);
// DELETE request to delete Handbag.
router.delete('/flowers/:id', flower_controller.flower_delete);
// PUT request to update Handbag.
router.put('/flowers/:id', flower_controller.flower_update_put);
// GET request for one Handbag.
router.get('/flowers/:id', flower_controller.flower_detail);
// GET request for list of all Handbag.
router.get('/flowers', flower_controller.flower_list);
module.exports = router;