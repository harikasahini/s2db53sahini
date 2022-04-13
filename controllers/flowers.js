var flower = require('../models/flowers');
// List of all Costumes
exports.flower_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower list');
};
// for a specific Costume.
exports.flower_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.flower_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower create POST');
};
// Handle Costume delete form on DELETE.
exports.flower_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.flower_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower update PUT' + req.params.id);
};