const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add name product'],
		unique: true,
		maxlength: [40, 'Name cannot be more than 40 characters']
	},
	shortDescription: {
		type: String,
		required: [true, 'Please add short description'],
		maxlength: [100, 'short description cannot be more than 100 characters']
	},
	imgUrl: {
		type: Array,
		// required: [true, 'Please add a image'],
		// maxlength: [1000, 'Url image cannot be more than 1000 characters']
	},
	price: {
		type: Number,
		required: [true, 'Please add a price of product']
	},
	description: {
		type: String,
		required: [true, 'Please add description'],
		maxlength: [1000, 'description cannot be more than 1000 characters']
	},
	date: {
		type: String
	},
	index: {
		type: String
	}
});

module.exports =
	mongoose.models.Product || mongoose.model('Product', ProductSchema);
