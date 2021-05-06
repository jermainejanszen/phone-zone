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

//validate user information when they sign into the platform 
userSchema.statics.validateUserInformation = function(email, password, callback){
  return this
        .find({email:email, password:password})
        .exec(callback)
}

// get users' information 
userSchema.statics.getUserInformation = function(id, callback){
  return this
          .find({_id: id})
          .exec(callback)
}

//update users' infromation  
userSchema.statics.updateUserInformation = function(id, newFirstName, newLastName, newEmail, callback){
  return this
          .update({_id: id}, {$set:{'firstname':newFirstName, 'lastname':newLastName, 'email':newEmail}})
          .exec(callback)
        }

//update user password 
userSchema.statics.updatePassword= function(id, newPassword, callback){
  return this
          .update({_id: id}, {$set:{'password':newPassword}})
          .exec(callback)
        }

// //create new user //TODO
// userSchema.statics.createNewUser = function(firstName, lastName, email, password, callback){
//   return this 
//           .create({'firstname': firstName, 'lastname': lastName, 'email':email, 'password':password})
// }



var User = mongoose.model('User', userSchema, 'user_data')

// User.getUsers(function(err, result) {
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })



// User.getPassword('5f5237a4c1beb1523fa3da65', function(err, result){
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

// User.updatePassword('5f5237a4c1beb1523fa3da65', "potatosalad", function(err, result){
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

// User.getUserInformation('5f5237a4c1beb1523fa3da65', function(err, result){
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

// User.updateUserInformation('5f5237a4c1beb1523fa3da65', 'john', 'smith', 'john.smith@gmail.com', function(err, result){
//   if (err){
//     console.log("Query error!")
//   } else {
//     console.log(result)
//   }
// })

User.createNewUser('john', 'smith', 'john.smith@gmail.com', 'password')

User.validateUserInformation('john.smith@gmail.com', 'password', function(err, result){
  if (err){
    console.log("Query error!")
  } else {
    console.log(result)
  }
})

module.exports = User