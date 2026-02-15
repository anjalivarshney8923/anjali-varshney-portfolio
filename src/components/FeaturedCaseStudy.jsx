import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineLink, AiOutlineDownload } from 'react-icons/ai';
import { SiSpringboot, SiReact, SiPostgresql, SiJsonwebtokens, SiTailwindcss } from 'react-icons/si';

const FeaturedCaseStudy = () => {
    return (
        <section id="featured-project" className="relative py-24 bg-background overflow-hidden relative">

            {/* 1. Full-width Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020c1b] via-[#0a192f] to-[#112240] opacity-90"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neonPurple/20 via-transparent to-transparent animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neonBlue/10 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2">Featured Project</span>
                        <span className="h-[1px] bg-gray-700 flex-grow ml-4 max-w-[200px]"></span>
                    </h2>
                </motion.div>

                {/* Case Study Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-3xl overflow-hidden bg-[#112240]/50 backdrop-blur-sm border border-gray-700 shadow-2xl"
                >

                    {/* Header: Title & Subtitle */}
                    <div className="relative p-10 md:p-20 text-center border-b border-gray-700 overflow-hidden group">

                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0 select-none pointer-events-none">
                            <img
                                src="/assets/projects/global-ipi-preview.png"
                                alt="Global IPI Dashboard"
                                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 blur-sm group-hover:blur-0 transform scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#112240]/80 to-[#0a192f]/95"></div>
                        </div>

                        <div className="relative z-10">
                            <motion.h3
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg"
                            >
                                Global IPI Platform
                            </motion.h3>
                            <p className="text-lg md:text-xl text-neonBlue font-mono opacity-90 mb-8">
                                Enterprise Intellectual Property Intelligence System
                            </p>

                            <div className="flex justify-center gap-6 flex-wrap">
                                <a
                                    href="https://github.com/anjalivarshney8923/global-ipi-platform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-8 py-3 bg-neonBlue text-background font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                                >
                                    <AiFillGithub size={20} /> View on GitHub
                                </a>

                                <a href="/assets/projects/global-ipi-doc.pdf" download
                                    className="flex items-center gap-2 px-8 py-3 bg-neonBlue text-background font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(100,255,218,0.3)]">
                                    <AiOutlineDownload /> Documentation
                                </a>
                            </div>
                        </div>
                    </div>



                    {/* Content Body */}
                    <div className="p-8 md:p-16 space-y-16">

                        {/* 1. Problem & Solution */}
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                            <div>
                                <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[2px] bg-neonPurple"></span> Problem Statement
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Managing global intellectual property rights is complex, involving fragmented systems for filing, tracking, and compliance. This fragmentation leads to data inconsistency, missed deadlines, and significant operational inefficiencies for IP professionals.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[2px] bg-neonBlue"></span> Solution Overview
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    A centralized, role-based platform streamlining the entire IP management lifecycle. It features real-time patent tracking, automated compliance checks, and secure document handling, visualized through an intuitive, data-driven dashboard.
                                </p>
                            </div>
                        </div>

                        {/* 2. Architecture */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-100 mb-8 text-center md:text-left">System Architecture</h4>
                            <div className="p-8 bg-[#0a192f] rounded-2xl border border-gray-700 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0 relative">
                                <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-gray-700 -z-0 hidden md:block"></div>

                                <ArchitectureCard icon={<SiReact className="text-[#61DAFB]" />} title="Frontend" subtitle="React SPA" />
                                <ArchitectureCard icon={<SiJsonwebtokens className="text-white" />} title="Security" subtitle="JWT & OAuth2" />
                                <ArchitectureCard icon={<SiSpringboot className="text-[#6DB33F]" />} title="Backend" subtitle="Spring Boot" />
                                <ArchitectureCard icon={<SiPostgresql className="text-[#336791]" />} title="Database" subtitle="PostgreSQL" />
                            </div>
                        </div>

                        {/* 3. Tech Stack & Key Features */}
                        <div className="grid lg:grid-cols-5 gap-12">

                            {/* Tech Stack */}
                            <div className="lg:col-span-2">
                                <h4 className="text-xl font-bold text-gray-100 mb-6">Tech Stack</h4>
                                <div className="flex flex-wrap gap-3">
                                    {['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Redux', 'Tailwind CSS', 'JWT Authentication', 'Google Patent API'].map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-lightBg border border-gray-700 rounded-lg text-neonBlue text-sm font-mono hover:border-neonBlue transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="lg:col-span-3">
                                <h4 className="text-xl font-bold text-gray-100 mb-6">Key Features</h4>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <FeaturePoint text="Role-Based Access Control (RBAC)" />
                                    <FeaturePoint text="Real-time Patent Analytics Dashboard" />
                                    <FeaturePoint text="Automated Filing Deadline Alerts" />
                                    <FeaturePoint text="Secure Document Vault" />
                                    <FeaturePoint text="Global Patent Search Integration" />
                                    <FeaturePoint text="Audit Logs & Compliance Tracking" />
                                </ul>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ArchitectureCard = ({ icon, title, subtitle }) => (
    <div className="relative z-10 bg-[#112240] p-6 w-36 h-36 rounded-xl border border-gray-600 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
        <div className="text-4xl mb-3">{icon}</div>
        <div className="font-bold text-gray-100 text-sm">{title}</div>
        <div className="text-xs text-secondary mt-1">{subtitle}</div>
    </div>
);

const FeaturePoint = ({ text }) => (
    <motion.li
        whileHover={{ x: 5 }}
        className="flex items-start gap-3 text-secondary"
    >
        <span className="text-neonBlue mt-1.5 text-xs">●</span>
        <span className="text-sm leading-relaxed">{text}</span>
    </motion.li>
);

export default FeaturedCaseStudy;
