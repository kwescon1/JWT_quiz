const express = require("express");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");

const verifyTokenRoute = express.Router();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Verify JWT token middleware
const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return error("Unauthorized", 401);
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Add decoded token data to request object
    next();
  } catch (error) {
    res.error("Invalid token", 400);
  }
});

// A protected route example
verifyTokenRoute.get("/protected", verifyJWT, (req, res) => {
  res.success("Access to protected route successful.");
});

module.exports = verifyTokenRoute;
