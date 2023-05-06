const express = require("express");
const app = express();
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { connect } = require("./db");
const router = require("./routers");
const { POST } = require("./config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

connect();

app.get("/", (req, res) => {
  return res.send("Server runing...");
});

app.use("/api", router);

app.listen(POST, () => {
  console.log(`Server Started on ${POST}`);
});
