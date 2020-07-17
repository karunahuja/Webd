//From line 3 to 11 from monggose documentation

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected to Mongodb")
});