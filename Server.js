const express = require("express");
const mongoose = require("mongoose");
const employe = require("./model/employe.js");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/Company");

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const generated = req.query.generated === "true";
  const employees = generated ? await employe.find().lean() : [];
  res.render("index", { employees, generated });
});

app.get("/genrate", async (req, res) => {
  const name = req.query.name?.trim() || "Sarthak";

  for (let index = 0; index < 10; index++) {
    await employe.create({
      name,
      salary: 200000,
      language: "English",
      city: "India",
      isManger: true,
    });
  }
  res.redirect("/?generated=true");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
