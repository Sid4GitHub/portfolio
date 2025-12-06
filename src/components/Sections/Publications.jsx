import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../hooks/useMarkdown';

const Publications = () => {
    const { content, loading } = useMarkdown('content/publications.md');

    return (
        <section id="publications" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                >
                    <h2 className="section-header">
                        <span className="section-header-number">04.</span>
                        Publications
                        <span className="section-header-line"></span>
                    </h2>

                    <div className="prose">
                        {loading ? <p>Loading...</p> : <ReactMarkdown>{content.replace(/^##\s*Publications/m, '')}</ReactMarkdown>}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Publications;
