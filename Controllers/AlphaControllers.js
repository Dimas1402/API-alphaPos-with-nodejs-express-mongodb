const AlphaModel = require("../Models/AlphaModel");

module.exports = {
  create: (req, res) => {
    let alpha = new AlphaModel({
      date: req.body.date,
      nama_barang: req.body.nama_barang,
      jumlah_barang: req.body.jumlah_barang,
      harga_satuan: req.body.harga_satuan,
      total: req.body.total
    });
    alpha
      .save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  getData: (req, res) => {
    AlphaModel.find()
      .then(result => {
        if (!result) res.json({ success: true, result: "success" });
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  delete: (req, res) => {
    AlphaModel.remove({ _id: req.body._id })
      .then(result => {
        if (!result) res.json({ success: true, result: "gagal delete" });
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    AlphaModel.update({ _id: req.body }, req.body)
      .then(result => {
        if (!result) res.json({ success: true, result: "gagal edit" });
        res.json({ succes: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
};
