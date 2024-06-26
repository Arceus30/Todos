const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = model("Todo", todoSchema);
