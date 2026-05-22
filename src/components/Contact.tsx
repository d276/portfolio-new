import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const copyEmail = () => {
        navigator.clipboard.writeText('dhawaldeolasi04@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const toggleFaq = (idx: number) => {
        setOpenFaq(prev => (prev === idx ? null : idx));
    };

    const faqData = [
        {
            question: "Are you available for remote work?",
            answer: "Yes, absolutely! I am fully set up for remote collaboration globally, with flexible scheduling to align with US, European, or APAC working hours."
        },
        {
            question: "What is your primary development stack?",
            answer: "My core expertise lies in React.js, TypeScript, Next.js, and Zustand/Redux for dynamic frontend architectures, alongside REST/WebSockets/SQL for backend integrations."
        },
        {
            question: "Do you accept contract or freelance roles?",
            answer: "Yes! I am open to consulting, building MVPs, contract roles, and full-time positions. Let's discuss your project scope."
        }
    ];

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="subtitle-badge">05. Say Hello</span>
                    <h2 className="section-title">Get In Touch</h2>
                </div>
                
                <div className="contact-grid">
                    <div className="contact-info reveal-left active">
                        <h3>Let's start a conversation.</h3>
                        <p>
                            Whether you have an upcoming project, are looking for a skilled developer to join your engineering team, or just want to connect, feel free to reach out. I'm always open to discussing new opportunities.
                        </p>
                        
                        <div className="contact-details-list">
                            <div className="contact-detail-item">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <span className="detail-label">Email</span>
                                    <a href="mailto:dhawaldeolasi04@gmail.com" className="detail-value link-hover">
                                        dhawaldeolasi04@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="contact-detail-item">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <span className="detail-label">Phone</span>
                                    <a href="tel:+918421158336" className="detail-value link-hover">
                                        +91 8421158336
                                    </a>
                                </div>
                            </div>
                            
                            <div className="contact-detail-item">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <span className="detail-label">Location</span>
                                    <span className="detail-value">Indore, India</span>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <span className="detail-label">LinkedIn</span>
                                    <a href="https://linkedin.com/in/dhawaldeolasi" target="_blank" rel="noopener noreferrer" className="detail-value link-hover">
                                        linkedin.com/in/dhawaldeolasi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-interactive-panel reveal-right active">
                        <div className="connect-grid">
                            {/* Email Connect Card */}
                            <div className="connect-card email-card">
                                <div className="card-badge">Direct Line</div>
                                <h4>Email Me Direct</h4>
                                <p className="card-email-text">dhawaldeolasi04@gmail.com</p>
                                <div className="card-actions">
                                    <a href="mailto:dhawaldeolasi04@gmail.com" className="btn btn-primary btn-sm flex-center">
                                        <span>Send Email</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </a>
                                    <button onClick={copyEmail} className="btn btn-secondary btn-sm flex-center">
                                        <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                                        {copied ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon text-success">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Availability Booking Card */}
                            <div className="connect-card availability-card">
                                <div className="availability-status">
                                    <span className="status-dot-pulse"></span>
                                    <span>Available for Hiring</span>
                                </div>
                                <h4>Weekly Availability</h4>
                                <div className="schedule-slots">
                                    <div className="slot-row">
                                        <span className="slot-day">Mon - Fri</span>
                                        <span className="slot-hours">9:00 AM - 6:00 PM IST</span>
                                    </div>
                                    <div className="slot-row">
                                        <span className="slot-day">Response Time</span>
                                        <span className="slot-hours">&lt; 4 Hours</span>
                                    </div>
                                </div>
                                <a href="https://wa.me/918421158336" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-whatsapp flex-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="btn-icon">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.852.002-2.632-1.02-5.107-2.879-6.97C16.398 1.968 13.93 .942 11.996.942c-5.441 0-9.866 4.418-9.87 9.854-.002 1.93.498 3.554 1.462 5.176l-.992 3.626 3.738-.98h.039zm11.393-7.794c-.269-.134-1.597-.788-1.846-.878-.25-.09-.432-.134-.613.135-.181.269-.7.878-.858 1.057-.158.18-.316.2-.585.067-.27-.133-1.137-.419-2.167-1.338-.8-.713-1.34-1.594-1.498-1.863-.158-.27-.017-.416.117-.55.121-.12.27-.316.405-.473.136-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.613-1.478-.84-2.016-.22-.53-.442-.458-.612-.466-.159-.008-.34-.008-.523-.008-.182 0-.477.067-.727.34-.25.27-.953.931-.953 2.27 0 1.338.975 2.628 1.11 2.808.136.18 1.92 2.931 4.65 4.113.65.28 1.157.447 1.554.573.653.208 1.248.178 1.717.108.523-.078 1.597-.652 1.823-1.282.226-.63.226-1.17.158-1.282-.068-.112-.25-.18-.519-.313z"/>
                                    </svg>
                                    <span>Let's Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Interactive FAQ Section */}
                        <div className="faq-section">
                            <h4 className="faq-title">Quick FAQ</h4>
                            <div className="faq-accordion">
                                {faqData.map((faq, idx) => (
                                    <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                                        <button className="faq-question-btn flex-center" onClick={() => toggleFaq(idx)}>
                                            <span>{faq.question}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="faq-chevron">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div className="faq-answer-wrapper">
                                            <p className="faq-answer">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
