const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
var num1=(Number)(req.body.num1);
var num2=(Number)(req.body.num2);
var ans= num1 + num2;
res.send("Result:"+ans);
});

app.get("/bmicalculator",function(req,res){
res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
var num1=(Number)(req.body.wt);
var num2=(Number)(req.body.ht);
var ans= num1 / num2;
res.send("Result:"+ans);
});

app.listen(3000,function(){
console.log("listening to port 3000");
});
