const express = require('express')

const app = express()

app.get('/data',(req,res)=>{
    const dummy = [
        {
            username:'Arush',
            city:'Banglore',
            age: 29
        }
    ]
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173').json({data:dummy})
})

app.listen(8000,()=>{
    console.log('server is running at 8000');
})