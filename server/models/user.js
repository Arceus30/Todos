const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const Todo = require("./todos");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dateJoined: {
        type: Date,
        default: Date.now(),
    },
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo",
        },
    ],
});

userSchema.plugin(passportLocalMongoose);

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
