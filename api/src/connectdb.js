const mongoose = require('mongoose');

const myTable = ("./myTable.model");

const connection = "mongodb://localhost:27017/myDb";

const connectDb = ()=>{
    return mongoose.connect(connection);
}

module.exports = connectDb;