import React, { useState, useEffect } from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import './styles/main.css';

const App: React.FC = () => {
    // 1. Theme Configuration
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return savedTheme || (systemPrefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    // 2. Active Section Detection
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const navObserverOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    if (activeId) {
                        setActiveSection(activeId);
                    }
                }
            });
        }, navObserverOptions);

        sections.forEach(section => navObserver.observe(section));

        return () => {
            sections.forEach(section => navObserver.unobserve(section));
        };
    }, []);

    // 3. Scroll Reveal Animations
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        const revealObserverOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealObserverOptions);

        revealElements.forEach(element => revealObserver.observe(element));

        return () => {
            revealElements.forEach(element => revealObserver.unobserve(element));
        };
    }, []);

    return (
        <>
            <CanvasBackground theme={theme} />
            <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default App;
