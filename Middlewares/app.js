const express = require('express');
const app =express();
const port =8080;
const ExpressError = require('./ExpressError')


// app.use((req,res,next)=>{
//     console.log("Hi , I am 1st middleware");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("Hi , I am 2nd middleware");
//     next();
// })

// app.use((req,res,next)=>{
//     req.time=new Date( Date.now()).toString();
//     console.log(req.method ,req.hostname,req.path,req.time);
//     next();
// })

// app.use("/random",(req,res,next)=>{
//     console.log("I am middleware of random route");
//      next();
// })

const checkToken = ("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    
    throw new ExpressError(401,"ACCESS DENIED !");
    
})

app.get("/api",checkToken,(req,res)=>{
    res.send("Data");
})


app.get("/wrong",(req,res)=>{
    abcd = abcd;
})


app.get("/",(req,res)=>{
    res.send("This is home route");
})

app.get("/random",(req,res)=>{
    res.send("Thi is random page");
})

//Error handling middlewares
app.use((err,req,res,next)=>{
    let {status,message} = err;
    res.status(status).send(message);
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is Forbidden");
})

// app.use((err,req,res,next)=>{
//     console.log("_________________________ERROR 2____________________");
//     next(err);
// })




app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`);
})