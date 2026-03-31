import "./Certifications.css";

const certs = [
  {
    period: "Jul 2025",
    title: "IELTS Academic Certification",
    type: "Certification",
    label: "Score:",
    details: ["Overall 7.0", "Listening 8.0", "Reading 7.5", "Writing 6.5", "Speaking 6.0"],
  },
  {
    period: "Mar 2022 – May 2022",
    title: "Google Analytics Full Course",
    type: "Certification Course",
    label: "Related Study:",
    details: ["Advanced Google Analytics", "Google Looker Studio", "Google Analytics 4 and 360", "Google BigQuery"],
  },
  {
    period: "Aug 2021 – Dec 2021",
    title: "Dibimbing IT Bootcamp",
    type: "Full Stack Data Science Bootcamp",
    label: "Related Study:",
    details: ["Python", "SQL", "Data Science Theory", "Exploratory Data Analysis", "Data Visualization", "Machine Learning", "Project Preparation"],
  },
];

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="section-badge">Training and Certifications</div>

      <div className="cert-list">
        {certs.map((c, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-title-row">
              <span className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </span>
              <h3 className="cert-title">{c.title}</h3>
            </div>
            <div className="cert-type-row">
              <p className="cert-type">{c.type}</p>
              <span className="cert-period">{c.period}</span>
            </div>
            <div className="cert-details-row">
              <span className="cert-label">{c.label}</span>
              <div className="cert-tags">
                {c.details.map((d) => (
                  <span key={d} className="cert-tag">{d}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
