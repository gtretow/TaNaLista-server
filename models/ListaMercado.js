// Schema da lista do usuário.

const { Schema, model } = require("mongoose");

const ListaSchema = new Schema({
  // id do usuário que criou a lista
  IdUser: { type: Schema.Types.ObjectId, ref: "User" },
  Lista: [],
});

const ListaModel = model("Lista", ListaSchema);

module.exports = ListaModel;
