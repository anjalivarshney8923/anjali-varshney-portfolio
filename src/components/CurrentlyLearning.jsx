import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaNetworkWired } from 'react-icons/fa';
import { BiMicrochip } from 'react-icons/bi';
import { SiSpring } from 'react-icons/si';

const CurrentlyLearning = () => {
    // Using safer icons
    const learningItems = [
        { name: "Microservices", icon: <FaNetworkWired className="text-neonBlue" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "System Design", icon: <BiMicrochip className="text-yellow-500" /> },
        { name: "Spring Security", icon: <SiSpring className="text-green-500" /> },
    ];

    return (
        <section className="py-20 px-6 bg-lightBg relative z-10 w-full">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-100 mb-12 flex items-center justify-center gap-4">
                    <span className="h-[1px] w-12 bg-gray-700"></span>
                    <span className="text-neonPurple whitespace-nowrap">Currently Learning & Exploring</span>
                    <span className="h-[1px] w-12 bg-gray-700"></span>
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {learningItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background border border-gray-700 px-6 py-4 rounded-lg flex items-center gap-4 hover:border-neonPurple transition duration-300 min-w-[200px]"
                        >
                            <div className="text-3xl">{item.icon}</div>
                            <span className="text-gray-300 font-mono text-sm font-bold">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentlyLearning;
