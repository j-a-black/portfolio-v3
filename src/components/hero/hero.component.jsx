import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-container">
        <h1 className="heading">
          <span className="heading-main">Jason Black</span>
          <span className="heading-sub">Front-End Web Developer</span>
        </h1>
        <p>I make responsive websites using HTML, CSS, JavaScript, and React</p>
      </div>
    </section>
  );
};

export default Hero;
