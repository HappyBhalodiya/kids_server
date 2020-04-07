var alphabetsmodel = require('../models/alphabetsmodel');
let alphabetscontroller = {};
var alphabets = []
alphabetscontroller.addAlphabets = function (req, res) {
	console.log("=======>>>>>>>>>>>>>>>>>>.....",req.file);
	
	
	const userData = {
		alphabets: req.body.alphabets,
		alphabetsimage: req.file.filename,
		path:req.file.path,
		text_to_speech :req.body.text_to_speech
	}
	var user = new alphabetsmodel(userData);
	user.save(function (err, savedUser) {
		console.log("savedUser=========",savedUser)
		alphabets.push({alphabet: savedUser.alphabets,
			alphabetsimage:savedUser.alphabetsimage,text_to_speech:savedUser.text_to_speech	})
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
	