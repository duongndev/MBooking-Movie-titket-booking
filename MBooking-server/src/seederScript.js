require('dotenv').config()

const {connectDB} = require('./config/db')
const Cinema = require('./models/CinemaModel')
const Rooms = require('./models/RoomModel')
const {cinema, rooms} = require('./data/data')
connectDB()

const importData = async () => {
  try {
    // await Cinema.insertMany(cinema)
    await Rooms.insertMany(rooms)
    console.log('Data Import Success')
    process.exit()
  } catch (error) {
    console.error('Error with data import', error)
    process.exit(1)
  }
}

importData()
