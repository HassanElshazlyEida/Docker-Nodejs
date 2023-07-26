const express = require("express");


const PORT = 3001;
const app = express();

app.listen(PORT, () => console.log("Running .. "));

app.get("/",(req,res)=>{
    res.send("<h1> Hello form the other side .. </h1>");
});  