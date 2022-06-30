const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const uri =
  "mongodb+srv://liki:liki@cluster0.c5gfp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// app.use("/", (req, res) => {
//   console.log("this is the main url");
// });

app.listen("5000", () => {
  console.log("Back-end is running");
});
