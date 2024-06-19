const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');
const ExpressError = require('./ExpressError.js');


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
  }

main()
.then(res => console.log("DataBase Conected"))
.catch(err => console.log(err));

//Index Route

app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    //console.log(chats);
    res.render("index.ejs",{chats});
})

//New Route

app.get("/chats/new",(req,res)=>{
    //throw new ExpressError(404,"Page Not Found");
    res.render("new.ejs")
})


//AsyncWrap
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}


app.post("/chats",asyncWrap(async (req,res,next)=>{
  
        let {from,to,message} =req.body;
    let newChat =new Chat({
        from :from,
        to:to,
        message:message,
        created_at:new Date()
    });
    await newChat.save()
    
    res.redirect("/chats");
    
    //console.log(newChat)
}))

//edit Route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}= req.params;
    //console.log(id)
    let chat = await Chat.findById(id);
    //console.log(chat)
    res.render("edit.ejs" ,{chat})
    
})

//update route
app.put("/chats/:id",async (req,res)=>{
    let {id}= req.params;
    let {message:newMsg}=req.body;
    let updatedChat =await Chat.findByIdAndUpdate(id,{message:newMsg,created_at:new Date()},{runValidators:true,new:true});
    //console.log(updatedChat)
    res.redirect("/chats")
})

//Delete route
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    console.log("deleted");
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("Done");
})

//Show Route
app.get("/chats/:id", async (req,res,next)=>{
    let {id} = req.params;
    let chat =await Chat.findById(id);
    if(!chat) {
        next( new ExpressError(404,"Chat Not Found"));
    }
    res.render("show.ejs",{chat});
})

//Error handling middleware

app.use((err,req,res,next)=>{
    console.log(err.name)
    next(err);
})


app.use((err,req,res,next)=>{
    let {status=500,message="Some Error Occured"} = err;
    
    res.status(status).send(message);

})


app.listen(port,()=>{
    console.log(`Server is runing on port : ${port}`);
})
