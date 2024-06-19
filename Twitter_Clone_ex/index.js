const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4:uuidv4}=require("uuid");

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let dataBase = [
    {
        id:uuidv4(),
        username :"ankandas",
        caption :"This is a dog",
        imgUrl :"/photos/dog_img.webp"

    },
    {
        id:uuidv4(),
        username :"rahul",
        caption :"This is a cat",
        imgUrl :"/photos/cat_img.webp"

    },
    {
        id:uuidv4(),
        username :"sradha",
        caption :"This is a bird",
        imgUrl :"/photos/bird.jpg"

    }
];

app.get("/posts",(req,res)=>{
    res.render("home.ejs",{dataBase});
})

app.get("/posts/new",(req,res)=>{
    res.render("new_form.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,caption,imgUrl} =req.body;
    let id = uuidv4();
    dataBase.push({id,username,caption,imgUrl});
    res.redirect("/posts");
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});