import Hero_video_banner from "../assets/hero_video_banner.mp4";

const HeroSection = () => {
  return (
    <>
      <div id="hero">
        <div id="div_logo_sito">
          <h1>Logo sito</h1>
        </div>
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
        ></video>
      </div>
    </>
  );
};

export default HeroSection;
