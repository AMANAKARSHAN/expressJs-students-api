import express from "express"; //for es6 and above, if use this then change index.js to index.mjs or add  "type": "module" in
//const express = require('express')  // for older version
import mongoose from "mongoose";
import "./student/student.model.ts";
import {
  deleteData,
  getData,
  saveData,
  updateData,
} from "./student/student.controller";
const router = express.Router();
const app = express();

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//connect with mongoDb
const db =
  "mongodb+srv://express:express@cluster0.ombev6w.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    //useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to CRUD Application",
    code: 200,
    data: {},
  });
});

router.post("/add", saveData);
router.get("/get", getData);
router.put("/update", updateData);
router.delete("/delete", deleteData);

app.use(router);

const server = app.listen(8000, () => {
  const port = server.address().port;
  const host = server.address().address;
  console.log(host);
  console.log(`Listening at ${host} ${port}`);
});
