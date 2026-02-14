import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ openResume }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Tech Stack', to: 'tech-stack' },
        { name: 'Projects', to: 'featured-project' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple cursor-pointer z-50">
                    AV
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <li key={link.name} className="cursor-pointer hover:text-neonBlue transition duration-300">
                            <Link to={link.to} smooth={true} duration={500} offset={-70}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                <button onClick={openResume} className="hidden md:block px-6 py-2 border border-neonBlue text-neonBlue rounded hover:bg-neonBlue/10 transition duration-300 font-mono text-xs">
                    Resume
                </button>

                {/* Mobile Menu Icon */}
                <div className="md:hidden z-50 text-2xl text-neonBlue cursor-pointer" onClick={toggleMenu}>
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-[#0a192f] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <ul className="flex flex-col items-center space-y-6 text-xl text-gray-300 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        onClick={toggleMenu}
                                        className="hover:text-neonBlue transition duration-300 cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => { openResume(); toggleMenu(); }}
                            className="px-8 py-3 border border-neonBlue text-neonBlue rounded hover:bg-neonBlue/10 transition duration-300 font-mono text-sm"
                        >
                            Resume
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neonBlue to-neonPurple origin-left"
                style={{ scaleX }}
            />
        </motion.nav>
    );
};

export default Navbar;
