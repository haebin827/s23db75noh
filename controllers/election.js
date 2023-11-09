var Election = require('../models/election');
// List of all Elections
exports.election_list = function(req, res) {
res.send('NOT IMPLEMENTED: Election list');
};
// for a specific Election.
exports.election_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Election detail: ' + req.params.id);
};
// Handle Election create on POST.
exports.election_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Election create POST');
};
// Handle Election delete form on DELETE.
exports.election_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Election delete DELETE ' + req.params.id);
};
// Handle Election update form on PUT.
exports.election_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Election update PUT' + req.params.id);
};

// List of all Elections
exports.election_list = async function(req, res) {
    try{
    theElections = await Election.find();
    res.send(theElections);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.election_view_all_Page = async function(req, res) {
    try{
    theElections = await Election.find();
    res.render('elections', { title: 'Election Search Results', results: theElections});
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle Costume create on POST.
exports.election_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Election();
    document.election_type = req.body.election_type;
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