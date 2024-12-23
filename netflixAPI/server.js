const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//mongoose connection
mongoose
  .connect("mongodb://localhost:27017/netflixDB", {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server started");
});
