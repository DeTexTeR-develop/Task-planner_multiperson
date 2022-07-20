const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const todoSchema = new Schema({
    task: String,
    status:String,
    importance:Number
}) 

module.exports = mongoose.model('Todo', todoSchema);