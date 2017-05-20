const keystone = require('keystone');
const Types = keystone.Field.Types;

const CustomText = new keystone.List('CustomText', {
	label: 'Custom Text',
	singular: 'Custom Text',
	nocreate: true,
	nodelete: true,
});

CustomText.add({
	name: { type: String, required: true, noedit: true, default: 'Edit website text' },
	title: { type: String, required: true, default: 'My Site' },
	company: { type: String, required: true, default: 'My Company' },
	description: { type: Types.Textarea, required: true, default: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.' },
	directions: { type: Types.Textarea, required: false },
});

CustomText.register();
