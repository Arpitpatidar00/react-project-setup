import * as React from "react";
import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { APP_COLORS, cardRadius } from "@/core/themes";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: cardRadius, // e.g., 8px
  textTransform: "none",
  padding: theme.spacing(1.25, 3),
  fontWeight: 600,
  fontSize: "0.95rem",
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  "&:hover": {
    backgroundColor: APP_COLORS.error[400],
  },
  "&:disabled": {
    opacity: 0.6,
    pointerEvents: "none",
  },
}));

export const AppButton = ({
  children,
  loading = false,
  disabled,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled || loading} {...props}>
      {loading ? <CircularProgress size={22} color="inherit" /> : children}
    </StyledButton>
  );
};
