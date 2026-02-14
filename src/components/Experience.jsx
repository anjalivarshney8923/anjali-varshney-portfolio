import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Infosys Springboard Virtual Internship 6.0",
        company: "Infosys",
        period: "November 24, 2025 – January 21, 2026",
        points: [
            "Got trained in full stack development using React & Java",
            "Built Global IPI Platform",
            "Integrated PostgreSQL database",
            "Developed REST APIs",
            "Understood MVC architecture",
            "Worked with version control (Git)"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 bg-background relative overflow-hidden flex items-center z-10 w-full">
            <div className="max-w-4xl mx-auto w-full px-6">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                        <span className="text-neonBlue mr-2">05.</span> Where I've Worked
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow max-w-[200px] hidden md:block"></div>
                </div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12 text-left"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[9px] top-0 bg-background border-2 border-neonBlue w-4 h-4 rounded-full"></span>

                            <h3 className="text-xl font-bold text-gray-100 mb-1">{exp.role} <span className="text-neonBlue">@ {exp.company}</span></h3>
                            <span className="text-sm font-mono text-secondary mb-4 block">{exp.period}</span>

                            <div className="bg-lightBg p-6 rounded-lg shadow-lg hover:shadow-neonBlue/10 transition duration-300 border border-transparent hover:border-gray-700">
                                <ul className="space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-secondary text-sm md:text-base">
                                            <span className="text-neonBlue mt-1">▹</span>
                                            {point}
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
