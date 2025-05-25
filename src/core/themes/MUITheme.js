import { createTheme } from "@mui/material/styles";
import { APP_COLORS, mapColorsToMui, ThemeVariants } from "./index";

export const MUITheme = {
  [ThemeVariants.THEME1_LIGHT]: createTheme({
    palette: {
      mode: "light",
      primary: mapColorsToMui(APP_COLORS.primary),
      secondary: mapColorsToMui(APP_COLORS.secondary),
      background: {
        default: APP_COLORS.secondary[400],
        paper: APP_COLORS.grey[50],
      },
      text: {
        primary: APP_COLORS.primary[500],
        secondary: APP_COLORS.grey[800],
        disabled: APP_COLORS.grey[500],
      },
    },
  }),

  [ThemeVariants.THEME1_DARK]: createTheme({
    palette: {
      mode: "dark",
      primary: mapColorsToMui(APP_COLORS.primary),
      secondary: mapColorsToMui(APP_COLORS.secondary),
      background: {
        default: APP_COLORS.common.black,
        paper: APP_COLORS.primary[600],
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#E5E7EB",
        disabled: "#9CA3AF",
      },
    },
  }),
};
