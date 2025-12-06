import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../hooks/useMarkdown';

const Projects = () => {
    const { content, loading } = useMarkdown('content/projects.md');

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-header">
                        <span className="section-header-number">03.</span>
                        Some Things I've Built
                        <span className="section-header-line"></span>
                    </h2>

                    <div className="prose">
                        {loading ? <p>Loading...</p> : <ReactMarkdown>{content}</ReactMarkdown>}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
