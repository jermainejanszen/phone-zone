var User = require("../models/userData");

// return all users 
module.exports.getUsers = (req, res) => {
	User.getUsers((err, result) => {
		if (err) {
			console.log("Cannot find users!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}	
	});	
}

// get user's password given their id 
module.exports.getPassword = (req, res) => {
    User.getPassword(req.params.id, (err, result) => {
        if (err) {
            console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
    });
}

// update user password 
module.exports.updatePassword = (req, res) => {
    User.updatePassword(req.params.id, req.params.password, function(err, result){
		if (err){
		  	console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	  })
}

// get user information from id 
module.exports.getUserInformation = (req, res) => {
    User.getUserInformation(req.params.id, function(err, result){
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	})
}

// update user information 
module.exports.updateUserInformation = (req, res) => {
    User.updateUserInformation(req.params.id, req.params.firstname, req.params.lastname, req.params.email, function(err, result){
		if (err){
		  	console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	  })
}

// create new user and returns the user id
module.exports.createNewUser = (req, res) => {
    User.createNewUser(req.params.firstname, req.params.lastname, req.params.email, req.params.password).then(result => {
				console.log(result)
				return res.json(result._id);
			})
			.catch(err => {
				res.status(500).send(err);
			})
}

// validate user information
module.exports.validateUserInformation = (req, res) => {
    User.validateUserInformation(req.params.email, req.params.password, function(err, result) {
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	})
}

// check whether email taken
module.exports.checkEmailExists = (req, res) => {
    User.checkEmailExists(req.params.email, function(err, result){
		if (err){
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	})
}