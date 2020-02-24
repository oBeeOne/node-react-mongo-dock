/**
 * Script for CRUD operations in DB
 */

 // Calling the DB model
 const myTable = require('./myTable.model');

 // Defining CRUD functions with async await instuctions

 exports.getAll = async()=>{
     recordset = await myTable.find()
     .then(()=>{console.log(`Found records...`)})
     .catch((e)=>{console.log(e)});
     return recordset;
 };
 
 exports.getOne = async(id)=>{
     record = await myTable.findOne(id).catch((e)=>{console.log(e)});
     return record;
 };

 exports.insertOne = async(datas)=>{
     await myTable.create(datas)
     .then(()=>{console.log(`User ${datas.name} added!`); return "success!";})
     .catch((e)=>{console.log(e); return "error!"});
 };

 exports.updateOne = async(id)=>{
     //code
     await myTable.findByIdAndUpdate(id)
     .then(()=>{console.log('Updated ${name} record'); return "success!";})
     .catch((e)=>{console.log(e); return "error!"});
 };

 exports.deleteOne = async(id)=>{
     // code
     await myTable.findByIdAndDelete(id)
     .then(()=>{console.log('Deleted User ${name}!'); return "success!";})
     .catch((e)=>{console.log(e); return "error!"});
 };
