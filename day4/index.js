import  express  from "express";
import mongoose from 'mongoose';

async function connectDb(){

    await mongoose.connect('mongodb://localhost/fullstack');


}

const server = express()

server.get('/',(req,res)=>{
    res.status(200).send('send')
})

connectDb.then(
    server.listen(3000,()=>{
        console.log('KhoaDaDen')
    })
)


