const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/cardfinder", (req, res) => {
  res.render("cardfinder");
});


module.exports = router;




