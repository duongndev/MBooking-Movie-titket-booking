const Movie = require("../models/MoviesModel");
const cloudinary = require("cloudinary");
const fs = require("fs/promises");
const { sendResponseError } = require("../middleware/middleware");
const asyncHandler = require("express-async-handler");

const addMovie = asyncHandler(async (req, res) => {
  const { title, description, director, cast, duration, genre, releaseDate } =
    req.body;
  const thumbnail = {},
    trailer = {},
    images = [];

  try {
    const thumbnailFile = req.files["thumbnail"][0];
    const trailerFile = req.files["trailer"][0];
    const imagesFiles = req.files["images"][0];

    if (thumbnailFile) {
      const result = await cloudinary.v2.uploader.upload(thumbnailFile.path, {
        folder: "Movie/Movies/Thumbnail/",
        resource_type: "image",
      });

      if (result) {
        thumbnail.public_id = result.public_id;
        thumbnail.secure_url = result.secure_url;
        fs.rm(thumbnailFile.path);
      }
    }
    if (trailerFile) {
      const result = await cloudinary.v2.uploader.upload(trailerFile.path, {
        folder: "Movie/Movies/Trailer/",
        resource_type: "video",
      });

      if (result) {
        trailer.public_id = result.public_id;
        trailer.secure_url = result.secure_url;
        fs.rm(trailerFile.path);
      }
    }

    if (imagesFiles) {
      const result = await cloudinary.v2.uploader.upload(imagesFiles.path, {
        folder: "Movie/Movies/Images/",
        resource_type: "image",
      });
      if (result) {
        images.push({
          public_id: result.public_id,
          secure_url: result.secure_url,
        });
        fs.rm(imagesFiles.path);
      }
    }

    if (
      !title ||
      !description ||
      !director ||
      !cast ||
      !genre ||
      !releaseDate
    ) {
      sendResponseError(400, "Please add all fields", res);
    }

    const movie = await Movie.create({
      title,
      description,
      director,
      cast,
      genre,
      duration,
      releaseDate,
      thumbnail: thumbnail,
      trailer: trailer,
      images: images,
    });
    await movie.save();

    res.status(201).json({
      status: "success",
      message: "Movie added successfully",
      movie,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const updateMovie = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, director, cast, duration, genre, releaseDate } =
    req.body;
  const thumbnail = {},
    trailer = {},
    images = [];
  try {
    const thumbnailFile = req.files["thumbnail"][0];
    const trailerFile = req.files["trailer"][0];
    const imagesFiles = req.files["images"][0];

    if (thumbnailFile) {
      const result = await cloudinary.v2.uploader.upload(thumbnailFile.path, {
        folder: "Movie/Movies/Thumbnail/",
        resource_type: "image",
      });

      if (result) {
        thumbnail.public_id = result.public_id;
        thumbnail.secure_url = result.secure_url;
        fs.rm(thumbnailFile.path);
      }
    }
    if (trailerFile) {
      const result = await cloudinary.v2.uploader.upload(trailerFile.path, {
        folder: "Movie/Movies/Trailer/",
        resource_type: "video",
      });

      if (result) {
        trailer.public_id = result.public_id;
        trailer.secure_url = result.secure_url;
        fs.rm(trailerFile.path);
      }
    }

    if (imagesFiles) {
      const result = await cloudinary.v2.uploader.upload(imagesFiles.path, {
        folder: "Movie/Movies/Images/",
        resource_type: "image",
      });
      if (result) {
        images.push({
          public_id: result.public_id,
          secure_url: result.secure_url,
        });
        fs.rm(imagesFiles.path);
      }
    }

    if (
      !title ||
      !description ||
      !director ||
      !cast ||
      !genre ||
      !releaseDate
    ) {
      sendResponseError(400, "Please add all fields", res);
    }

    const movie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        description,
        director,
        cast,
        genre,
        duration,
        releaseDate,
        thumbnail: thumbnail,
        trailer: trailer,
        images: images,
      },
      {
        new: true,
      }
    );
    await movie.save();

    res.status(201).json({
      status: "success",
      message: "Movie updated successfully",
      movie,
    });
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const deleteMovie = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      sendResponseError(
        404,
        {
          status: "fail",
          message: "Movie not found",
        },
        res
      );
      return;
    }

    
    if (movie.thumbnail.public_id) {
      await cloudinary.v2.uploader.destroy(movie.thumbnail.public_id);
    }

    if (movie.trailer.public_id) {
      await cloudinary.v2.uploader.destroy(movie.trailer.public_id);
    }

    if (movie.images.length) {
      for (const image of movie.images) {
        await cloudinary.v2.uploader.destroy(image.public_id);
      }
    }

    res.status(200).json({
      status: "success",
      message: "Movie deleted successfully",
      movie,
    });

  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getAllMovies = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.find();
    res.status(200).json(movie);
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

const getMovieById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      sendResponseError(
        404,
        {
          status: "fail",
          message: "Movie not found",
        },
        res
      );
      return;
    }

    res.status(200).json(movie);
  } catch (error) {
    sendResponseError(500, error.message, res);
  }
});

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
};
