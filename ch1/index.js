const express = require('express')
const app = express()
const port =3000


app.get('/', function (req, res) {
  res.send('Hello  Wo rld')
})

app.listen(port,()=>{
    console.log(`linteining at ${port}`);
})