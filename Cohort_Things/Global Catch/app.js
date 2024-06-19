const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const jwtPassword = "123456";

app.use(express.json());

const ALL_USERS = [
  { id: 1, username: "user1", password: "user1", name: "User1" },
  { id: 2, username: "user2", password: "user2", name: "User2" },
  { id: 3, username: "user3", password: "user3", name: "User3" },
  { id: 4, username: "user4", password: "user4", name: "User4" },
];

function userExists(username,password){
    let res= false;
     res =ALL_USERS.map((user)=>{
        if(user['username']===username && user['password'] ===password){
            return true;
        }
    });
    return res;
}

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)

  if(!userExists(username,password)){
    res.status(403).json({
        msg:"User doesnot exist in our in memory db",
    })
  }
  let token = jwt.sign({username},jwtPassword);
  return res.json({
    token,
  })

});

app.get("/users",(req,res)=>{
    const token = req.headers["authorization"];
    
    const decode = jwt.verify(token,jwtPassword);
    const username = decode.username;
    return res.json({users:ALL_USERS});
})

//global catch

app.use(function (err, req, res, next) {
  res.json({ message: "Internal server error" });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
