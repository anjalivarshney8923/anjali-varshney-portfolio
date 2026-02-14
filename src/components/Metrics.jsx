import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
    { value: "3+", label: "Full Stack Projects" },
    { value: "1", label: "Internship Completed" },
    { value: "5+", label: "Technologies Mastered" },
    { value: "200+", label: "DSA Problems Solved" },
];

const Metrics = () => {
    return (
        <section className="py-10 bg-background border-y border-gray-800 relative z-10 w-full">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-neonBlue mb-2 font-mono">
                            {metric.value}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base font-medium">
                            {metric.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Metrics;
