const express = require("express");
const router = express.Router();
const controller = require("../controllers/partnersController");

router.post("/", controller.addPartner);
router.get("/", controller.allPartners);
router.put("/:id", controller.updatePartner);
router.delete("/:id", controller.removePartner);

module.exports = router;