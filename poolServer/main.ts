// @ts-types="npm:@types/express"
import express from "npm:express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the pool server!");
});

app.listen(8000);