
import express from 'express' //for es6 and above, if use this then change index.js to index.mjs or add  "type": "module" in 
//const express = require('express')  // for older version
const app = express()


app.get('/',(req,res)=>{
    res.send('Hello World')
})

const server = app.listen(8000,()=> {
    const port = server.address().port;
    const host = server.address().address
    console.log(`Hello app listening at ${host} ${port}`);
})