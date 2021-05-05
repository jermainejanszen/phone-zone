var mongoose = require('./db')

var userSchema = new mongoose.Schema(
		{firstname: String, 
         lastname: String,
         email:String,
         password:String},
		 )

var User = mongoose.model('User', userSchema, 'user_data')

User.getUsers = function() {
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

User.getUsers()
  .then(docs => {
    console.log(docs)
  })
  .catch(err => {
    console.error(err)
  })

module.exports = User