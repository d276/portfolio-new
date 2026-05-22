import React from 'react';

interface Achievement {
    title: string;
    issuer: string;
    date: string;
    description: string;
}

export const Achievements: React.FC = () => {
    const achievementsData: Achievement[] = [
        {
            title: 'MCA (Computer Application)',
            issuer: 'PRMITR, Amravati',
            date: '2018 — 2020',
            description: 'Completed postgraduate engineering coursework focusing on advanced computer applications, algorithm designs, data structures, and database management architectures.'
        },
        {
            title: 'Bachelor of Science (Computer Science)',
            issuer: 'University of Amravati',
            date: '2015 — 2018',
            description: 'Acquired foundational training in computer science, software logic, system programming, core mathematical concepts, and hardware systems.'
        },
        {
            title: '4+ Years Engineering Milestone',
            issuer: 'Fintech & Healthcare Platforms',
            date: '2021 — Present',
            description: 'Successfully engineered and shipped real-time high-throughput trading client modules, HIPAA-compliant telehealth components, and municipality tax collection systems.'
        }
    ];

    return (
        <section id="achievements" className="container">
            <div className="section-header">
                <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="url(#ach-gradient)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="ach-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--brand-pink)" />
                                <stop offset="100%" stopColor="var(--brand-purple)" />
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 14H4L12 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l5 9H7l5-9z" opacity="0.6" />
                    </svg>
                </div>
                <h3 className="section-heading-title">
                    Education & Achievements
                </h3>
            </div>

            <div className="achievements-grid">
                {achievementsData.map((item, index) => (
                    <div key={index} className="achievement-card">
                        <div className="achievement-title">
                            {item.title}
                        </div>
                        <div className="achievement-issuer">
                            {item.issuer}
                        </div>
                        <div className="achievement-date">
                            {item.date}
                        </div>
                        <div className="achievement-desc">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
