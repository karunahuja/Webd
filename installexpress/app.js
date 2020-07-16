const express=require('express');
const app=express();
const port=80;
const path=require("path");
//Express specific stuff
app.use('/static',express.static('static'));

//Pug specific stuff
app.set('view engine','pug');

//Set views directory
app.set('views',path.join(__dirname,'views'));

//Endpoints
app.get('/',(req,res)=>{
    const con="This is best cocntent";
    const params={'title':"pubg is best","content":con};
    res.status(200).render('index.pug',params);
})
app.listen(port,()=>{
    console.log("application started on port")
})
