const express = require("express");
const app = express();
//console.dir(app);

const port = 3000; //8080

app.listen(port,()=>{
    console.log(`App is lisiting at ${port}`);
})

//send response
// app.use((req,res)=>{
//     console.log("Request receved !");
//     //console.log(req);
//     res.send({
//         name : "Apple",
//         price:123,
//         key:0
//     })
// })
app.get("/",(req,res)=>{
    res.send("You contacted root path")
})

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path updated")
// })

// app.get("/mango",(req,res)=>{
//     res.send("You contacted mango path")
// })

// app.get("*",(req,res)=>{
//     res.send("This page doesnot Exist")
// })
// app.get("/:userName/:id",(req,res)=>{
//     console.log(req.params);
//     let {userName,id}=req.params;
//     res.send(`Your User Name is ${userName} and id is ${id}`);
// })

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}=req.query;
    let htmlCode=`<h1>You are searching for ${q}</h1>
    <p>Result of your search : ${q}</p>`
    res.send(htmlCode);
})