const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
});

const ProductModel = model("User", ProductSchema);

module.exports = ProductModel;
