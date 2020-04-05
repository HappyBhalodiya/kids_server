var alphabetsmodel = require('../models/alphabetsmodel');
let alphabetscontroller = {};
var alphabets = []
alphabetscontroller.addAlphabets = function (req, res) {
	console.log(req.body);
	
	var user = new alphabetsmodel(req.body);
	user.save(function (err, savedUser) {
		console.log("savedUser",savedUser)
		alphabets.push(savedUser.alphabets)
		return res.status(200).json({ message : "Show Alphabets" , result: { Alphabets: alphabets}} )
	})
}

alphabetscontroller.getAlphabets = function (req, res) {
	alphabetsmodel.find({}, function (err, alphabets) {
		console.log("err server",err);
		if (err)
			return res.status(500).send();
		if (!alphabets)
			return res.status(404).send();
		// console.log("get user", user);
		return res.status(200).json({ message : "Show Alphabets" , result: { Alphabets: alphabets}} )
	})
}

module.exports = alphabetscontroller;