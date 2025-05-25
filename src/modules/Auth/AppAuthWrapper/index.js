import * as React from "react";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AppFormWrapper, AppStack } from "@components/index";

export const AppAuthWrapper = ({
  title,
  subtitle,
  children,
  onSubmit,
  footerLinks = [],
  maxWidth = 1200,
}) => {
  return (
    <AppFormWrapper title={title} subtitle={subtitle} maxWidth={maxWidth}>
      <form onSubmit={onSubmit}>{children}</form>
      {footerLinks.length > 0 && (
        <AppStack alignItems="flex-end" spacing={1} sx={{ mt: 2 }}>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={link.to}
              variant="body2"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {link.text}
            </Link>
          ))}
        </AppStack>
      )}
    </AppFormWrapper>
  );
};
