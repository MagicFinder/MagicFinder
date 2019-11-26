const express = require("express");
const router = express.Router();
const Event = require("../models/Event.model");

router.get("/", (req, res) => {
  res.render("cardfinder");
});


module.exports = router;
