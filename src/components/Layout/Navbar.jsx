import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', url: '#about' },
        { name: 'Experience', url: '#experience' },
        { name: 'Projects', url: '#projects' },
        { name: 'Publications', url: '#publications' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                background: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
                transition: 'all 0.3s ease',
                padding: scrolled ? '10px 0' : '20px 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    ~/portfolio
                </a>
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <a
                                href={link.url}
                                style={{
                                    color: 'var(--text-color)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.9rem',
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-color)'}
                            >
                                <span style={{ color: 'var(--accent-color)', marginRight: '5px' }}>0{i + 1}.</span>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: navLinks.length * 0.1 }}
                    >
                        <a
                            href="/assets/docs/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                border: '1px solid var(--accent-color)',
                                color: 'var(--accent-color)',
                                padding: '0.5rem 1rem',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem',
                                transition: 'var(--transition)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'rgba(var(--accent-color-rgb), 0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                            }}
                        >
                            Resume
                        </a>
                    </motion.li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
