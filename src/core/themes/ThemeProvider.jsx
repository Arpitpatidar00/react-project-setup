// ThemeProvider.js
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { appDefaultConfig, MUITheme, ThemeMode, ThemeVariants } from "./index";

// Create context
export const ThemeContext = createContext({
  themeMode: ThemeMode.LIGHT,
  setThemeMode: () => { },
});

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(appDefaultConfig.themeMode);

  const theme = useMemo(() => {
    return themeMode === ThemeMode.LIGHT
      ? MUITheme[ThemeVariants.THEME1_LIGHT]
      : MUITheme[ThemeVariants.THEME1_DARK];
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

