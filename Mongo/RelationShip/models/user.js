const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

main()
.then(()=>{
    console.log("Db conected");
})
.catch(err => console.log(err));

const addressSchema = new mongoose.Schema({
    location:String,
    city:String,
    _id:false
})

const userSchema = new mongoose.Schema({
    username :{
        type:String
    },
    addresses : {
        type :[
            addressSchema
        ]
    }
});

const User = mongoose.model("User",userSchema);


const addUsers = async ()=>{
    let user1 = new User({
        username:"Ankan Das",
        addresses:[
            {
                location:"West Bengal ,Kolaghat",
                city:"Kolkata",
                
            },
            {
                location:"New Delhi,India",
                city:"Delhi"
            }

    ]
    })
    let res=await user1.save();
    console.log("Data saved",res);
}
addUsers();