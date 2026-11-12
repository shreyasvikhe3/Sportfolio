import { useEffect, useRef, useState } from 'react';
import { resumeData } from '../data/resume';
import './Skills.css';

const skillLevels = {
  Python: 80, Java: 75, C: 70, 'C++': 72,
  MySQL: 78, SQL: 80,
  Pandas: 75, NumPy: 72, Matplotlib: 68, Seaborn: 65,
  Git: 80, GitHub: 80, 'Power BI': 70, 'VS Code': 90, Tableau: 65, PyCharm: 78,
};

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            setVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="skills-bg-shape" />
      <div className="container">
        <h2 className="section-title reveal">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle reveal">
          A broad toolkit for building powerful software solutions
        </p>

        <div className="skills-grid">
          {Object.entries(resumeData.skills).map(([category, { items, icon, color }], ci) => (
            <div
              className="skill-category card reveal"
              key={category}
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <span>{icon}</span>
                </div>
                <h3 className="skill-cat-name">{category}</h3>
              </div>

              <div className="skill-items">
                {items.map((skill) => (
                  <div className="skill-item" key={skill}>
                    <div className="skill-item-top">
                      <span className="skill-name">{skill}</span>
                      <span className="skill-pct" style={{ color }}>
                        {skillLevels[skill] || 70}%
                      </span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: visible ? `${skillLevels[skill] || 70}%` : '0%',
                          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                          transitionDelay: `${ci * 0.1 + 0.3}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating skill chips */}
        <div className="all-skills-cloud reveal" style={{ transitionDelay: '0.4s' }}>
          <h3 className="cloud-title">All Technologies</h3>
          <div className="chips-wrap">
            {Object.values(resumeData.skills)
              .flatMap((s) => s.items)
              .map((skill, i) => (
                <span
                  className="chip skill-chip"
                  key={skill}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
