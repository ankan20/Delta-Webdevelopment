const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
  }

main()
.then(res => console.log("DataBase Conected"))
.catch(err => console.log(err));

let allChats = [
    {
        from:"Ankan",
        to:"Anu",
        message:"Hello ,what are you doing !",
        created_at :new Date()
    },
    {
        from:"Aman",
        to:"Sradha",
        message:"All the best",
        created_at :new Date()
    },
    {
        from:"Suman",
        to:"Atanu",
        message:"All done ?",
        created_at :new Date()
    },
    {
        from:"Kriti",
        to:"Anu",
        message:"Have you done your assignment",
        created_at :new Date()
    },
    {
        from:"Vivek",
        to:"Ankan",
        message:"What about hackathon",
        created_at :new Date()
    },
    {
        from:"Aritra",
        to:"Ayan",
        message:"Lets go out side",
        created_at :new Date()
    },
    {
        from:"pritam",
        to:"atanu",
        message:"What is the train time ??",
        created_at :new Date()
    },
]


Chat.insertMany(allChats)

