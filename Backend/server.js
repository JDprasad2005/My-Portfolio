const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api/profile", require("./Routes/ProfileRoutes"));
app.use("/api/skills", require("./Routes/SkillsRoutes"));
app.use("/api/projects", require("./Routes/ProjectRoutes"));
app.use("/api/connect", require("./Routes/ConnectRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
