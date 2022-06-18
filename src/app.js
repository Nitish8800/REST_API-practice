const express = require("express");
const app = express();
const connectDB = require("./db/conn");
const users = require("./models/students");

connectDB();

app.use(express.json());

// // Create a new Students
// app.post("/students", (req, res) => {
//   const user = new Student(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// Create a new Students
app.post("/user", async (req, res) => {
  try {
    const user = new users(req.body);

    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
