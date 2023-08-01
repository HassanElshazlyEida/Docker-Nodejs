const express = require("express");
var mysql = require('mysql');
const redis = require("redis");

const PORT = 3000;
const app = express();

// const DB_USER = "root";
// const DB_PASSWORD= "root";
// const DB_HOST="mysql";

// var con = mysql.createConnection({
//     host: DB_HOST,
//     user: DB_USER,
//     password:DB_PASSWORD,
// });

// con.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as is ' + con.threadId);
// });
  
const REDS_PORT='6379';
const REDIS_HOST="redis";

const client= redis.createClient({
    url:`redis://${REDIS_HOST}:${REDS_PORT}`
});
client.on("error",(err)=>console.log("redis client error " +err));
client.on("connect",()=>console.log("redis client connect"));
client.connect();


app.listen(PORT, () => console.log("Running .. "));

app.get("/",(req,res)=>{
    client.set("products","product 1");
    res.send("<h1> Hello form the other side 23 .. </h1>");
});  
app.get("/products",async (req,res)=>{
    const products = await client.get("products");
    res.send(products);
});  