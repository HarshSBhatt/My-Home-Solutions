// Author: Harsh Bhatt (B00877053)

import { Typography, Box, Button } from "@mui/material";
import { ROUTES } from "common/constants";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "calc(100vh - 64px)" }}
    >
      <Typography
        sx={{ fontSize: 24 }}
        variant="overline"
        display="block"
        gutterBottom
        align="center"
      >
        This page doesn't seem to exist or you do not have privilege to access
        this page
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Go to Home
      </Button>
    </Box>
  );
}

export default Error;
