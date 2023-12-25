const express = require("express");
const app = express();
console.dir(app)

const port = 3000;

app.listen(port,()=>{
    console.log(`App is lisiting at ${port}`);
})