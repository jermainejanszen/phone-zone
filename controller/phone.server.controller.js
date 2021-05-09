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

// find items based on title, brand, max price - currently hard coded parameters
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

// find all items with 'blue' in their title 
module.exports.searchItemsOnTitle = (req, res) => {
	Phone.searchItemsOnTitle("blue", function(err, result) {
		if (err){
		  console.log("Query error!")
		} else {
		  console.log(result)
		}
	  })
}

// find all items based on brand - currently hardcoded parameters 
module.exports.searchItemsOnBrand = (req, res) => {
	Phone.searchItemsOnBrand("Sony", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
}

//find items based on seller - currently hard coded parameters 
module.exports.searchItemsBySeller = (req, res) => {
	Phone.searchItemsBySeller(req.params.seller, function(err, result) {
        if (err){
          	console.log("Query error!")
        } else {
			return res.json(JSON.stringify({ message: {... result} }));
        }
      })
}

// delete item - currently hardcoded id parameter
module.exports.deleteItem = (req, res) => {
	Phone.deleteItem("6091e173cbdb0f1713584d51", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
}

// create new phone - currently hardcoded parameters 
module.exports.createNewPhone = (req, res) => {
	Phone.createNewPhone("CLEAR CLEAN ESN Sprint EPIC 4G Galaxy", "Samsung", "imageurl", 3, "5f5237a4c1beb1523fa3dbac", 200.01, true, function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
}

// get item based on id - currently hard coded parameters
module.exports.searchItemsById = (req, res) => {
	Phone.searchItemsById("6091e173cbdb0f1713584d4f", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
}

// set item as disabled - currently hard coded parameters
module.exports.disableItem = (req, res) => {
	Phone.disableItem("6091e173cbdb0f1713584d4f", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
}

// get rid of disabled status on phone - currently hardcoded parameters
module.exports.removeDisabledStatus = (req, res) => {
	Phone.removeDisabledStatus("6091e173cbdb0f1713584d4f", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
}

// decrement stock by amount user bought - currently hardcoded parameters
module.exports.decrementStock = (req, res) => {
	Phone.decrementStock("6091e173cbdb0f1713584d4f", 2, function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })

}


  

