import React from 'react';
import dhawalPhoto from '../assets/dhawal.jpg';

export const About: React.FC = () => {
    return (
        <section id="about" className="container">
            <div className="section-header">
                <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="url(#about-gradient)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--brand-pink)" />
                                <stop offset="100%" stopColor="var(--brand-purple)" />
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <h3 className="section-heading-title">
                    Dhawal Deolasi
                </h3>
            </div>

            <div className="section-grid">
                <div className="grid-left">
                    <div style={{ fontWeight: 600 }}>My approach to the work is</div>
                    <div className="font-serif-italic" style={{ color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                        logic, consistency, and rationality
                    </div>
                    
                    <div style={{ marginTop: '2.5rem' }}>
                        <div className="gradient-btn" style={{ borderRadius: '1.5rem', padding: '2px', cursor: 'default', display: 'block', maxWidth: '280px' }}>
                            <div style={{ backgroundColor: 'var(--bg-base)', borderRadius: '1.4rem', overflow: 'hidden' }}>
                                <img 
                                    src={dhawalPhoto} 
                                    alt="Dhawal Deolasi" 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        display: 'block', 
                                        filter: 'grayscale(20%) contrast(1.05)',
                                        transition: 'filter var(--transition-normal)'
                                    }} 
                                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-right">
                    <p>
                        I'm Dhawal Deolasi, a Software Engineer with over 4 years of experience in web and mobile application development. I'm passionate about crafting clean, maintainable, and high-performance code. With a background working across domains like <strong>Fintech, Healthcare, and E-Governance</strong>, I focus on solving complex business tasks through robust digital architecture.
                    </p>
                    <p>
                        My development philosophy revolves around building scalable frontend architectures, optimized data streaming pipelines, and fluid user experiences. I specialize in modular codebase organization, state-management frameworks (Zustand, Redux, Redux Saga), real-time WebSockets, and securing enterprise systems using Keycloak and Role-Based Access Controls (RBAC).
                    </p>
                    <p>
                        I believe in conducting research and understanding the end-user's needs before starting any development, ensuring that the software I build is not only functional but solves real-world operational problems efficiently.
                    </p>
                    
                    <div className="social-links-container">
                        <a title="LinkedIn" href="https://linkedin.com/in/dhawaldeolasi" target="_blank" rel="noopener noreferrer" className="social-circle-btn">
                            <div className="social-circle-btn-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </div>
                        </a>
                        <a title="GitHub" href="https://github.com/dhawaldeolasi" target="_blank" rel="noopener noreferrer" className="social-circle-btn">
                            <div className="social-circle-btn-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </div>
                        </a>
                        <a title="Email" href="mailto:dhawaldeolasi04@gmail.com" className="social-circle-btn">
                            <div className="social-circle-btn-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
