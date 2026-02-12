import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                <div className="w-[500px] h-[500px] bg-neonBlue/20 rounded-full blur-[120px] absolute -top-20 -left-20 animate-pulse-slow"></div>
                <div className="w-[500px] h-[500px] bg-neonPurple/20 rounded-full blur-[120px] absolute bottom-0 right-0 animate-pulse-slow delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neonBlue font-mono text-lg mb-4"
                    >
                        Hi, my name is
                    </motion.h3>

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
                                'React Enthusiast',
                                2000,
                                'Problem Solver',
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
                        I'm a 3rd Year B.Tech CSE student passionate about building scalable web applications.
                        Transforming ideas into seamless digital experiences with modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 rounded border border-neonBlue text-neonBlue hover:bg-neonBlue/10 transition duration-300 font-mono">
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="px-8 py-3 rounded bg-neonBlue/10 text-white hover:bg-neonBlue/20 transition duration-300 font-mono border border-transparent hover:border-neonBlue/50">
                            Resume
                        </a>
                    </motion.div>

                    <div className="flex gap-6 mt-12 text-3xl text-secondary">
                        <a href="https://github.com/anjalivarshney8923" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors transform hover:scale-110">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/anjali-varshney-7703302a2/" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors transform hover:scale-110">
                            <AiFillLinkedin />
                        </a>
                        <a href="mailto:anjalivarshney405@example.com" className="hover:text-neonBlue transition-colors transform hover:scale-110">
                            <AiOutlineMail />
                        </a>
                    </div>

                </motion.div>

                {/* Hero Visual / Shapes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden md:block relative"
                >
                    {/* Abstract Floating Shapes (Glassmorphism) */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-neonBlue/20 to-transparent rounded-lg backdrop-blur-md border border-white/10 z-10"
                    ></motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-neonPurple/20 to-transparent rounded-full backdrop-blur-md border border-white/10 z-0"
                    ></motion.div>

                    <motion.div
                        className="w-full h-[400px] bg-gradient-to-b from-gray-800 to-black rounded-2xl border border-gray-700 p-4 transform rotate-3 hover:rotate-0 transition duration-500 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-code-pattern opacity-10"></div>

                        {/* Mock Code Editor */}
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono text-sm text-gray-300 space-y-2">
                            <p><span className="text-neonPurple">const</span> <span className="text-yellow-300">developer</span> = <span className="text-neonBlue">{'{'}</span></p>
                            <p className="pl-4">name: <span className="text-green-300">'Anjali Varshney'</span>,</p>
                            <p className="pl-4">skills: [<span className="text-green-300">'Java'</span>, <span className="text-green-300">'React'</span>, <span className="text-green-300">'Node'</span>],</p>
                            <p className="pl-4">hardWorker: <span className="text-orange-300">true</span>,</p>
                            <p className="pl-4">problemSolver: <span className="text-orange-300">true</span>,</p>
                            <p className="pl-4">hireable: <span className="text-orange-300">function</span>() <span className="text-neonBlue">{'{'}</span></p>
                            <p className="pl-8"><span className="text-neonPurple">return</span> <span className="text-orange-300">true</span>;</p>
                            <p className="pl-4"><span className="text-neonBlue">{'}'}</span></p>
                            <p><span className="text-neonBlue">{'}'}</span>;</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
