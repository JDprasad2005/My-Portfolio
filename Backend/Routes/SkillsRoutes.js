const express = require("express");
const router = express.Router();
const Skill = require("../models/Skills");
const auth = require("../Middlewares/JwtAuth");

// Get all skills
router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

// Add a skill
router.post("/",auth, async (req, res) => {
  const skill = await Skill.create(req.body);
  res.json(skill);
});

// Delete a skill
router.delete("/:id",auth, async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Skill deleted" });
});

module.exports = router;
