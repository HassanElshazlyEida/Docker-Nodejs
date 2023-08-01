const express = require("express");
var mysql = require('mysql');

const PORT = 3000;
const app = express();

const DB_USER = "root";
const DB_PASSWORD= "root";
const DB_PORT='8889';
const DB_HOST="localhost";

var con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT
});

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as is ' + con.threadId);
  });

app.listen(PORT, () => console.log("Running .. "));

app.get("/",(req,res)=>{
    res.send("<h1> Hello form the other side 23 .. </h1>");
});  