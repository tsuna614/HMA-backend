const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const loggingMiddleware = require("./middlewares/logging.middleware");

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.on("open", () => {
  console.log("Connected to database");
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(loggingMiddleware);

app.use("/v1/user", userRoute);
app.use("/v1/auth", authRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
