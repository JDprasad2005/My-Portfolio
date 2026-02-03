const express = require("express");
const router = express.Router();
const Connect = require("../models/Connect");
const auth = require("../Middlewares/JwtAuth");

// GET all connect links (for portfolio)
router.get("/", async (req, res) => {
  const links = await Connect.find();
  res.json(links);
});

// CREATE new connect link (admin)
router.post("/",auth, async (req, res) => {
  const link = await Connect.create(req.body);
  res.json(link);
});

// DELETE a connect link (admin)
router.delete("/:id",auth, async (req, res) => {
  await Connect.findByIdAndDelete(req.params.id);
  res.json({ message: "Link deleted" });
});

module.exports = router;
