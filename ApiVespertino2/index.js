
const express =require('express');
const hbs = require('hbs')
const app = express();

app.set('view engine', 'hbs');


app.listen(3000)

app.get("/", async (req,resp)=>{
    try{
        const respuesta = await fetch("http://localhost:4000/api/v1/personas")
        const personas =  await respuesta.json()
        
        if(personas.err){
            console.log(personas.err)
            resp.render("error",{"error":personas.err})
        }else{
            resp.render("index",{"personas":personas})
        }
     
    }catch(err){
        resp.render("index",{"err":err})
    }
    
});

/* 
//llamada antigua a la BD
app.get("/", async (req,resp)=>{
    pool.query('select * from personas',(err, res)=>{
        if(err){
            resp.render("index",{"err":err})
        }else{
            resp.render("index",{"personas":personas})
        }
    })
    
}); */