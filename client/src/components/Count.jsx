import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const Count = () => {
  const userCount = 10;
  return (
    <>
      <Box textAlign="center" marginTop={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Counts of Employee Registered
            </Typography>
            <Typography variant="h4">{userCount}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
