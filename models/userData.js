var mongoose = require('./db')
var ObjectId = require('mongoose').Schema.ObjectId

var userSchema = new mongoose.Schema({  
         firstname: String, 
         lastname: String,
         email:String,
         password:String
    })

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

// //create new user 
userSchema.statics.createNewUser = function(firstName, lastName, email, password, callback){
    return this 
          .create({'firstname': firstName, 'lastname': lastName, 'email':email, 'password':password})
}

var User = mongoose.model('User', userSchema, 'user_data')

module.exports = User