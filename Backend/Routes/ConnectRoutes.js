const express = require("express");
const router = express.Router();
const Connect = require("../models/Connect");

// GET all connect links (for portfolio)
router.get("/", async (req, res) => {
  const links = await Connect.find();
  res.json(links);
});

// CREATE new connect link (admin)
router.post("/", async (req, res) => {
  const link = await Connect.create(req.body);
  res.json(link);
});

// DELETE a connect link (admin)
router.delete("/:id", async (req, res) => {
  await Connect.findByIdAndDelete(req.params.id);
  res.json({ message: "Link deleted" });
});

module.exports = router;
