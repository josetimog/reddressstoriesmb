import Header from "../components/Header";
import Footer from "../components/Footer";
import SlideShow from "../components/SlideShow";
import PauseButton from "../components/PauseButton";
import AboutSection from "../components/AboutSection";
import { useState } from "react";

function About() {
  const [showSlideShow, setShowSlideShow] = useState(false);

  return (
    <>
      <SlideShow
        isVisible={showSlideShow}
        onClose={() => setShowSlideShow(false)}
      />
      <PauseButton onOpenSlideShow={() => setShowSlideShow(true)} />
      <Header />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
