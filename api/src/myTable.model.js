/**
 * MongoDB connection script
 */

const mongoose = require('mongoose');

// Table schema construction
const myTableSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    presence:{type:Boolean}
});

// Creating and exporting table module
const myTable = mongoose.model("myTable", myTableSchema);
module.exports = myTable;