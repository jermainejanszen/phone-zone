var Phone = require("../models/phoneData");

// get all phones 
module.exports.getPhones = (req, res) => {
	Phone.getPhones((err, result) => {
		if (err) {
			console.log("Cannot find phones!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	});
}

// find top five lowest in stock 
module.exports.soldOutSoon = (req, res) => {
	Phone.soldOutSoon((err, result) => {
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}	
	});
}

// find top five best selling phones 
module.exports.bestSellers = (req, res) => {
	Phone.bestSellers((err, result) => {
		if (err) {
			console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}	
	});
}

// find items based on title, brand, max price
module.exports.searchItemsOnBrandTitleMaxPrice = (req, res) => {
	Phone.searchItemsOnBrandTitleMaxPrice(
        req.params.brand === "all" ? "" : req.params.brand, 
        req.params.title ? req.params.title : "", 
        parseInt(req.params.price), function(err,result) {
            if (err) {
                console.log("Query error!")
            } else {
                return res.json(JSON.stringify({ message: {... result} }));
            }	
	});
}

// find all items with term in title
module.exports.searchItemsOnTitle = (req, res) => {
	Phone.searchItemsOnTitle(req.params.title, function(err, result) {
		if (err){
		  	console.log("Query error!")
		} else {
			return res.json(JSON.stringify({ message: {... result} }));
		}
	  })
}

// find all items based on brand 
module.exports.searchItemsOnBrand = (req, res) => {
	Phone.searchItemsOnBrand(req.params.brand, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

//find items based on seller 
module.exports.searchItemsBySeller = (req, res) => {
	Phone.searchItemsBySeller(req.params.seller, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

// delete item 
module.exports.deleteItem = (req, res) => {
	Phone.deleteItem(req.params.id, function(err, result) {
        if (err){
			console.log(req.params.id)
          	console.log("Query error!")
        } else {
			console.log("item deleted")
        }
      })
}

// create new phone 
module.exports.createNewPhone = (req, res) => {
	Phone.createNewPhone(req.params.title, req.params.brand, parseInt(req.params.stock), req.params.seller, parseInt(req.params.price)).then(result => {
		console.log(result)
		return res.json(result._id);
	})
	.catch(err => {
		res.status(500).send(err);
	})
}

// get item based on id 
module.exports.searchItemsById = (req, res) => {
	Phone.searchItemsById(req.params.id, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

// set item as disabled
module.exports.disableItem = (req, res) => {
	Phone.disableItem(req.params.id, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

// get rid of disabled status on phone
module.exports.removeDisabledStatus = (req, res) => {
	Phone.removeDisabledStatus(req.params.id, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

// decrement stock by amount user bought 
module.exports.decrementStock = (req, res) => {
	Phone.decrementStock(req.params.id, req.params.amount, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

module.exports.findHighestPrice = (req, res) => {
	Phone.findHighestPrice(function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			console.log(res);
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}


  

