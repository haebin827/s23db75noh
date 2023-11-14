var express = require('express');
const election_controllers= require('../controllers/election');
var router = express.Router();

/* GET elections */
router.get('/', election_controllers.election_view_all_Page);
router.get("/", election_controllers.election_detail);
router.get("/", election_controllers.election_delete);
router.get("/", election_controllers.election_update_put);
router.get("/", election_controllers.election_create_post);
router.get("/", election_controllers.election_list);
router.get('/:id', election_controllers.election_detail);
router.get('/detail', election_controllers.election_view_one_Page);
router.get('/create', election_controllers.election_create_Page);
module.exports = router;
