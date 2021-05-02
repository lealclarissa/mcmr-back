const partners = require("../models/partnersSchema");

const addPartner = (req, res) => {
  console.log(req.body);

  const partner = new partners.partnersModel(req.body);

  partner.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message, message: "FAIL" });
    }
    res
      .status(201)
      .send({ status: true, message: "Partner succefully registred!" });
  });
};

const allPartners = (req, res) => {
  console.log(req.url);
  partners.partnersModel.find(function (error, partners) {
    if (error) {
      res.status(500).send({ message: error.message, message: "FAIL" });
    }
    res.status(200).send(partners);
  });
};

const updatePartner = (req, res) => {
  const id = req.params.id;

  partners.partnersModel.find({ id }, function (err, partner) {
    if (partner.length > 0) {
      partners.partnersModel.updateOne(
        { id },
        { $set: req.body },
        function (err) {
          if (err) {
            res.status(500).send({ message: err.message });
          }
          res.status(200).send({ message: "Partner succefully updated!" });
        }
      );
    } else {
      res
        .status(200)
        .send({ message: "There is no partner to be updated with this id" });
    }
  });
};

const removePartner = (req, res) => {
  const id = req.params.id;

  partners.partnersModel.find({ id }, function (err, product) {
    if (product.length > 0) {
      partners.partnersModel.deleteOne({ id }, function (err) {
        if (err) {
          res.status(500).send({
            message: err.message,
            status: "FAIL",
          });
        }
        res.status(200).send({
          message: "Partner succefully removed from database!",
          status: "SUCCESS",
        });
      });
    } else {
      res.status(200).send({
        message: "There is no partner to be removed",
        status: "EMPTY",
      });
    }
  });
};

module.exports = { addPartner, allPartners, updatePartner, removePartner };
