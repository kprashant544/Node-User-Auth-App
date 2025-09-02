require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT;

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: " Welcome to User Auth App" });
});

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
