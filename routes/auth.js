const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

//Dummy user for demonstration purposes
const user = { id: 1, username: "user1", password: "password123" };

// Login route
authRoutes.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (username == "user1" && password === "password123") {
      // User authentication successful, generate JWT
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      // Store the JWT in a cookie
      res.cookie("token", token, { httpOnly: true }); // Set secure: true in production!

      res.success({ id: user.id, username: user.username }, "Login Successful");
    } else {
      // Authentication failed
      res.error("Invalid Username or Password", 401);
    }
  })
);

module.exports = authRoutes; // Note: It should be 'authRoutes' instead of 'router'
