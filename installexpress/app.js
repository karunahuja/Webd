const express=require('express');
const app=express();
const port=80;

app.get("/",(req,res)=>{
    res.send("first express app");

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