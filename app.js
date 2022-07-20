const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./model/todo')
const app = express();


mongoose.connect('mongodb://localhost:27017/newTodoDb')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error"));
db.once("open", ()=> {
    console.log("Database Connected");
})

app.listen(3030, () => {
    console.log('Serving at 3030!');
})