const express = require("express");
const app = express();
const connectDB = require("./db/conn");
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create a new Students
app.post("/students", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
