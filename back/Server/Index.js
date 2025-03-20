const express = require('express')
const mysql = require("mysql")


const app = express();
app.use((req,res)=>{
    req.header('Access-Control-Allow-Origin','*');
  })
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"bank"
})

app.get(('/GetAllClient'),(req,res)=>{
    const sql = "SELECT * FROM client";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})
app.get(('/GetTM'),(req,res)=>{
    const sql = "SELECT SUM(solde) as total,MAX(solde) as max,MIN(solde) as min FROM client";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})
app.post(("/addClient"),(req,res)=>{
    const sql = "INSERT INTO client (`nom`,`solde`) VALUES (?)"
    const datas = [
        req.body.nom,
        req.body.solde
    ]
    db.query(sql,[datas],(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.delete(("/Delete/:id"),(req,res)=>{
    const sql = "DELETE FROM client WHERE numcompt=?";
    const id = req.params.id
    db.query(sql,[id],(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.put(("/Update/:id"),(req,res)=>{
    const sql = "UPDATE client SET `nom` = ?, `solde` = ? WHERE numcompt=?";
    const values = [
        req.body.nom,
        req.body.solde
    ]
    const id = req.params.id
    db.query(sql,[...values,id],(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081,()=>{
    console.log('listening')
})
    