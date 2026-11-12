import { useEffect, useRef } from 'react';
import { resumeData } from '../data/resume';
import './Experience.css';

export default function Experience() {
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
    <section id="experience" className="section exp-section" ref={ref}>
      <div className="exp-bg-shape" />
      <div className="container">
        <h2 className="section-title reveal">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle reveal">
          Real-world internship experience in software development
        </p>

        <div className="timeline">
          {resumeData.experience.map((exp, i) => (
            <div
              className={`timeline-item reveal ${i % 2 === 0 ? 'left' : 'right'}`}
              key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Connector dot */}
              <div className="timeline-dot" style={{ background: exp.color }}>
                <span>{exp.icon}</span>
              </div>

              <div className="exp-card card">
                <div className="exp-header">
                  <div className="exp-icon-wrap" style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}>
                    <span style={{ fontSize: '1.5rem' }}>{exp.icon}</span>
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company" style={{ color: exp.color }}>{exp.company}</div>
                    <div className="exp-duration">
                      <span>🗓</span> {exp.duration}
                    </div>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>
                      <span className="point-dot" style={{ background: exp.color }} />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {['Java', 'OOP', 'SQL', 'Debugging', 'Testing'].map((tag) => (
                    <span className="chip" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline line */}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
