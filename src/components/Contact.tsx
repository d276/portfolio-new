import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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

        const { name, email, message } = formData;

        if (!name || !email || !message) {
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

        // Simulate API post
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: `Thank you, ${name}! Your message has been sent successfully.`
            });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, 1800);
    };

    return (
        <section id="contact" className="container">
            <div className="section-header">
                <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="url(#contact-gradient)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--brand-pink)" />
                                <stop offset="100%" stopColor="var(--brand-purple)" />
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>

            <div className="contact-container">
                <div>
                    <h3 className="section-heading-title" style={{ lineHeight: '1.2' }}>
                        It's time <br /> to talk! <br /> Contact me
                    </h3>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="mailto:dhawaldeolasi04@gmail.com" className="font-serif-italic" style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'var(--text-primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.25rem' }}>
                            dhawaldeolasi04@gmail.com
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                        Best way to reach out is{' '}
                        <a href="mailto:dhawaldeolasi04@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '2px solid var(--text-muted)' }}>
                            dhawaldeolasi04@gmail.com
                        </a>{' '}
                        or just simply fill out the form below. Don't be shy, I love to talk to new people and make new connections.
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
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
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                required 
                                placeholder=" "
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>

                        {/* Interactive Suggestion Chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                            <button 
                                type="button" 
                                onClick={() => setFormData(prev => ({ ...prev, message: "Hi Dhawal, I'm interested in hiring you for a project! Let's talk details." }))}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: '#18181b',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-fast)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--brand-pink)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                                Interested In Hiring!
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setFormData(prev => ({ ...prev, message: "Hey Dhawal, I'd love to connect and have some chit-chat over virtual coffee! ☕" }))}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: '#18181b',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-fast)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--brand-purple)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <span style={{ width: '8px', height: '8px', backgroundColor: '#ec4899', borderRadius: '50%' }}></span>
                                Some Chit-Chat! ☕
                            </button>
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                className="gradient-btn"
                                style={{ border: 'none', padding: '1.5px', borderRadius: '8px', width: '100%', maxWidth: '200px' }}
                                disabled={status.type === 'submitting'}
                            >
                                <span className="gradient-btn-inner" style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: '0.5rem' }}>
                                    {status.type === 'submitting' ? 'Sending...' : 'Send Message'}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm1.25 0a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0ZM8.5 7.5a.75.75 0 0 0-1.06 1.06L9.44 10l-1.97 1.94a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {status.type !== 'idle' && (
                            <div className={`form-feedback ${status.type}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
