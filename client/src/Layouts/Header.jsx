import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Container, Typography, Button } from "@mui/material";
import LogoLeft from "../assets/pok3.jpg";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { employeActions } from "../Redux/reducers/employeReducer";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(employeActions.setRemoveEmployeData());
  };
  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={LogoLeft}
          alt="logo1"
          sx={{ maxWidth: 100, height: "auto" }}
        />

        <Container sx={{ marginTop: 5 }}>
          <Stack
            spacing={{ xs: 0, sm: 2, md: 6, lg: 12 }}
            direction={"row"}
            sx={{
              marginLeft: "250px",
            }}
          >
            <Typography
              sx={{
                "&:hover": { color: "grey" },
                textDecoration: "none",
                color: "black",
              }}
              variant="body1"
              component={Link}
              to="/"
            >
              Home
            </Typography>
            <Typography
              sx={{
                "&:hover": { color: "grey" },
                textDecoration: "none",
                color: "black",
              }}
              variant="body1"
              component={Link}
              to="/profile"
            >
              Profile
            </Typography>
            <Typography
              sx={{
                "&:hover": { color: "grey" },
                textDecoration: "none",
                color: "black",
              }}
              variant="body1"
              component={Link}
              to="/chart"
            >
              Chart
            </Typography>

            <Button
              sx={{ color: "red" }}
              variant="outlined"
              color="error"
              endIcon={<LogoutRoundedIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
