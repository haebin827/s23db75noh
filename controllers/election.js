const election = require('../models/election');
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
// Add
exports.election_view_one_Page = function(req, res) {
  res.send('NOT IMPLEMENTED: Election view one page' + req.params.id);
};
// Add
exports.election_update_Page = function(req, res) {
  res.send('NOT IMPLEMENTED: Election update Page' + req.params.id);
};
// Add
exports.election_delete_Page = function(req, res) {
  res.send('NOT IMPLEMENTED: Election update Page' + req.params.id);
};

// List of all Elections
exports.election_list = async function(req, res) {
    try{
    Election = await Election.find();
    res.send(Election);
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
        Election = await Election.find();
        res.render('Election', { title: 'Election Search Results', results: Election});
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Election create on POST.
exports.election_create_post = async function(req, res) {
    console.log(req.body)
    let document = new election();
    document.year = req.body.year;
    document.location = req.body.location;
    document.candidate = req.body.candidate;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// for a specific Election.
exports.election_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Election.findById(req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle election delete form on DELETE.
exports.election_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
      result = await Election.findByIdAndDelete(req.params.id);
      console.log("Removed " + result);
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": Error deleting ${err}}`);
    }
  };

// Handle election update form on PUT.
exports.election_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Election.findById(req.params.id);
    // Do updates of properties
    if (req.body.year) toUpdate.year = req.body.year;
    if (req.body.location) toUpdate.location = req.body.location;
    if (req.body.candidate) toUpdate.candidate = req.body.candidate;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};

// Handle a show one view with id specified by query
exports.election_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await Election.findById( req.query.id)
  res.render('electiondetail',
  { title: 'Election Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
};

  // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.election_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('electioncreate', { title: 'Election Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a costume.
// query provides the id
exports.election_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await Costume.findById(req.query.id)
  res.render('electionupdate', { title: 'Election Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
};

// Handle a delete one view with id from query
exports.election_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await Election.findById(req.query.id)
  res.render('electiondelete', { title: 'Election Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };