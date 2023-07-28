const express = require("express");


const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log("Running .. "));

app.get("/",(req,res)=>{
    res.send("<h1> Hello form the other side 2 .. </h1>");
});  