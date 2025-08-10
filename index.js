const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: " Welcome to User Auth App" });
});

app.use("/", userRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
