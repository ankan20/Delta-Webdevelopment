const express=require("express");
const app =express();

const port =8080;

app.listen(port,()=>{
    console.log("Server is listening at port",port)
})

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Running");
})

app.get("/register",(req,res)=>{
    let {user,password} =req.query
    res.send(`Standard GET Request",user : ${user},password : ${password}`);

})

app.post ("/register",(req,res)=>{
    let {user,password} =req.body;
    res.send(`Standard POST Request ,user : ${user},password : ${password}`);
})