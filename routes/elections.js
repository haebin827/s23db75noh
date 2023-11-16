var express = require('express');
const election_controllers= require('../controllers/election1');
var router = express.Router();
console.log("in routes");
/* GET elections */
router.get('/', election_controllers.election_view_all_Page);
// router.get("/", election_controllers.election_list);
// router.get('/:id', election_controllers.election_detail);
router.get('/details', election_controllers.election_view_one_Page);
router.get('/create', election_controllers.election_create_Page);
router.get('/update', election_controllers.election_update_Page);
router.get('/delete', election_controllers.election_delete_Page);

module.exports = router;
