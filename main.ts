import express from "express"; //for es6 and above, if use this then change index.js to index.mjs or add  "type": "module" in
import mongoose from "mongoose";
import "./student/student.model.ts";
//const express = require('express')  // for older version
import { getData, saveData } from "./student/student.controller";
const router = express.Router();
const app = express();

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

app.post("/", (req, res) => {
  console.log(req.body, req.query);
  res.send({
    message: "Welcome to CRUD Application",
    code: 200,
    data: {},
  });
});

router.get("/add", saveData);
router.get("/get", getData);

app.use(router);

const server = app.listen(8000, () => {
  const port = server.address().port;
  const host = server.address().address;
  console.log(host);
  console.log(`Hello app listening at ${host} ${port}`);
});
