var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/phone_data', { useNewUrlParser: true }, function () {
  console.log('mongodb connected')
});

module.exports = mongoose;