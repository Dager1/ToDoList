const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/mongo-todo")
  .then(() => console.log("connected to DB"))
  .catch(console.error);

app.listen(3002, () => console.log("Server stateted on port 3001"));
