const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AlphabetsSchema = new Schema({
	alphabets: String,
	alphabetsimage:{ type: String, default: '' },
	path:{type: String, default:''},
	text_to_speech :String
});

module.exports = mongoose.model('Alphabets', AlphabetsSchema);
