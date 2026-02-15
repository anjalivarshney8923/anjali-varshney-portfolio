import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const ProjectCard = ({ title, description, tech, githubLink, demoLink, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group bg-lightBg rounded-xl overflow-hidden border border-gray-800 hover:border-neonBlue/50 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
        >
            {/* Thumbnail / Gradient Placeholder */}
            <div className="h-48 overflow-hidden relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#233554] group-hover:from-[#112240] group-hover:to-[#0a192f] transition-all duration-500 relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 text-6xl font-bold text-gray-700 select-none">
                            {title[0]}
                        </div>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-neonBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-neonBlue transition-colors">{title}</h3>

                    <div className="flex gap-3">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neonBlue transition-transform hover:scale-110"
                            title="View Code"
                        >
                            <AiOutlineGithub size={22} />
                        </a>
                        {demoLink && (
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-neonBlue transition-transform hover:scale-110"
                                title="Live Demo"
                            >
                                <AiOutlineLink size={22} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-mono bg-[#0a192f] text-neonBlue/80 rounded border border-neonBlue/10 hover:border-neonBlue/40 cursor-default transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
