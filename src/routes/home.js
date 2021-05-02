const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title: "Meu crespo, minhas regras!",
    version: "1.0.0",
    label: "Hackgrrrl 2021",
    owner: "github.com/lealclarissa"
  });
});

module.exports = router;