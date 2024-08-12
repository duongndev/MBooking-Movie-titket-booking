const Showtime = require("../models/ShowtimeModel");
const Movie = require("../models/MoviesModel");
const Cinema = require("../models/CinemaModel");
const asyncHandler = require("express-async-handler");
const { sendResponseError } = require("../middleware/middleware");

const addShowtime = asyncHandler(async (req, res) => {
  const { movieId, cinemaId, showtimeDate, availableSeats } = req.body;

  try {
    if (!movieId || !cinemaId || !showtimeDate || !availableSeats) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    const movie = await Movie.findById(movieId);
    if (!movie) {
      sendResponseError(404, "Movie not found", res);
      return;
    }

    const cinema = await Cinema.findById(cinemaId);
    if (!cinema) {
      sendResponseError(404, "Cinema not found", res);
      return;
    }

    const showtime = await Showtime.create({
      movie: movie._id,
      cinema: cinema._id,
      showtimeDate,
      availableSeats,
    });

    res.status(201).json({ showtime });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const updateShowtime = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { movieId, cinemaId, showtimeDate, availableSeats } = req.body;
  try {
    if (!movieId || !cinemaId || !showtimeDate || !availableSeats) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    const movie = await Movie.findById(movieId);
    if (!movie) {
      sendResponseError(404, "Movie not found", res);
      return;
    }

    const cinema = await Cinema.findById(cinemaId);
    if (!cinema) {
      sendResponseError(404, "Cinema not found", res);
      return;
    }

    const showtime = await Showtime.findByIdAndUpdate(
      id,
      {
        movie: movieId,
        cinema: cinemaId,
        showtimeDate,
        availableSeats,
      },
      { new: true }
    );

    if (!showtime) {
      sendResponseError(404, "Showtime not found", res);
      return;
    }

    res.status(200).json({
      success: "success",
      message: "Showtime updated successfully",
      showtime,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const deleteShowtime = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const showtime = await Showtime.findByIdAndDelete(id);
    if (!showtime) {
      sendResponseError(404, "Showtime not found", res);
      return;
    }
    res.status(200).json({
      success: "success",
      message: "Showtime deleted successfully",
      showtime,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getAllShowtimes = asyncHandler(async (req, res) => {
  try {
    const showtimes = await Showtime.find();
    res.status(200).json({
      success: "success",
      message: "Showtimes get all successfully",
      showtimes,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getShowtimesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const showtime = await Showtime.findById(id);
    if (!showtime) {
      sendResponseError(404, "Showtime not found", res);
      return;
    }
    res.status(200).json({
      success: "success",
      message: "Showtime get by id successfully",
      showtime,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

module.exports = {
  addShowtime,
  updateShowtime,
  deleteShowtime,
  getAllShowtimes,
  getShowtimesById,
};
