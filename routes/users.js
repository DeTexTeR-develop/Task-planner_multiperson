const express = require('express');
const router = express.Router();

router.route('/')
    .get(tasks.renderTodo)
    .post(tasks.createTodo)

router.delete('/:id', tasks.deleteTodo);

module.exports = router;


module.exports = router;