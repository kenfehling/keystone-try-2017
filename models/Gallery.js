var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
	drilldown: 'heroImage, images'
});

const Image = new keystone.List('Image', {
	map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true },
    drilldown: 'image'
});

Image.add({
	name: { type: String, required: true },
    image: { type: Types.CloudinaryImage, autoCleanup: true, required: true, initial: false },
    description: { type: Types.Textarea, height: 150 }
});

Image.relationship({ ref: 'Gallery', path: 'heroImage' });
Image.relationship({ ref: 'Gallery', path: 'images' });

Image.defaultColumns = 'name, image';

Image.register();

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.Relationship, ref: 'Image' },
	images: { type: Types.Relationship, ref: 'Image', many: true }
});

Gallery.defaultColumns = 'title, published|20%, publishedDate|20%';

Gallery.register();
