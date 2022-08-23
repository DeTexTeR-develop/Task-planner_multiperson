const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks');

router.route('/')
    .get(tasks.renderTodo)
    .post(tasks.createTodo)

router.delete('/:id', tasks.deleteTodo);

module.exports = router;