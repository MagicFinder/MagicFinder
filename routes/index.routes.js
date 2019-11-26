const express = require('express');
const router = express.Router();
const Event = require("../models/Event.model")

/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});


router.get("/cardfinder", (req, res) => {
  res.render("cardfinder");
});




// router.get('/events', (req, res, next) => {
//   // res.render('events');
//   Event.find()
//     .then(allEvents => res.render('events', {
//       events: allEvents
//     }))
//     .catch(err => console.log(err))
// });

// router.get('/', (req, res) => {
//   console.log("entraaa")
//   Event.find()
//     .then(allEvents => res.render('events', {
//       events: allEvents
//     }))
//     .catch(err => console.log(err))
// })


module.exports = router;