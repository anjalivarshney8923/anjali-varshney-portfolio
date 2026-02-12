import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [scrolled, setScrolled] = useState(false);

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

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple cursor-pointer">
                    AV
                </div>

                <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-neonBlue transition duration-300"
                                activeClass="text-neonBlue"
                                spy={true}
                                offset={-70}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className="hidden md:block px-6 py-2 border border-neonBlue text-neonBlue rounded hover:bg-neonBlue/10 transition duration-300 font-mono text-xs">
                    Resume
                </button>

                {/* Mobile Menu Icon Placeholder */}
                <div className="md:hidden text-2xl text-neonBlue">
                    ☰
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neonBlue to-neonPurple origin-left"
                style={{ scaleX }}
            />
        </motion.nav>
    );
};

export default Navbar;
