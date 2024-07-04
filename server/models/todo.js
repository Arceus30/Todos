const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        dateCompleted: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

module.exports = model("Todo", todoSchema);
