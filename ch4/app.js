import express from 'express'
const app=express()
const port = process.env.PORT || '3000'

app.get('/',function(req,res){
    res.send("hello world")
})


 app.listen(port,()=>{
    console.log(`Server listening at port http://localhost:${port}`);
 })