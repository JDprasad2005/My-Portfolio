const express = require("express");
const router = express.Router();
const Project = require("../models/Projects");
const auth = require("../Middlewares/JwtAuth");

// GET all projects (for portfolio frontend)
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// CREATE project (admin)
router.post("/",auth, async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});

// DELETE project (admin)
router.delete("/:id",auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

module.exports = router;
