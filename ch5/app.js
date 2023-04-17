import express from 'express'
const app=express()
const port = process.env.PORT || '3000'


//Routes

app.get('/',function(req,res){
    res.send('GET METHOD')
})


app.listen(port,()=>{
    console.log("listening");
})