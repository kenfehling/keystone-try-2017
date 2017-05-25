const keystone = require('keystone');

exports = module.exports = function (req, res) {

	const view = new keystone.View(req, res);
	const locals = res.locals;

	// Set locals
	locals.section = 'gallery';

	// Load the galleries by sortOrder
	view.query('gallery', keystone.list('Gallery').model
		.findOne({key: req.params.key})
		.populate('images')
		.sort('sortOrder'));

	// Render the view
	view.render('gallery');

};
