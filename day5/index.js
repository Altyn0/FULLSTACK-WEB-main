import express from 'express'
import mongoose from 'mongoose'
const server = express()

//connection string
mongoose.connect('mongodb://localhost:27017/fullstack').then(() =>
    server.listen(3000,()=>console.log("khoadaden"))
);
