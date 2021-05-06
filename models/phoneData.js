var mongoose = require('./db')

var PhoneSchema = new mongoose.Schema(
	{_id: mongoose.SchemaTypes.ObjectId,
        title: String, 
         brand: String,
         image:String,
         stock:Number,
         seller:String,
         price:Number,
         reviews:[{
          reviewer:String,
          rating:Number,
          comment:String
         }]})

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

PhoneSchema.statics.removeItem = function(itemId, callback) {
        return this
                .remove({_id, itemId})
                .exec(callback)
      }

//set item to disabled //TODO this doesn't work
PhoneSchema.statics.disableItem = function(id, callback){
        return this
                .update({_id: id}, {$set:{$exists:true}})
                .exec(callback)
              }

//delete item
PhoneSchema.statics.deleteItem = function(id, callback){
        return this
                .remove({_id: id})
                .exec(callback)
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

// Phone.searchItemsBySeller("5f5237a4c1beb1523fa3db73", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

// Phone.disableItem("6091e173cbdb0f1713584d51", function(err, result) {
//         if (err){
//           console.log("Query error!")
//         } else {
//           console.log(result)
//         }
//       })

Phone.deleteItem("6091e173cbdb0f1713584d51", function(err, result) {
        if (err){
          console.log("Query error!")
        } else {
          console.log(result)
        }
      })
  


module.exports = Phone

