import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        py: isMobile ? 8 : 12,
        px: 3,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/images/red_dress_stories_hero.jpg)`,

        backgroundColor: "#111", // fallback if no image
        color: "#f3ece4",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        gutterBottom
        sx={{
          fontFamily: "'EB Garamond, serif'",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
          mb: 1,
        }}
      >
        Missing & Murdered
      </Typography>
      <Typography
        variant={isMobile ? "h6" : "h5"}
        gutterBottom
        sx={{
          fontFamily: "'EB Garamond, serif'",
          textAlign: "center",
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
          mb: 3,
        }}
      >
        Indigenous Women, Girls & Two-Spirited People
      </Typography>
      <Typography
        variant="subtitle1"
        maxWidth="sm"
        sx={{
          fontFamily: "'EB Garamond, serif'",
          mb: 4,
          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          fontStyle: "italic",
        }}
      >
        Honouring their lives. Remembering their names.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/map"
        sx={{
          backgroundColor: "#a8281f",
          color: "#fff",
          "&:hover": { backgroundColor: "#901d16" },
          fontFamily: "Lato, sans-serif",
        }}
      >
        Explore Stories
      </Button>
    </Box>
  );
}

export default Hero;
