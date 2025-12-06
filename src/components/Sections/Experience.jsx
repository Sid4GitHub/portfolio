import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../hooks/useMarkdown';

const Experience = () => {
    const { content, loading } = useMarkdown('content/experience.md');

    return (
        <section id="experience" className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-header">
                        <span className="section-header-number">02.</span>
                        Where I've Worked
                        <span className="section-header-line"></span>
                    </h2>

                    <div className="prose">
                        {loading ? <p>Loading...</p> : <ReactMarkdown>{content.replace('## Experience', '')}</ReactMarkdown>}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
