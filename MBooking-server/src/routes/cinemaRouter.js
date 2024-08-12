const router = require("express").Router();
const {
  createCinema,
  updateCinema,
  deleteCinema,
  getAllCinemas,
  getCinemaById,
} = require("../controller/cinemaController");


const upload = require("../middleware/multerMiddleware");
const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");

// category
router.get("/", getAllCinemas);

router.post("/", upload.single("thumbnail"), createCinema);

router.get("/:id", getCinemaById);

router.put("/:id", upload.single("thumbnail"), updateCinema);

router.delete("/:id", deleteCinema);

module.exports = router;
