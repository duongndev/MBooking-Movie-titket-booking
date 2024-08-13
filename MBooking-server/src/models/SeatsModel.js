const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    room_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    seat_type: {
      type: Number, // 0: normal, 1: vip, 2: couple
      required: true,
    },
    seat_row: {
      type: String, // A, B, C,.....
      required: true,
    },
    seat_number: {
      type: Number, // 1, 2, 3,....
      required: true,
    },
    priceAdjustment: {
      type: Number,
      default: 0,
    },
    is_booked: {
      type: Boolean, // true: booked, false: not booked
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Seats", seatSchema);
