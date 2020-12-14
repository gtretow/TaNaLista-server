// Criar lista do autocomplete no mongo.

const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  Despensa: [String],
  Freezer: [String],
  Geladeira: [String],
  "Frutas e Hortaliças": [String],
  Higiene: [String],
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
