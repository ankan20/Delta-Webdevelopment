const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const userRoute = require('./routes/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authUser')
  .then(() => console.log('Connected!'));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get("/",(req,res)=>{
    res.send("Hello from home");
})

app.use("/user",userRoute);


app.listen(port,(err)=>{if (err) throw err;console.log(`Server is listening on port ${port}`)})

