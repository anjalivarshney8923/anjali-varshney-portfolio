import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineDownload, AiOutlineCopy } from 'react-icons/ai';

const ProjectCard = ({ title, description, tech, githubLink, zipLink, copyLink }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(copyLink || githubLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: '#00ffff', boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)' }}
            className="bg-lightBg p-6 rounded-xl border border-gray-700 transition-all duration-300 flex flex-col h-full group"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-neonBlue transition-colors">{title}</h3>
                <div className="flex gap-3 text-gray-400">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors">
                        <AiOutlineGithub size={20} />
                    </a>
                    <div className="relative">
                        <button onClick={handleCopy} className="hover:text-neonBlue transition-colors">
                            <AiOutlineCopy size={20} />
                        </button>
                        {copied && (
                            <span className="absolute -top-8 -right-2 bg-neonBlue text-background text-xs font-bold px-2 py-1 rounded">Copied!</span>
                        )}
                    </div>
                </div>
            </div>

            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono bg-[#112240] border border-neonBlue/30 text-neonBlue rounded">
                        {t}
                    </span>
                ))}
            </div>

            <a
                href={zipLink}
                download
                className="w-full flex items-center justify-center gap-2 py-2 rounded border border-gray-600 hover:border-neonBlue hover:text-neonBlue text-gray-300 text-sm font-mono transition-all duration-300"
            >
                <AiOutlineDownload /> Download ZIP
            </a>
        </motion.div>
    );
};

export default ProjectCard;
