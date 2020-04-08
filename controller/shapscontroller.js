var shapesmodel = require('../models/shapsmodel');
let shapescontroller = {};
var shapes = []
shapescontroller.addShapes = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const shapesData = {
		shapesname: req.body.shapesname,
		shapesimg: req.file.originalname,
		path:req.file.path,
	}
	var shape = new shapesmodel(shapesData);
	shape.save(function (err, shapesRes) {
		console.log("shapesRes=========",shapesRes)
		shapes.push({
			shapesname: shapesRes.shapesname,
			shapesimg:shapesRes.shapesimg
		})
		return res.status(200).json({ message : "Show Shapes" , result: { Shapes: shapes}} )
	})
}

shapescontroller.getShapes = function (req, res) {
	shapesmodel.find({}, function (err, shape) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!shape)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show shapes" , result: { shape: shape}} )
	})
}

module.exports = shapescontroller;
