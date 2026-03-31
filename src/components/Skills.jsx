import "./Skills.css";

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const IconCpu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const IconLayers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const IconBarChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const skillGroups = [
  {
    category: "Languages & Web",
    icon: <IconCode />,
    skills: [
      "Python", "SQL", "JavaScript", "HTML", "CSS",
      "FastAPI", "Flask", "Streamlit", "Bootstrap",
      "ReactJS", "BeautifulSoup", "Selenium",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: <IconCloud />,
    skills: [
      "AWS Lambda", "AWS EC2", "AWS ECR", "AWS AppRunner", "AWS Sagemaker",
      "Cloud Run", "Artifact Registry", "Cloud Functions",
      "Pub/Sub", "Cloud Scheduler",
      "Azure ML Studio", "Docker Compose", "Nginx", "Traefik", "CI/CD",
      "Granian", "Gunicorn", "AWS & GCP Secret Manager"
    ],
  },
  {
    category: "Advanced AI Agentic Platform",
    icon: <IconCpu />,
    skills: [
      "Azure OpenAI", "Google Gemini", "Vertex AI RAG Engine",
      "Anthropic Claude", "Hugging Face", "LangChain",
      "LangGraph", "RAG Chains", "Embedding-ada-002",
      "Multi-agentic AI Pipelines", "Google Search Grounding",
      "Prompt Engineering", "AI Infrastructure", 
    ],
  },
  {
    category: "ML, Computer Vision & NLP",
    icon: <IconLayers />,
    skills: [
      "Scikit-learn", "XGBoost", "Random Forest",
      "ARIMA", "BQML",
      "GCP VisionAI", "YOLO", "OpenCV", "Scikit-image", "GPT-4 Vision",
      "TensorFlow", "Keras", "OCR",
      "Pillow", "Topic Modelling", "NER",
      "Jaro-Winkler", "Cosine Similarity",
      "Fuzzy Matching", "Regex",
    ],
  },
  {
    category: "Database & Storage",
    icon: <IconDatabase />,
    skills: [
      "Amazon RDS", "Amazon S3",
      "Google BigQuery", "Google Cloud Storage",
      "PostgreSQL", "pgvector", "SQL Server",
      "SQLAlchemy", "MySQL",
      "Azure Cosmos DB", "Qdrant", "SFTP",
    ],
  },
  {
    category: "Data Analytics & Visualization",
    icon: <IconBarChart />,
    skills: [
      "GA4", "Google Ads Data Hub",
      "Google Ads Manager", "Google Looker Studio",
      "Google Sheets", "Google Maps API", "Mapbox API",
      "Tableau", "PowerBI",
      "Plotly Dash", "Matplotlib", "Seaborn",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-badge">Tech Stack Arsenals</div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.category}>
            <div className="skill-card-header">
              <span className="skill-icon">{group.icon}</span>
              <h3>{group.category}</h3>
            </div>
            <div className="skill-pills">
              {group.skills.map((s) => (
                <span key={s} className="skill-pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
