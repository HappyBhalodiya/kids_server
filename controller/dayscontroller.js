var daysmodel = require('../models/daysmodel');
let dayscontroller = {};
var days = []
dayscontroller.addDays = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const daysData = {
		daysname: req.body.daysname,
		daysimg: req.file.originalname,
		path:req.file.path,
	}
	var day = new daysmodel(daysData);
	day.save(function (err, daysRes) {
		console.log("daysRes=========",daysRes)
		days.push({
			daysname: daysRes.daysname,
			daysimg:daysRes.daysimg
		})
		return res.status(200).json({ message : "Show Days" , result: { Days: days}} )
	})
}

dayscontroller.getDays = function (req, res) {
	daysmodel.find({}, function (err, dayres) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!dayres)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Days" , result: { Days: dayres}} )
	})
}

module.exports = dayscontroller;
