var express = require('express');
const election_controllers= require('../controllers/election1');
var router = express.Router();
console.log("in routes");

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET elections */
router.get('/', election_controllers.election_view_all_Page);
// router.get("/", election_controllers.election_list);
// router.get('/:id', election_controllers.election_detail);
router.get('/details', election_controllers.election_view_one_Page);
router.get('/create', secured, election_controllers.election_create_Page);
router.get('/update',secured, election_controllers.election_update_Page);
router.get('/delete', secured, election_controllers.election_delete_Page);

module.exports = router;
