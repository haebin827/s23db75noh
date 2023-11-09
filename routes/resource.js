var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var election_controller = require('../controllers/election');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Election.
router.post('/elections', election_controller.election_create_post);
// DELETE request to delete Election.
router.delete('/elections/:id', election_controller.election_delete);
// PUT request to update Election.
router.put('/elections/:id', election_controller.election_update_put);
// GET request for one Election.
router.get('/elections/:id', election_controller.election_detail);
// GET request for list of all Election items.
router.get('/elections', election_controller.election_list);
module.exports = router;