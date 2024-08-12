const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const { sendResponseError } = require("../middleware/middleware");
const { checkPassword, newToken } = require("../utils/utility.function");

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body;
  try {
    if (!fullName || !email || !password || !username) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    // kiểm tra xem email đã đúng định dạng hay chưa
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (!validEmail) {
      sendResponseError(400, "Invalid email", res);
      return;
    }

    const userExists = await User.findOne({ username });

    if (userExists) {
      sendResponseError(400, "User already exists", res);
      return;
    }

    const newUser = await User.create({
      fullName,
      username,
      email,
      password,
    });
    res.status(201).json({
      status: "success",
      message: "User register successfully",
      newUser,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    const user = await User.findOne({ username });

    if (!user) {
      sendResponseError(400, "User not found", res);
      return;
    }

    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
      sendResponseError(400, "Password is incorrect", res);
      return; 
    }

    const token = newToken(user);
    res.status(200).json({
      status: "success",
      message: "User login successfully",
      token,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

module.exports = { registerUser, loginUser };
