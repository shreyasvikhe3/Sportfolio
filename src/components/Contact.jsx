import { useState, useEffect, useRef } from 'react';
import { resumeData } from '../data/resume';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${resumeData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle reveal">
          Open to full-time roles, internships, and engineering opportunities. Let's discuss how I can contribute to your team!
        </p>

        <div className="contact-wrapper">
          {/* Contact Details Cards */}
          <div className="contact-info-col reveal">
            <div className="contact-highlight-card card">
              <h3 className="contact-highlight-title">Let's Connect & Collaborate!</h3>
              <p className="contact-highlight-desc">
                I'm actively seeking opportunities as a <strong>Python Developer</strong> or <strong>Java Developer</strong>. Feel free to reach out directly via email, phone, or LinkedIn.
              </p>

              <div className="contact-channels">
                <a href={`mailto:${resumeData.email}`} className="channel-item">
                  <div className="channel-icon">📧</div>
                  <div>
                    <span className="channel-label">Email Me</span>
                    <span className="channel-val">{resumeData.email}</span>
                  </div>
                </a>

                <a href={`tel:${resumeData.phone}`} className="channel-item">
                  <div className="channel-icon">📞</div>
                  <div>
                    <span className="channel-label">Call / WhatsApp</span>
                    <span className="channel-val">{resumeData.phone}</span>
                  </div>
                </a>

                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="channel-item">
                  <div className="channel-icon">💼</div>
                  <div>
                    <span className="channel-label">LinkedIn Profile</span>
                    <span className="channel-val">linkedin.com/in/shweta-vikhe</span>
                  </div>
                </a>

                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="channel-item">
                  <div className="channel-icon">🐙</div>
                  <div>
                    <span className="channel-label">GitHub Repository</span>
                    <span className="channel-val">github.com/vikheshweta</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-col reveal" style={{ transitionDelay: '0.2s' }}>
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Quick Message</h3>

              {sent && (
                <div className="form-success">
                  🎉 Thanks for reaching out! Opening your default email client...
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe / HR Manager"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Interview Invitation / Job Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Hi Shweta, we reviewed your profile and would love to connect..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
