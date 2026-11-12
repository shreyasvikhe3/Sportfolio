import { resumeData } from '../data/resume';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">SV</span>
              <span className="gradient-text logo-text">{resumeData.name}</span>
            </div>
            <p className="footer-tagline">
              Computer Science Graduate & Software Developer passionate about Python, Java, SQL, and Data Analytics.
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-heading">Navigation</span>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-group">
            <span className="footer-heading">Connect</span>
            <div className="footer-links">
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`mailto:${resumeData.email}`}>Email</a>
              <a href={`tel:${resumeData.phone}`}>Phone</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
