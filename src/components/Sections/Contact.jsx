import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center', padding: '100px 0' }}>
            <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>05. What's Next?</p>
                    <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', marginBottom: '1.5rem', color: 'var(--text-color)', fontWeight: '600' }}>Get In Touch</h2>
                    <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:siddhartha.sadhukhan.2014@gmail.com"
                        className="btn"
                        style={{
                            fontSize: '1rem',
                            padding: '1.25rem 1.75rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <FiMail /> Say Hello
                    </a>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="https://github.com/Sid4GitHub" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/siddhartha-sadhukhan/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiLinkedin size={24} />
                        </a>
                        <a href="https://x.com/at_siddhartha" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaXTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com/at_siddhartha/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FiInstagram size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .social-link {
                    color: var(--text-secondary);
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                }
                .social-link:hover {
                    color: var(--accent-color);
                    transform: translateY(-3px);
                }
            `}</style>
        </section>
    );
};

export default Contact;
