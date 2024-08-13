const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://dvkrishna142000:S5D9MfV5BvgMRdB3@cluster0.pnf94ly.mongodb.net/MERNProject?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected....."))
  .catch((err) => console.error("MongoDB connection error:", err));
app.get("/", (req, res) => {
  res.json("Hello..");
});

app.use("/api/contact", require("./routes/contact.route.js"));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(5000, () => {
  console.log(`Server is running.....`);
});
