use harryKart

db.items.find({rating:3.5});
 
// greater than equal to
db.items.find({rating:{$gte:3.5}});
 
//greater than
db.items.find({rating:{$gt:3.5}});

//and operator
db.items.find({rating:{$gt:3.5},price:{$gt:4000}});


//or operator

db.items.find({$or:
    [
        
            {rating:{$gt:3.5}},{price:{$gt:4000}}
        
    ]
        
 });

//if we want to show only particular 

db.items.find({rating:{$gt:3.5}},{rating:1})

