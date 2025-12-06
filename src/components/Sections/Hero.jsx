import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../../hooks/useMarkdown';

const Hero = () => {
    const { content, loading } = useMarkdown('content/hero.md');

    const one = <h1>Hi, my name is</h1>;
    const two = <h2 style={{ color: 'var(--text-color)', fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>Siddhartha Sadhukhan.</h2>;
    const three = <h3 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(30px, 6vw, 60px)', lineHeight: 1.1, marginTop: '10px', fontFamily: 'var(--font-display)' }}>I build the platforms for data.</h3>;
    const four = (
        <div style={{ marginTop: '20px' }}>
            {loading ? <p>Loading...</p> : (
                <div className="prose" style={{ fontSize: '1.1rem' }}>
                    <ReactMarkdown>{content.replace('# Siddhartha Sadhukhan', '').replace('## Software Engineer - III', '')}</ReactMarkdown>
                </div>
            )}
        </div>
    );
    const five = (
        <a
            href="#experience"
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
            Check out my experience!
        </a>
    );

    const items = [one, two, three, four, five];

    return (
        <section id="hero" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%' }}
                >
                    {one}
                    {two}
                    {three}
                    {four}
                    {five}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
