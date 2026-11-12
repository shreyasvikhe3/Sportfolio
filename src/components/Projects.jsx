import { useEffect, useRef } from 'react';
import { resumeData } from '../data/resume';
import './Projects.css';

export default function Projects() {
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
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle reveal">
          Hands-on projects solving real-world problems
        </p>

        <div className="projects-grid">
          {resumeData.projects.map((project, i) => (
            <div
              className="project-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Gradient top bar */}
              <div
                className="project-topbar"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
              />

              <div className="project-body">
                <div className="project-header">
                  <div
                    className="project-icon"
                    style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                  >
                    <span>{project.icon}</span>
                  </div>
                  <div className="project-tech-badge" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                    {project.tech}
                  </div>
                </div>

                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-highlights">
                  <h4>Key Features</h4>
                  <ul>
                    {project.highlights.map((h, j) => (
                      <li key={j}>
                        <span className="highlight-dot" style={{ background: project.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-footer">
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{ borderColor: `${project.color}40`, color: project.color }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta reveal" style={{ transitionDelay: '0.3s' }}>
          <p>Want to see more of my work?</p>
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🐙 Explore GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
