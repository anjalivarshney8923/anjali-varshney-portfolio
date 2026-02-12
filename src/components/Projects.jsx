import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const projects = [
    {
        title: 'ShareBite',
        description: 'A platform-based project that connects food donors with local charities to reduce food waste. Features real-time donation tracking and location-based matching.',
        tech: ['React', 'Node.js', 'MySQL', 'Express'],
        github: '#',
        external: '#',
        image: 'https://via.placeholder.com/600x400/112240/64ffda?text=ShareBite'
    },
    {
        title: 'Global-IPI-Platform',
        description: 'A comprehensive web-based platform for intellectual property management. Streamlines patent filing processes and provides analytics for IP portfolios.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Backend API'],
        github: '#',
        external: '#',
        image: 'https://via.placeholder.com/600x400/112240/64ffda?text=Global-IPI'
    },
    {
        title: 'Weather App',
        description: 'A real-time weather fetching application that provides accurate forecasts, humidity levels, and wind speeds for any location worldwide using OpenWeatherMap API.',
        tech: ['React', 'API Integration', 'Tailwind CSS'],
        github: '#',
        external: '#',
        image: 'https://via.placeholder.com/600x400/112240/64ffda?text=Weather+App'
    }
];

const Projects = () => {
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
                        <span className="text-neonBlue mr-2">03.</span> Some Things I've Built
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow max-w-[200px]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-background rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-neonBlue transition duration-300 group"
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
                                    <div className="flex gap-4 text-xl text-secondary">
                                        <a href={project.github} className="hover:text-neonBlue transition"><AiFillGithub /></a>
                                        <a href={project.external} className="hover:text-neonBlue transition"><AiOutlineLink /></a>
                                    </div>
                                </div>

                                <p className="text-secondary mb-6 text-sm leading-relaxed h-20 overflow-hidden">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-2 text-xs font-mono text-secondary/80">
                                    {project.tech.map((tech, i) => (
                                        <li key={i} className="bg-neonBlue/10 px-2 py-1 rounded text-neonBlue">{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
