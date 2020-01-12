const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlphaSchema = new Schema({
  date: String,
  nama_barang: String,
  jumlah_barang: Number,
  harga_satuan: Number,
  total: Number
});

module.exports = mongoose.model("alpha", AlphaSchema);
