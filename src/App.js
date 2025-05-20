import { Box } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "@core/global/Routes/index";

import AppToastContainer from "@components/AppToastContainer";
import ThemeProvider from "@themes/index";
import { queryClient } from "@services/index";
import { AppProvider } from "@global/index";

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <Box component="main">
            <AppRouter />
          </Box>
        </QueryClientProvider>
        <AppToastContainer />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
