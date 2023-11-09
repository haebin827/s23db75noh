var express = require('express');
const election_controllers= require('../controllers/election');
var router = express.Router();

/* GET elections */
router.get('/', election_controllers.election_view_all_Page );
module.exports = router;
