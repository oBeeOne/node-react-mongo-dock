const mongoose = require('mongoose');

const config = require('./dbconfig');

mongoose.Promise = global.Promise;

const connectDb = ()=>{
    return mongoose.connect(config.url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

module.exports = connectDb;