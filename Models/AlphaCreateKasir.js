const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreateKasirSchema = new Schema({
  username: String,
  email: String,
  telp: Number,
  password: String,
  foto: String
});

module.exports = mongoose.model("Kasir", CreateKasirSchema);
