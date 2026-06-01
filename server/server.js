const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const dotenv = require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())


const db = mysql.createConnection(process.env.URL)

app.get('/', (req,res)=>{
    db.query("SELECT * FROM data",(err,result)=>{
        return res.json(result)
    })  
})

app.post("/data",(req,res)=>{
const n = req.body.name
db.query("INSERT INTO data(name)values(?)",n,(e)=>{
 return res.json(e)
 })

})

app.listen(3000,()=>{
    console.log(3000);
    
})