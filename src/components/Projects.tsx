import React, { useState } from 'react';

interface ProjectStat {
    num: string;
    label: string;
}

interface Project {
    title: string;
    tags: string[];
    description: string;
    bullets: string[];
    stats: ProjectStat[];
    liveUrl: string;
    codeUrl?: string;
    previewType: 'trading' | 'ticket' | 'wts' | 'assets' | 'medical';
}

export const Projects: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const projectsData: Project[] = [
        {
            title: 'Web Trading Platform',
            tags: ['React.js', 'Zustand', 'WebSockets', 'Fintech'],
            description: 'A high-frequency, real-time trading platform designed for Bigul. Features live market charts, order placement interfaces, and instant updates using WebSocket streams, prioritizing minimal latency.',
            bullets: [
                'Real-time market data streaming over secure WebSocket connections.',
                'Low-latency order routing engine with client-side optimistic updates.',
                'Interactive charting library Integration for responsive technical analysis.'
            ],
            stats: [
                { num: '0.2s', label: 'Order Latency' },
                { num: '100K+', label: 'Daily Active Trades' }
            ],
            liveUrl: 'https://bigul.co',
            previewType: 'trading'
        },
        {
            title: 'Support Ticket Portal',
            tags: ['React.js', 'Redux Saga', 'REST APIs', 'Support'],
            description: 'A comprehensive CRM client dashboard for ticket handling, filtering, and customer support management. Resolves real-time ticket escalation queues and automates status synchronizations.',
            bullets: [
                'Automated escalation workflows for critical support issues.',
                'Rich text ticket response editor with drag-and-drop attachment uploads.',
                'Detailed auditing logs to track ticket lifecycle transitions.'
            ],
            stats: [
                { num: '45%', label: 'Resolution Rate Lift' },
                { num: '5K+', label: 'Monthly Active Agents' }
            ],
            liveUrl: '#',
            previewType: 'ticket'
        },
        {
            title: 'Water Tax System (WTS)',
            tags: ['Next.js', 'React.js', 'SQL', 'E-Gov'],
            description: 'An E-Governance municipality taxation and water management application. Built database schemas, optimized SQL query indices, and designed responsive administrative and public portals.',
            bullets: [
                'Built-in tax assessment calculator based on property metrics.',
                'Optimized SQL database schemas handling thousands of tax records.',
                'Dynamic PDF generator for printable municipal receipts.'
            ],
            stats: [
                { num: '$1.2M', label: 'Tax Tracked Annually' },
                { num: '40K+', label: 'Registered Taxpayers' }
            ],
            liveUrl: '#',
            previewType: 'wts'
        },
        {
            title: 'Assets Management System',
            tags: ['React.js', 'Material UI', 'SQL', 'Enterprise'],
            description: 'Internal logistics and tracking application for asset auditing, check-ins/check-outs, lifecycle stages, and allocation charts, using polished Material UI interfaces.',
            bullets: [
                'Dynamic asset tracking dashboard featuring status logs.',
                'Interactive graphs for hardware category allocation.',
                'Automated CSV/Excel report generation for auditing audits.'
            ],
            stats: [
                { num: '99.9%', label: 'Tracking Accuracy' },
                { num: '15K+', label: 'Audited Hardware Units' }
            ],
            liveUrl: '#',
            previewType: 'assets'
        },
        {
            title: 'Astellas & MDLive Integrations',
            tags: ['React.js', 'TypeScript', 'Keycloak', 'Healthcare'],
            description: 'Medical portal applications under Welldoc, providing clinical tracking (Health Optimizer) and telemedicine integrations. Developed to achieve strict HIPAA security and Lighthouse compliance.',
            bullets: [
                'Secure Keycloak authentication with role-based access control.',
                'HIPAA compliant clinical workflow tracking logs.',
                '90%+ Lighthouse performance score via optimized bundles.'
            ],
            stats: [
                { num: '90%+', label: 'Lighthouse Score' },
                { num: '100%', label: 'HIPAA Compliant' }
            ],
            liveUrl: '#',
            previewType: 'medical'
        }
    ];

    const currentProject = projectsData[activeIndex];

    // Helper to render interactive visual mockups
    const renderPreviewGraphic = (type: string) => {
        switch (type) {
            case 'trading':
                return (
                    <div style={{ padding: '1.5rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #111827 0%, #030712 100%)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <span style={{ width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                                LIVE FEED: NIFTY 50
                            </span>
                            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>24,315.80 <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 500 }}>+1.45%</span></span>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end', gap: '0.5rem', padding: '1rem 0' }}>
                            <div style={{ height: '30%', width: '100%', backgroundColor: '#ef4444', opacity: 0.8, borderRadius: '2px' }}></div>
                            <div style={{ height: '50%', width: '100%', backgroundColor: '#10b981', opacity: 0.8, borderRadius: '2px' }}></div>
                            <div style={{ height: '40%', width: '100%', backgroundColor: '#ef4444', opacity: 0.8, borderRadius: '2px' }}></div>
                            <div style={{ height: '70%', width: '100%', backgroundColor: '#10b981', opacity: 0.8, borderRadius: '2px' }}></div>
                            <div style={{ height: '60%', width: '100%', backgroundColor: '#10b981', opacity: 0.8, borderRadius: '2px' }}></div>
                            <div style={{ height: '85%', width: '100%', backgroundColor: '#10b981', opacity: 0.8, borderRadius: '2px' }}></div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button style={{ flex: 1, padding: '0.5rem', backgroundColor: '#10b981', border: 'none', borderRadius: '6px', color: '#ffffff', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer' }}>BUY</button>
                            <button style={{ flex: 1, padding: '0.5rem', backgroundColor: '#ef4444', border: 'none', borderRadius: '6px', color: '#ffffff', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer' }}>SELL</button>
                        </div>
                    </div>
                );
            case 'ticket':
                return (
                    <div style={{ padding: '1.5rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f59e0b' }}>TICKET ESCALATION QUEUE</span>
                            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total: 12 Active</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '6px', borderLeft: '3px solid #ef4444' }}>
                                <span style={{ fontSize: '0.8rem', color: '#f8fafc', fontWeight: 500 }}>#1024 - API Response Timeout</span>
                                <span style={{ fontSize: '0.7rem', padding: '0.125rem 0.375rem', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', borderRadius: '4px', fontWeight: 600 }}>CRITICAL</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
                                <span style={{ fontSize: '0.8rem', color: '#f8fafc', fontWeight: 500 }}>#1023 - UI Glitch on Mobile Safari</span>
                                <span style={{ fontSize: '0.7rem', padding: '0.125rem 0.375rem', backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', borderRadius: '4px', fontWeight: 600 }}>HIGH</span>
                            </div>
                        </div>
                    </div>
                );
            case 'wts':
                return (
                    <div style={{ padding: '1.5rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #1e1b4b 0%, #0f0b29 100%)' }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>MUNICIPAL WATER TAX ASSESSMENT</div>
                        <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.5rem 0' }}>
                            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Amount Outstanding</span>
                            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>$142.50</span>
                        </div>
                        <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '6px', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Consumer ID: WTS-923810</span>
                            <span style={{ color: '#10b981', fontWeight: 600 }}>PAID</span>
                        </div>
                    </div>
                );
            case 'assets':
                return (
                    <div style={{ padding: '1.5rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'linear-gradient(135deg, #022c22 0%, #020617 100%)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem', fontSize: '0.85rem' }}>
                            <span>ASSET ALLOCATION INVENTORY</span>
                            <span style={{ color: '#10b981' }}>99.9% Audited</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr', fontSize: '0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.25rem' }}>
                                <span>Asset Type</span>
                                <span>Total</span>
                                <span>Active</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr', fontSize: '0.8rem', color: '#ffffff', padding: '0.25rem 0' }}>
                                <span style={{ fontWeight: 600 }}>Apple MacBook Pro M3</span>
                                <span>120</span>
                                <span>118</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr', fontSize: '0.8rem', color: '#ffffff', padding: '0.25rem 0' }}>
                                <span style={{ fontWeight: 600 }}>Dell UltraSharp 27"</span>
                                <span>250</span>
                                <span>248</span>
                            </div>
                        </div>
                    </div>
                );
            case 'medical':
                return (
                    <div style={{ padding: '1.5rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #1c1917 0%, #0c0a09 100%)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#3b82f6' }}>MDLIVE INTEGRATION</span>
                            <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd"/>
                                </svg>
                                HIPAA SECURE
                            </span>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.85rem', color: '#a8a29e' }}>Patient Sync Status</span>
                            <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#10b981' }}>All Channels Operational</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="container">
            <div className="section-header">
                <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="url(#proj-gradient)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="proj-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--brand-pink)" />
                                <stop offset="100%" stopColor="var(--brand-purple)" />
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 20h20L12 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-5 9h10l-5-9Z" opacity="0.6" />
                    </svg>
                </div>
                <h3 className="section-heading-title">
                    Featured Projects
                </h3>
            </div>

            <div className="showcase-container">
                {/* Browser Mockup Window Viewport */}
                <div className="showcase-viewport">
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2.25rem', backgroundColor: '#18181b', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', padding: '0 1rem', zIndex: 5 }}>
                        <div style={{ display: 'flex', gap: '0.375rem', marginRight: '1rem' }}>
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#f59e0b', borderRadius: '50%' }}></span>
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                        </div>
                        <div style={{ flexGrow: 1, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '4px', height: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            dhawaldeolasi.dev/projects/{currentProject.title.toLowerCase().replace(/[^a-z0-h0-9]/g, '-')}
                        </div>
                    </div>
                    
                    <div className="showcase-screen" style={{ paddingTop: '2.25rem' }}>
                        {renderPreviewGraphic(currentProject.previewType)}
                    </div>
                </div>

                {/* Grid Index Selectors */}
                <div className="showcase-index-dashboard">
                    {projectsData.map((_, index) => (
                        <button
                            key={index}
                            className={`showcase-index-btn ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Detail Information Grid */}
                <div className="showcase-detail-grid">
                    <div className="project-stats-col">
                        <h4 className="font-serif-italic" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {currentProject.title}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                            {currentProject.stats.map((stat, statIdx) => (
                                <div key={statIdx} className="project-stat-box">
                                    <div className="project-stat-num">{stat.num}</div>
                                    <div className="project-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="project-description-col">
                        <div className="project-tags-row">
                            {currentProject.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                            {currentProject.description}
                        </div>

                        <ul className="project-bullets-list">
                            {currentProject.bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx}>{bullet}</li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '1rem' }}>
                            <a
                                href={currentProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-btn"
                                style={{ textDecoration: 'none' }}
                            >
                                <span className="gradient-btn-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h4a.75.75 0 0 1 0 1.5h-4Z" clipRule="evenodd"/>
                                        <path fillRule="evenodd" d="M12.5 2.25a.75.75 0 0 1 .75-.75h4.75a.75.75 0 0 1 .75.75v4.75a.75.75 0 0 1-1.5 0V3.56l-5.47 5.47a.75.75 0 0 1-1.06-1.06l5.47-5.47H13.25a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
                                    </svg>
                                    Live Site
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
