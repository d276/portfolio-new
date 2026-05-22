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
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className="header">
            <div className="nav-container">
                <a href="#home" className="logo" id="nav-logo" onClick={handleLinkClick}>
                    Dhawal<span className="logo-dot">.</span>
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

                {/* Theme Toggle Button */}
                <button 
                    id="theme-toggle" 
                    className="theme-toggle-btn" 
                    aria-label="Toggle Light/Dark Mode"
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? (
                        /* Sun Icon */
                        <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                        <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
};
