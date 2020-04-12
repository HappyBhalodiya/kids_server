const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MonthsSchema = new Schema({
	monthsname: String,
	monthsimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Months', MonthsSchema);

