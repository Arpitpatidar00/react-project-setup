import { createTheme as createMuiTheme } from "@mui/material";
import {
  cardRadius,
  createPalette,
  createShadows,
  createTypography,
} from "./index";

export function createTheme({ theme }) {
  const palette = createPalette(theme);
  const shadows = createShadows();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
    spacing: 4,
    cardRadius,

    palette,
    shadows,
    typography,
  });
}
