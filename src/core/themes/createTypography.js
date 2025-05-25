export const createTypography = () => {
  return {
    typography: {
      fontFamily: [
        "Inter",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: 14,
      htmlFontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "3.5rem", // ~56px
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "3rem", // ~48px
        fontWeight: 700,
        lineHeight: 1.25,
      },
      h3: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "2.25rem", // ~36px
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.75rem", // ~28px
        fontWeight: 600,
        lineHeight: 1.35,
      },
      h5: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.5rem", // ~24px
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.25rem", // ~20px
        fontWeight: 500,
        lineHeight: 1.5,
      },
      subtitle1: {
        fontSize: "1.125rem", // ~18px
        fontWeight: 400,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: "1rem", // ~16px
        fontWeight: 400,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      button: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.75,
        textTransform: "uppercase",
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.4,
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        lineHeight: 2,
        textTransform: "uppercase",
      },
    },
  };
};
