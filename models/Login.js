const { Schema, model } = require("mongoose");

const LoginSchema = new Schema({
  email: { type: String, require: true },
  password: { type: Number, require: true },
});

const LoginModel = model("User", LoginSchema);

module.exports = LoginModel;
