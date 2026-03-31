import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Zikry Adjie <span className="hero-accent">Nugraha.</span>
        </h1>
        <h2 className="hero-tagline">AI Engineer | Data Scientist</h2>
        <p className="hero-description">
          AI Engineer specializing in AI, LLMs, Machine Learning, NLP, and Computer Vision 
          with 4+ years of experience solving complex business problems across mining, e-commerce, 
          and digital marketing industries.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-circle">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
