import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const cardData = [
  {
    image: "/reddressstoriesmb/assets/partners/giganawe.jpg",
    title: "Giganawenimaanaanig",
    link: "https://giganawe.ca",
  },
  {
    image: "/reddressstoriesmb/assets/partners/gov_mb.jpg",
    title: "Government of Manitoba",
    link: "https://www.gov.mb.ca/index.html",
  },
  {
    image: "/reddressstoriesmb/assets/partners/winnipeg.jpg",
    title: "City of Winnipeg",
    link: "https://www.winnipeg.ca/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/sco.jpg",
    title: "Southern Chiefs Organization",
    link: "https://scoinc.mb.ca/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/ka_ni.jpg",
    title: "Ka Ni Kanichihk Inc.",
    link: "https://kanikanichihk.ca/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/mamawi.jpg",
    title: "Ma Mawi Wi Chi Itata Centre Inc.",
    link: "https://www.mamawi.com/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/mko.jpg",
    title: "Manitoba Keewatinowi Okimakanak",
    link: "https://mkonation.com/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/wahbung.jpg",
    title: "Wahbung Abinoonjiiag Inc.",
    link: "http://www.wahbung.org/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/2S_consultants.jpg",
    title: "2Spirit Consultants of Manitoba",
    link: "https://2spiritconsultants.ca/",
  },
  {
    image: "/reddressstoriesmb/assets/partners/rrc.jpg",
    title: "Red River College Polytechnic",
    link: "https://www.rrc.ca/",
  },
];

function Partners() {
  return (
    <Box sx={{ py: 8, px: 3 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ fontFamily: "'EB Garamond', serif" }}
      >
        Partners
      </Typography>
      <Typography
        variant="body1"
        align="center"
        paragraph
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          color: "#555",
          fontFamily: "Lato, sans-serif",
        }}
      >
        Ekosani, Miigwech, Miikwech, Pidamiye, Ghaniih, Marsii, Quryanarq to all
        of the partners who contributed to this project.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {cardData.map((card, index) => (
          <Grid
            item
            key={index}
            sx={{
              width: {
                xs: "100%", // 1 column
                sm: "33.33%", // 3 columns
                md: "20%", // 5 columns
              },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%", maxWidth: 240 }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "none",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      color: "#444",
                    }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Partners;
