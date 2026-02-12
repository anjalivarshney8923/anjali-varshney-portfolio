import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillGithub, AiOutlineLink, AiOutlineClose, AiOutlineDownload, AiOutlineFileText } from 'react-icons/ai';

const projects = [
    {
        title: 'ShareBite',
        shortDescription: 'A platform-based project that connects food donors with local charities to reduce food waste.',
        fullDescription: 'ShareBite is a comprehensive platform designed to bridge the gap between food donors and local charities. The primary goal is to minimize food wastage by redirecting surplus food to those in need. The platform features real-time tracking, intuitive dashboards for donors and recipients, and a seamless coordination system.',
        features: [
            'Real-time Food Donation Tracking',
            'Role-based Authentication (Donor, NGO, Admin)',
            'Location-based Matching Algorithm',
            'Rating and Feedback System',
            'Impact Analytics Dashboard'
        ],
        tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT Authentication'],
        github: 'https://github.com/anjalivarshney8923',
        external: '#',
        image: 'https://via.placeholder.com/600x400/112240/64ffda?text=ShareBite',
        files: [
            { name: 'Project Report.pdf', url: '/files/sharebite-report.pdf', type: 'pdf' },
            { name: 'Architecture Diagram.png', url: '/files/sharebite-arch.png', type: 'image' },
        ],
        challenges: 'Handling real-time updates and ensuring data consistency across multiple concurrent users was handled using optimized database queries and efficient state management.',
        learningOutcomes: 'Deepened understanding of RESTful API design, database normalization, and creating responsive user interfaces.'
    },
    {
        title: 'Global-IPI-Platform',
        shortDescription: 'A comprehensive web-based platform for intellectual property management.',
        fullDescription: 'The Global-IPI-Platform serves as a centralized hub for managing Intellectual Property Rights (IPR). It streamlines the patent filing process, offers tools for tracking filing statuses, and provides detailed analytics for IP portfolios. It is designed to be user-friendly while offering robust functionality for IP professionals.',
        features: [
            'Patent Filing Automation',
            'Status Tracking Pipeline',
            'IP Portfolio Analytics',
            'Secure Document Storage',
            'Automated Email Notifications'
        ],
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'MongoDB'],
        github: 'https://github.com/anjalivarshney8923',
        external: '#',
        image: 'https://via.placeholder.com/600x400/112240/64ffda?text=Global-IPI',
        files: [],
        challenges: 'Designing a schema that could accommodate various types of IP forms and maintaining compliance with data security standards.',
        learningOutcomes: 'Gained proficiency in secure data handling and designing complex frontend interactions using vanilla JavaScript and modern CSS.'
    },
    {
        title: 'Weather App',
        shortDescription: 'A real-time weather fetching application that provides accurate forecasts worldwide.',
        fullDescription: 'A responsive weather application that leverages the OpenWeatherMap API to provide real-time weather data. Users can search for cities globally to view current conditions, 5-day forecasts, humidity levels, wind speeds, and more. Visuals change dynamically based on the weather conditions.',
        features: [
            'Real-time Weather Data',
            '5-Day Forecast',
            'Dynamic Backgrounds',
            'Location-based Auto-detection',
            'Responsive Design'
        ],
        tech: ['React', 'OpenWeatherMap API', 'Tailwind CSS', 'Axios'],
        github: 'https://github.com/anjalivarshney8923',
        external: '#',
        image: 'https://via.placeholder.com/600x400/112240/64ffda?text=Weather+App',
        files: [
            { name: 'Demo Screenshot.png', url: '/files/weather-ss.png', type: 'image' }
        ],
        challenges: 'Managing API rate limits and handling asynchronous data fetching gracefully with loading states and error boundaries.',
        learningOutcomes: 'Mastered React Hooks (useEffect, useState), API integration patterns, and responsive UI design with Tailwind CSS.'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="min-h-screen py-20 bg-lightBg/50 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2"></span> Some Things I've Built
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow max-w-[200px]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-background rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-neonBlue transition duration-300 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-neonBlue/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-neonBlue transition duration-300">{project.title}</h3>
                                    <div className="flex gap-4 text-xl text-secondary z-10" onClick={(e) => e.stopPropagation()}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition"><AiFillGithub /></a>
                                        <a href={project.external} className="hover:text-neonBlue transition"><AiOutlineLink /></a>
                                    </div>
                                </div>

                                <p className="text-secondary mb-6 text-sm leading-relaxed h-20 overflow-hidden line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                <ul className="flex flex-wrap gap-2 text-xs font-mono text-secondary/80">
                                    {project.tech.slice(0, 4).map((tech, i) => (
                                        <li key={i} className="bg-neonBlue/10 px-2 py-1 rounded text-neonBlue">{tech}</li>
                                    ))}
                                    {project.tech.length > 4 && <li className="bg-neonBlue/10 px-2 py-1 rounded text-neonBlue">...</li>}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            layoutId={`card-${projects.indexOf(selectedProject)}`}
                            className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-neonBlue/30 shadow-2xl relative z-10 scrollbar-hide"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-2xl text-secondary hover:text-neonBlue transition z-20"
                            >
                                <AiOutlineClose />
                            </button>

                            <div className="relative h-64 md:h-80">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                                <div className="absolute bottom-6 left-6 md:left-10">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <div className="flex gap-4 mt-4">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-neonBlue/10 border border-neonBlue text-neonBlue rounded hover:bg-neonBlue/20 transition text-sm font-mono"
                                        >
                                            <AiFillGithub /> GitHub Repo
                                        </a>
                                        {selectedProject.external !== '#' && (
                                            <a
                                                href={selectedProject.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded hover:bg-gray-700 transition text-sm font-mono"
                                            >
                                                <AiOutlineLink /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
                                <div className="md:col-span-2 space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-center gap-2">
                                            <span className="text-neonBlue">01.</span> Description
                                        </h3>
                                        <p className="text-secondary leading-relaxed">
                                            {selectedProject.fullDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-center gap-2">
                                            <span className="text-neonBlue">02.</span> Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-secondary">
                                            {selectedProject.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-neonBlue mt-1">▹</span> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-center gap-2">
                                            <span className="text-neonBlue">03.</span> Challenges & Support
                                        </h3>
                                        <p className="text-secondary mb-4"><strong className="text-gray-300">Challenges:</strong> {selectedProject.challenges}</p>
                                        <p className="text-secondary"><strong className="text-gray-300">Outcomes:</strong> {selectedProject.learningOutcomes}</p>
                                    </div>

                                    {/* File Upload / Documentation Section */}
                                    {selectedProject.files && selectedProject.files.length > 0 && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-100 mb-3 flex items-center gap-2">
                                                <span className="text-neonBlue">04.</span> Project Documentation
                                            </h3>
                                            <div className="grid gap-3">
                                                {selectedProject.files.map((file, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 bg-lightBg rounded border border-gray-800 hover:border-gray-600 transition">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-neonBlue/10 rounded text-neonBlue">
                                                                <AiOutlineFileText />
                                                            </div>
                                                            <span className="text-sm text-gray-300">{file.name}</span>
                                                        </div>
                                                        <a
                                                            href={file.url}
                                                            download
                                                            className="flex items-center gap-2 text-xs font-mono text-neonBlue hover:underline"
                                                        >
                                                            <AiOutlineDownload /> Download
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-100 mb-3">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech, i) => (
                                                <span key={i} className="bg-neonBlue/10 border border-neonBlue/20 text-neonBlue px-3 py-1 rounded-full text-xs font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-4 bg-lightBg rounded-lg border border-gray-800">
                                        <h4 className="text-sm font-bold text-gray-100 mb-2">Project Status</h4>
                                        <div className="flex items-center gap-2 text-sm text-secondary mb-1">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Completed
                                        </div>
                                        <p className="text-xs text-secondary/60 mt-2">
                                            This project is strictly for portfolio demonstration purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
