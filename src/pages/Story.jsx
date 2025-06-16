import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import victimData from "../data/markers.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HighlightedStoryMap from "../components/HighlightedStoryMap";
import Chapters from "../components/Chapters";
import SlideShow from "../components/SlideShow";
import PauseButton from "../components/PauseButton";
import { useState } from "react";

function Story() {
  const [showSlideShow, setShowSlideShow] = useState(false);
  const { id } = useParams();
  const storyId = parseInt(id, 10);
  const highlightIds = [10, 118, 138, 206, 238, 153];

  const feature = victimData.features.find((f) => f.properties.id === storyId);

  if (!feature) {
    return (
      <Typography variant="h6" align="center" mt={4}>
        Story not found.
      </Typography>
    );
  }

  const { name, age, date, image, case_type, home_location, last_location } =
    feature.properties;

  const [year, month, day] = date.split("-");
  const localDate = new Date(year, month - 1, day);

  const isHighlighted = highlightIds.includes(storyId);

  return (
    <>
      <SlideShow
        isVisible={showSlideShow}
        onClose={() => setShowSlideShow(false)}
      />
      <PauseButton onOpenSlideShow={() => setShowSlideShow(true)} />

      {isHighlighted ? (
        <div>
          <Header />
          <HighlightedStoryMap />
          <Chapters id={storyId} />
          <Footer />
        </div>
      ) : (
        <>
          <Header />
          <Container sx={{ py: 6, backgroundColor: "#fdf9f6" }}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src={`/assets/victims/${image}`}
                  alt={name}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                    maxHeight: 500,
                    objectFit: "cover",
                    mx: { xs: "auto", md: 0 },
                    display: "block",
                  }}
                />
              </Grid>

              <Grid item xs={12} md={7}>
                {/* <Typography variant="h5" color="text.secondary" gutterBottom>
                  We remember...
                </Typography> */}
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontFamily: "'EB Garamond', serif" }}
                >
                  {name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {age}, {case_type}
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  From {home_location}
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  Missing/Deceased as of{" "}
                  {localDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {last_location}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 6 }} />

            <Box maxWidth="md" mx="auto">
              <Typography
                variant="h6"
                fontStyle="italic"
                align="center"
                color="text.secondary"
                gutterBottom
                sx={{ my: 5 }}
              >
                "Every life stolen is a story unfinished. We honour them by
                remembering."
              </Typography>

              <Typography align="center" paragraph>
                This page is dedicated to the memory of <strong>{name}</strong>,
                whose life was tragically interrupted.
              </Typography>

              <Typography align="center" paragraph>
                We are currently gathering stories, photos, and memories of{" "}
                <strong>{name}</strong> to include on this memorial page. If you
                knew them and would like to share something, we invite you to
                fill out the form below.
              </Typography>

              <Typography align="center" paragraph>
                Your voice matters. Every memory helps us paint a fuller picture
                of who they were.
              </Typography>

              <Box textAlign="center" mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://forms.gle/42ExcnPKqRCvRS9J6"
                  target="_blank"
                  rel="noopener"
                >
                  Share Their Story
                </Button>
              </Box>
            </Box>
          </Container>
          <Footer />
        </>
      )}

      {/* <Footer /> */}
    </>
  );
}

export default Story;
