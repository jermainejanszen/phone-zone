var mongoose = require('./db')

var PhoneSchema = new mongoose.Schema(
	{title: String, 
         brand: String,
         image:String,
         stock:Number,
         seller:String,
         price:Number,
         reviews:[{
          reviewer:String,
          rating:Number,
          comment:String
         }],
        disabled:String,
        }, {versionKey: false})

// get all phones 
PhoneSchema.statics.getPhones = function(callback) {
    return this
            .find({})
            .exec(callback)
}

// Find five phone listings "sold out soon" which has more than 0 quantity and not disabled
PhoneSchema.statics.soldOutSoon = function(callback) {
    return this
            .find({stock: {"$gt": 0}, disabled: {$exists: false} })
            .sort({'stock':1})
            .limit(5)
            .exec(callback)
}

// Find best sellers (atleast 2 ratings, not disabled)
PhoneSchema.statics.bestSellers = function(callback) {
  return this
          .aggregate([{$addFields:{averageRating: {$avg: "$reviews.rating"}, numberOfRatings: {$size : "$reviews.rating"}}}])
          .match({disabled: {$exists: false}, numberOfRatings: {"$gt": 1}})
          .sort({averageRating:-1})
          .limit(5)
          .exec(callback)
}

// Find all items with search term in their title
PhoneSchema.statics.searchItemsOnTitle = function(searchTerm, callback) {
        return this
                .find({title: { $regex: searchTerm, $options: "i" }})
                .exec(callback)
      }

// Find all items of certain brand
PhoneSchema.statics.searchItemsOnBrand = function(brandName, callback) {
        return this
                .find({brand: brandName})
                .exec(callback)
      }

// Find all items by seller id
PhoneSchema.statics.searchItemsBySeller = function(sellerId, callback) {
        return this
                .find({seller: sellerId})
                .exec(callback)
      }

// Find item by id
PhoneSchema.statics.searchItemsById = function(id, callback) {
        return this
                .find({_id: id})
                .exec(callback)
      }

PhoneSchema.statics.removeItem = function(itemId, callback) {
        return this
                .remove({_id, itemId})
                .exec(callback)
      }

//set item to disabled 
PhoneSchema.statics.disableItem = function(id, callback){
        return this
                .update({_id: id}, {$set:{'disabled':''}})
                .exec(callback)
              }

//remove disabled status from item 
PhoneSchema.statics.removeDisabledStatus = function(id, callback){
        return this
                .update({_id: id}, {$unset:{'disabled':''}})
                .exec(callback)
              }

//delete item
PhoneSchema.statics.deleteItem = function(id, callback){
        return this
                .remove({_id: id})
                .exec(callback)
              }

// //create new phone 
PhoneSchema.statics.createNewPhone = function(title, brand, image, stock, seller, price, disabled, callback){
        if (disabled){
                return this 
                        .create({'title': title, 'brand': brand, 'image':image, 'stock':stock, 'seller':seller, 'price':price, reviews:[], 'disabled':''})
        } else {
                return this 
                        .create({'title': title, 'brand': brand, 'image':image, 'stock':stock, 'seller':seller, 'price':price})
        }
      }            

var Phone = mongoose.model('Phone', PhoneSchema, 'phone_data')

//call methods 
// Phone.soldOutSoon(function(err,result){
// 	if (err){
// 		console.log("Query error!")
// 	}else{
// 		console.log(result)
// 	}	
// });

// Phone.getPhones(function(err, result) {
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

// Phone.bestSellers(function(err, result) {
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })
  
// find all items with 'blue' in their title 
// Phone.searchItemsOnTitle("blue", function(err, result) {
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

// Phone.searchItemsOnBrand("Sony", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

// Phone.searchItemsBySeller("5f5237a4c1beb1523fa3dbac", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

// Phone.deleteItem("6091e173cbdb0f1713584d51", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

// Phone.createNewPhone("CLEAR CLEAN ESN Sprint EPIC 4G Galaxy", "Samsung", "imageurl", 3, "5f5237a4c1beb1523fa3dbac", 200.01, true, function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

// Phone.searchItemsById("6091e173cbdb0f1713584d4f", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })
  
// Phone.disableItem("6091e173cbdb0f1713584d4f", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

  
Phone.removeDisabledStatus("6091e173cbdb0f1713584d4f", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })

module.exports = Phone

