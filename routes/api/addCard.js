const express = require("express");
const router = express.Router();

const Card = require("../../models/Card.model");
const User = require("../../models/User.model");

router.post("/addCard", (req, res) => {
  console.log("holaaa estamos en el back");
  // console.log(req.body);
  const {
    cardName,
    cardImage,
    cardDesc,
    cardRarity,
    cardPrice
  } = req.body.cardDetail;
  let newCard = new Card({
    cardName,
    cardImage,
    cardDesc,
    cardRarity,
    cardPrice
  });
  

  // Card.create({
  //   cardSummary
  //   // cardName: "X",
  //   // cardImage: "X",
  //   // cardDesc: "X",
  //   // cardRarity: "X",
  //   // cardPrice: "X"

  // })
  newCard
    .save()
    .then(() => {
      console.log('card created ---->' + newCard)

      const logged = req.user._id;
      console.log('logged user ------>' + logged);
      User.findOneAndUpdate(logged, { cards: newCard },
        
      );

    })
    .catch(err => console.log(err));
});

module.exports = router;
