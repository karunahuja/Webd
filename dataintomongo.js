//Inserting Data to mongo db

use harryKart
db.items.insertOne({name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98},{name:"Moto",price:22000,rating:4.5,qty:233,sold:938},{name:"Realme 80s",price:29000,rating:4.5,qty:233,sold:98}])

db.items.find()