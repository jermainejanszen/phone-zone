var mongoose = require('./db')

var PhoneSchema = new mongoose.Schema({
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

PhoneSchema.statics.findHighestPrice = function(callback){
        return this
                .find({})
                .select('price')
                .sort({'price': -1})
                .limit(1)
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

// Find all items of certain brand
PhoneSchema.statics.searchItemsOnBrandTitleMaxPrice = function(brandName, searchTerm, maxPrice, callback) {
        return this
                .find({brand: { $regex: brandName, $options: "i" }, title: { $regex: searchTerm, $options: "i" }, price: {$lte: maxPrice}})                
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

// decrement stock of phone // this could lead to negative amounts, need validation checking somewhere
PhoneSchema.statics.decrementStock = function(id, amount, callback){
        return this
                .update({_id: id}, {$inc:{'stock':-amount}})
                .exec(callback)
              }

// //create new user 
PhoneSchema.statics.createNewPhone = function(title, brand, stock, seller, price){
        let newPhone = new Phone({
            title: title, 
            brand: brand,
            stock:stock,
            seller:seller,
            price:price,
            versionKey: false 
          });
        return newPhone.save();
    }


var Phone = mongoose.model('Phone', PhoneSchema, 'phone_data')

module.exports = Phone