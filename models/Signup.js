const { Schema, model } = require("mongoose");

const SignupSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: Number, require: true },
});

const SignupModel = model("User", SignupSchema);

module.exports = SignupModel;
