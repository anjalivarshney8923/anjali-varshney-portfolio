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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

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
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg bg-[#0a192f]/90 backdrop-blur-md' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple cursor-pointer">
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
                <div className="md:hidden text-2xl text-neonBlue cursor-pointer z-50" onClick={toggleMenu}>
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-[#0a192f] z-40 flex flex-col items-center justify-center p-8 h-screen w-screen"
                    >
                        <div className="absolute top-6 right-6 text-3xl text-neonBlue cursor-pointer" onClick={closeMenu}>
                            {/* Close icon is handled by the toggle button in the header, but we can add an extra one here or rely on the header one. 
                                Since the header is z-50 and this overlay is z-40, the header's close button is visible. 
                                However, user asked for "Close icon (X) on top right". 
                                The header button transforms deeply. Let's rely on the header button but ensures header is visible.
                             */}
                        </div>

                        <ul className="flex flex-col items-center space-y-8 text-2xl text-gray-300 font-medium w-full">
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full text-center">
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        onClick={closeMenu}
                                        className="block w-full py-2 hover:text-neonBlue transition duration-300 cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <button
                                onClick={() => { openResume(); closeMenu(); }}
                                className="px-10 py-4 border border-neonBlue text-neonBlue rounded text-lg hover:bg-neonBlue/10 transition duration-300 font-mono"
                            >
                                Resume
                            </button>
                        </div>
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
