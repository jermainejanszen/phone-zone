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
         }
         ]
       }
		 )

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

// Find best sellers
PhoneSchema.statics.bestSellers = function(callback) {
  return this
          .find({ratings: {"$gt": 0}, disabled: {$exists: false} })
          .sort({'stock':1})
          .limit(5)
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
  

module.exports = Phone

