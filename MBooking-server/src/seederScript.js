require('dotenv').config()

const {connectDB} = require('./config/db')


connectDB()

const importData = async () => {
  try {
    console.log('Data Import Success')
    process.exit()
  } catch (error) {
    console.error('Error with data import', error)
    process.exit(1)
  }
}

importData()
