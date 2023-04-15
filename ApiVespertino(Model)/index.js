const {Pool} = require('pg');
const express =require('express');
const app = express();


const pool = new Pool({
    host: "localhost",
    user: "susanamunoz",
    database: "diurno",
    password:"",
    port:5432
})


app.listen(4000)

app.get("/api/v1/personas", (req,resp)=>{
    pool.query('select * from personas',(err, res)=>{
       
        if(err){
            resp.json({err})
        }else{
            resp.json(res.rows)
        }
    })
});

app.delete("/api/v1/personas/:id", (req,resp)=>{
    pool.query('delete from personas where id=$1',[req.params.id],(err, res)=>{
        if(err){
            resp.json({err})
        }else{
            resp.json(res.rows)
        }
    })
});

app.get("/api/v1/productos", (req,resp)=>{
    pool.query('select * from productos',(err, res)=>{
       
        if(err){
            resp.json({err})
        }else{
            resp.json(res.rows)
        }
    })
});

app.delete("/api/v1/productos/:id", (req,resp)=>{
    pool.query('delete from productos where id=$1',[req.params.id],(err, res)=>{
        if(err){
            resp.json({err})
        }else{
            resp.json(res.rows)
        }
    })
});