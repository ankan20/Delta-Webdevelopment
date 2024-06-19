const jwt = require('jsonwebtoken');
const secretKey = "mysupersecretkeywithsomerandomwords"

function setUser (user) {
    return jwt.sign({
        _id:user._id,
        email:user.email,        
    },secretKey);
}

function getUser (token) {
    if(!token) return null;
    return jwt.verify(token,secretKey);
}

module.exports = {setUser,getUser};