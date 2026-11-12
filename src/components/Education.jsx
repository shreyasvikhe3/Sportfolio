import { useEffect, useRef } from 'react';
import { resumeData } from '../data/resume';
import './Education.css';

export default function Education() {
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
    <section id="education" className="section education-section" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-subtitle reveal">
          Consistent academic background in Computer Science & Engineering
        </p>

        <div className="edu-grid">
          {resumeData.education.map((item, index) => (
            <div
              key={index}
              className="edu-card card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div
                className="edu-badge-icon"
                style={{ background: `${item.color}20`, border: `1px solid ${item.color}50` }}
              >
                <span>{item.icon}</span>
              </div>

              <div className="edu-content">
                <div className="edu-top">
                  <span className="edu-duration">
                    🗓️ {item.duration}
                  </span>
                  <span className="edu-grade" style={{ borderColor: `${item.color}40`, color: item.color }}>
                    {item.grade}
                  </span>
                </div>

                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>

                <div className="edu-decor-bar" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
