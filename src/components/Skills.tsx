import React, { useState } from 'react';

interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'state' | 'database';
}

export const Skills: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'state' | 'database'>('all');

    const skillsData: Skill[] = [
        // Frontend
        { name: 'JavaScript (ES6+)', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'React.js', category: 'frontend' },
        { name: 'Next.js', category: 'frontend' },
        { name: 'HTML5 & CSS3', category: 'frontend' },
        { name: 'SCSS / SASS', category: 'frontend' },
        { name: 'Material UI', category: 'frontend' },
        { name: 'Bootstrap', category: 'frontend' },

        // State & Fetching
        { name: 'Redux / Saga', category: 'state' },
        { name: 'Zustand', category: 'state' },
        { name: 'React Query', category: 'state' },

        // Backend & APIs
        { name: 'REST APIs', category: 'backend' },
        { name: 'WebSockets', category: 'backend' },
        { name: 'Keycloak (Auth)', category: 'backend' },
        { name: 'RBAC', category: 'backend' },

        // Databases & Tools
        { name: 'MySQL / SQL', category: 'database' },
        { name: 'Database Design', category: 'database' },
        { name: 'Git', category: 'database' },
        { name: 'Postman', category: 'database' },
        { name: 'Jira / SVN', category: 'database' }
    ];

    const filterCategories = [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend & APIs' },
        { id: 'state', label: 'State & Fetching' },
        { id: 'database', label: 'Databases & Tools' }
    ] as const;

    const filteredSkills = activeFilter === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeFilter);

    return (
        <section id="skills" className="skills section-padding section-alt-bg">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="subtitle-badge">02. Technologies</span>
                    <h2 className="section-title">My Technical Toolkit</h2>
                </div>
                
                <div className="skills-filter-container">
                    {filterCategories.map(cat => (
                        <button 
                            key={cat.id}
                            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                
                <div className="skills-grid-wrapper">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="skill-item reveal active"
                            data-category={skill.category}
                        >
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
