import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>05. What's Next?</p>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Get In Touch</h2>
                    <p style={{ marginBottom: '3rem' }}>
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a href="mailto:siddhartha.sadhukhan.2014@gmail.com" className="btn" style={{ fontSize: '1.1rem', padding: '1.25rem 1.75rem' }}>
                        Say Hello
                    </a>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="https://www.linkedin.com/in/siddhartha-sadhukhan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'underline' }}>
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
