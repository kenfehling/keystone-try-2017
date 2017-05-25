const _ = require('lodash');

exports = module.exports = (req, res) => {
	const updater = res.locals.text.getUpdateHandler(req);
	updater.process(req.body, {
		flashErrors: true,
		logErrors: true,
	}, (err) => {
		if (err) {
			console.error(err);
		} else {
			req.flash('success', 'Text updated');
			const url = _.initial(req.url.split('/')).join('/');  // drop '/edit'
			return res.redirect(url);
		}
	});
};
