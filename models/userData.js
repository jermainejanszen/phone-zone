var mongoose = require('./db')
var ObjectId = require('mongoose').Schema.ObjectId

var userSchema = new mongoose.Schema(
		{    _id: mongoose.SchemaTypes.ObjectId,
         firstname: String, 
         lastname: String,
         email:String,
         password:String},
		 )

// get all users
userSchema.statics.getUsers = function(callback) {
  return this
          .find({})
          .exec(callback)
}

// get users' password 
userSchema.statics.getPassword = function(id, callback){
  return this
          .find({_id: id})
          .select('password')
          .exec(callback)
}

//update users' password  
userSchema.statics.updatePassword = function(id, newPassword, callback){
  return this
          .update({_id: id}, {$set:{'password':newPassword}})
          .exec(callback)
        }



var User = mongoose.model('User', userSchema, 'user_data')

// User.getUsers(function(err, result) {
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

User.getPassword('5f5237a4c1beb1523fa3da65', function(err, result){
  if (err){
    console.log("Query error!")
  } else {
    console.log(result)
  }
})

User.updatePassword('5f5237a4c1beb1523fa3da65', "potatosalad", function(err, result){
  if (err){
    console.log("Query error!")
  } else {
    console.log(result)
  }
})

User.getPassword('5f5237a4c1beb1523fa3da65', function(err, result){
  if (err){
    console.log("Query error!")
  } else {
    console.log(result)
  }
})

module.exports = User