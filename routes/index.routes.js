const express = require('express');
const router = express.Router();
const Event = require("../models/Event.model")
const api = require("../public/javascripts/api")

/* GET home page */
// router.get("/api/filter", (req, res, next) => {
//   // console.log(req.body.color)
//   //   if (!req.body.color) {
//   //     next("route")
//   //   } else next()
//   // }, (req, res, next) => {

//   // api.getCards()
//   //   .then(response => {

//   //     // let cards
//   //     // switch (req.body.color) {
//   //     //   case "btBlue":
//   //     //     cards = response.data.filter(elm => elm.colors.includes("U", ) && elm.lang.includes("en"))
//   //     //     break;
//   //     //   // case "btBlack":
//   //     //   //   cards = response.data.filter(elm => elm.colors.includes("B", ) && elm.lang.includes("en"))
//   //     //   //   break;
//   //     // }
//   //     // res.render("index", {
//   //     //   user: req.user,
//   //     //   cards
//   //     // });

//   //     res.render("auth/login")

//   //   })
//   //   .catch(err => console.log(err))
// })



router.get("/", (req, res) => {

  api.getCards()
    .then(response => {

      let cards

      cards = response.data.filter(elm => elm.lang.includes("en"))
      res.render("index", {
        user: req.user,
        cards
      });

      // res.render("index", {
      //   user: req.user,
      //   cards
      //   // cards: response.data.filter(elm => elm.lang.includes("en")),
      //   // cardsG: response.data.filter(elm => elm.colors.includes("G", ) && elm.lang.includes("en")),
      //   // cardsB: response.data.filter(elm => elm.colors.includes("B", ) && elm.lang.includes("en")), //black
      //   // cardsW: response.data.filter(elm => elm.colors.includes("W", ) && elm.lang.includes("en")),
      //   // cardsU: response.data.filter(elm => elm.colors.includes("U", ) && elm.lang.includes("en")), //Blue
      //   // cardsR: response.data.filter(elm => elm.colors.includes("R", ) && elm.lang.includes("en"))

      // });
      // console.log(response.data[0])


    })
    .catch(err => console.log(err))
});










module.exports = router;