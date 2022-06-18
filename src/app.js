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

// Read the Data of registered Students

app.get("/user", async (req, res) => {
  try {
    const studentsData = await users.find();
    res.send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get the individual Student Data

app.get("/user/:id", async (req, res) => {
  try {
    const studentData = await users.findById(req.params.id);
    if (!studentData) {
      return res.status(404).send("No Student Data Found");
    }
    res.send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete the Student Data

app.delete("/user/:id", async (req, res) => {
  try {
    const studentData = await users.findByIdAndDelete(req.params.id);
    if (!studentData) {
      return res.status(404).send("No Student Data Found");
    }
    res.send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// update the Student Data

app.patch("/user/:id", async (req, res) => {
  try {
    const studentData = await users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!studentData) {
      return res.status(404).send("No Student Data Found");
    }
    res.send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
