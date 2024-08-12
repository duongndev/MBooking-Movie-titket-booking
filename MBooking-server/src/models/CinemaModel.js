const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    nameCinema: {
      type: String,
      required: true,
    },
    thumbnail: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    location: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("Cinema", cinemaSchema);

module.exports = Category;
