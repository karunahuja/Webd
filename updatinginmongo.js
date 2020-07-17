show dbs 
use harryKart
show collections

db.anotherCollection.insertOne({a:89})

show collections

//update first matching entry with moto30s
db.items.updateOne({name:"Moto 30s"},{$set:{price:2}})
db.items.updateOne({name:"Moto 30s"},{$set:{price:2,rating:5}})



