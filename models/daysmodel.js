const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DaysSchema = new Schema({
	daysname: String,
	daysimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Days', DaysSchema);

