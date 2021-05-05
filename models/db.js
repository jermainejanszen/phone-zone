var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/assignment_data', { useNewUrlParser: true }, function () {
  console.log('mongodb connected')
});

module.exports = mongoose;