import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-image-container">
        <div className="hero-text-container">
          <h1>
            Jason Black. <br />
            Front-End Web Developer
          </h1>
          <p>I make websites using HTML, CSS, JavaScript, and React</p>
        </div>
        <div className="parallelogram">
          <img
            className="top-image"
            src="https://source.unsplash.com/zlUGL4hBHcw/300x300"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
