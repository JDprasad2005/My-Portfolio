const mongoose = require("mongoose");

const connectSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true   
  },
  icon: {
    type: String     
  },
  url: {
    type: String,
    required: true  
  },
  displayText: {
    type: String    
  },
  actionText: {
    type: String     
  }
});

module.exports = mongoose.model("Connect", connectSchema);
