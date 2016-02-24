var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tgi');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	
	last_name: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required: true
	},

	password: {
		type: String,
		required: true
	},	

	active: {
		type: Date
	}
});

var user = mongoose.model('user', userSchema);
module.exports = user;
