const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    seatNumber: {
      type: String,
      required: true,
    },
    seatStatus: {
      type: String,
      enum: ["available", "booked", "reserved"],
      default: "available",
    },
    showtime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Showtime",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Seat", seatSchema);
