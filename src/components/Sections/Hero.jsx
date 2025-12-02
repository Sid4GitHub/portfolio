import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../hooks/useMarkdown';

const Hero = () => {
    const { content, loading } = useMarkdown('content/hero.md');

    const one = <h1>Hi, my name is</h1>;
    const two = <h2 style={{ color: 'var(--text-color)', fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1.1 }}>Siddhartha Sadhukhan.</h2>;
    const three = <h3 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(30px, 6vw, 60px)', lineHeight: 1.1, marginTop: '10px' }}>I build the platforms for data.</h3>;
    const four = (
        <div style={{ marginTop: '20px', maxWidth: '540px' }}>
            {loading ? <p>Loading...</p> : (
                <div className="prose" style={{ fontSize: '1.1rem' }}>
                    <ReactMarkdown>{content.replace('# Siddhartha Sadhukhan', '').replace('## Software Engineer - III', '')}</ReactMarkdown>
                </div>
            )}
        </div>
    );
    const five = (
        <a
            href="#projects"
            style={{
                marginTop: '50px',
                display: 'inline-block',
                padding: '1.25rem 1.75rem',
                border: '1px solid var(--accent-color)',
                color: 'var(--accent-color)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                textDecoration: 'none',
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(var(--accent-color-rgb), 0.1)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
        >
            Check out my work!
        </a>
    );

    const items = [one, two, three, four, five];

    return (
        <section id="hero" className="section" style={{ minHeight: '100vh', padding: '0' }}>
            <div className="container">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
