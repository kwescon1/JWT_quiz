const express = require("express");
const authRoutes = require("../routes/auth");
const verifyTokenRoute = require("../routes/verifyToken");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/token", verifyTokenRoute);

module.exports = router;
