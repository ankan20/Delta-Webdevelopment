const express = require("express");
const app = express();
const port =8080;
const path = require("path");

const {v4:uuidv4}=require("uuid");
const methodOverride = require("method-override");

//override with POST having ?_method=PATCH
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

//This array works as DataBase
let posts=[
    {   
        id:uuidv4(),
        username :"ankandas",
        content :"This is restful api project"
    },
    {   
        id:uuidv4(),
        username :"sradha",
        content :"Hard work is important to achieve success"
    },
    {   
        id:uuidv4(),
        username:"rahulkumar",
        content :"I got internship from abc"
    }
];




app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username ,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // console.log(req.body);
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id===p.id)
    
    res.render("show.ejs",{post});
    
})


app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>p.id=== id);
    post.content=newContent;
    //console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=>p.id===id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts =posts.filter((p)=>p.id!=id);


    res.redirect("/posts");
})


app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})