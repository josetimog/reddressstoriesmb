// import styles from "./Slideshow.module.css";
// import { useEffect, useRef } from "react";
// import AudioPlayer from "./AudioPlayer";

// const slides = [
//   {
//     src: "/reddressstoriesmb/assets/slideshow/1.jpg",
//     caption:
//       "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/2.jpg",
//     caption:
//       "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/3.jpg",
//     caption:
//       "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/4.jpg",
//     caption:
//       "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/5.jpg",
//     caption:
//       "A red dress is displayed on the Manitoba Legislative Building in recognition of Missing and Murdered Indigenous Women and Girls Awareness Day (October 4).",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/6.jpg",
//     caption:
//       "A red dress is displayed on the Manitoba Legislative Building in recognition of Missing and Murdered Indigenous Women and Girls Awareness Day (October 4).",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/7.jpg",
//     caption:
//       "Kakigay-Pimitchy-Yoong Pimatizwin monument at Sagkeeng First Nation. Artist: Wayne Stranger.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/8.jpg",
//     caption: "Manidoonsag Imaa Mikinaako-Minisiing in Selkirk.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/9.jpg",
//     caption: "Close-up of Manidoonsag Imaa Mikinaako-Minisiing in Selkrik.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/10.jpg",
//     caption:
//       "Rainbow Butterfly is a pavilion dedicated to missing and murdered Indigenous women, girls, and Two-Spirit People, as well as their families and survivors of violence. It was gifted with the name ‘Rainbow Butterfly’ by Grandmother Candi-Anne Smith through ceremony. The three intertwined pieces represent the child, parent, and grandparent. ©Stationpoint Photographic.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/11.jpg",
//     caption:
//       "Rainbow Butterfly is a pavilion dedicated to missing and murdered Indigenous women, girls, and Two-Spirit People, as well as their families and survivors of violence. It was gifted with the name ‘Rainbow Butterfly’ by Grandmother Candi-Anne Smith through ceremony. The three intertwined pieces represent the child, parent, and grandparent. ©Stationpoint Photographic.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/12.jpg",
//     caption:
//       "Specialty license plates in support of MMIWG2S+ became available in Manitoba in 2023. Proceeds from every sale go toward Ka Ni Kanichihk to support the critical helping and healing work they do with affected families.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/13.jpg",
//     caption:
//       "View of the Helen Betty Osborne Memorial at Clearwater Lake at the 50th anniversary of her death.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/14.jpg",
//     caption:
//       "View of the Helen Betty Osborne Memorial at Clearwater Lake at the 50th anniversary of her death.",
//   },
//   {
//     src: "/reddressstoriesmb/assets/slideshow/15.jpg",
//     caption:
//       "View of the Candlelight Ceremony held at the 50th Anniversary Commemoration for Helen Betty Osborne on November 13, 2021.",
//   },
// ];

// const SlideShow = ({ isVisible, onClose }) => {
//   const carouselRef = useRef();

//   useEffect(() => {
//     if (isVisible && window.bootstrap && carouselRef.current) {
//       new window.bootstrap.Carousel(carouselRef.current, {
//         interval: false,
//         // ride: "carousel",
//       });
//     }
//   }, [isVisible]);

//   if (!isVisible) return null;

//   return (
//     <div className={styles["slideshow-overlay"]}>
//       <div
//         id="slideshow"
//         className="carousel slide carousel-fade"
//         ref={carouselRef}
//       >
//         <div className="carousel-inner">
//           {slides.map((slide, i) => (
//             <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
//               <img
//                 src={slide.src}
//                 className="d-block w-100"
//                 alt={`Slide ${i + 1}`}
//               />
//               <div className={`${styles["carousel-caption"]} d-block`}>
//                 <p className={styles.caption}>{slide.caption}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#slideshow"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#slideshow"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <div className={styles["audio-player-container"]}>
//         <AudioPlayer />
//       </div>

//       <button className={styles["close-btn"]} onClick={onClose}>
//         ×
//       </button>
//     </div>
//   );
// };

// export default SlideShow;

import { useState } from "react";
import { Box, IconButton, Typography, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AudioPlayer from "./AudioPlayer";
import styles from "./Slideshow.module.css"; // You can use this for extra styles

const slides = [
  {
    src: "/reddressstoriesmb/assets/slideshow/1.jpg",
    caption:
      "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/2.jpg",
    caption:
      "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/3.jpg",
    caption:
      "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/4.jpg",
    caption:
      "On Red Dress Day (May 5, 2023), hundreds gathered at Portage and Main in Winnipeg to participate in a Round Dance and march to the Forks.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/5.jpg",
    caption:
      "A red dress is displayed on the Manitoba Legislative Building in recognition of Missing and Murdered Indigenous Women and Girls Awareness Day (October 4).",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/6.jpg",
    caption:
      "A red dress is displayed on the Manitoba Legislative Building in recognition of Missing and Murdered Indigenous Women and Girls Awareness Day (October 4).",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/7.jpg",
    caption:
      "Kakigay-Pimitchy-Yoong Pimatizwin monument at Sagkeeng First Nation. Artist: Wayne Stranger.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/8.jpg",
    caption: "Manidoonsag Imaa Mikinaako-Minisiing in Selkirk.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/9.jpg",
    caption: "Close-up of Manidoonsag Imaa Mikinaako-Minisiing in Selkrik.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/10.jpg",
    caption:
      "Rainbow Butterfly is a pavilion dedicated to missing and murdered Indigenous women, girls, and Two-Spirit People, as well as their families and survivors of violence. It was gifted with the name ‘Rainbow Butterfly’ by Grandmother Candi-Anne Smith through ceremony. The three intertwined pieces represent the child, parent, and grandparent. ©Stationpoint Photographic.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/11.jpg",
    caption:
      "Rainbow Butterfly is a pavilion dedicated to missing and murdered Indigenous women, girls, and Two-Spirit People, as well as their families and survivors of violence. It was gifted with the name ‘Rainbow Butterfly’ by Grandmother Candi-Anne Smith through ceremony. The three intertwined pieces represent the child, parent, and grandparent. ©Stationpoint Photographic.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/12.jpg",
    caption:
      "Specialty license plates in support of MMIWG2S+ became available in Manitoba in 2023. Proceeds from every sale go toward Ka Ni Kanichihk to support the critical helping and healing work they do with affected families.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/13.jpg",
    caption:
      "View of the Helen Betty Osborne Memorial at Clearwater Lake at the 50th anniversary of her death.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/14.jpg",
    caption:
      "View of the Helen Betty Osborne Memorial at Clearwater Lake at the 50th anniversary of her death.",
  },
  {
    src: "/reddressstoriesmb/assets/slideshow/15.jpg",
    caption:
      "View of the Candlelight Ceremony held at the 50th Anniversary Commemoration for Helen Betty Osborne on November 13, 2021.",
  },
];

const SlideShow = ({ isVisible, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFadeIn(true);
    }, 100);
  };

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFadeIn(true);
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <Box
      className={styles["slideshow-overlay"]}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        zIndex: 1300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "relative", width: "90%", maxWidth: 1000 }}>
        <Fade in={fadeIn} timeout={500}>
          <Box>
            <img
              src={slides[current].src}
              alt={`Slide ${current + 1}`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "#fff",
                fontSize: "1rem",
                textAlign: "center",
                fontFamily: "Lato, sans-serif",
              }}
            >
              {slides[current].caption}
            </Typography>
          </Box>
        </Fade>

        {/* Left Arrow */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: -10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "2rem",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.4)",
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: -10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "2rem",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.4)",
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#fff",
            backgroundColor: "rgba(255,255,255,0.2)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.4)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>

      {/* Audio player below the image */}
      <Box sx={{ mt: 3 }}>
        <AudioPlayer />
      </Box>
    </Box>
  );
};

export default SlideShow;
