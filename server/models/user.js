const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Todo = require("./todo");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        todos: [
            {
                type: Schema.Types.ObjectId,
                ref: "Todo",
            },
        ],
    },
    { timestamps: true }
);

userSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Todo.deleteMany({
            _id: {
                $in: doc.todos,
            },
        });
    }
});

module.exports = model("User", userSchema);
