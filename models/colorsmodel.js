const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ColorsSchema = new Schema({

	color: String,
	colorName : String
	
});

module.exports = mongoose.model('Color', ColorsSchema);
