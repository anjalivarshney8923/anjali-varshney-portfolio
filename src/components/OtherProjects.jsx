import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'ShareBite',
        shortDescription: 'A scalable food donation platform connecting restaurants with NGOs to reduce food waste. Features secure donation tracking and real-time updates.',
        tech: ['JSP', 'Servlet', 'MySQL', 'HTML', 'CSS'],
        githubLink: 'https://github.com/anjalivarshney8923',
        demoLink: null, // Add demo link if you have one
        image: '/assets/projects/sharebite-preview.png'
    },
    {
        title: 'Weather App',
        shortDescription: 'Real-time weather fetching application utilizing OpenWeatherMap API. Provides accurate forecasts with a clean responsive interface.',
        tech: ['React', 'Bootstrap', 'OpenWeatherMap API', 'Axios'],
        githubLink: 'https://github.com/anjalivarshney8923',
        demoLink: null,
        image: '/assets/projects/weather-preview.png'
    }
];

const OtherProjects = () => {
    return (
        <section id="other-projects" className="py-20 px-6 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2">Other Projects</span>
                        <span className="h-[1px] bg-gray-700 flex-grow ml-4 max-w-[200px]"></span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.shortDescription}
                            tech={project.tech}
                            githubLink={project.githubLink}
                            demoLink={project.demoLink}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherProjects;
