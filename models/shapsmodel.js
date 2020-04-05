const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShapsSchema = new Schema({
	numbers: String,
	word : String
});
module.exports = mongoose.model('Shaps', ShapsSchema);
