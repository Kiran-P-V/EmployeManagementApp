import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { useFormik } from "formik";
import { workExperienceSchema } from "../schemas/UserSchema/UserSchema";
import employeeApiCalls from "../Api/EmployeeApiCalls";

export const ProfileComponent = () => {
  const employeeData = useSelector((state) => state.employee.employeeData);
  const decoded = jwtDecode(employeeData);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const initialValues = {
    companyName: "",
    designation: "",
    fromDate: "",
    toDate: "",
    role: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: workExperienceSchema,
    onSubmit: async (values) => {
      console.log(values);
      const response = await employeeApiCalls.previousEmployement(values);
    },
  });
  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Employee Details
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Name: {decoded.name}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Designation: {decoded.designation}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Date of Joining: {decoded.dateOfJoining}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Add Previous Employment Details
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{
            display: "block",
            margin: "0 auto",
          }}
        >
          Add
        </Button>
      </Typography>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Previous Employment Details</DialogTitle>
        <DialogContent>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginY: 7,
            }}
          >
            <Stack
              component="form"
              onSubmit={Formik.handleSubmit}
              noValidate
              sx={{ boxShadow: 1, padding: 4 }}
            >
              <TextField
                id="companyName"
                label="Company Name"
                variant="outlined"
                required
                margin="normal"
                fullWidth
                name="companyName"
                value={Formik.values.companyName}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                helperText={
                  Formik.touched.companyName && Formik.errors.companyName
                }
                error={
                  Boolean(Formik.touched.companyName) &&
                  Boolean(Formik.errors.companyName)
                }
                sx={{ paddingTop: "0.9rem" }}
              />
              <TextField
                id="designation"
                label="Designation"
                variant="outlined"
                required
                margin="normal"
                fullWidth
                name="designation"
                value={Formik.values.designation}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                helperText={
                  Formik.touched.designation && Formik.errors.designation
                }
                error={
                  Boolean(Formik.touched.designation) &&
                  Boolean(Formik.errors.designation)
                }
                sx={{ paddingTop: "0.9rem" }}
              />

              <TextField
                id="fromDate"
                label="From Date"
                variant="outlined"
                required
                type="date"
                margin="normal"
                fullWidth
                name="fromDate"
                value={Formik.values.fromDate}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                helperText={Formik.touched.fromDate && Formik.errors.fromDate}
                error={
                  Boolean(Formik.touched.fromDate) &&
                  Boolean(Formik.errors.fromDate)
                }
                sx={{ paddingTop: "0.9rem" }}
              />

              <TextField
                id="toDate"
                label="To Date"
                variant="outlined"
                required
                type="date"
                margin="normal"
                fullWidth
                name="toDate"
                value={Formik.values.toDate}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                helperText={Formik.touched.toDate && Formik.errors.toDate}
                error={
                  Boolean(Formik.touched.toDate) &&
                  Boolean(Formik.errors.toDate)
                }
                sx={{ paddingTop: "0.9rem" }}
              />

              <TextField
                id="role"
                label="Role"
                variant="outlined"
                required
                margin="normal"
                fullWidth
                name="role"
                value={Formik.values.role}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                helperText={Formik.touched.role && Formik.errors.role}
                error={
                  Boolean(Formik.touched.role) && Boolean(Formik.errors.role)
                }
                sx={{ paddingTop: "0.9rem" }}
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
