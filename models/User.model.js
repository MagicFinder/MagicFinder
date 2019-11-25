const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    imgName: String,
    imgPath: String,
    location: { type: { type: String }, coordinates: [Number] },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }] // Referenciar un documento a través de 'ref', con el nombre del modelo a referenciar como valor

  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
