var vegetablesmodel = require('../models/vegetablesmodel');
let vegetablescontroller = {};
var vegetablesarray = []
vegetablescontroller.addVegetables = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const vegetablesData = {
		vegetablesname: req.body.vegetablesname,
		vegetablesimg: req.file.originalname,
		path:req.file.path,
	}
	var vegetable = new vegetablesmodel(vegetablesData);
	vegetable.save(function (err, vegetableRes) {
		console.log("vegetableRes=========",vegetableRes)
		vegetablesarray.push({
			vegetablesname: vegetableRes.vegetablesname,
			vegetablesimg:vegetableRes.vegetablesimg
		})
		return res.status(200).json({ message : "Show Vegetables" , result: { Vegetables: vegetablesarray}} )
	})
}

vegetablescontroller.getVegetables = function (req, res) {
	vegetablesmodel.find({}, function (err, vegetableres) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!vegetableres)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Vegetables" , result: { Vegetables: vegetableres}} )
	})
}

module.exports = vegetablescontroller;
