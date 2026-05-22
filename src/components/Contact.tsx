import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState<{
        type: 'idle' | 'submitting' | 'success' | 'error';
        message: string;
    }>({
        type: 'idle',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            setStatus({
                type: 'error',
                message: 'Please fill out all fields.'
            });
            return;
        }

        // Show loading state
        setStatus({
            type: 'submitting',
            message: 'Sending Message...'
        });

        // Simulate API post (e.g. EmailJS or serverless function)
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: `Thank you, ${name}! Your message has been sent successfully.`
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1800);
    };

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
                            Whether you have an upcoming project, are looking for a skilled developer to join your engineering team, or just want to connect, feel free to reach out.
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
                    
                    <div className="contact-form-wrapper reveal-right active">
                        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="name">Your Name</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email">Your Email</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    required 
                                    placeholder=" "
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    required 
                                    placeholder=" "
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-submit flex-center"
                                disabled={status.type === 'submitting'}
                            >
                                <span>{status.type === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                            {status.type !== 'idle' && (
                                <div className={`form-feedback ${status.type}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
