import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiPython, SiC, SiJavascript, SiMysql, SiTailwindcss, SiGit, SiPostgresql } from 'react-icons/si';

const skills = [
    {
        category: 'Programming', items: [
            { name: 'Java', icon: <FaJava />, level: 90 },
            { name: 'Python', icon: <SiPython />, level: 75 },
            { name: 'C', icon: <SiC />, level: 70 },
        ]
    },
    {
        category: 'Frontend', items: [
            { name: 'React', icon: <FaReact />, level: 85 },
            { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
            { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
            { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
            { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
        ]
    },
    {
        category: 'Backend', items: [
            { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
            { name: 'Spring Boot', icon: <SiSpringboot />, level: 65 },
            { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
        ]
    },
    {
        category: 'Database & Tools', items: [
            { name: 'MySQL', icon: <SiMysql />, level: 80 },
            { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
            { name: 'Git', icon: <SiGit />, level: 85 },
        ]
    },
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 bg-background relative z-10">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2"></span> Skills
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow max-w-[200px]"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, index) => (
                        <div key={index} className="space-y-6">
                            <h3 className="text-xl font-bold text-neonPurple mb-4">{category.category}</h3>
                            <div className="space-y-4">
                                {category.items.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-lightBg p-4 rounded shadow-lg border border-transparent hover:border-neonBlue transition duration-300 relative overflow-hidden group"
                                    >
                                        <div className="flex items-center justify-between mb-2 z-10 relative">
                                            <div className="flex items-center gap-3 text-secondary group-hover:text-white transition-colors">
                                                <span className="text-2xl text-neonBlue">{skill.icon}</span>
                                                <span className="font-mono text-sm">{skill.name}</span>
                                            </div>
                                            <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mt-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="bg-gradient-to-r from-neonBlue to-neonPurple h-full rounded-full"
                                            ></motion.div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-neonBlue/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
