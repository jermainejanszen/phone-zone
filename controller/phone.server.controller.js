var Phone = require("../models/phoneData");


module.exports.getPhones = (req, res) => {
	Phone.getPhones((err, result) => {
		if (err) {
			console.log("Cannot find phones!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	});
}

module.exports.soldOutSoon = (req, res) => {
	Phone.soldOutSoon((err, result) => {
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}	
	});
}
