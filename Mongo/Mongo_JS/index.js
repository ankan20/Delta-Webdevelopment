const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
//models
const User = mongoose.model("User", userSchema);


User.deleteMany({age:{$lt:13}})
.then(res=>console.log(res,"succes"))
.catch(err=>console.log(err,"ERROR"))






// User.findOneAndUpdate({name:"ankan"},{age:1},{new:true})
// .then(res=>console.log(res))
// .catch(err=>console.log(err))





// User.updateMany({age:{$gt:13}},{__v:1})
// .then(res=>{
//   console.log(res);
// })
// .catch(err=>{
//   console.log(err);
// })

// User.updateOne({name:"ankan"},{age:21})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })





// User.find({age :{$gte:17}}).then(res=>{console.log(res[0]["name"])})
// .catch(err=>{
//   console.log(err)
// })


// User.insertMany([
//   {
//     name:"bob",
//     email:"bob@gmail.com",
//     age:12
//   },
//   {
//     name:"tony",
//     email:"tony@gmail.com",
//     age:13
//   }
// ]).then(res =>{console.log(res)})


//object of User
// const user2= new User({
//   name:"ankan2",
//   email:"2adas34965@gmail.com",
//   age:21,
// })
// user2.save().then(res =>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })