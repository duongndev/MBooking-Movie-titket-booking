const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    cinema_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cinemas",
      required: true,
    },
    room_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Room", roomSchema)