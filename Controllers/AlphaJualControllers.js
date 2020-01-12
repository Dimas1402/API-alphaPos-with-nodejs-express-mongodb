const AlphaJualModels = require("../Models/AlphaModelJual");

module.exports = {
  create: (req, res) => {
    let AlphaJual = new AlphaJualModels({
      nama_barang_jual: req.body.nama_barang_jual,
      jumlah_barang: req.body.jumlah_barang,
      harga_satuan: req.body.harga_satuan,
      total: req.body.total
    });
    AlphaJual.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  getBarang: (req, res) => {
    AlphaJualModels.find()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  delete: (req, res) => {
    AlphaJualModels.remove({ _id: req.body._id })
      .then(result => {
        if (!result) res.json({ succes: true, result: "gagal delete" });
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    AlphaJualModels.update({ _id: req.body._id }, req.body)
      .then(result => {
        if (!result) res.json({ success: true, result: "gagal edit" });
        res.json({ success: true, result: result });
      })
      .catch(res => {
        res.json({ success: false, result: err });
      });
  }
};
