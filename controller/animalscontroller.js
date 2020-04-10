var animalsmodel = require('../models/animalsmodel');
let animalscontroller = {};
var animals = []
animalscontroller.addAnimals = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const animalsData = {
		animalsname: req.body.animalsname,
		animalsimg: req.file.originalname,
		path:req.file.path,
	}
	var animal = new animalsmodel(animalsData);
	animal.save(function (err, animalsRes) {
		console.log("animalsRes=========",animalsRes)
		animals.push({
			animalsname: animalsRes.animalsname,
			animalsimg:animalsRes.animalsimg
		})
		return res.status(200).json({ message : "Show Animals" , result: { Animals: animals}} )
	})
}

animalscontroller.getAnimals = function (req, res) {
	animalsmodel.find({}, function (err, animalsres) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!animalsres)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Animals" , result: { Animals: animalsres}} )
	})
}

module.exports = animalscontroller;
