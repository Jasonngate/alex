import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FiFilm, 
  FiMusic, 
//   FiEdit3, 
  FiCamera, 
  FiScissors, 
  FiHeadphones,
  FiStar,
  FiZap,
//   FiTrendingUp
} from "react-icons/fi";
import "./Home.css";

export default function Home() {
  const cursorRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="home-page">
      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-container">
          <Link to="/" className="logo">Alex</Link>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </motion.nav>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="hero-tag" variants={itemVariants}>
                <FiStar className="hero-tag-icon" />
                <span>Visual • Music • Film</span>
              </motion.div>

              <motion.h1 variants={itemVariants}>
                AJ
                <span className="gradient-text">Production's</span>
              </motion.h1>

              <motion.p className="lead" variants={itemVariants}>
                Crafting cinematic visuals, immersive sound, and bold creative stories that move audiences and break boundaries.
              </motion.p>

              <motion.div className="hero-actions" variants={itemVariants}>
                <Link to="/portfolio" className="btn primary">
                  View Work
                </Link>
                <Link to="/contact" className="btn secondary">
                  Let's Talk
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="hero-card hero-card-1">
                <div className="card-icon">
                  <FiFilm />
                </div>
                <h4 className="card-title">Cinematic Vision</h4>
                <p className="card-text">Every frame tells a story</p>
              </div>
              <div className="hero-card hero-card-2">
                <div className="card-icon">
                  <FiMusic />
                </div>
                <h4 className="card-title">Sonic Identity</h4>
                <p className="card-text">Sound that moves emotions</p>
              </div>
              <div className="hero-card hero-card-3">
                <div className="card-icon">
                  <FiZap />
                </div>
                <h4 className="card-title">Creative Flow</h4>
                <p className="card-text">Ideas brought to life</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          style={{ opacity }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      {/* <section className="stats">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="stat-item" variants={itemVariants}>
              <span className="stat-number">5+Years</span>
              <span className="stat-label">Experience</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants}>
              <span className="stat-number">100+Projects</span>
              <span className="stat-label">Delivered</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants}>
              <span className="stat-number">GlobalArtists</span>
              <span className="stat-label">& Clients</span>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* ================= FEATURES SECTION ================= */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">What I Bring</span>
            <h2 className="section-title">Creative Expertise</h2>
            <p className="section-description">
              Blending technical mastery with artistic vision to create unforgettable experiences
            </p>
          </motion.div>

          <motion.div 
            className="feature-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Visual Language</h3>
              <p className="feature-description">
                Inspired by cinema, street culture, and modern music visuals.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Sound & Rhythm</h3>
              <p className="feature-description">
                Music-driven edits with emotion, tempo, and flow.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Creative Direction</h3>
              <p className="feature-description">
                From concept to final cut — I shape the entire vibe.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-title">About the craft</h2>
            <p className="about-text">
              I blend cinematography, music, and editing to create visuals that feel raw, 
              emotional, and unforgettable. Every project is an opportunity to push creative 
              boundaries and tell stories that resonate deeply with audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Services</span>
            <h2 className="section-title">What I do</h2>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <FiCamera />
              </div>
              <h3 className="service-title">Cinematography</h3>
              <p className="service-description">
                Moody visuals, storytelling shots, creative lighting.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <FiScissors />
              </div>
              <h3 className="service-title">Editing & Color</h3>
              <p className="service-description">
                Fast cuts, smooth pacing, cinematic color grading.
              </p>
            </motion.div>

            <motion.div className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <FiHeadphones />
              </div>
              <h3 className="service-title">Music & Sound</h3>
              <p className="service-description">
                Original music, sound design, vibe-driven audio.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WORK SECTION ================= */}
      <section className="work">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Selected work</h2>
          </motion.div>

          <motion.div 
            className="work-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div className="work-item" variants={itemVariants}>
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" 
                alt="Dawn - Short Film"
                className="work-image"
              />
              <div className="work-overlay">
                <span className="work-category">Short Film</span>
                <h3 className="work-title">Dawn</h3>
              </div>
            </motion.div>

            <motion.div className="work-item" variants={itemVariants}>
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80" 
                alt="Echoes - Music Video"
                className="work-image"
              />
              <div className="work-overlay">
                <span className="work-category">Music Video</span>
                <h3 className="work-title">Echoes</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      {/* <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">People say</h2>
          </motion.div>

          <motion.div 
            className="testimonial-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="testimonial-card" variants={itemVariants}>
              <p className="testimonial-text">
                "Pure creative energy. Incredible execution."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <h4>John Doe</h4>
                  <p>Music Artist</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={itemVariants}>
              <p className="testimonial-text">
                "Alex understands vibe better than anyone."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <h4>Sarah Miller</h4>
                  <p>Creative Director</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* ================= CTA SECTION ================= */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Let's create something insane</h2>
            <p>Ready to bring your vision to life? Let's collaborate and make magic happen.</p>
            <Link to="/contact" className="btn primary large">
              Start a project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cursor Glow Effect */}
      <div className="cursor-glow" ref={cursorRef}></div>
    </div>
  );
}