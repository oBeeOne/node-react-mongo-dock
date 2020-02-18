/**
 * Simple NodeJS API with Express and MongoDB connector
 */

 const express = require('express');
 const app = express();
 // Call mongo connection
 const connection = require('./src/connectdb');
 // Call CRUD module
 const crud = require('./src/crud');
 // Call body-parser to parse url requests into a req.body object
 const parser = require('body-parser');

 const PORT = 5000;

 app.listen(PORT, ()=>{
     console.log(`NodeJS API listening on port ${PORT}`);
     // placeholder for mongo connection message
     connection().then(()=>{console.log("MongoDB connected!")}).catch((e)=>{console.log(e)});
 });

 // Parsing requests middleware
 app.use(parser.urlencoded({extended: true}));

 app.use(parser.json());

 // API URL calls

 // base URL response
 app.get('/', (req,res)=>{
     data = {
         "name": "Simple NodeJS API with Express and MongoDB connector in Docker containers"
     }
     res.json(data);
 });

 // Get all records from DB
 app.get('/api/findall', (req, res)=>{
    // placeholder for code
 });

 // Get one record from DB with id parameter
 app.get('/api/findone/{id}', (req,res)=>{
     // placeholder for code
 });

 // Inserting new record
 app.post('/api/addone', (req,res)=>{
     // placeholder for code
 });

 // Updating record
 app.put('/api/updateone/{id}', (req,res)=>{
    // placeholder for code
 });

 // Deleting record
 app.delete('/api/deleteone/{id}', (req,res)=>{
     // placeholder for code
 });
