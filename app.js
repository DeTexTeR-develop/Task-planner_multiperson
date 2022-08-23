const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const methodOverrride = require('method-override');


//import routes
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');



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

// task routes

app.use('/task', taskRoutes);


module.exports = app;