const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const todoSchema = new Schema({
    Task: String,
    status:String
}) 

module.exports = mongoose.model('Todo', todoSchema);