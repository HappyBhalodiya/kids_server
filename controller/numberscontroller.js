var numbersmodel = require('../models/numbersmodel');
let numberscontroller = {};
var number = []
numberscontroller.addNumbers = function (req, res) {
	console.log(req.body);
	
	var numbers = new numbersmodel(req.body);
	numbers.save(function (err, response) {
		console.log("savedUser====",response)
		number.push({
			number: response.numbers,
			word: response.word
		})
		console.log("numbers",number)
		return res.status(200).json({ message : "Show Numbers" , result: { Numbers: number}} )
	})
}

numberscontroller.getNumbers = function (req, res) {
	numbersmodel.find({}, function (err, numbers) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!numbers)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Numbers" , result: { Numbers : numbers}} )
	})
}

module.exports = numberscontroller;