var fruitsmodel = require('../models/fruitsmodel');
let fruitscontroller = {};
var fruitsarray = []
fruitscontroller.addFruits = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const fruitsData = {
		fruitsname: req.body.fruitsname,
		fruitsimg: req.file.originalname,
		path:req.file.path,
	}
	var fruit = new fruitsmodel(fruitsData);
	fruit.save(function (err, fruitsRes) {
		console.log("fruitsRes=========",fruitsRes)
		fruitsarray.push({
			fruitsname: fruitsRes.fruitsname,
			fruitsimg:fruitsRes.fruitsimg
		})
		return res.status(200).json({ message : "Show Fruits" , result: { Fruits: fruitsarray}} )
	})
}

fruitscontroller.getFruits = function (req, res) {
	fruitsmodel.find({}, function (err, fruit) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!fruit)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Fruits" , result: { Fruits: fruit}} )
	})
}

module.exports = fruitscontroller;
