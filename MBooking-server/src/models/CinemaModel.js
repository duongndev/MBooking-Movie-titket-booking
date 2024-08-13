const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    cinema_name: {
      type: String,
      required: true,
    },
    cinema_address: {
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
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("Cinemas", cinemaSchema);

module.exports = Category;
