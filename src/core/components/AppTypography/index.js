import * as React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const AppTypography = ({ variant = "body1", children, ...rest }) => {
  return (
    <StyledTypography variant={variant} {...rest}>
      {children}
    </StyledTypography>
  );
};
