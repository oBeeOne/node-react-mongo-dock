/**
 * Simple NodeJS API with Express and MongoDB connector
 */

 const express = require('express');
 const app = express();
 // placeholder for mongo connection
 // const connection = require('./src/connectdb');

 const PORT = 5000;

 app.listen(PORT, ()=>{
     console.log(`NodeJS API listening on port ${PORT}`);
     // placeholder for mongo connection message
     // connection().then(()=>{console.log("MongoDB connected!")});
 });

 app.get('/', (req,res)=>{
     data = {
         "name": "Simple NodeJS API with Express and MongoDB connector in Docker containers"
     }
     res.json(data);
 });