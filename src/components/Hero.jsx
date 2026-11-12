import { useEffect, useRef } from 'react';
import { resumeData } from '../data/resume';
import './Hero.css';

const TYPED_STRINGS = [
  'Python Developer',
  'Java Developer',
  'Data Enthusiast',
  'Problem Solver',
  'CS Graduate',
];

export default function Hero() {
  const typedRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const type = () => {
      const current = TYPED_STRINGS[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (typedRef.current) typedRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timerRef.current = setTimeout(type, 1800);
          return;
        }
      } else {
        charRef.current--;
        if (typedRef.current) typedRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % TYPED_STRINGS.length;
          timerRef.current = setTimeout(type, 400);
          return;
        }
      }
      timerRef.current = setTimeout(type, deletingRef.current ? 60 : 100);
    };
    timerRef.current = setTimeout(type, 600);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-badge animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="gradient-text">{resumeData.name}</span>
        </h1>

        <div className="hero-typed animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
          <span ref={typedRef} className="typed-text" />
          <span className="cursor">|</span>
        </div>

        <p className="hero-summary animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          {resumeData.summary}
        </p>

        <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.65s' }}>
          <a href="#contact" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); }}>
            Get In Touch 🚀
          </a>
          <a href="#projects" className="btn-secondary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'}); }}>
            View Projects 💼
          </a>
          <a href="/Shweta_Vikhe_Resume.pdf" download="Shweta_Vikhe_Resume.pdf" className="btn-secondary btn-resume">
            Download Resume 📄
          </a>
        </div>

        <div className="hero-socials animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="social-btn github">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <a href={`mailto:${resumeData.email}`} className="social-btn email">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email Me
          </a>
        </div>

        <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.95s' }}>
          <div className="stat">
            <span className="stat-number gradient-text">2+</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">2</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">4+</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">7.81</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
