import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import ContentWarningModal from "../components/ContentWarningModal";
import SlideShow from "../components/SlideShow";
import PauseButton from "../components/PauseButton";
import { useState } from "react";

function Home() {
  const [showSlideShow, setShowSlideShow] = useState(false);
  return (
    <>
      <SlideShow
        isVisible={showSlideShow}
        onClose={() => setShowSlideShow(false)}
      />
      <PauseButton onOpenSlideShow={() => setShowSlideShow(true)} />
      <ContentWarningModal />
      <Header />
      <Hero />
      <Gallery />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
