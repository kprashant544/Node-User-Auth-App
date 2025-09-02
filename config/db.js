const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("@__db connection successfully");
  } catch (err) {
    console.error("error in db connection", err);
  }
};

module.exports = connectDB;
