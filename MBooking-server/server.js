const express = require("express");
const app = express();
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const { notFound, errorHandler } = require("./src/middleware/middleware");
const cloudinary = require("cloudinary");
const logger = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);
require("dotenv").config();

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
  secure: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

const authRouter = require("./src/routes/authRouter");
const cinemaRouter = require("./src/routes/cinemaRouter");
const movieRouter = require("./src/routes/movieRoutes");

app.use("/api/auth", authRouter);
app.use("/api/cinema", cinemaRouter);
app.use("/api/movies", movieRouter);

app.use("/", (req, res) => {
  res.send("API running...");
});

app.get("*", (req, res) => {
  res.json({ message: "API running..." });
});
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Admin authentication
app.get("/check-auth", (req, res) => {
  if (req.session.isAdmin) {
    res.json({ isAdmin: true });
  } else {
    res.json({ isAdmin: false });
  }
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} `));

// Socket.io  
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

});
