const { render } = require('ejs');
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
	new: newTicket,
	create,
};

function newTicket(req, res) {
	Flight.findById(req.params.id, function (err, flight) {
		res.render('tickets/new', { flight });
	});
}

function create(req, res) {
	const ticket = new Ticket(req.body);
	ticket.flight = req.params.id;
	ticket.save(function (err) {
		if (err) {
			return res.redirect(`${flights / req.params.id / tickets}/new`);
		}
		res.redirect(`/flights/${req.params.id}`);
	});
}
