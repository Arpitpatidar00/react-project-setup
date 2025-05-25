import * as React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cardRadius } from "@themes/index";
import { APP_COLORS } from "@themes/colors";

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) =>
    ![
      "borderColor",
      "backgroundColor",
      "textColor",
      "labelColor",
      "hoverBorderColor",
      "focusedBorderColor",
      "borderRadiusMultiplier",
    ].includes(prop),
})(
  ({
    theme,
    borderColor,
    backgroundColor,
    textColor,
    labelColor,
    hoverBorderColor,
    focusedBorderColor,
    borderRadiusMultiplier,
  }) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: cardRadius * (borderRadiusMultiplier || 1),
      backgroundColor: backgroundColor || "transparent",
      color: textColor || APP_COLORS.grey[300],
      "& fieldset": {
        borderColor: borderColor || APP_COLORS.grey[600],
        borderWidth: 2,
      },
      "&:hover fieldset": {
        borderColor: hoverBorderColor || APP_COLORS.primary[500],
      },
      "&.Mui-focused fieldset": {
        borderColor: focusedBorderColor || APP_COLORS.primary[600],
        borderWidth: 2,
      },
    },
    "& .MuiInputLabel-root": {
      color: labelColor || APP_COLORS.grey[300],
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: labelColor || APP_COLORS.primary[200],
    },
    "& .MuiFormHelperText-root": {
      color: labelColor || APP_COLORS.error[300],
    },
  })
);

export const AppTextField = ({
  borderColor,
  backgroundColor,
  textColor,
  labelColor,
  hoverBorderColor,
  focusedBorderColor,
  borderRadiusMultiplier,
  ...props
}) => {
  return (
    <StyledTextField
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
      labelColor={labelColor}
      hoverBorderColor={hoverBorderColor}
      focusedBorderColor={focusedBorderColor}
      borderRadiusMultiplier={borderRadiusMultiplier}
      {...props}
    />
  );
};
