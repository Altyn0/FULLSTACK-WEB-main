import  express  from "express";

const server = express()

server.get('/',(req,res)=>{
    res.status(200).send('send')
})

server.listen(3000,()=>{
    console.log('KhoaDaDen')
})