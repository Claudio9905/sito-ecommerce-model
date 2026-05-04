import Hero_video_banner from "../assets/Hero_Video_Banner_480p.mp4";
import Hero_Banner_frame from "../assets/hero_video_banner_frame.jpg";

const HeroSection = () => {
  return (
    <>
      <div id="hero">
        <div id="div_logo_sito"></div>
        <div id="hero_content">
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
