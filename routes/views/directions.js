const keystone = require('keystone');

exports = module.exports = (req, res) => {

	const view = new keystone.View(req, res);
	const locals = res.locals;

	// Set locals
	locals.section = 'directions';
	
	// Render the view
	view.render('directions');

};
