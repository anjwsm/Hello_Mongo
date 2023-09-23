const express = require("express");
const mongoose = require("mongoose");
const server = express();

// const Student = require('./models');
const { Student, Teacher } = require("./models");

// body processing middel ware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//connect to DB
mongoose
  .connect("mongodb://127.0.0.1:27017/schoolDB")
  .then(() => {
    console.log("Connected to db");
  })
  .catch((e) => {
    console.log("Error connecting to DB", e);
  });

server.get("/students", (req, res) => {
  Student.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((e) => res.send(e));
});

server.post("/students", (req, res) => {
  const data = req.body;
  console.log(data);
  Student.create(data)
    .then((result) => {
      res.send("Sucesss");
    })
    .catch((e) => {
      res.send(e);
    });
});
server.delete("/students/:studentId", (req, res) => {
  // path params
  const id = req.params.studentId;
  console.log(id);
  Student.deleteOne({ _id: id })
    .then(() => {
      res.send("Suceess");
    })
    .catch((err) => {
      res.send(err);
    });
});

server.put("/students/:studentId", (req, res) => {
  // get id from path params
  const id = req.params.studentId;
  // data to update
  const data = req.body;
  console.log(data);
  Student.updateOne({ _id: id }, data)
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      res.send(err);
    });
});
server.get("/teachers", (req, res) => {
  Teacher.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((e) => res.send(e));
});

server.post("/teachers", (req, res) => {
  const data = req.body;
  console.log(data);
  Teacher.create(data)
    .then((result) => {
      res.send("Sucesss");
    })
    .catch((e) => {
      res.send(e);
    });
});
server.delete("/teachers/:teacherId", (req, res) => {
  console.log(id);
  Teacher.deleteOne({ _id: id })
    .then(() => {
      res.send("Suceess");
    })
    .catch((err) => {
      res.send(err);
    });
});

server.put("/teachers/:teacherId", (req, res) => {
  const id = req.params.teacherId;
  const data = req.body;
  console.log(data);
  Teacher.updateOne({ _id: id }, data)
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      res.send(err);
    });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
