interface HeroSectionProps {
  fullName: string;
  title: string;
  titleHighlight: string;
  tagline: string;
  onContactClick: () => void;
}

export const HeroSection = ({
  fullName,
  title,
  titleHighlight,
  tagline,
  onContactClick,
}: HeroSectionProps) => (
  <section id="home" className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <p className="hero-greeting">{fullName} is a</p>
        <h1 className="hero-title">
          <span className="highlight">{title}</span> and{' '}
          <span className="highlight">{titleHighlight}</span>
        </h1>
        <p className="hero-tagline">{tagline}</p>
        <button onClick={onContactClick} className="cta-button">
          Contact me!!
        </button>
      </div>
      <div className="hero-image">
        <div className="image-frame">
          <div className="placeholder-avatar">
            <span className="avatar-icon">👨‍💻</span>
          </div>
          <div className="frame-corner frame-tl" />
          <div className="frame-corner frame-br" />
        </div>
        <div className="status-badge">
          <span className="status-dot" />
          Currently working on <strong>Platform Engineering</strong>
        </div>
      </div>
    </div>
  </section>
);
