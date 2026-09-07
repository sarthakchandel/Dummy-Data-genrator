const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManger: Boolean,
});

const employe = mongoose.model("employe", employeSchema);
module.exports = employe;
