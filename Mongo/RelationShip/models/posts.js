const mongoose = require('mongoose');
const {Schema}=mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

main()
.then(()=>{
    console.log("Db conected");
})
.catch(err => console.log(err));

const userSchema = new Schema({
    username:String,
})

const User = mongoose.model("User",userSchema)

const postSchema = new Schema({
    content:String,
    user:{type:Schema.Types.ObjectId,ref : "User"}
})

const Post = mongoose.model("Post",postSchema);

const addUser = async ()=>{
   let res = await User.insertMany([
    {username:"Ankan"},
    {username:"Tony"},
    {username:"Shradha"}
   ])
   console.log(res);
}
// addUser();

const addPost = async ()=>{
    let user1 =await User.findOne({username:"Ankan"});
    let res = await Post.insertMany([
        {
            content:"My first post",
            user:user1
        },
        {
            content:"My post 2",
            user:user1
        },
        {
            content:"My post 3",
            user:user1
        },
        {
            content:"My post 4",
            user:user1
        }
    ])
    console.log(res);
}
addPost();

