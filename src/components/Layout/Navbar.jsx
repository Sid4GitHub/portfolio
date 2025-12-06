import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();

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

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

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
                <a href="#" style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 'bold', zIndex: 101 }}>
                    ~/portfolio
                </a>

                {/* Desktop Menu */}
                {!isMobile && (
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
                                href={`${import.meta.env.BASE_URL}assets/docs/resume.pdf`}
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
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <div style={{ zIndex: 101 }} onClick={toggleMenu}>
                        <div style={{
                            width: '30px',
                            height: '2px',
                            backgroundColor: 'var(--accent-color)',
                            marginBottom: '6px',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                        }}></div>
                        <div style={{
                            width: '30px',
                            height: '2px',
                            backgroundColor: 'var(--accent-color)',
                            marginBottom: '6px',
                            opacity: menuOpen ? 0 : 1,
                            transition: 'all 0.3s ease'
                        }}></div>
                        <div style={{
                            width: '30px',
                            height: '2px',
                            backgroundColor: 'var(--accent-color)',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                        }}></div>
                    </div>
                )}

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobile && menuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '75%', // Side drawer width
                                height: '100vh',
                                backgroundColor: '#112240', // Slightly lighter than main bg
                                zIndex: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '-10px 0px 30px -15px rgba(2,12,27,0.7)'
                            }}
                        >
                            <ul style={{ listStyle: 'none', textAlign: 'center', width: '100%' }}>
                                {navLinks.map((link, i) => (
                                    <li key={link.name} style={{ margin: '20px 0' }}>
                                        <a
                                            href={link.url}
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                color: 'var(--text-color)',
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '1.2rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <span style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1rem' }}>0{i + 1}.</span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li style={{ marginTop: '30px' }}>
                                    <a
                                        href={`${import.meta.env.BASE_URL}assets/docs/resume.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            border: '1px solid var(--accent-color)',
                                            color: 'var(--accent-color)',
                                            padding: '1rem 3rem',
                                            borderRadius: '4px',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Backdrop to close menu when clicking outside (optional but good UX) */}
                {isMobile && menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(10, 25, 47, 0.7)',
                            backdropFilter: 'blur(3px)',
                            zIndex: 99
                        }}
                    ></div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
