import React, { useState, useEffect } from 'react';
import dhawalPhoto from '../assets/dhawal.jpg';
import { AnimatedCounter } from './AnimatedCounter';

export const Hero: React.FC = () => {
    const specialties = [
        'Building Scalable Web Applications',
        'Optimizing Real-Time Fintech Platforms',
        'Designing High-Performance Frontend Architectures',
        'Crafting Robust Databases & Security Rules'
    ];
    const [specialtyIdx, setSpecialtyIdx] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setSpecialtyIdx((prev) => (prev + 1) % specialties.length);
                setIsFading(false);
            }, 300); // fade transition time
        }, 4000);

        return () => clearInterval(interval);
    }, [specialties.length]);

    return (
        <section id="home" className="hero">
            <div className="hero-content container">
                <div className="hero-text-block">
                    <span className="hero-badge reveal active">Available for new opportunities</span>
                    <h1 className="hero-title reveal active">
                        Hi, I'm <span className="gradient-text">Dhawal Deolasi</span>
                    </h1>
                    <h2 className="hero-subtitle reveal active">
                        <span className={`specialty-text ${isFading ? 'fade-out' : 'fade-in'}`}>
                            {specialties[specialtyIdx]}
                        </span>
                    </h2>
                    <p className="hero-description reveal active">
                        I am a Software Engineer with <strong>4+ years of professional experience</strong> specializing in high-performance frontend architectures, real-time data streaming (WebSockets), and robust database schemas.
                    </p>
                    <div className="hero-cta reveal active">
                        <a href="#projects" className="btn btn-primary">Explore My Work</a>
                        <a 
                            href="Dhawal_Deolasi_Fullstack_Developer.pdf" 
                            download="Dhawal_Deolasi_Fullstack_Developer.pdf" 
                            className="btn btn-secondary flex-center" 
                            id="download-resume-hero"
                        >
                            <span>Download Resume</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="hero-graphics-block reveal active">
                    <div className="profile-card">
                        <div className="avatar-glow"></div>
                        <div className="profile-box">
                            <div className="profile-header">
                                <div className="avatar-container">
                                    <div className="avatar-wrapper">
                                        <img src={dhawalPhoto} alt="Dhawal Deolasi" className="avatar-img" />
                                        <div className="status-indicator" title="Available for new opportunities">
                                            <span className="status-dot"></span>
                                            <span className="status-pulse"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-info-text">
                                    <h3 className="profile-name">Dhawal Deolasi</h3>
                                    <div className="profile-role-badge">Fullstack Developer</div>
                                    <span className="profile-availability">Available for Work</span>
                                </div>
                            </div>
                            
                            <div className="profile-stats">
                                <div className="p-stat-item">
                                    <span className="p-stat-num">
                                        <AnimatedCounter target={4} suffix="+" />
                                    </span>
                                    <span className="p-stat-label">Years Exp</span>
                                </div>
                                <div className="p-stat-item">
                                    <span className="p-stat-num">
                                        <AnimatedCounter target={10} suffix="+" />
                                    </span>
                                    <span className="p-stat-label">Projects</span>
                                </div>
                                <div className="p-stat-item">
                                    <span className="p-stat-num">Indore</span>
                                    <span className="p-stat-label">Location</span>
                                </div>
                            </div>

                            <div className="profile-tech-section">
                                <h4 className="tech-title">Core Expertise</h4>
                                <div className="tech-tag-grid">
                                    <span className="tech-tag-badge"><span className="tech-dot react"></span>React</span>
                                    <span className="tech-tag-badge"><span className="tech-dot next"></span>Next.js</span>
                                    <span className="tech-tag-badge"><span className="tech-dot ts"></span>TypeScript</span>
                                    <span className="tech-tag-badge"><span className="tech-dot ws"></span>WebSockets</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-down-btn" aria-label="Scroll Down">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </a>
        </section>
    );
};
