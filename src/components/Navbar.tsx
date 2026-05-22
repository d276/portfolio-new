import React, { useState, useEffect } from 'react';

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
    activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    // Close menu when link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const menuToggle = document.getElementById('menu-toggle');
            const navMenu = document.getElementById('nav-menu');
            if (menuToggle && navMenu && !menuToggle.contains(e.target as Node) && !navMenu.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const navLinks = [
        { id: 'about', label: 'about' },
        { id: 'skills', label: 'skills' },
        { id: 'projects', label: 'projects' },
        { id: 'experience', label: 'experience' }
    ];

    return (
        <header className="header">
            <div className="nav-container">
                <a href="#home" className="logo" id="nav-logo" onClick={handleLinkClick}>
                    dhawal<span className="logo-dot">.</span>
                </a>

                {/* Mobile Menu Toggle */}
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
                    id="menu-toggle" 
                    aria-label="Toggle Menu"
                    onClick={handleMenuToggle}
                >
                    <span className="hamburger"></span>
                </button>

                {/* Navigation Links */}
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`} 
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Theme Toggle & Contact Button Group */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 110 }}>
                    <button 
                        id="theme-toggle" 
                        className="theme-toggle-btn" 
                        aria-label="Toggle Light/Dark Mode"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            /* Sun Icon */
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            /* Moon Icon */
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>

                    <a href="#contact" className="gradient-btn" onClick={handleLinkClick}>
                        <div className="gradient-btn-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
                            </svg>
                            <span>contact</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};
