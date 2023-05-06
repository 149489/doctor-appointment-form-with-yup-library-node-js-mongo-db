const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema({
  name: String,
  mobile: String,
  email: { type: String, unique: true, required: true },
});

const Users = mongoose.model("Users", UserScehma);

module.exports = Users;
