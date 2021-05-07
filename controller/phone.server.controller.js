var Phone = require("../models/phoneData")


module.exports.getPhones=function(req,res){
	Phone.getPhones(function(err,result){
		if (err){
			console.log("Cannot find phones!")
		}else{
			console.log(result)
		}	
	})	
}

module.exports.soldOutSoon=function(req,res){
	Phone.soldOutSoon(function(err,result){
		if (err){
			console.log("Query error!")
		}else{
			console.log(result)
		}	
	});
}
