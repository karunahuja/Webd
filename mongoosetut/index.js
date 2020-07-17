//All from mongoose documentation https://mongoosejs.com/docs/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart1', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected to Mongodb")
});

//type of input which will be given
const kittySchema = new mongoose.Schema({
    name: String
  });


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function () {
    const greeting = "My name is "+this.name
    console.log(greeting);
  }
   //compiled schema 
const Kitten = mongoose.model('Kitten', kittySchema);
var harryKitty=new Kitten({name:"harryKitty Name"});

console.log(harryKitty.name);

harryKitty.speak()

harryKitty.save(function (err, harryKitty) {
    if (err) return console.error(err);
    harryKitty.speak();
  });

Kitten.find(  {name:"harryKitty Name"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

