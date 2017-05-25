const keystone = require('keystone');
const Types = keystone.Field.Types;

const Coupon = new keystone.List('Coupon', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Coupon.add({
	image: { type: Types.CloudinaryImage, autoCleanup: true, required: true, initial: false },
	expires: { type: Types.Date, required: false },
});

Coupon.register();
