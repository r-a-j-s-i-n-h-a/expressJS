import express from 'express';
const app=express();
const port = process.env.PORT || 3000;


// app.get('/student/delete/:id',(req,res)=>{
//     console.log( req.params);
//     res.send("student deleted");
// })

app.get('/product/:category/:1d',(req,res)=>{
    console.log( req.params);
    res.send("student deleted");
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})