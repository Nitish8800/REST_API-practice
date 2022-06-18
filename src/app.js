const express = require("express");
const app = express();
const connectDB = require("./db/conn");
const users = require("./models/students");

connectDB();

const studentRouter = require("./routers/students");

app.use(express.json());

app.use(studentRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
