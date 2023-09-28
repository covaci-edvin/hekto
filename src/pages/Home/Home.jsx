import Hero from "./Hero";

import ImgBg from "/src/assets/svgs/hero-offer-bg.svg";
import ImgBgDesign from "/src/assets/imgs/hero-design-lamp.png";
import offerBgImg from "/src/assets/svgs/hero-offer-discount-bg.svg";

import useImagePreloader from "../../hooks/useImagePreloader";

const images = [ImgBg, ImgBgDesign, offerBgImg];

function Home() {
  const { imagesPreloaded } = useImagePreloader(images);

  return <Hero imgsPreloaded={imagesPreloaded} />;
}

export default Home;
