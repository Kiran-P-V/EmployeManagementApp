import {
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { userLoginSchema } from "../schemas/UserSchema/UserSchema";
import { useDispatch } from "react-redux";
import employeeApiCalls from "../Api/EmployeeApiCalls";
import { employeActions } from "../Redux/reducers/employeReducer";
// imp

export const Login = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValues = {
    username: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: userLoginSchema,
    onSubmit: async (values) => {
      const response = await employeeApiCalls.login(values);
      console.log(response, "here is the token response");
      dispatch(employeActions.setEmployeeData(response.data.token));
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
            login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            required
            name="username"
            value={Formik.values.username}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            helperText={Formik.touched.username && Formik.errors.username}
            error={
              Boolean(Formik.touched.username) &&
              Boolean(Formik.errors.username)
            }
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
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            marginY={2}
          >
            <Button variant="contained" color="success" type="submit">
              Login
            </Button>
            <Typography color="primary">forgot password?</Typography>
          </Stack>
          <Link
            href="/register"
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
