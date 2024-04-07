require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");
const responseMacro = require("./utils/responseMacro");
const router = require("./routes");
const handleError = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter({}));
app.use(responseMacro);
app.use(router);
app.use(handleError);

app.listen(port, () => console.log(`Server listening on port ${port}`));
