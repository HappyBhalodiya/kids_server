const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShapsSchema = new Schema({
	shapesname: String,
	shapesimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Shaps', ShapsSchema);

