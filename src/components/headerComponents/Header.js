import React from "react";
import { Box } from "@mui/material";
export const Header = () => {
  return (
    <Box bgcolor="secondary.main" width={1} mb={2}>
      <Box fontSize={40} px={2} py={2} color="primary.main" fontWeight="bold">
        Binary Calculator
      </Box>
    </Box>
  );
};
