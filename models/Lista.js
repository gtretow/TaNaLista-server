// Schema da lista do usuário.

const { Schema, model } = require("mongoose");

const ListaSchema = new Schema({
  //   Despensa: [String],
  //   Freezer: [String],
  //   Geladeira: [String],
  //   "Frutas e Hortaliças": [String],
  //   Higiene: [String],
});

const ListaModel = model("Lista", ListaSchema);

module.exports = ListaModel;
