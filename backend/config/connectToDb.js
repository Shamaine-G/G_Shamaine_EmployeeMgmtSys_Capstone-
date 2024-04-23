if (process.env.NODE_ENV != "poduction") {
  require("dotenv").config();
}

const mongoose = require("mongoose");


async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.error(error);
  }
  console.log("Connected to Database");
}

module.exports = connectToDb;
