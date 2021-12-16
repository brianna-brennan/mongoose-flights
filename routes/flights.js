const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const detailsCtrl = require('../controllers/details');
const ticketsCtrl = require('../controllers/tickets');
const ticket = require('../models/ticket');
//all paths in this router have "/flights" prefixed to them

//GET "/flights" - Index Route
router.get('/', flightsCtrl.index);

//GET- new route
router.get('/new', flightsCtrl.new);
router.get('/:id/tickets/new', ticketsCtrl.new);

//POST - create route
router.post('/', flightsCtrl.create);
router.post('/:id/destination', detailsCtrl.create);
router.post('/:id/tickets', ticketsCtrl.create);

//GET- show route
router.get('/:id', flightsCtrl.show);

module.exports = router;
