import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './About.css';

export default function About() {
  return (
    <div className="home-page about-page">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">Alex</Link>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link active">About</Link></li>
            <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <div className="hero-tag">
                <span className="hero-tag-icon">✦</span>
                <span>Cinematographer & Artist</span>
              </div>
              
              <h1 className="about-hero-title">
                Crafting Visual
                <span className="gradient-text" data-text="Stories">Stories</span>
              </h1>
              
              <p className="about-hero-lead">
                A Los Angeles–based cinematographer and music artist who focuses on narrative-driven visuals and immersive soundscapes. Every frame tells a story, every sound evokes emotion.
              </p>

              <div className="about-stats-inline">
                <div className="stat-inline-item">
                  <span className="stat-inline-number">5+</span>
                  <span className="stat-inline-label">Years Experience</span>
                </div>
                <div className="stat-inline-item">
                  <span className="stat-inline-number">100+</span>
                  <span className="stat-inline-label">Projects Completed</span>
                </div>
                <div className="stat-inline-item">
                  <span className="stat-inline-number">50+</span>
                  <span className="stat-inline-label">Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="about-hero-visual">
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <div className="profile-image">
                    <svg viewBox="0 0 200 200" fill="none">
                      <defs>
                        <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="90" fill="url(#profileGrad)" opacity="0.2"/>
                      <circle cx="100" cy="70" r="35" fill="url(#profileGrad)"/>
                      <path d="M 40 150 Q 100 120 160 150 L 160 200 L 40 200 Z" fill="url(#profileGrad)"/>
                    </svg>
                  </div>
                  <div className="profile-glow"></div>
                </div>
                <div className="profile-info">
                  <h3>Alex Jasant</h3>
                  <p>Cinematographer & Music Artist</p>
                  <div className="profile-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Borsapada, Mumbai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy section">
        <div className="container">
          <div className="philosophy-content">
            <div className="section-tag">Philosophy</div>
            <h2 className="section-title">Creating Timeless Visual Experiences</h2>
            <p className="philosophy-text">
              Every project begins with a story waiting to be told. Through the lens, I capture moments that resonate with authenticity and emotion. My approach combines technical precision with artistic intuition, ensuring each frame serves the narrative while maintaining cinematic excellence.
            </p>
            <p className="philosophy-text">
              Music production complements the visual journey, crafting soundscapes that elevate the storytelling experience. Whether it's a commercial piece or a passion project, the goal remains the same: create work that moves people and stands the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="expertise section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Expertise</div>
            <h2 className="section-title">What I Bring to the Table</h2>
            <p className="section-description">
              A comprehensive skill set developed through years of hands-on experience in the industry
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="expertise-title">Cinematography</h3>
              <p className="expertise-description">
                Narrative-driven visual storytelling with cinema cameras, professional lighting setups, and expert composition techniques.
              </p>
              <div className="expertise-skills">
                <span className="skill-tag">Camera Operation</span>
                <span className="skill-tag">Lighting Design</span>
                <span className="skill-tag">Shot Composition</span>
              </div>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3 className="expertise-title">Post-Production</h3>
              <p className="expertise-description">
                Professional color grading, editing, and finishing that brings the vision to life with polish and precision.
              </p>
              <div className="expertise-skills">
                <span className="skill-tag">Color Grading</span>
                <span className="skill-tag">Video Editing</span>
                <span className="skill-tag">Visual Effects</span>
              </div>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h3 className="expertise-title">Music Production</h3>
              <p className="expertise-description">
                Immersive soundscapes and original compositions that enhance the emotional impact of visual content.
              </p>
              <div className="expertise-skills">
                <span className="skill-tag">Sound Design</span>
                <span className="skill-tag">Mixing</span>
                <span className="skill-tag">Original Score</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gear section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Equipment</div>
            <h2 className="section-title">Professional Toolkit</h2>
            <p className="section-description">
              Industry-standard equipment to deliver exceptional results on every project
            </p>
          </div>

          <div className="gear-grid">
            <div className="gear-category">
              <div className="gear-category-header">
                <div className="gear-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                </div>
                <h3>Camera Systems</h3>
              </div>
              <ul className="gear-list">
                <li>Cinema cameras (RED, ARRI)</li>
                <li>Full-frame mirrorless systems</li>
                <li>Gimbal & stabilization rigs</li>
                <li>Drone cinematography setup</li>
              </ul>
            </div>

            <div className="gear-category">
              <div className="gear-category-header">
                <div className="gear-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3>Lighting & Grip</h3>
              </div>
              <ul className="gear-list">
                <li>LED panel arrays</li>
                <li>HMI & tungsten fixtures</li>
                <li>Modifiers & diffusion</li>
                <li>C-stands & rigging gear</li>
              </ul>
            </div>

            <div className="gear-category">
              <div className="gear-category-header">
                <div className="gear-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <h3>Audio Production</h3>
              </div>
              <ul className="gear-list">
                <li>Studio microphones</li>
                <li>Field recording equipment</li>
                <li>Audio interfaces & monitors</li>
                <li>DAW & plugin library</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Process</div>
            <h2 className="section-title">How We Work Together</h2>
            <p className="section-description">
              A streamlined approach from concept to final delivery
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3 className="step-title">Discovery & Planning</h3>
                <p className="step-description">
                  Understanding your vision, goals, and requirements. We discuss creative direction, timeline, and logistics.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3 className="step-title">Pre-Production</h3>
                <p className="step-description">
                  Detailed planning including storyboards, shot lists, location scouting, and crew coordination.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3 className="step-title">Production</h3>
                <p className="step-description">
                  Bringing the vision to life on set with professional execution, capturing every moment with precision.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3 className="step-title">Post-Production</h3>
                <p className="step-description">
                  Editing, color grading, sound design, and final touches to deliver a polished, professional result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Something Amazing?</h2>
            <p>Let's discuss your next project and bring your vision to life</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn primary large">Start a Project</Link>
              <Link to="/portfolio" className="btn secondary large">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}