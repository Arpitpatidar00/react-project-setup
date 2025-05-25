import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

export const AppNProgressBar = ({ loading = false }) => {
  if (!loading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <LinearProgress color="primary" />
    </Box>
  );
};
