const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnimalsSchema = new Schema({
	animalsname: String,
	animalsimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Animals', AnimalsSchema);

