const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VehiclesSchema = new Schema({
	vehiclesname: String,
	vehiclesimg :{ type: String, default: '' },
	path:{type: String, default:''}
});
module.exports = mongoose.model('Vehicles', VehiclesSchema);

