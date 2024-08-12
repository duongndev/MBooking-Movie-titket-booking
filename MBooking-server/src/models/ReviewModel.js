const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
}
);

module.exports = mongoose.model("Review", reviewSchema);
