var vehiclesmodel = require('../models/vehiclesmodel');
let vehiclescontroller = {};
var vehicles = []
vehiclescontroller.addVehicles = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const vehiclesData = {
		vehiclesname: req.body.vehiclesname,
		vehiclesimg: req.file.originalname,
		path:req.file.path,
	}
	var vehicle = new vehiclesmodel(vehiclesData);
	vehicle.save(function (err, vehiclesRes) {
		console.log("vehiclesRes=========",vehiclesRes)
		vehicles.push({
			vehiclesname: vehiclesRes.vehiclesname,
			vehiclesimg:vehiclesRes.vehiclesimg
		})
		return res.status(200).json({ message : "Show Vehicles" , result: { Vehicles: vehicles}} )
	})
}

vehiclescontroller.getVehicles = function (req, res) {
	vehiclesmodel.find({}, function (err, vehicleres) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!vehicleres)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Vehicles" , result: { Vehicles: vehicleres}} )
	})
}

module.exports = vehiclescontroller;
