var Election = require('../models/election');
// List of all Elections
exports.election_list = function(req, res) {
res.send('NOT IMPLEMENTED: Election list');
};
// for a specific Costume.
exports.election_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Election detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.election_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Election create POST');
};
// Handle Costume delete form on DELETE.
exports.election_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Election delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.election_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Election update PUT' + req.params.id);
};

// List of all Costumes
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