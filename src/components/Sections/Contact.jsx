import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiCopy, FiCheck } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "siddhartha.sadhukhan.2014@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="contact-content"
                >
                    <p className="section-subtitle">05. What's Next?</p>
                    <h2 className="contact-title">Let's Connect</h2>
                    <p className="contact-description">
                        I'm currently looking for new opportunities, and my inbox is always open.
                        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-actions">
                        <a href={`mailto:${email}`} className="btn contact-btn">
                            <FiMail /> Say Hello
                        </a>
                        <button onClick={handleCopyEmail} className="btn contact-btn-outline" aria-label="Copy email address">
                            {copied ? <FiCheck /> : <FiCopy />}
                            {copied ? "Copied!" : "Copy Email"}
                        </button>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Sid4GitHub" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/siddhartha-sadhukhan/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FiLinkedin size={24} />
                        </a>
                        <a href="https://x.com/at_siddhartha" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                            <FaXTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com/at_siddhartha/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <FiInstagram size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
