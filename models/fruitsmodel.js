const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FruitsSchema = new Schema({
	fruitsname: String,
	fruitsimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Fruits', FruitsSchema);

