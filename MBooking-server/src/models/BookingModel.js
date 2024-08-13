const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    schedule_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
      required: true,
    },
    seat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seats",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    booking_date: {
      type: Date,
      default: Date.now,
    },
    booking_status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
