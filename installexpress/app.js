const express=require('express');
const app=express();
const port=80;
const path=require("path");

app.use('/static',express.static('static'));

//set template engine for pug

app.set('views',path.join(__dirname,'views'));

//our pug demo endpoint

app.get("/",(req,res)=>{
    res.render('demo.pug', { title: 'Hey', message: 'Hello there!' })

});
app.get("/about",(req,res)=>{
    res.send("about page of first express app");

});
app.get("/",(req,res)=>{
    res.status(200).send("first express app");

});
app.post("/about",(req,res)=>{
    res.send("post for first express app");

});
app.get("/this",(req,res)=>{
    res.status(404).send("post for first express app");

});

app.listen(port,()=>{
    console.log("application started on port")
})