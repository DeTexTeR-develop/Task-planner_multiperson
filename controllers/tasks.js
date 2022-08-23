const Todo = require('../model/todo');

module.exports.renderTodo = async(req, res)=> {
    const todos = await Todo.find({});
    res.render('todo', {todos});
}

module.exports.createTodo = async(req, res) => {
    // console.log(req.body)
    const todotask = new Todo(req.body.todo)
    await todotask.save();
    res.redirect('/task');
};

module.exports.deleteTodo = async(req, res) => {
    const { id } = req.params;
    console.log(id);
    await Todo.findByIdAndDelete(id);
    res.redirect('/task')
};