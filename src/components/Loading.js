import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

function Loading({ message = "" }) {
  return (
    <div className="loading-wrapper">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ marginBottom: 2 }} />
        <Typography variant="caption" component="div">
          {message}
        </Typography>
      </Box>
    </div>
  );
}

export default Loading;
