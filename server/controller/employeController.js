const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employee = require("../models/employeeModel");
const prevEmplmnt = require("../models/previousEmployement");

const postRegister = async (req, res) => {
  try {
    console.log(req.body);
    const { name, password, dateOfJoining, designation } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (hashedPassword) {
      const newEmployee = new Employee({
        name,
        password: hashedPassword,
        dateOfJoining,
        designation,
      });
      await newEmployee.save();
      //   return a success message after the registration process is completed
      res
        .status(200)
        .json({ status: "success", message: "Registration success " });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "error",
      message: "Something went wrong while processing the request",
    });
  }
};

const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const employeeData = await Employee.findOne({
      name: { $regex: new RegExp(username, "i") },
    });

    if (!employeeData) {
      // Return an error if the user does not exist
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordCheck = await bcrypt.compare(password, employeeData.password);

    if (passwordCheck) {
      const employeeDetails = {
        name: employeeData.name,
        dateOfJoining: employeeData.dateOfJoining,
        designation: employeeData.designation,
      };
      // Create a JWT token if the password is correct
      const userToken = createUsertoken(employeeDetails);

      // Send the token as a response
      res.json({ token: userToken });
    } else {
      // Return an error if the password is incorrect
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "error",
      message: "Something went wrong while processing the request",
    });
  }
};

const postPreviousEmployement = async (req, res) => {
  console.log("controllr");
  try {
    const { companyName, designation, fromDate, toDate, role } = req.body;
    if (companyName && designation && fromDate && toDate && role) {
      const prevEmp = new prevEmplmnt({
        companyName,
        designation,
        fromDate,
        toDate,
        role,
      });

      const dataSaved = await prevEmp.save();

      res.status(200).json({
        status: "success",
        message: "previous employment added successfully",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "error",
      message: "Something went wrong while processing the request",
    });
  }
};

const createUsertoken = (payload) => {
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "5m",
  });
  return token;
};

module.exports = {
  postRegister,
  postLogin,
  postPreviousEmployement,
};
