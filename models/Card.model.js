const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    name: String,

    lastName: String,

    nationality: String,

    birthday: Date,

    pictureUrl: String
  },
  {
    timestamps: true
  }
);

const Card = mongoose.model("Card", cardSchema);
