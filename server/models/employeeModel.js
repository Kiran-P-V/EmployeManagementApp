const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfJoining: {
    type: String,
    required: true,
    trim: true,
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  isEmployee: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("employee", employeeSchema);
