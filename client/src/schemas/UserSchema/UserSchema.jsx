import * as Yup from "yup";

export const userLoginSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .required("Please enter your username")
    .matches(/^[a-zA-Z0-9_-]+$/, "Invalid username format"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const userRegisterSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .required("Please enter your name")
    .matches(/^[a-zA-Z\s]+$/, "Invalid name format"),
  dateOfJoining: Yup.date().required("Please enter your date of joining"),
  designation: Yup.string()
    .oneOf(["MD", "Manager", "Clerk", "Cashier"])
    .required("Please select your designation"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const workExperienceSchema = Yup.object({
  companyName: Yup.string().required("Please enter your company name"),
  designation: Yup.string().required("Please enter your designation"),
  fromDate: Yup.date().required("Please enter your from date"),
  toDate: Yup.date().required("Please enter your to date"),
  role: Yup.string().required("Please enter your role"),
});
