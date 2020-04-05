const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NumbersSchema = new Schema({

	numbers: String,
	word : String
	
});

module.exports = mongoose.model('Number', NumbersSchema);
