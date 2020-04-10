const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VegetablesSchema = new Schema({
	vegetablesname: String,
	vegetablesimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Vegetables', VegetablesSchema);

