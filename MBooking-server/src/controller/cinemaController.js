const Cinema = require("../models/CinemaModel");
const cloudinary = require("cloudinary");
const fs = require("fs/promises");
const { sendResponseError } = require("../middleware/middleware");
const asyncHandler = require("express-async-handler");
const Movie = require("../models/MoviesModel");

const createCinema = asyncHandler(async (req, res) => {
  const { nameCinema, location } = req.body;
  const thumbnail = {};

  try {
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Movie/Cinema",
        resource_type: "image",
      });
      if (result) {
        thumbnail.public_id = result.public_id;
        thumbnail.secure_url = result.secure_url;
        fs.rm(`src/uploads/${req.file.filename}`);
      }
    }
  } catch (error) {
    sendResponseError(res, 500, error.message);
  }

  try {
    if (!nameCinema || !location) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }

    const cinema = await Cinema.create({
      nameCinema: nameCinema,
      location: location,
      thumbnail: thumbnail,
    });
    await cinema.save();
    res.status(201).json(cinema);
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getAllCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find({});
    res.json(cinemas);
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
};

const getCinemaById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const cinema = await Cinema.findById(id);
    res.json(cinema);
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
});

const updateCinema = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { nameCinema, location } = req.body;
  const thumbnail = {};

  try {
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Movie/Cinema",
        resource_type: "image",
      });

      if (result) {
        thumbnail.public_id = result.public_id;
        thumbnail.secure_url = result.secure_url;
        fs.rm(`src/uploads/${req.file.filename}`);
      }
    }
  } catch (error) {
    sendResponseError(res, 500, error.message);
  }

  try {
    if (!nameCinema || !location) {
      sendResponseError(400, "Please add all fields", res);
      return;
    }
    const cinema = await Cinema.findByIdAndUpdate(
      id,
      {
        nameCinema: nameCinema,
        location: location,
        thumbnail: thumbnail,
      },
      { new: true }
    );
    await cinema.save();
    res.json(cinema);
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const deleteCinema = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const cinema = await Cinema.findByIdAndDelete(id);

    // get public_id and delete from cloudinary
    if (cinema.thumbnail.public_id) {
      await cloudinary.v2.uploader.destroy(cinema.thumbnail.public_id);
    }

    res.json(cinema);
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getMovieByCinema = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const Movies = await Movie.find({ CinemaId: id });
    res.json(Movies);
  } catch (error) {
    res.json({
      status: "fail",
      message: error.message,
    });
  }
});

module.exports = {
  createCinema,
  getCinemaById,
  updateCinema,
  deleteCinema,
  getAllCinemas,
};
