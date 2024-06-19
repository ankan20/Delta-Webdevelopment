const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low for listing in amazon"],
    },
    discount:{
        type:Number,
        default:0,
    }
});
const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("65c503533a993e686f201021",{price:-500},{runValidators:true})
.then(res=>console.log(res))
.catch(err=>console.log(err.errors.price.properties.message))




// let book1=new Book({
//     title:"C++ Advanced",
//     author:"Abdul Bari",
//     // price:100,
    
// });
// book1.save()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))