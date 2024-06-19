const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const port =8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password:'ankan@2003#'
  });

  let getRandomUser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    ];
  }

//Routes
app.get("/",(req,res)=>{
  let q = "SELECT count(*) FROM user";
  try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count = result[0]['count(*)']
            res.render("home.ejs",{count});
        })
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
    connection.end();
})
app.get("/user",(req,res)=>{
  let q= "SELECT * FROM user";
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let data =result;
      res.render("user.ejs",{data});
    })
  }catch(err){
      console.log(err);
      res.send("Some error in fetching data...");
  }
})

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q =`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      res.render("edit.ejs",{user});
    })
  }catch(err){
      console.log(err);
      res.send("Some error in fetching data...");
  }
})
//update route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername} =req.body;
  
  let q =`SELECT * FROM user WHERE id='${id}'`;
  console.log(newUsername,formPass)
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      if(formPass==user.password){
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
      else{
        res.send("Wrong")
      }
    })
  }catch(err){
      console.log(err);
      res.send("Some error in fetching data...");
  }
})
//add user route
app.get("/user/new",(req,res)=>{
  res.render("newUser.ejs");
})
app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = faker.string.uuid();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  console.log(id);
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});
app.get("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  res.render("delete.ejs",{id});
})
app.delete("/user/:id/delete",(req,res)=>{
  let {id} = req.params;
  let {password}=req.body;
  let q1 =`SELECT * FROM user WHERE password='${password}'`
  let q2 = `DELETE FROM user WHERE id='${id}'`;
  try{
    connection.query(q1,(err,result)=>{
      if(err) throw err;
      connection.query(q2,(err,result)=>{
        if(err) throw err;
        res.redirect("/user");
      })
    })
  }catch(err){
    res.send("Wrong Password");
  }
  
})
app.listen(port,()=>{
  console.log("App is runing")
})

//

