const AlphaKasirModel = require("../Models/AlphaCreateKasir");

module.exports = {
  post: (req, res) => {
    const AlphaKasir = new AlphaKasirModel({
      username: req.body.username,
      email: req.body.email,
      telp: req.body.telp,
      password: req.body.password,
      foto: req.body.foto
    });
    AlphaKasir.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  }
};
