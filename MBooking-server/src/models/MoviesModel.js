const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actors: {
      type: [String],
      required: true,
    },
    duration: {
      type: Number, // in minutes
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    releaseDate: {
      type: Date,
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
    trailer: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    images: [],
    language: {
      type: String,
    },
    censorship: {
      type: String,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
