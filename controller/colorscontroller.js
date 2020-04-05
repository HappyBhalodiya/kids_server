var colorsmodel = require('../models/colorsmodel');
let colorscontroller = {};
var color = []
colorscontroller.addColors = function (req, res) {
	console.log(req.body);
	
	var colors = new colorsmodel(req.body);
	colors.save(function (err, response) {
		console.log("savedUser====",response)
		color.push({
			color: response.color,
			colorName: response.colorName
		})
		console.log("numbers",color)
		return res.status(200).json({ message : "Show Numbers" , result: { color: color}} )
	})
}

colorscontroller.getColors = function (req, res) {
	colorsmodel.find({}, function (err, colors) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!colors)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Numbers" , result: { color : colors}} )
	})
}

module.exports = colorscontroller;