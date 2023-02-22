import express from "express"; //for es6 and above, if use this then change index.js to index.mjs or add  "type": "module" in
import mongoose from "mongoose";
import "./student.model.ts";
import { addData } from "./student.service";
//const express = require('express')  // for older version
// const app = express();

export const getData = (req, res) => {
  res.send("get data");
};

export const saveData = (req, res) => {
  console.log(req.body);
  const result = addData(req.body);
  res.send({
    message: "Data is Added",
    status: res.status,
    data: result,
  });
};

// module.exports = {
//   getData,
//   saveData,
// };
