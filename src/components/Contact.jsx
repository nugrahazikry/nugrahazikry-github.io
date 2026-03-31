import "./Contact.css";

const EMAIL = "zikriaj@gmail.com";
const WHATSAPP = "+6285691232498";
const LINKEDIN_URL = "https://www.linkedin.com/in/nugrahazikry/";
const GITHUB_URL = "https://github.com/nugrahazikry";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Let's%20Connect%20—%20[Your%20Name]&body=Hi%20Zikry%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0A[Write%20your%20message%20here]%0A%0ABest%20regards%2C%0A[Your%20Name]`;

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        GET IN <span>TOUCH</span>
      </h2>
      <p className="contact-intro">
        I'm currently open to new opportunities, whether it's a freelance gig, full-time role, or just a cool project to collaborate on. My inbox is always open!
      </p>

      <div className="contact-cards">
        {/* Email */}
        <div className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
          </div>
          <p className="contact-card-label">EMAIL</p>
          <p className="contact-card-value">{EMAIL}</p>
          <div className="contact-card-actions">
            <a href={GMAIL_URL} target="_blank" rel="noreferrer" className="mail-btn">Send Email →</a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
          </div>
          <p className="contact-card-label">WHATSAPP</p>
          <p className="contact-card-value">{WHATSAPP}</p>
          <div className="contact-card-actions">
            <a href="https://wa.me/6285691232498?text=Hi%20Zikry%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noreferrer" className="mail-btn wa-btn">Send Message →</a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <p className="contact-card-label">LINKEDIN</p>
          <p className="contact-card-value">Zikry Adjie Nugraha</p>
          <div className="contact-card-actions">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="mail-btn li-btn">Go to Profile →</a>
          </div>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <div className="contact-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>
          </div>
          <p className="contact-card-label">GITHUB</p>
          <p className="contact-card-value">nugrahazikry</p>
          <div className="contact-card-actions">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="mail-btn gh-btn">Go to Profile →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
