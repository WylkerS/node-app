var express = require("express");
var router = express.Router();

/* Manipulador para POST /palpite */
router.post("/", function (req, res, next) {
  const palpiteFla = req.body.placarFla;
  const palpiteRac = req.body.placarRac;

  res.render("palpite", {
    title: "Palpite enviado!",
    fla: palpiteFla,
    rac: palpiteRac,
  });
});

module.exports = router;
