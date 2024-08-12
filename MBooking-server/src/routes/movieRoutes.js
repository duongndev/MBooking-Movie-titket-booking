const router = require("express").Router();
const {
  addMovie,
  updateMovie,
  deleteMovie,
  getAllMovies,
  getMovieById
} = require("../controller/movieControllers");

const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/multerMiddleware");


router.get("/", getAllMovies);

// post movie with thumbnail and trailer
router.post("/", upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "trailer", maxCount: 1 }, { name: "images", maxCount: 5 }] ), addMovie);

router.put("/:id", upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "trailer", maxCount: 1 }, { name: "images", maxCount: 5 }] ), updateMovie);

router.delete("/:id", deleteMovie);

router.get("/:id", getMovieById);


module.exports = router;
