import React, { useState } from "react";
import { Box } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "@core/global/Routes/index";
import "./App.css";
import { AppToastContainer } from "@components/AppToastContainer";
import { ThemeProvider } from "@themes/index";
import { queryClient } from "@services/index";
import { AppProvider } from "@global/index";
import { AppNProgressBar } from "@components/AppNProgressBar";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <AppNProgressBar loading={loading} />
          <Box component="main">
            <AppRouter />
          </Box>
          <AppToastContainer />
        </QueryClientProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
