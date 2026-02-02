const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

/* GET profile (for frontend display) */
router.get("/", async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

/* CREATE or UPDATE profile (admin) */
router.post("/", async (req, res) => {
  const existingProfile = await Profile.findOne();

  if (existingProfile) {
    const updated = await Profile.findByIdAndUpdate(
      existingProfile._id,
      req.body,
      { new: true }
    );
    return res.json(updated);
  } else {
    const profile = await Profile.create(req.body);
    return res.json(profile);
  }
});

module.exports = router;
