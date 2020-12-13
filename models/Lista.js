const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  String: [String],
});

const ProductModel = model("Prooduct", ProductSchema);

module.exports = ProductModel;
