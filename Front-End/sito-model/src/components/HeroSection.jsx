import Hero_video_banner from "../assets/Hero_Video_Banner_480p.mp4";
import Hero_Banner_frame from "../assets/hero_video_banner_frame.jpg";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal(".animation-scrolling-hero-section", {
      duration: 2000,
      distance: "50px",
      origin: "right",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
    });
  }, []);

  return (
    <>
      <div id="hero">
        <div id="div_logo_sito"></div>
        <div id="hero_content" className="animation-scrolling-hero-section">
          <h4>Intro Text</h4>
          <h1>Titolo della pagina</h1>
          <button type="button" className="button">
            Scopri di più
          </button>
        </div>
        <video
          src={Hero_video_banner}
          autoPlay
          loop
          muted
          id="hero_video_banner"
          playsInline
          preload="none"
          poster={Hero_Banner_frame}
        ></video>
      </div>
    </>
  );
};

export default HeroSection;
