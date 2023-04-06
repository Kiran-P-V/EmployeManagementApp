import axios from "../utility/Axios";

const register = async (registerData) => {
  try {
    const response = await axios.post("/register", registerData);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

const login = async (loginData) => {
  try {
    const response = await axios.post("/login", loginData);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

const previousEmployement = async (values) => {
  try {
    const response = await axios.post("/previousEmployment", values);
    return response;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

const employeeApiCalls = {
  register,
  login,
  previousEmployement,
};
export default employeeApiCalls;
