const express = require("express");
const { userController } = require("../controller");
const router = express.Router();

router.route(process.env.SIGNUP).post(userController.Signup);
router.route(process.env.SIGNIN).post(userController.Signin);

module.exports = router;
