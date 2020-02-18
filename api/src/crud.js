/**
 * Script for CRUD operations in DB
 */

 // Calling the DB model
 const myTable = require('./myTable.model');

 // Defining CRUD functions with async await instuctions

 const getAll = async()=>{
     recordset = await myTable.find().catch((e)=>{console.log(e)});
     return recordset;
 };
 
 const getOne = async(id)=>{
     record = await myTable.findOne(id).catch((e)=>{console.log(e)});
     return record
 };

 const insertOne = async(datas)=>{
     await datas.save()
     .then(()=>{console.log('User ${name} added!'); return "success!";})
     .catch((e)=>{console.log(e); return "error!"});
 };

 const updateOne = async(id)=>{
     //code
 };

 const deleteOne = async(id)=>{
     // code
 };