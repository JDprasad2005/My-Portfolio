const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const router = express.Router();


// router.post("/create-admin", async (req, res) => {
//   const { email, password } = req.body;

//   const existing = await Admin.findOne({ email });
//   if (existing) {
//     return res.status(400).json({ message: "Admin already exists" });
//   }

//   const admin = await Admin.create({ email, password });
//   res.json({ message: "Admin created", admin });
// });



router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const match = await admin.comparePassword(password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.json({ token });
});

module.exports = router;
