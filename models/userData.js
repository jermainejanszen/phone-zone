var mongoose = require('./db')
var ObjectId = require('mongoose').Schema.ObjectId
var CryptoJS = require('crypto-js')

var userSchema = new mongoose.Schema({  
         firstname: { type : String, required : true }, 
         lastname: String,
         email: { type : String, unique : true, required : true },
         password: { type : String, required : true },
    }, {versionKey: false});

// MD5 hashes the given password
function hash(password) {
    return CryptoJS.MD5(password).toString()
}

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

// validate user information when they sign into the platform 
userSchema.statics.validateUserInformation = function(email, password, callback){
    return this
        .find({email:email, password:hash(password)})
        .exec(callback)
}

// get users' information 
userSchema.statics.getUserInformation = function(id, callback){
    return this
          .find({_id: id})
          .exec(callback)
}

//update users' infromation  
userSchema.statics.updateUserInformation = function(id, newFirstName, newLastName, newEmail, callback) {
    return this
          .update({_id: id}, {$set:{'firstname':newFirstName, 'lastname':newLastName, 'email':newEmail}})
          .exec(callback)
}

//update user password 
userSchema.statics.updatePassword = function(id, newPassword, callback) {
    return this
          .update({_id: id}, {$set:{'password':hash(newPassword)}})
          .exec(callback);
}

// //create new user 
userSchema.statics.createNewUser = function(firstname, lastname, email, password){
    let newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash(password),
        versionKey: false 
      });
    return newUser.save();
}

var User = mongoose.model('User', userSchema, 'user_data')
User.createIndexes()

module.exports = User