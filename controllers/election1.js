const Election = require('../models/election');

exports.election_view_one_Page = async function(req, res) {
    console.log("*************");
    try{
    result = await Election.findById(req.query.id)
    res.render('electiondetail',
    { title: 'Election Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    exports.election_view_all_Page = async function(req, res) {
        try{
            result= await Election.find();
            res.render('Election', { title: 'Election Search Results', results: result});
        }
        catch(err){
            res.status(500);
            res.send(`{err}`);
        }
    };

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

      exports.election_update_Page = async function(req, res) {
        console.log("update view for item "+req.query.id)
        try{
        let result = await Election.findById(req.query.id)
        res.render('electionupdate', { title: 'Election Update', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
      };

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
        
      exports.election_delete = async function (req, res) {
        console.log("delete " + req.params.id);
        try {
          result = await Election.findByIdAndDelete(req.params.id)
          console.log("Removed " + result);
          res.send(result);
        } catch (err) {
          res.status(500);
          res.send(`{"error": Error deleting ${err}}`);
        }
      };