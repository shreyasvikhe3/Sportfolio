import { useEffect, useRef } from 'react';
import { resumeData } from '../data/resume';
import './Certifications.css';

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="section cert-section" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Certifications & <span className="gradient-text">Credentials</span>
        </h2>
        <p className="section-subtitle reveal">
          Recognized technical competencies and verified coursework
        </p>

        <div className="cert-grid">
          {resumeData.certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="cert-icon-container"
                style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
              >
                <span>{cert.icon}</span>
              </div>

              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">
                  <span>🏢</span> {cert.issuer}
                </p>
                <div className="cert-verified">
                  <span className="verified-check" style={{ color: cert.color }}>✓</span> Verified Skill
                </div>
              </div>

              <div
                className="cert-glow"
                style={{ background: `radial-gradient(circle, ${cert.color}25, transparent 70%)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
