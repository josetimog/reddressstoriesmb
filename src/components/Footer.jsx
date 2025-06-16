import {
  Box,
  Typography,
  Link,
  Divider,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{ px: 4, py: 5, backgroundColor: "#a8281f", position: "relative" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: 2,
          color: "#f3ece4",
        }}
      >
        <Typography variant="h6" sx={{ fontFamily: "Lato, sans-serif" }}>
          Giganawenimaanaanig
        </Typography>

        {/* Nav Links */}
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 1 : 4}
          sx={{
            textAlign: isMobile ? "left" : "right",
            fontFamily: "Lato, sans-serif",
          }}
        >
          <Link href="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link href="/about" underline="hover" color="inherit">
            About
          </Link>
          <Link href="/map" underline="hover" color="inherit">
            MMIWG2S+ Stories
          </Link>
          {/* <Link href="/contact" underline="hover" color="inherit">
            Contact
          </Link> */}
        </Stack>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          my: 4,
          width: "100%",
          mx: "auto",
          borderColor: "#f3ece4", // sets the actual visible line color
        }}
      />

      {/* Bottom section: Copyright */}
      <Typography
        variant="body2"
        color="#f3ece4"
        align="center"
        sx={{ fontFamily: "Lato, sans-serif" }}
      >
        &copy; {new Date().getFullYear()} Giganawenimaanaanig. All rights
        reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
