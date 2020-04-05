const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AlphabetsSchema = new Schema({
	alphabets: String,
});

module.exports = mongoose.model('Alphabets', AlphabetsSchema);
