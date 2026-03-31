import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-badge">Education</div>

      <div className="edu-card">
        <div className="edu-title-row">
          <span className="edu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </span>
          <h3 className="edu-name">Sultan Ageng Tirtayasa University</h3>
        </div>
        <div className="edu-degree-row">
          <p className="edu-degree">
            Bachelor of Metallurgical Engineering · GPA 3.28/4.00
          </p>
          <span className="edu-period">Sep 2015 – Jul 2019</span>
        </div>
        <div className="edu-courses-row">
          <span className="edu-courses-label">Data Science Related Study:</span>
          <div className="edu-tags">
            {["Calculus", "Statistics", "Physics", "Numerical Analysis & Modeling", "Computer & Programming", "Metallurgical Process Simulation"].map((s) => (
              <span key={s} className="edu-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
