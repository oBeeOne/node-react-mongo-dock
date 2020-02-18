const mongoose = require('mongoose');

const connection = "mongodb://localhost:27017/mydb";

mongoose.Promise = global.Promise;

const connectDb = ()=>{
    return mongoose.connect(connection, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

module.exports = connectDb;