const mongoose = require("mongoose");

const uri = process.env.mongoURI || "mongodb://localhost:27017/user-auth-db";

const connectDB = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("@__db connection successfully");
    })
    .catch(() => {
      console.log("error in db connection");
    });
};

module.exports = connectDB;
