const mongoose = require("mongoose");
const ticketPriceSchema = new mongoose.Schema(
  {
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    cinema_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cinemas",
      required: true,
    },
    schedule_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
      required: true,
    },
    base_price: {
      type: Number,
      required: true,
    },
    time_slot: {
      type: String,
      enum: ['Morning', 'Afternoon', 'Evening', 'Night'],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("TicketPrice", ticketPriceSchema);
