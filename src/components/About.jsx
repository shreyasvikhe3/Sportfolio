import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const traits = [
    { icon: '🎯', label: 'Goal-Oriented', desc: 'Focused on delivering value' },
    { icon: '🔥', label: 'Passionate', desc: 'Love for coding & tech' },
    { icon: '🤝', label: 'Team Player', desc: 'Collaborative & communicative' },
    { icon: '📚', label: 'Eager Learner', desc: 'Always upskilling' },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle reveal">
          A passionate developer building a future with code
        </p>

        <div className="about-grid">
          {/* Left: Avatar + traits */}
          <div className="about-left reveal">
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <div className="avatar-initials">SV</div>
                <div className="avatar-glow" />
              </div>
              <div className="avatar-badge">
                <span>🎓</span> B.Tech CSE
              </div>
            </div>

            <div className="traits-grid">
              {traits.map((t) => (
                <div className="trait-card" key={t.label}>
                  <span className="trait-icon">{t.icon}</span>
                  <span className="trait-label">{t.label}</span>
                  <span className="trait-desc">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text content */}
          <div className="about-right">
            <div className="about-text reveal">
              <div className="about-tag">👋 Hello World!</div>
              <h3 className="about-heading">
                I'm <span className="gradient-text">Shweta Vikhe</span>, a Computer Science graduate passionate about building impactful software.
              </h3>
              <p>
                Currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at Hi-Tech Institute of Technology, Chh. Sambhajinagar (CGPA: 7.81), I bring hands-on internship experience in <strong>Java development</strong> and a strong foundation in <strong>Python, SQL, and Data Analysis</strong>.
              </p>
              <p>
                I completed two internships as a <strong>Java Developer</strong> — at CodSoft and Heal Bharat — where I gained real-world experience in building, debugging, and maintaining enterprise-level applications. I'm now eager to channel my passion into a <strong>Python Developer role</strong> where I can build scalable, data-driven solutions.
              </p>
              <p>
                Beyond coding, I'm enthusiastic about data visualization using <strong>Power BI & Tableau</strong>, and I enjoy exploring how technology can solve real-world problems like queue management and student administration.
              </p>
            </div>

            <div className="about-info-grid reveal">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Maharashtra, India</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">Degree</span>
                  <span className="info-value">B.Tech – CSE (2026)</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <div>
                  <span className="info-label">Experience</span>
                  <span className="info-value">2 Internships</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🌐</span>
                <div>
                  <span className="info-label">Languages</span>
                  <span className="info-value">English, Hindi, Marathi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
