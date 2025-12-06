import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../hooks/useMarkdown';

const About = () => {
    const { content, loading } = useMarkdown('content/about.md');

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                >
                    <h2 className="section-header">
                        <span className="section-header-number">01.</span>
                        About Me
                        <span className="section-header-line"></span>
                    </h2>

                    <div className="about-grid">
                        <div style={{ width: '100%' }}>
                            <div className="prose">
                                {loading ? <p>Loading...</p> : <ReactMarkdown>{content.replace(/^##\s*About Me/m, '')}</ReactMarkdown>}
                            </div>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'relative',
                                maxWidth: '300px',
                                margin: '0 auto',
                                borderRadius: '4px',
                                backgroundColor: 'var(--accent-color)'
                            }}>
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`}
                                    alt="Profile"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '4px',
                                        filter: 'grayscale(100%) contrast(1)',
                                        transition: 'var(--transition)',
                                        mixBlendMode: 'multiply',
                                        display: 'block'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.filter = 'none';
                                        e.target.style.mixBlendMode = 'normal';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.filter = 'grayscale(100%) contrast(1)';
                                        e.target.style.mixBlendMode = 'multiply';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
