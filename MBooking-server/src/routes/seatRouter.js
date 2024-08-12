const router = require("express").Router();
const {
    addSeat,
    updateSeat,
    deleteSeat,
    getAllSeats,
    getSeatById,
} = require("../controller/seatController");


router.get("/", getAllSeats);

router.post("/", addSeat);

router.get("/:id", getSeatById);

router.put("/:id", updateSeat);

router.delete("/:id", deleteSeat);


module.exports = router;