import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import CaseStatsSection from "./CaseStatsSection";
import Partners from "./Partners";

function AboutSection() {
  return (
    <Box sx={{ backgroundColor: "#fcf8f5", py: 6 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          fontWeight="bold"
          align="center"
          sx={{
            fontFamily: "'EB Garamond, serif'",
          }}
        >
          About The Red Dress Stories MB Project
        </Typography>
        <Typography
          variant="h6"
          align="center"
          fontStyle="italic"
          gutterBottom
          sx={{ mb: 4, fontFamily: "EB Garamond, serif" }}
        >
          "We carry their names in our hearts and their stories in our steps.
          This is a promise: they will not be forgotten."
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'EB Garamond, serif'",
          }}
        >
          The MMIWG2S+ Crisis
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          Indigenous women, girls and 2SLGBTQQIA+ relatives are
          disproportionately targeted for violence, with rates of homicide over
          three times higher than among non-Indigenous peoples.
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          According to Statistics Canada data from 2021, approximately half of
          all homicide victims in Manitoba were Indigenous (David and Jaffray,
          2022). Nearly half of Indigenous victims were women or girls. This was
          the third highest rate in Canada, and significantly higher than the
          national average. Winnipeg had the highest rate of Indigenous homicide
          victims across all urban centres in Canada.
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          Women and girls are disproportionately represented compared with men
          among youth and children, as well as victims in older age groups.
          Despite making up only 5% of the female population in 2021, Indigenous
          women and girls accounted for 21% of all gender-related homicides that
          year. Manitoba had the second highest rate (Sutton, 2023).
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
          }}
        >
          This crisis is deeply felt in Manitoba.
        </Typography>
        <CaseStatsSection />

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'EB Garamond, serif'",
          }}
        >
          Our Purpose
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          This project is intended to be an evergreen memorial that continues to
          grow. It is also intended to be used as a teaching tool for educators,
          policy makers, and leadership organizations.
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          This project aims to:
        </Typography>
        <ul style={{ fontFamily: "Lato, sans-serif" }}>
          <li>
            <strong>Honor</strong> the lives and memories of MMIWG2S+
            individuals.
          </li>
          <li>
            <strong>Support</strong> families and communities in sharing
            stories.
          </li>
          <li>
            <strong>Educate</strong> the public about the crisis and its root
            causes.
          </li>
        </ul>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'EB Garamond, serif'",
          }}
        >
          How to Use This Website
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          {/* Use our interactive map to explore stories, filter by region or case
          details, view educational layers, and submit tips or updates. */}
          The journey readers take throught this site is difficult. Readers are
          invited to view a slideshow of empowering images at anytime in their
          journey by clicking the <strong>I Need a Minute</strong> button at the
          bottom-right of the screen.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          To anyone who needs a minute, please know that you are loved, and that
          your presence is a gift to the world.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'EB Garamond, serif'",
          }}
        >
          Community-Led and Respectful
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          This project was led by Giganawenimaanaanig, formerly known as the
          MMIWG2S+ Implementation Committee. Giganawenimaanaanig was originally
          birthed by families and Survivors and is continually nourished by the
          Ma Mawi Wi Chi Itata Centre, Inc. The Advisory Committee is a
          strength-based coalition, and each partner is an independent
          organization with their own governance structures.
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          All views expressed on this page are representative of community
          voices. Content was developed from the stories of Manitoba women,
          girls, and 2SLGBTQQIA+ relatives shared in the media, in various
          reports, and from their families.
        </Typography>
        <Typography
          paragraph
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          Technical and financial resources were provided by the Government of
          Manitoba. This site is built through ongoing consultation with
          Indigenous leaders, Elders, and families. Stories are shared with
          consent or sourced from verified public records. We strive to
          represent with care and not sensationalize.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'EB Garamond, serif'",
          }}
        >
          What You Can Do
        </Typography>
        <ul style={{ fontFamily: "Lato, sans-serif" }}>
          <li>Share a story from this map.</li>
          <li>Donate to Indigenous-led support organizations.</li>
          <li>Contact elected officials about MMIWG Calls for Justice.</li>
          <li>Attend red dress or awareness events.</li>
          <li>Continue learning from Indigenous voices.</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ bgcolor: "#fcf8f5" }}>
          <Partners />
        </Box>
        <Divider sx={{ my: 4 }} />
        <Typography
          variant="h5"
          align="center"
          fontStyle="italic"
          sx={{ fontFamily: "EB Garamond, serif" }}
        >
          “May There Be Comfort Knowing Our Loved Ones Will Never Be Forgotten.”
        </Typography>

        <Box
          component="img"
          src="/reddressstoriesmb/assets/slideshow/1.jpg"
          alt="Red Dress Memorial"
          sx={{
            display: "block",
            mx: "auto",
            mt: 4,
            maxWidth: "100%",
            height: "auto",
          }}
        />

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          This website is developed and maintained by Giganawenimaanaanig. For
          feedback or corrections, contact us by filling out{" "}
          <a href="https://forms.gle/42ExcnPKqRCvRS9J6" target="__blank">
            this form
          </a>
          .
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutSection;
