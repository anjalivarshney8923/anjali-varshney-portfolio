import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineFolder, AiOutlineGithub, AiOutlineLink, AiOutlineClose, AiOutlineDownload, AiOutlineCopy, AiOutlineExpand } from 'react-icons/ai';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'ShareBite',
        shortDescription: 'A scalable food donation platform connecting restaurants with NGOs to reduce food waste. Features secure donation tracking and real-time updates.',
        tech: ['JSP', 'Servlet', 'MySQL', 'HTML', 'CSS'],
        githubLink: 'https://github.com/anjalivarshney8923',
        zipLink: '/assets/projects/sharebite.zip',
        copyLink: 'https://github.com/anjalivarshney8923/sharebite'
    },
    {
        title: 'Weather App',
        shortDescription: 'Real-time weather fetching application utilizing OpenWeatherMap API. Provides accurate forecasts with a clean responsive interface.',
        tech: ['React', 'Bootstrap', 'OpenWeatherMap API', 'Axios'],
        githubLink: 'https://github.com/anjalivarshney8923',
        zipLink: '/assets/projects/weather-app.zip',
        copyLink: 'https://github.com/anjalivarshney8923/weather-app'
    }
];

const OtherProjects = () => {
    return (
        <section id="other-projects" className="py-20 px-6 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center">
                    <span className="text-neonBlue mr-2">Other Noteworthy Projects</span>
                    <span className="h-[1px] bg-gray-700 flex-grow ml-4"></span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.shortDescription}
                            tech={project.tech}
                            githubLink={project.githubLink}
                            zipLink={project.zipLink}
                            copyLink={project.copyLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherProjects;
