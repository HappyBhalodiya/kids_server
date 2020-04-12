var monthsmodel = require('../models/monthsmodel');
let monthscontroller = {};
var months = []
monthscontroller.addMonths = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const monthsData = {
		monthsname: req.body.monthsname,
		monthsimg: req.file.originalname,
		path:req.file.path,
	}
	var month = new monthsmodel(monthsData);
	month.save(function (err, monthsRes) {
		console.log("monthsRes=========",monthsRes)
		months.push({
			monthsname: monthsRes.monthsname,
			monthsimg:monthsRes.monthsimg
		})
		return res.status(200).json({ message : "Show Months" , result: { Months: months}} )
	})
}

monthscontroller.getMonths = function (req, res) {
	monthsmodel.find({}, function (err, monthres) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!monthres)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Months" , result: { Months: monthres}} )
	})
}

module.exports = monthscontroller;
