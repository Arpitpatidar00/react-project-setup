import * as React from "react";
import { Stack } from "@mui/material";

export const AppStack = ({ spacing = 2, ...props }) => {
  return <Stack spacing={spacing} {...props} />;
};
