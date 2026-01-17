import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import videos from '../videos';
import './Home.css';
import './Portfolio.css';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(videos.map((v) => v.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = filter === 'All' ? videos : videos.filter((v) => v.category === filter);

  return (
    <div className="home-page portfolio-page">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">Alex</Link>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/portfolio" className="nav-link active">Portfolio</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section className="portfolio-hero section">
        <div className="container">
          <div className="portfolio-hero-content">
            <div className="hero-tag">
              <span className="hero-tag-icon">✦</span>
              <span>Featured Work</span>
            </div>
            
            <h1 className="portfolio-hero-title">
              Visual
              <span className="gradient-text" data-text="Portfolio">Portfolio</span>
            </h1>
            
            <p className="portfolio-hero-lead">
              A curated collection of cinematic projects, music videos, and commercial work that showcase narrative-driven storytelling and technical excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-filters section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="filter-label">Filter by:</div>
            <div className="filters-grid">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter-btn ${filter === c ? 'active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  <span className="filter-btn-text">{c}</span>
                  {filter === c && <span className="filter-btn-indicator"></span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-gallery section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3>No videos found</h3>
              <p>Try selecting a different category</p>
            </div>
          ) : (
            <div className="portfolio-grid">
              {filtered.map((v, index) => (
                <article key={v.id} className="portfolio-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="portfolio-item-wrapper">
                    <div className="video-wrapper" onClick={() => setSelectedVideo(v)}>
                      <video 
                        src={v.url} 
                        className="video-preview"
                        preload="metadata"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                      />
                      <div className="video-overlay">
                        <div className="play-button">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="video-duration">
                        {v.duration || '0:30'}
                      </div>
                    </div>

                    <div className="portfolio-item-content">
                      <div className="portfolio-item-header">
                        <h3 className="portfolio-item-title">{v.title}</h3>
                        <span className="portfolio-item-category">{v.category}</span>
                      </div>
                      
                      {v.description && (
                        <p className="portfolio-item-description">{v.description}</p>
                      )}

                      <div className="portfolio-item-actions">
                        <button 
                          className="btn-icon view-btn"
                          onClick={() => setSelectedVideo(v)}
                          title="View Full"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <a 
                          href={v.url} 
                          download 
                          className="btn-icon download-btn"
                          title="Download"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedVideo(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="modal-video-wrapper">
              <video 
                src={selectedVideo.url} 
                controls 
                autoPlay
                className="modal-video"
              />
            </div>
            
            <div className="modal-info">
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">{selectedVideo.title}</h3>
                  <span className="modal-category">{selectedVideo.category}</span>
                </div>
                <a 
                  href={selectedVideo.url} 
                  download 
                  className="btn primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </a>
              </div>
              
              {selectedVideo.description && (
                <p className="modal-description">{selectedVideo.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Create Your Next Project</h2>
            <p>Ready to bring your vision to life with cinematic storytelling?</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn primary large">Get in Touch</Link>
              <Link to="/about" className="btn secondary large">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}