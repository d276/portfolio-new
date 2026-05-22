import React, { useState, useEffect } from 'react';

interface ProjectDetails {
    role: string;
    challenge: string;
    solution: string;
    outcome: string;
}

interface Project {
    title: string;
    tags: string[];
    description: string;
    bullets: string[];
    details: ProjectDetails;
}

export const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projectsData: Project[] = [
        {
            title: 'Web Trading Platform',
            tags: ['React.js', 'Zustand', 'WebSockets', 'Fintech'],
            description: 'A high-frequency, real-time trading platform designed for Bigul. Features live market charts, order placement interfaces, and instant updates using WebSocket streams, prioritizing minimal latency.',
            bullets: [
                'Real-time market streaming',
                'Low-latency order routing',
                'Responsive charts'
            ],
            details: {
                role: 'Lead Frontend Developer',
                challenge: 'Rendering high-frequency price ticker streams and order books at 60 FPS without introducing visual stutter or blocking UI thread interactions.',
                solution: 'Implemented visual stream throttling, custom hooks to skip redundant React renders, and Zustand stores with specialized selectors to isolate UI tree updates.',
                outcome: 'Stabilized render frame-rates under high-frequency updates, reducing component redraw overhead by 65%.'
            }
        },
        {
            title: 'Support Ticket Portal',
            tags: ['React.js', 'Redux Saga', 'REST APIs', 'Support'],
            description: 'A comprehensive CRM client dashboard for ticket handling, filtering, and customer support management. Resolves real-time ticket escalation queues and automates status synchronizations.',
            bullets: [
                'Escalation workflows',
                'Rich text ticket responses',
                'Detailed auditing logs'
            ],
            details: {
                role: 'Fullstack Engineer',
                challenge: 'Managing cascading ticket state changes, escalation triggers, and complex auditing logs asynchronously.',
                solution: 'Designed and deployed a Redux Saga architecture to manage complex asynchronous side-effects, state checks, and api retries cleanly.',
                outcome: 'Cut API side-effect bugs to 0 and improved search speed for audit logs.'
            }
        },
        {
            title: 'Water Tax System (WTS)',
            tags: ['Next.js', 'React.js', 'SQL', 'E-Gov'],
            description: 'An E-Governance municipality taxation and water management application. Built database schemas, optimized SQL query indices, and designed responsive administrative and public portals.',
            bullets: [
                'Tax assessment calculator',
                'Complex database schemas',
                'Printable receipts'
            ],
            details: {
                role: 'Backend & Lead UI Developer',
                challenge: 'Generating municipality-wide billing audits and printable receipt archives under high database loads.',
                solution: 'Redesigned database schemas, normalized indices, structured SQL query caches, and integrated print layouts.',
                outcome: 'Decreased generation time of water tax PDF receipts by 50% and simplified tax audit operations.'
            }
        },
        {
            title: 'Assets Management System',
            tags: ['React.js', 'Material UI', 'SQL', 'Enterprise'],
            description: 'Internal logistics and tracking application for asset auditing, check-ins/check-outs, lifecycle stages, and allocation charts, using polished Material UI interfaces.',
            bullets: [
                'Asset tracking dashboard',
                'Interactive graphs',
                'Automatic CSV exports'
            ],
            details: {
                role: 'Frontend UI/UX Specialist',
                challenge: 'Displaying heavy relational data sets (check-ins, lifecycle stages, audits) on mobile viewports without losing data readability.',
                solution: 'Developed a custom responsive grid system using Material UI, custom charting widgets, and built client-side CSV exporters.',
                outcome: 'Achieved fully responsive enterprise portal accessibility with instant CSV reporting.'
            }
        },
        {
            title: 'Astellas & MDLive Integrations',
            tags: ['React.js', 'TypeScript', 'Keycloak', 'Healthcare'],
            description: 'Medical portal applications under Welldoc, providing clinical tracking (Health Optimizer) and telemedicine integrations. Developed to achieve strict HIPAA security and Lighthouse compliance.',
            bullets: [
                'Keycloak Authentication',
                'Strict Role-Based Access Controls',
                '90%+ Google Lighthouse Score'
            ],
            details: {
                role: 'Frontend Engineer',
                challenge: 'Building secure healthcare interfaces satisfying strict HIPAA requirements and fast loading times on legacy browsers.',
                solution: 'Integrated Keycloak for RBAC authorization, configured security headers, and refactored client code to optimize bundle sizes.',
                outcome: 'Secured full compliance and achieved a 92% Google Lighthouse performance rating.'
            }
        }
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // lock scroll
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = ''; // unlock scroll
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="projects" className="projects section-padding section-alt-bg">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="subtitle-badge">04. My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card reveal active" 
                            onClick={() => openModal(project)}
                            style={{ cursor: 'pointer' }}
                        >
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
                                <div className="project-footer">
                                    <span className="project-link">
                                        <span>Explore Project</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="project-link-icon">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn flex-center" onClick={closeModal} aria-label="Close modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        
                        <div className="modal-header">
                            <span className="modal-badge">Project details</span>
                            <h3 className="modal-title">{selectedProject.title}</h3>
                            <div className="modal-tags">
                                {selectedProject.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="modal-body">
                            <div className="modal-section">
                                <h4>Project Overview</h4>
                                <p>{selectedProject.description}</p>
                            </div>
                            
                            <div className="modal-details-grid">
                                <div className="modal-detail-item">
                                    <span className="detail-label">Role</span>
                                    <span className="detail-value">{selectedProject.details.role}</span>
                                </div>
                                <div className="modal-detail-item">
                                    <span className="detail-label">Scope</span>
                                    <span className="detail-value">{selectedProject.tags[selectedProject.tags.length - 1]}</span>
                                </div>
                            </div>
                            
                            <div className="modal-section challenge-section">
                                <h4>
                                    <span className="section-icon">⚠️</span> Key Challenge
                                </h4>
                                <p>{selectedProject.details.challenge}</p>
                            </div>
                            
                            <div className="modal-section solution-section">
                                <h4>
                                    <span className="section-icon">⚡</span> Engineering Solution
                                </h4>
                                <p>{selectedProject.details.solution}</p>
                            </div>
                            
                            <div className="modal-section outcome-section">
                                <h4>
                                    <span className="section-icon">📈</span> Measurable Outcome
                                </h4>
                                <p>{selectedProject.details.outcome}</p>
                            </div>
                        </div>
                        
                        <div className="modal-footer">
                            <a href="#contact" onClick={closeModal} className="btn btn-primary btn-sm flex-center">
                                <span>Inquire About Project</span>
                            </a>
                            <button onClick={closeModal} className="btn btn-secondary btn-sm">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
