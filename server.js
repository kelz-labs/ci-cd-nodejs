const express = require("express");
const { greeting } = require("./user");
const app = express();

app.get("/", (req, res) => res.send("Udah jalan!"));
app.get("/ping", (req, res) => res.send("Waduh"));
app.get("/youtube", (req, res) => res.send("gwej lagi belajar CI/CD cui"));
app.get("/hello:name", (req, res) =>
  res.json({ message: greeting(req.params.name) })
);

module.exports = app;
