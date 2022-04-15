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
// for a specific flower.
exports.flower_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower detail: ' + req.params.id);
};
// Handle flower create on POST.
exports.flower_create_post = async function(req, res) {
    console.log(req.body)
    let document = new flower();
    document.flower_type = req.body.flower_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle flower delete form on DELETE.
exports.flower_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Flower delete DELETE ' + req.params.id);
};
// // Handle flower update form on PUT.
// exports.flower_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: Flower update PUT' + req.params.id);
// };
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

// for a specific flower.
exports.flower_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await flower.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle flower update form on PUT.
exports.flower_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await flower.findById( req.params.id)
 // Do updates of properties
 if(req.body.flower_type)
 toUpdate.flower_type = req.body.flower_type;
 if(req.body.size) toUpdate.size = req.body.size;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};