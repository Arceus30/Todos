const { User, Todo } = require("../models");
const ExpressError = require("../ExpressError");

const index = async (req, res, next) => {
    try {
        const { userId } = req.query;
        const user = await User.findById(userId).populate({
            path: "todos",
            options: { sort: { createdAt: -1 } },
        });
        if (!user) {
            return next(new ExpressError(404, "User not found"));
        }
        const { todos } = user;
        return res.status(200).json({ todos: todos });
    } catch (e) {
        next(e);
    }
};
const createTodo = async (req, res, next) => {
    try {
        const { userId, todo } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return next(new ExpressError(404, "User not found"));
        }
        const createdTodo = new Todo(todo);
        createdTodo.createdBy = user;
        user.todos.push(createdTodo);
        await Promise.all([createdTodo.save(), user.save()]);
        return res.status(201).json({ message: "Todo Created Successfully" });
    } catch (e) {
        next(e);
    }
};
const showTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        const { userId } = req.query;
        const todo = await Todo.findById(todoId);
        if (!todo) {
            return next(new ExpressError(404, "Todo not found"));
        }
        if (todo.createdBy !== userId) {
            return next(new ExpressError(404, "You are not authorized"));
        }
        return res.status(200).json({ todo: todo });
    } catch (e) {
        next(e);
    }
};
const todoCompleted = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        const { userId } = req.body;
        const todo = await Todo.findById(todoId);
        if (!todo) {
            return next(new ExpressError(404, "Todo not found"));
        }
        if (todo.createdBy !== userId) {
            return next(new ExpressError(404, "You are not authorized"));
        }
        todo.isCompleted = true;
        todo.dateCompleted = Date.now();
        await todo.save();
        return res.status(200).json({
            message: "Todo completed successfully",
            completedTodo: todo,
        });
    } catch (e) {
        next(e);
    }
};
const editTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        const { todo, userId } = req.body;
        const todoFound = await Todo.findById(todoId);
        if (todoFound.createdBy !== userId) {
            return next(new ExpressError(404, "You are not authorized"));
        }
        const updatedTodo = await Todo.findById(todoId, todo, {
            new: true,
        });
        if (!updatedTodo) {
            return next(new ExpressError(404, "Todo not found"));
        }
        return res.status(200).json({ message: "Todo Updated Successfully" });
    } catch (e) {
        next(e);
    }
};
const deleteTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;
        const { userId } = req.body;
        const todo = await Todo.findById(todoId);
        if (todoFound.createdBy !== userId) {
            return next(new ExpressError(404, "You are not authorized"));
        }
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        if (!deletedTodo) {
            return next(new ExpressError(404, "Todo not found"));
        }
        return res.status(200).json({
            message: "Todo deleted successfully",
            deletedTodoId: deletedTodo._id,
        });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    index,
    createTodo,
    showTodo,
    todoCompleted,
    editTodo,
    deleteTodo,
};
