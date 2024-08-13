const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://dvkrishna142000:S5D9MfV5BvgMRdB3@cluster0.pnf94ly.mongodb.net/MERNProject?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected....."))
  .catch((err) => console.error(err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message received" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log(`Server running......`);
});
