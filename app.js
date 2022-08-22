const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./model/todo');
const path = require('path');
const { urlencoded } = require('express');
const app = express();
const methodOverrride = require('method-override');

//db connection
mongoose.connect('mongodb://localhost:27017/newTodoDb')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error"));
db.once("open", ()=> {
    console.log("Database Connected");
})

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverrride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes

app.get('/todo', async(req, res)=> {
    const todos = await Todo.find({});
    res.render('todo', {todos});
})

app.post('/todo', async(req, res) => {
    // console.log(req.body)
    const todotask = new Todo(req.body.todo)
    await todotask.save();
    res.redirect('/todo');
});

app.delete('/todo/:id', async(req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.redirect('/todo')
})

module.exports = app;