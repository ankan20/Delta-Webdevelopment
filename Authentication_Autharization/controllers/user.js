const User = require('../models/users.models')
const { v4: uuidv4 } = require('uuid');
const {setUser,getUser} = require('../service/auth')


async function handleUserSignup(req,res){
    const {username , email, password} = req.body;
    await User.create({username,email,password});
    res.send("Signed up");
}



async function handleUserLogin(req,res){
    const {email, password} = req.body;
    const user = await User.findOne({email,password});
    if(!user){
        return res.send("email or password is wrong !");
    }
    const token = setUser(user);
    res.cookie('uid' ,token);
    return res.send(`User found on db ${user._id}`);
}

module.exports = {handleUserSignup,handleUserLogin};