import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Springboard Internship",
        company: "Infosys",
        period: "June 2024 - August 2024",
        description: "Successfully completed the Infosys Springboard Virtual Internship program. Acquired hands-on experience in full-stack web development technologies.",
        skills: ["React", "Node.js", "Java", "PostgreSQL"],
    },
    {
        role: "Hackathon Participant",
        company: "Smart India Hackathon",
        period: "Nov 2023",
        description: "Participated in the national level hackathon, solving real-world problems. Collaborated with a team of 4 to build a prototype solution.",
        skills: ["Teamwork", "Problem Solving", "Rapid Prototyping"],
    }
];

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 bg-background relative overflow-hidden flex items-center">
            <div className="max-w-4xl mx-auto w-full px-6">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2">04.</span> Where I've Worked
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow max-w-[200px]"></div>
                </div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[9px] top-0 bg-background border-2 border-neonBlue w-4 h-4 rounded-full"></span>

                            <h3 className="text-xl font-bold text-gray-100 mb-1">{exp.role} <span className="text-neonBlue">@ {exp.company}</span></h3>
                            <span className="text-sm font-mono text-secondary mb-4 block">{exp.period}</span>

                            <div className="bg-lightBg p-6 rounded-lg shadow-lg hover:shadow-neonBlue/10 transition duration-300 border border-transparent hover:border-gray-700">
                                <p className="mb-4 text-secondary leading-relaxed">
                                    {exp.description}
                                </p>
                                <ul className="flex flex-wrap gap-3">
                                    {exp.skills.map((skill, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-mono text-neonBlue">
                                            <span>▹</span> {skill}
                                        </li>
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

export default Experience;
