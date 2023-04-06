import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import employeeApiCalls from "../Api/EmployeeApiCalls";
import { userRegisterSchema } from "../schemas/UserSchema/UserSchema";

export const RegisterComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValues = {
    password: "",
    name: "",
    dateOfJoining: "",
    designation: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: userRegisterSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const response = await employeeApiCalls.register(values);
      if (response) {
        action.resetForm();
      }
    },
  });
  return (
    <>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
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
          <Typography variant="h4" mb={2} fontWeight={600}>
            Register
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            value={Formik.values.name}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={Formik.touched.name && Formik.errors.name}
            error={Boolean(Formik.touched.name) && Boolean(Formik.errors.name)}
            sx={{ paddingTop: "0.9rem" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={Formik.values.password}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={Formik.touched.password && Formik.errors.password}
            error={
              Boolean(Formik.touched.password) &&
              Boolean(Formik.errors.password)
            }
            sx={{ paddingTop: "0.9rem" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="current-password"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="dateOfJoining"
            label="Date of Joining"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={Formik.values.dateOfJoining}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={
              Formik.touched.dateOfJoining && Formik.errors.dateOfJoining
            }
            error={
              Boolean(Formik.touched.dateOfJoining) &&
              Boolean(Formik.errors.dateOfJoining)
            }
            sx={{ paddingTop: "0.9rem" }}
          />

          <FormControl
            fullWidth
            required
            sx={{ paddingTop: "0.9rem" }}
            error={
              Boolean(Formik.touched.designation) &&
              Boolean(Formik.errors.designation)
            }
          >
            <InputLabel id="designation-label">Designation</InputLabel>
            <Select
              labelId="designation-label"
              id="designation"
              name="designation"
              value={Formik.values.designation}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              label="Designation"
            >
              <MenuItem value="MD">MD</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Clerk">Clerk</MenuItem>
              <MenuItem value="Cashier">Cashier</MenuItem>
            </Select>
            {Formik.touched.designation && Formik.errors.designation && (
              <FormHelperText>{Formik.errors.designation}</FormHelperText>
            )}
          </FormControl>

          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            marginY={2}
          >
            <Button variant="contained" color="success" type="submit">
              Register
            </Button>
            <Typography color="primary">forgot password?</Typography>
          </Stack>
          <Link
            href="/"
            variant="body1"
            sx={{ marginLeft: 2, textDecoration: "none" }}
          >
            Dont't have an account?/Register
          </Link>
        </Stack>
      </Stack>
    </>
  );
};
