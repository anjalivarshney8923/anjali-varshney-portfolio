import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineCopy } from 'react-icons/ai';

const Hero = ({ openResume }) => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Subtle Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                <div className="w-[600px] h-[600px] bg-neonBlue/5 rounded-full blur-[150px] absolute -top-20 -left-20"></div>
                <div className="w-[600px] h-[600px] bg-neonPurple/5 rounded-full blur-[150px] absolute bottom-0 right-0"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neonBlue font-mono text-base mb-4 tracking-wide"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 leading-tight tracking-tight"
                    >
                        Anjali Varshney.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-secondary mb-6 h-[80px] md:h-auto"
                    >
                        <TypeAnimation
                            sequence={[
                                'Java Full Stack Developer',
                                2000,
                                'Building Scalable Systems',
                                2000,
                                'React & Spring Boot Expert',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-secondary max-w-xl text-lg mb-8 leading-relaxed"
                    >
                        I build accessible, pixel-perfect, and performant web applications.
                        Focused on creating scalable backend systems and modern frontend experiences using the Java ecosystem.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#featured-project" className="px-8 py-3 rounded border border-neonBlue text-neonBlue hover:bg-neonBlue/10 transition duration-300 font-mono">
                            View Projects
                        </a>
                        <button
                            onClick={openResume}
                            className="px-8 py-3 rounded bg-neonBlue text-background hover:bg-neonBlue/80 transition duration-300 font-mono font-bold"
                        >
                            Download Resume
                        </button>
                    </motion.div>

                    <div className="flex gap-6 mt-12 text-3xl text-secondary">
                        <a href="https://github.com/anjalivarshney8923" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors transform hover:scale-110">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/anjali-varshney-7703302a2/" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors transform hover:scale-110">
                            <AiFillLinkedin />
                        </a>
                    </div>

                </motion.div>

                {/* Hero Visual - Cleaned up */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden md:block relative pl-10"
                >
                    <div className="relative w-full h-[350px] bg-[#112240] rounded-lg shadow-2xl border border-gray-700 p-6 overflow-hidden group hover:border-neonBlue/50 transition duration-500">
                        <div className="flex gap-2 mb-6 border-b border-gray-700 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <div className="font-mono text-sm space-y-2">
                            <p className="text-gray-400">
                                <span className="text-neonPurple">package</span> <span className="text-white">com.anjali.portfolio</span>;
                            </p>
                            <p className="text-gray-400">
                                <span className="text-neonPurple">public class</span> <span className="text-yellow-300">Developer</span> <span className="text-white">{'{'}</span>
                            </p>
                            <div className="pl-6 space-y-2">
                                <p className="text-gray-400">
                                    <span className="text-neonBlue">String</span> name = <span className="text-green-300">"Anjali Varshney"</span>;
                                </p>
                                <p className="text-gray-400">
                                    <span className="text-neonBlue">String</span> role = <span className="text-green-300">"Full Stack Developer"</span>;
                                </p>
                                <p className="text-gray-400">
                                    <span className="text-neonBlue">String[]</span> stack = <span className="text-white">{'{'}</span> <span className="text-green-300">"Java"</span>, <span className="text-green-300">"Spring Boot"</span>, <span className="text-green-300">"React"</span> <span className="text-white">{'}'}</span>;
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <span className="text-neonPurple">public void</span> <span className="text-yellow-300">buildFuture</span>() <span className="text-white">{'{'}</span>
                                </p>
                                <p className="text-gray-500 pl-6">// Coding scalable solutions...</p>
                                <p className="text-white">{'}'}</p>
                            </div>
                            <p className="text-white">{'}'}</p>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neonBlue/10 rounded-full blur-2xl group-hover:bg-neonBlue/20 transition duration-500"></div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView({ flex: 'smooth' })}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
