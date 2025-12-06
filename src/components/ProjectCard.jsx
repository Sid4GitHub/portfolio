import { motion } from 'framer-motion';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
            style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '8px',
                padding: '2rem 1.75rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                transition: 'var(--transition)',
                cursor: 'pointer',
                border: '1px solid transparent'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-7px)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
            }}>
                <div style={{ color: 'var(--accent-color)', fontSize: '40px' }}>
                    <FaFolder />
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', color: 'var(--text-secondary)' }} aria-label="GitHub Link">
                            <FaGithub />
                        </a>
                    )}
                    {project.external && (
                        <a href={project.external} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px', color: 'var(--text-secondary)' }} aria-label="External Link">
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>

            <h3 style={{
                marginBottom: '10px',
                color: 'var(--text-color)',
                fontSize: '22px',
                fontFamily: 'var(--font-display)',
                fontWeight: 700
            }}>
                {project.title}
            </h3>

            <div style={{
                color: 'var(--text-secondary)',
                fontSize: '17px',
                marginBottom: '20px',
                flexGrow: 1
            }}>
                <p>{project.description}</p>
            </div>

            <footer style={{ marginTop: 'auto' }}>
                <ul style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: 0,
                    margin: 0,
                    listStyle: 'none'
                }}>
                    {project.tech.map((tech, i) => (
                        <li key={i} style={{
                            marginRight: '15px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            marginTop: '5px'
                        }}>
                            {tech}
                        </li>
                    ))}
                </ul>
            </footer>
        </motion.div>
    );
};

export default ProjectCard;
