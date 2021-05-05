var mongoose = require('./db')

var PhoneSchema = new mongoose.Schema(
		{title: String, 
         brand: String,
         image:String,
         stock:Number,
         seller:String,
         price:Number,
         reviews:Array,
		 timestamp:String, 
		 user:String, 
		 anon:String},
		 )

var Phone = mongoose.model('Phone', PhoneSchema, 'phone_data')

module.exports = Phone