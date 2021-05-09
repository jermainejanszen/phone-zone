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

module.exports.bestSellers = (req, res) => {
	Phone.bestSellers((err, result) => {
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}	
	});
}


module.exports.searchItemsOnBrandTitleMaxPrice = (req, res) => {
	Phone.searchItemsOnBrandTitleMaxPrice("Sony", "black", 300, function(err,result){
		if (err){
			console.log("Query error!")
		}else{
			console.log(result)
		}	
	});
}