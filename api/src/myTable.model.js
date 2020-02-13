const mongoose = require('mongoose');

const myTableSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:email}
});

const myTable = mongoose.model("myTable", myTableSchema);

module.exports = myTable;