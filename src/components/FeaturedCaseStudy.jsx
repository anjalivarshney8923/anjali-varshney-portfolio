import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';
import { SiSpringboot, SiReact, SiPostgresql, SiJsonwebtokens } from 'react-icons/si';

const FeaturedCaseStudy = () => {
    return (
        <section id="featured-project" className="py-20 px-6 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2">Featured Case Study</span>
                        <span className="h-[1px] bg-gray-700 flex-grow ml-4"></span>
                    </h2>
                </motion.div>

                {/* Main Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-gray-800 bg-[#112240] shadow-2xl relative"
                >
                    {/* A. Animated Gradient Header */}
                    <div className="relative p-10 md:p-14 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] via-[#0f172a] to-[#112240] animate-gradient-x"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neonBlue/10 via-transparent to-transparent"></div>

                        <div className="relative z-10 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                    Global IPI Platform
                                </h3>
                                <p className="text-xl text-neonBlue font-mono opacity-90 mb-6">
                                    Enterprise Intellectual Property Intelligence System
                                </p>
                            </motion.div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                                {['Spring Boot', 'React', 'PostgreSQL', 'Microservices', 'JWT'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 text-white backdrop-blur-md rounded-full text-xs font-mono border border-white/10 shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="https://github.com/anjalivarshney8923/global-ipi-platform" target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 bg-neonBlue text-background font-bold rounded hover:bg-white transition-colors duration-300 flex items-center gap-2">
                                    <AiFillGithub /> View GitHub
                                </a>
                                <a href="/assets/projects/global-ipi-doc.pdf" download
                                    className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/5 transition-colors duration-300 flex items-center gap-2">
                                    <AiOutlineDownload /> Documentation
                                </a>
                                <a href="/assets/projects/global-ipi.zip" download
                                    className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/5 transition-colors duration-300 flex items-center gap-2">
                                    <AiOutlineDownload /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* B. Case Study Content */}
                    <div className="p-8 md:p-12 space-y-12 bg-background/50">

                        {/* 1. Problem & Solution */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-neonBlue font-mono font-bold mb-4 text-lg">01. Problem Statement</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Managing global intellectual property rights is a complex process involving fragmented systems for filing, tracking, payments, and compliance across different regions. This leads to data inconsistency, missed deadlines, and significant operational inefficiencies.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-neonBlue font-mono font-bold mb-4 text-lg">02. Solution Overview</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    A centralized, role-based platform that unifies the entire IP management lifecycle. It features real-time patent tracking, automated compliance checks, and secure document handling, all accessible through an intuitive dashboard tailored for IP professionals.
                                </p>
                            </div>
                        </div>

                        {/* 3. System Architecture */}
                        <div>
                            <h4 className="text-neonBlue font-mono font-bold mb-8 text-lg text-center md:text-left">03. System Architecture</h4>
                            <div className="bg-[#0a192f] border border-gray-700 p-8 rounded-xl flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 relative">
                                {/* Connector Line (Desktop) */}
                                <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gray-700 -z-0 hidden md:block"></div>

                                <ArchitecturalBlock icon={<SiReact className="text-[#61DAFB]" />} label="Frontend Client" sub="React SPA" />
                                <ArchitecturalBlock icon={<SiJsonwebtokens className="text-white" />} label="Security Layer" sub="JWT & OAuth2" />
                                <ArchitecturalBlock icon={<SiSpringboot className="text-[#6DB33F]" />} label="Backend Service" sub="Spring Boot API" />
                                <ArchitecturalBlock icon={<SiPostgresql className="text-[#336791]" />} label="Data Persistence" sub="PostgreSQL" />
                            </div>
                        </div>

                        {/* 4. Key Features & 5. Impact */}
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-neonBlue font-mono font-bold mb-4 text-lg">04. Key Features</h4>
                                <ul className="space-y-3">
                                    <FeatureItem text="Role-based access control (RBAC) ensuring data security." />
                                    <FeatureItem text="Secure JWT authentication for stateless session management." />
                                    <FeatureItem text="Real-time analytics dashboard for patent portfolio health." />
                                    <FeatureItem text="Scalable microservices-ready architecture." />
                                    <FeatureItem text="Automated email notifications for filing deadlines." />
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-neonBlue font-mono font-bold mb-4 text-lg">05. Challenges & Outcome</h4>
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-white font-bold mb-2">Technical Challenges</h5>
                                        <p className="text-gray-400 text-sm">
                                            Designing a schema to handle complex relationships between patents, owners, and legal actions while ensuring query performance was a significant hurdle.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold mb-2">Impact / Outcome</h5>
                                        <p className="text-gray-400 text-sm border-l-2 border-neonBlue pl-4">
                                            Delivered a modular, enterprise-ready architecture that increases processing efficiency by 40% and ensures 99.9% data consistency across filing records.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ArchitecturalBlock = ({ icon, label, sub }) => (
    <div className="relative z-10 bg-[#112240] p-6 rounded-lg border border-gray-600 w-40 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition duration-300">
        <div className="text-4xl mb-3">{icon}</div>
        <div className="font-bold text-gray-200 text-sm">{label}</div>
        <div className="text-xs text-mono text-neonBlue mt-1">{sub}</div>
    </div>
);

const FeatureItem = ({ text }) => (
    <motion.li
        whileHover={{ x: 5 }}
        className="flex items-start gap-3 text-gray-300 text-sm"
    >
        <span className="text-neonBlue mt-1">▹</span> {text}
    </motion.li>
);

export default FeaturedCaseStudy;
