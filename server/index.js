"use strict";

const express = require("express");

const { PORT = "3001" } = process.env;
const app = express();

app.use((req, res, next) => {
  res.send("Hello World");
});

app.listen(PORT);
