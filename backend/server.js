var http = require("http");
const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
var url = require("url");
var mysql = require("mysql");



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "products"
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));


app.post("/registration", (req, res)=> {
      const username = req.body.username;
      const password = req.body.password;
      db.query(
        "INSERT INTO login (username, password) VALUES (?,?)",
        [username,password],  
        (err, result)=> {
        console.log(err);
        res.send("hello express");
        }
      );
    });
     
    
      //get method for registration
    app.get("/registration",(req,res)=>
    {
      const sqlGet = "SELECT * FROM login";
      db.query(sqlGet,(error,result)=>
      {
        res.send(result);
    
      });
    });
     app.listen(5000,()=>
    {
        console.log("server is running on port 5000")
    })