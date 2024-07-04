const express = require("express");
const { todoController } = require("../controller");
const router = express.Router();

router.route("/").get(todoController.index).post(todoController.createTodo);

router
    .route(process.env.TODO)
    .get(todoController.showTodo)
    .post(todoController.todoCompleted)
    .put(todoController.editTodo)
    .delete(todoController.deleteTodo);

module.exports = router;
