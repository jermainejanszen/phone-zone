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

Phone.getPhones = function() {
    return new Promise((resolve, reject) => {
        this.find((err, docs) => {
            if (err) {
                console.error(err)
                return reject(err)
            }
            resolve (docs)
        })
    })
}

Phone.getPhones()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
  })

module.exports = Phone