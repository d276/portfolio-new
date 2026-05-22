import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="container">
            <div className="hero-content">
                <div style={{ flex: 1.2 }}>
                    <h1 className="hero-hello font-serif-italic">
                        hello world
                    </h1>
                    <h2 className="hero-tagline">
                        <span>
                            I design 
                            <span className="font-serif-italic" style={{ fontWeight: 400 }}> &amp; </span>
                            craft beautiful websites for users, that solve your{' '}
                            <span className="font-serif-italic" style={{ fontWeight: 400 }}>business tasks</span>
                        </span>
                    </h2>
                </div>
                
                <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
                    <p className="hero-description" style={{ margin: 0 }}>
                        Hello, I'm <strong style={{ color: 'var(--text-primary)' }}>Dhawal Deolasi</strong>, a Software Engineer with{' '}
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>4+ years</span> of experience{' '}
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>developing and designing</span> web and mobile applications—specializing in real-time fintech architectures and robust frontend modules.
                    </p>
                </div>
            </div>

            <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
                <a href="#projects" className="gradient-btn" style={{ transform: 'none' }}>
                    <div className="gradient-btn-inner" style={{ background: 'var(--accent-gradient)', color: '#ffffff', padding: '0.625rem 1.5rem' }}>
                        <span>See Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginLeft: '0.25rem' }}>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </a>

                <a 
                    href="Dhawal_Deolasi_Fullstack_Developer.pdf" 
                    download="Dhawal_Deolasi_Fullstack_Developer.pdf" 
                    className="gradient-btn"
                >
                    <div className="gradient-btn-inner" style={{ padding: '0.625rem 1.5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '0.25rem' }}>
                            <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                        <span>Resume</span>
                    </div>
                </a>
            </div>
        </section>
    );
};
