import React from 'react';
import { motion } from 'framer-motion';
import {
    SiSpring, SiPostgresql, SiMysql, SiReact, SiJavascript,
    SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiPostman,
} from 'react-icons/si';
import { FaJava, FaServer } from 'react-icons/fa';

const TechStack = () => {
    const categories = [
        {
            title: "Backend",
            skills: [
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
                { name: "REST APIs", icon: <FaServer className="text-gray-400" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <SiReact className="text-cyan-400" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
                { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", icon: <SiGit className="text-red-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
                // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
            ]
        }
    ];

    return (
        <section id="tech-stack" className="min-h-screen py-20 px-6 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-100 mb-4 font-mono">
                        Tech Stack
                    </h2>
                    <div className="w-24 h-1 bg-neonBlue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-lightBg p-6 rounded-xl border border-gray-700 hover:border-neonBlue/50 transition duration-300 shadow-lg hover:shadow-neonBlue/20"
                        >
                            <h3 className="text-xl font-bold text-neonBlue mb-6 text-center border-b border-gray-700 pb-2">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-background/50 hover:bg-background transition duration-300 group"
                                    >
                                        <div className="text-3xl mb-2 group-hover:scale-110 transition duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-white transition duration-300 font-mono">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
