show dbs
use harryKart
show Collections

db.items.find({price:22000});
//deleting items from mongo db
//delete first matching entry
db.items.deleteOne({price:22000})
//delete all matching entries
db.items.deleteMany({price:22000})

