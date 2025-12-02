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
                >
                    <h2 style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-color)' }}>
                        <span style={{ color: 'var(--accent-color)', marginRight: '10px', fontSize: '1.5rem', fontFamily: 'var(--font-mono)' }}>04.</span>
                        Publications
                        <span style={{ display: 'block', height: '1px', width: '200px', background: 'var(--border-color)', marginLeft: '20px' }}></span>
                    </h2>

                    <div className="prose">
                        {loading ? <p>Loading...</p> : <ReactMarkdown>{content}</ReactMarkdown>}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Publications;
