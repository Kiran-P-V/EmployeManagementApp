const mongoose = require("mongoose");
const previousEmployementSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  fromDate: {
    type: String,
    required: true,
    trim: true,
  },
  toDate: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
});
module.exports = mongoose.model("employement", previousEmployementSchema);
