const express = require('express');
const router = express.Router();
const Event = require("../models/Event.model")

/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});










module.exports = router;