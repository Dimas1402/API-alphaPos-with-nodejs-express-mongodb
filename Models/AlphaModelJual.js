const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlphaSchemaJualBarang = new Schema({
  nama_barang_jual: String,
  jumlah_barang: String,
  harga_satuan: String,
  total: Number
});

module.exports = mongoose.model("alphaJual", AlphaSchemaJualBarang);
