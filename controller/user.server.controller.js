var Phone = require("../models/userData");


module.exports.getUsers = (req, res) => {
	Phone.getUsers((err, result) => {
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