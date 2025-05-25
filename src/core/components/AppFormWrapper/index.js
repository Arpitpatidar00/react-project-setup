import * as React from "react";
import { Box, Paper } from "@mui/material";
import { AppStack, AppTypography } from "../index";
import { APP_COLORS } from "@/core/themes/colors";
import { cardRadius } from "@themes/index";

export const AppFormWrapper = ({
  title,
  subtitle,
  children,
  maxWidth = 1200, // Increased to accommodate split layout
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          'url("https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1")', // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth,
          width: "100%",
          zIndex: 2,
          p: 4,
        }}
      >
        {/* Left Side: Content */}
        <Box
          sx={{
            flex: 1,
            color: "white",
            pr: { md: 4 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <AppTypography
            variant="body1"
            sx={{
              color: APP_COLORS.grey[400],
              textTransform: "uppercase",
              mb: 2,
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </AppTypography>
          <AppTypography
            variant="h3"
            sx={{
              color: APP_COLORS.imdb[500],
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {title}
          </AppTypography>
          {subtitle && (
            <AppTypography
              variant="body1"
              sx={{
                color: APP_COLORS.grey[400],
                maxWidth: "400px",
              }}
            >
              {subtitle}
            </AppTypography>
          )}
        </Box>

        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)", // Glass effect
            borderRadius: cardRadius / 2,
            maxWidth: { xs: "100%", md: "400px" },
            color: "white",
          }}
        >
          <AppStack spacing={2}>
            <AppTypography
              variant="h5"
              sx={{ mb: 2, color: APP_COLORS.warning[500] }}
            >
              Enter Your Credentials
            </AppTypography>
            {children}
          </AppStack>
        </Paper>
      </Box>
    </Box>
  );
};
