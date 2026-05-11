
import imgTest from '../assets/Traveller.png'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-label">BEST DESTINATIONS AROUND THE WORLD</span>

        <h1 className="hero-heading">
          Travel, enjoy<br />
          and live a new<br />
          and full life
        </h1>

        <p className="hero-description">
          Built Figma and Webflow to help launch websites faster
          Pretested to production in engaged balancing. Jain guide
          but they wish build for us.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => console.log('clicked')} >Find out more</button>
          <button className="btn-play">
            <span className="play-icon">▶</span>
            Play Demo
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={imgTest} alt="Travel illustration" className="hero-img" />
      </div>

      {/* Decorative elements */}
      <div className="hero-decoration plane-1">✈</div>
      <div className="hero-decoration plane-2">✈</div>
    </section>
  );
}
