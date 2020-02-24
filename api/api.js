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
     connection()
     .then(()=>{console.log("MongoDB connected!")})
     .catch((e)=>{console.log(`Ooops, something went wrong... ${e}`)});
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
 app.get('/api/mytable', (req, res)=>{
    // placeholder for code
    if(!crud.getAll()) {
        res.status(204).send('No datas in DB yet...');
    }
    else{
        res.send(crud.getAll());
    }
    
 });

 // Get one record from DB with id parameter
 app.get('/api/mytable/:id', (req,res)=>{
     // placeholder for code
     res.send(crud.getOne(req.param.id));
 });

 // Inserting new record
 app.post('/api/mytable/create', (req,res)=>{
     // placeholder for code
     datas = {
         "name": req.body.name,
         "age": req.body.age,
         "presence": req.body.presence
     };
     res.send(crud.insertOne(datas));
 });

 // Updating record
 app.put('/api/mytable/update/:id', (req,res)=>{
    // placeholder for code
    res.send(crud.updateOne(req.param.id));
 });

 // Deleting record
 app.delete('/api/mytable/delete/:id', (req,res)=>{
     // placeholder for code
     res.send(crud.deleteOne(req.param.id));
 });
