var flower = require('../models/flowers');
// List of all flower
exports.flower_list = async function(req, res) {
    try{
    theflower = await flower.find();
    res.send(theflower);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
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
// VIEWS
// Handle a show all view
exports.flower_view_all_Page = async function(req, res) {
    try{
    theflower = await flower.find();
    res.render('flowers', { title: 'Flower Search Results', results: theflower });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
