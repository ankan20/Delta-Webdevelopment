const express = require("express");
const app = express();
const path = require("path");


const port =3000;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //for no error if we start server from outside of ejs directory

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

//Insta EJs
app.get("/ig/:username",(req,res)=>{
    // let {username} = req.params;
    // const followers =["adam","bob","steve","jon","crish"];
    // console.log(username)
    let {username} =req.params;
    const data=require("./data.json");
    console.log(data[username])
    if(data[username]){
        res.render("instagram.ejs",{data:data[username]});
    }
    else{
        res.render("error.ejs");
    }
})

app.get("/hello",(req,res)=>{
    res.send("Hello");
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs",{
        diceVal 
    });
})


app.get("*",(req,res)=>{
    res.send("404 Page not found")
})