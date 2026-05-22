import React from 'react';

interface ExperienceItem {
    date: string;
    role: string;
    company: string;
    location: string;
    projectInfo?: string;
    bullets: string[];
}

export const Experience: React.FC = () => {
    const experienceData: ExperienceItem[] = [
        {
            date: 'Mar 2026 – Present',
            role: 'Software Developer',
            company: 'Bigul (Bonanza Portfolio Ltd.)',
            location: 'Indore, India',
            bullets: [
                'Developed a scalable frontend web application from scratch using React.js, ensuring clean architecture, modular folder structure, and long-term maintainability.',
                'Built and enhanced a comprehensive web trading platform capable of handling real-time market data streaming and complex trading workflows.',
                'Contributed to the Support Ticket Portal, resolving client-raised issues and optimizing ticket handling workflows.',
                'Implemented client-side state management using Zustand, Redux, and Redux Saga to ensure efficient and reliable data flow throughout application modules.',
                'Designed reusable logic and optimized component efficiency via custom React hooks.',
                'Integrated and optimized complex REST API data fetching with robust error handling and optimized fetching schemes.'
            ]
        },
        {
            date: 'Nov 2025 – Feb 2026',
            role: 'Software Developer',
            company: 'Sthapatya Consultant Pvt. Ltd.',
            location: 'Amravati, India',
            projectInfo: 'Key Projects: Water Tax System (WTS), Assets Management System',
            bullets: [
                'Performed comprehensive code reviews, evaluated folder structures, and enforced frontend best practices to maintain clean, scalable codebases.',
                'Led a frontend development team using Next.js and React.js, securing high-quality UI implementation and seamless transitions.',
                'Identified, debugged, and resolved critical UI/UX bottlenecks to improve interface consistency across modules.',
                'Collaborated with cross-functional teams on municipality taxation systems and water management systems.',
                'Supported backend and data teams by designing database schemas, creating SQL tables, and participating in overall data structure planning.',
                'Integrated REST APIs with frontend components, ensuring efficient data flow and error handling.'
            ]
        },
        {
            date: 'Apr 2021 – Sep 2024',
            role: 'Software Engineer',
            company: 'Welldoc Software',
            location: 'Bangalore, India',
            projectInfo: 'Key Projects: Astellas, Health Optimizer, Conifer Connect, and MDLive',
            bullets: [
                'Developed responsive, user-friendly, and accessible interfaces using React.js, TypeScript, and Material-UI, optimizing UX across desktop and mobile devices.',
                'Led the implementation of a comprehensive real-time data infrastructure utilizing WebSockets for instant communication.',
                'Integrated secure authentication via Keycloak, building robust Role-Based Access Control (RBAC) protocols.',
                'Achieved up to a 90% improvement in web page performance metrics on Google Lighthouse by optimizing assets, caching, and layout structure.',
                'Managed global application state using Redux, structuring clean data synchronizations.',
                'Leveraged React Query for automated cache management, background data fetching, and query invalidation.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="subtitle-badge">03. Career Timeline</span>
                    <h2 className="section-title">Professional Experience</h2>
                </div>
                
                <div className="timeline">
                    {experienceData.map((item, index) => {
                        const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
                        return (
                            <div key={index} className={`timeline-item reveal ${revealClass} active`}>
                                <div className="timeline-badge">
                                    <span className="timeline-dot"></span>
                                </div>
                                <div className="timeline-card">
                                    <div className="timeline-header">
                                        <span className="timeline-date">{item.date}</span>
                                        <h3 className="timeline-role">{item.role}</h3>
                                        <h4 className="timeline-company">
                                            {item.company} <span className="location">| {item.location}</span>
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        {item.projectInfo && (
                                            <p className="timeline-project-info">{item.projectInfo}</p>
                                        )}
                                        <ul>
                                            {item.bullets.map((bullet, bulletIdx) => (
                                                <li key={bulletIdx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
