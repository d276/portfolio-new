import React from 'react';

interface Project {
    title: string;
    tags: string[];
    description: string;
    bullets: string[];
}

export const Projects: React.FC = () => {
    const projectsData: Project[] = [
        {
            title: 'Web Trading Platform',
            tags: ['React.js', 'Zustand', 'WebSockets', 'Fintech'],
            description: 'A high-frequency, real-time trading platform designed for Bigul. Features live market charts, order placement interfaces, and instant updates using WebSocket streams, prioritizing minimal latency.',
            bullets: [
                'Real-time market streaming',
                'Low-latency order routing',
                'Responsive charts'
            ]
        },
        {
            title: 'Support Ticket Portal',
            tags: ['React.js', 'Redux Saga', 'REST APIs', 'Support'],
            description: 'A comprehensive CRM client dashboard for ticket handling, filtering, and customer support management. Resolves real-time ticket escalation queues and automates status synchronizations.',
            bullets: [
                'Escalation workflows',
                'Rich text ticket responses',
                'Detailed auditing logs'
            ]
        },
        {
            title: 'Water Tax System (WTS)',
            tags: ['Next.js', 'React.js', 'SQL', 'E-Gov'],
            description: 'An E-Governance municipality taxation and water management application. Built database schemas, optimized SQL query indices, and designed responsive administrative and public portals.',
            bullets: [
                'Tax assessment calculator',
                'Complex database schemas',
                'Printable receipts'
            ]
        },
        {
            title: 'Assets Management System',
            tags: ['React.js', 'Material UI', 'SQL', 'Enterprise'],
            description: 'Internal logistics and tracking application for asset auditing, check-ins/check-outs, lifecycle stages, and allocation charts, using polished Material UI interfaces.',
            bullets: [
                'Asset tracking dashboard',
                'Interactive graphs',
                'Automatic CSV exports'
            ]
        },
        {
            title: 'Astellas & MDLive Integrations',
            tags: ['React.js', 'TypeScript', 'Keycloak', 'Healthcare'],
            description: 'Medical portal applications under Welldoc, providing clinical tracking (Health Optimizer) and telemedicine integrations. Developed to achieve strict HIPAA security and Lighthouse compliance.',
            bullets: [
                'Keycloak Authentication',
                'Strict Role-Based Access Controls',
                '90%+ Google Lighthouse Score'
            ]
        }
    ];

    return (
        <section id="projects" className="projects section-padding section-alt-bg">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="subtitle-badge">04. My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card reveal active">
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-bullets">
                                    {project.bullets.map((bullet, bulletIdx) => (
                                        <li key={bulletIdx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
