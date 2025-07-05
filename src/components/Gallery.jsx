// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const cardData = [
//   {
//     id: 10,
//     image: "/reddressstoriesmb/assets/victims/helen_betty_osborne.jpg",
//     title: "Helen Betty Osborne, 19",
//     location: "From: Norway House",
//     description: "Found murdered near The Pas in 1971.",
//   },
//   {
//     id: 118,
//     image: "/reddressstoriesmb/assets/victims/jessica_michaels.jpg",
//     title: "Jessica Michaels, 17",
//     location: "From: Chesterfield Inlet, Nunavut",
//     description:
//       "Her family suspects foul play was involved in her death in 2001.",
//   },
//   {
//     id: 138,
//     image: "/reddressstoriesmb/assets/victims/divas_boulanger.jpg",
//     title: "Divas Boulanger, 24",
//     location: "From: Berens River First Nation",
//     description: "Found murdered near Portage la Prairie in 2004.",
//   },
//   {
//     id: 206,
//     image: "/reddressstoriesmb/assets/victims/lorna_blacksmith.jpg",
//     title: "Lorna Blacksmith, 18",
//     location: "From: Pimicikamak (Cross Lake First Nation)",
//     description: "Lived in Winnipeg at the time of her murder in 2011.",
//   },
//   {
//     id: 238,
//     image: "/reddressstoriesmb/assets/victims/tina_michelle_fontaine.jpg",
//     title: "Tina Fontaine, 15",
//     location: "From: Sagkeeng First Nation",
//     description: "Found murdered in Winnipeg in 2014.",
//   },
//   {
//     id: 153,
//     image: "/reddressstoriesmb/assets/victims/phoenix_sinclair.jpg",
//     title: "Phoenix Sinclair, 5",
//     location: "From: Ochekiwi Sipi (Fisher Fisher Cree Nation)",
//     description: "Found murdered in Fisher River Cree Nation in 2005.",
//   },
// ];

// function Gallery() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ py: 8, px: 3, backgroundColor: "#fdf9f6" }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         align="center"
//         gutterBottom
//         sx={{ fontFamily: "'EB Garamond', serif" }}
//       >
//         Highlighted Stories
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         paragraph
//         sx={{
//           maxWidth: 600,
//           margin: "0 auto",
//           color: "#555",
//           fontFamily: "Lato, sans-serif",
//         }}
//       >
//         Through sharing the stories of six individuals, we highlight a number of
//         themes and barriers experienced by each of them and by many affected by
//         this national crisis.
//         <br />
//         <br />
//         <em>
//           Giganawenimaanaanig received permission from families of individuals
//           highlighted in these stories.
//         </em>
//       </Typography>

//       <Grid
//         container
//         spacing={4}
//         justifyContent={{ xs: "center", md: "space-between" }}
//         // justifyContent="flex-start"
//         sx={{ mt: 4 }}
//       >
//         {cardData.map((card, index) => (
//           // <Grid
//           //   item
//           //   xs={12}
//           //   md={2}
//           //   key={index}
//           //   display="flex"
//           //   justifyContent="center"
//           // >
//           <Grid
//             item
//             xs={12} // 1 column on extra-small screens
//             sm={6} // 2 columns on small screens
//             md={4} // 3 columns on medium and up
//             key={index}
//             display="flex"
//             justifyContent="center"
//           >
//             <Card
//               onClick={() => navigate(`/story/${card.id}`)}
//               sx={{
//                 border: "1px solid #ccc",
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 width: "100%",
//                 maxWidth: 240,
//                 display: "flex",
//                 flexDirection: "column",
//                 cursor: "pointer",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={card.image}
//                 alt={card.title}
//                 sx={{ objectFit: "cover" }}
//               />
//               <CardContent sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{
//                     fontFamily: "'EB Garamond', serif",
//                     wordWrap: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                 >
//                   {card.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontFamily: "Lato, sans-serif",
//                     color: "#444",
//                     mb: 1,
//                   }}
//                 >
//                   {card.location}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontFamily: "Lato, sans-serif",
//                     fontStyle: "italic",
//                     color: "#444",
//                   }}
//                 >
//                   {card.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Gallery;

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ import

const Gallery = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ initialize

  const cardData = [
    {
      id: 10,
      image: "/reddressstoriesmb/assets/victims/helen_betty_osborne.jpg",
      title: t("gallery.cards.helen.title"),
      location: t("gallery.cards.helen.location"),
      description: t("gallery.cards.helen.description"),
    },
    {
      id: 118,
      image: "/reddressstoriesmb/assets/victims/jessica_michaels.jpg",
      title: t("gallery.cards.jessica.title"),
      location: t("gallery.cards.jessica.location"),
      description: t("gallery.cards.jessica.description"),
    },
    {
      id: 138,
      image: "/reddressstoriesmb/assets/victims/divas_boulanger.jpg",
      title: t("gallery.cards.divas.title"),
      location: t("gallery.cards.divas.location"),
      description: t("gallery.cards.divas.description"),
    },
    {
      id: 206,
      image: "/reddressstoriesmb/assets/victims/lorna_blacksmith.jpg",
      title: t("gallery.cards.lorna.title"),
      location: t("gallery.cards.lorna.location"),
      description: t("gallery.cards.lorna.description"),
    },
    {
      id: 238,
      image: "/reddressstoriesmb/assets/victims/tina_michelle_fontaine.jpg",
      title: t("gallery.cards.tina.title"),
      location: t("gallery.cards.tina.location"),
      description: t("gallery.cards.tina.description"),
    },
    {
      id: 153,
      image: "/reddressstoriesmb/assets/victims/phoenix_sinclair.jpg",
      title: t("gallery.cards.phoenix.title"),
      location: t("gallery.cards.phoenix.location"),
      description: t("gallery.cards.phoenix.description"),
    },
  ];

  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: "#fdf9f6" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ fontFamily: "'EB Garamond', serif" }}
      >
        {t("gallery.heading")}
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
        {t("gallery.intro")}
        <br />
        <br />
        <em>{t("gallery.permissionNote")}</em>
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ mt: 4 }}
      >
        {cardData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Card
              onClick={() => navigate(`/story/${card.id}`)}
              sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                overflow: "hidden",
                width: "100%",
                maxWidth: 240,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={card.image}
                alt={card.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontFamily: "'EB Garamond', serif",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    color: "#444",
                    mb: 1,
                  }}
                >
                  {card.location}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontStyle: "italic",
                    color: "#444",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
