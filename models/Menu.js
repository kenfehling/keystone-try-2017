const keystone = require('keystone');
const Types = keystone.Field.Types;

const MenuItem = new keystone.List('MenuItem', {
	autokey: { from: 'name', path: 'key', unique: true },
});

MenuItem.add({
	name: { type: String, required: true },
	description: { type: Types.Textarea, height: 150 },
	image: { type: Types.CloudinaryImage, autoCleanup: true },
	price: { type: Types.Money },
});

MenuItem.register();

const Menu = new keystone.List('Menu', {
	autokey: { from: 'name', path: 'key', unique: true },
	drilldown: 'items',
});

Menu.add({
	name: { type: String, required: true },
	description: { type: Types.Textarea, height: 150 },
	heroImage: { type: Types.CloudinaryImage, autoCleanup: true },
	items: { type: Types.Relationship, ref: 'MenuItem', many: true },
});

Menu.register();
