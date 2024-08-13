const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.model.js");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({ success: true, message: "Message received" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
