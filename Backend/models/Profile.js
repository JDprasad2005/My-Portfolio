const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  resumeUrl: {
    type: String
  },
  aboutText: {
    type: String,
    required: true
  },
  profileImage: {
    type: String
  },
  tags: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model("Profile", profileSchema);
