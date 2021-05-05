var Phone = require("../models/phoneData")

module.exports.getPhones=function(req,res){

	Phone.getPhones(function(err,result){
		if (err){
			console.log("Cannot find phones!")
		}else{
			console.log(result)
			// res.render('../views/src/pages/Main.js', {name:name})
		}	
	})	

}



