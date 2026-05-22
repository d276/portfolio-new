import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-layout">
                    <div className="footer-brand-side">
                        <a href="#home" className="logo" style={{ textTransform: 'lowercase' }}>
                            dhawal<span className="logo-dot">.</span>
                        </a>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                            building clean, scalable, high-performance web products.
                        </p>
                    </div>
                    <div className="footer-links-side">
                        <a href="#home" className="footer-link">home</a>
                        <a href="#about" className="footer-link">about</a>
                        <a href="#skills" className="footer-link">skills</a>
                        <a href="#experience" className="footer-link">experience</a>
                        <a href="#projects" className="footer-link">projects</a>
                        <a href="#contact" className="footer-link">contact</a>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <p>&copy; {new Date().getFullYear()} dhawal deolasi. all rights reserved.</p>
                    <div className="footer-social-tray">
                        <a href="https://linkedin.com/in/dhawaldeolasi" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/dhawaldeolasi" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="mailto:dhawaldeolasi04@gmail.com" className="footer-social-link" title="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
