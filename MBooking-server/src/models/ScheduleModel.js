const mongoose = require("mongoose");

const scheduleSchema = new Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    schedule_date: { 
      type: Date,
      required: true,
    },
    schedule_start: {
      type: String,
      required: true,
    },
    schedule_end: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
