const express = require('express');
const router = express.Router();
const Event = require("../models/Event.model")

/* Event routes */

router.get('/', (req, res, next) => {
  // res.render('events');
  Event.find()
    .then(allEvents => res.render('events', {
      events: allEvents
    }))
    .catch(err => console.log(err))
});



module.exports = router;