var User = require("../models/userData");


module.exports.getUsers = (req, res) => {
	User.getUsers((err, result) => {
		if (err) {
			console.log("Cannot find users!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}	
	});	
}

module.exports.getPassword = (req, res) => {
    id = req.query.id;
    User.getPassword(id, (err, result) => {
        if (err) {
            console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
    });
}

// update user password - currently hard coded id
module.exports.updatePassword = (req, res) => {
    User.updatePassword('5f5237a4c1beb1523fa3da65', "potatosalad", function(err, result){
		if (err){
		  console.log("Query error!")
		} else {
		  console.log(result)
		}
	  })
}

// get user information from id - currently hardcoded id
module.exports.getUserInformation = (req, res) => {
    User.getUserInformation(req.params.id, function(err, result){
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	})
}

// update user information - currently hard coded parameters
module.exports.updateUserInformation = (req, res) => {
    User.updateUserInformation('5f5237a4c1beb1523fa3da65', 'john', 'smith', 'john.smith@gmail.com', function(err, result){
		if (err){
		  console.log("Query error!")
		} else {
		  console.log(result)
		}
	  })
}

// create new user - currently hardcoded parameters
module.exports.createNewUser = (req, res) => {
    User.createNewUser('john', 'smith', 'john.smith@gmail.com', 'password', function(err, result) {
		if (err) {
			console.log("Query error!")
		} else {
			console.log(result)
		}
	})
}

// validate user information - hard coded parameters 
module.exports.validateUserInformation = (req, res) => {
    User.validateUserInformation('john.smith@gmail.com', 'password', function(err, result){
		if (err){
			console.log("Query error!")
		} else {
			console.log(result)
		}
	})
}
