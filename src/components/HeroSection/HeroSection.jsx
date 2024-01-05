import Button from "../Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Bob&apos;s Orchestra Hall</h1>
          <p className="hero-description">
            Experience World-Class Performances
          </p>
          <Button title={"Get Your Ticket Now"}/>
        </div>
      </div>
      <div className="scroll-down">
        <span>Scroll Down</span>
        <div className="arrow_wrapper">
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
