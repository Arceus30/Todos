const { User } = require("../models");
const ExpressError = require("../ExpressError");

const Signup = async (req, res, next) => {
    try {
        const { user } = req.body;
        const registeredUser = new User(user);
        await registeredUser.save();
        return res.status(200).json({
            registeredUserId: registeredUser._id,
            message: "User Signup successfully",
        });
    } catch (e) {
        next(e);
    }
};
const Signin = async (req, res, next) => {
    try {
        const { user } = req.body;
        const loggedInUser = await User.findOne(user);
        if (!loggedInUser) {
            return next(
                new ExpressError(404, "Incorrect username or password")
            );
        }
        return res.status(200).json({
            loggedInUserId: loggedInUser._id,
            message: "User Signup successfully",
        });
    } catch (e) {
        next(e);
    }
};
module.exports = {
    Signup,
    Signin,
};
