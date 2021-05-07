var Phone = require("../models/userData")


module.exports.getUsers=function(req,res){
	Phone.getUsers(function(err,result){
		if (err){
			console.log("Cannot find users!")
		}else{
			console.log(result)
		}	
	})	
}

module.exports.getPassword = function(req, res) {
    id = req.query.id;
    User.getPassword(id, function(err, result){
        if (err){
            console.log("Query error!")
        } else {
            console.log(result)
        }
    })
}