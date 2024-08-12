const Seat = require("../models/SeatModel");
const Showtime = require("../models/ShowtimeModel");
const asyncHandler = require("asyncHandler");
const { sendResponseError } = require("../middleware/middleware");

const addSeat = asyncHandler(async (req, res) => {
  const { seatNumber, showtimeId } = req.body;

  try {
    if (!seatNumber || !showtimeId) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    const showtime = await Showtime.findById(showtimeId);
    if (!showtime) {
      sendResponseError(404, "Showtime not found", res);
      return;
    }

    const seat = await Seat.create({
      seatNumber,
      showtime: showtime._id,
    });

    res.status(201).json({ seat });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const updateSeat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { seatNumber, showtimeId } = req.body;
  try {
    if (!seatNumber || !showtimeId) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    const showtime = await Showtime.findById(showtimeId);
    if (!showtime) {
      sendResponseError(404, "Showtime not found", res);
      return;
    }

    const seat = await Seat.findByIdAndUpdate(
      id,
      {
        seatNumber,
        showtime: showtime._id,
      },
      { new: true }
    );
    if (!seat) {
      sendResponseError(404, "Seat not found", res);
      return;
    }
    res.status(200).json({ seat });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const deleteSeat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const seat = await Seat.findByIdAndDelete(id);
    if (!seat) {
      sendResponseError(404, "Seat not found", res);
      return;
    }
    res.status(200).json({
      success: "success",
      message: "Seat deleted successfully",
      seat,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getAllSeats = asyncHandler(async (req, res) => {
  try {
    const seats = await Seat.find();
    res.status(200).json({
      success: "success",
      message: "Seats get all successfully",
      seats,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getSeatById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const seat = await Seat.findById(id);

    if (!seat) {
      sendResponseError(
        404,
        {
          status: "fail",
          message: "Seat not found",
        },
        res
      );
      return;
    }
    res.json(seat);
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
});

module.exports = {
  addSeat,
  updateSeat,
  deleteSeat,
  getAllSeats,
  getSeatById,
};
