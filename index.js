const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

const uri =
  "mongodb+srv://lidi:lidi@cluster0.p8kup.mongodb.net/sample_blog?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Back-end is running");
});
