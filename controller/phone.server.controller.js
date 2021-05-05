var Phone = require("../models/phoneData")

module.exports.getPhones=function(req,res){

	Phone.getPhones(function(err,result){
		if (err){
			console.log("Cannot find phones!")
		}else{
			console.log(result[0])
			return result[0];
		}	
	})	

}
