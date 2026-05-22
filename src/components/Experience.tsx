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
        <section id="experience" className="container">
            <div className="section-header">
                <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="url(#exp-gradient)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="exp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--brand-pink)" />
                                <stop offset="100%" stopColor="var(--brand-purple)" />
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                </div>
                <h3 className="section-heading-title">
                    Work Experience
                </h3>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
                {experienceData.map((item, index) => (
                    <div key={index} className="experience-item">
                        <div className="exp-left">
                            <div className="exp-role">{item.role}</div>
                            <div className="font-serif-italic exp-company" style={{ color: 'var(--text-muted)' }}>
                                {item.company}
                            </div>
                            <div className="exp-timeline-wrapper" style={{ marginTop: '1.5rem' }}>
                                <div className="exp-node-dot"></div>
                                <div className="exp-timeline-text">{item.date}</div>
                            </div>
                        </div>
                        <div className="exp-right">
                            {item.projectInfo && (
                                <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                    {item.projectInfo}
                                </p>
                            )}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {item.bullets.map((bullet, bulletIdx) => (
                                    <p key={bulletIdx}>{bullet}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
