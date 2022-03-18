// Author: Harsh Bhatt (B00877053)

import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function PageHeading({ Icon, heading }) {
  return (
    <>
      <Box>
        <Box
          py={4}
          px={2}
          sx={{
            width: "100%",
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Icon fontSize="large" sx={{ marginRight: 1 }} /> {heading}
          </Typography>
        </Box>
        <Divider />
      </Box>
    </>
  );
}

export default PageHeading;
