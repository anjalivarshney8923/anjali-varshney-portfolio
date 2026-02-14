import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-[#112240] w-full max-w-4xl h-[85vh] rounded-xl flex flex-col shadow-2xl border border-neonBlue/30 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-[#0a192f] rounded-t-xl">
                        <h2 className="text-xl font-bold text-neonBlue font-mono">Resume Preview</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Body - PDF Viewer */}
                    <div className="flex-grow bg-gray-200 overflow-hidden relative">
                        {/* Fallback for browsers that don't support iframe PDF viewing nicely */}
                        <iframe
                            src="/assets/resume.pdf"
                            className="w-full h-full"
                            title="Resume PDF"
                        />
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-700 bg-[#0a192f] rounded-b-xl flex flex-col sm:flex-row gap-4 justify-end">
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-2 rounded border border-neonBlue text-neonBlue hover:bg-neonBlue/10 transition duration-300 font-mono"
                        >
                            <FaExternalLinkAlt /> Open in New Tab
                        </a>
                        <a
                            href="/assets/resume.pdf"
                            download="Anjali_Varshney_Resume.pdf"
                            className="flex items-center justify-center gap-2 px-6 py-2 rounded bg-neonBlue text-[#0a192f] hover:bg-neonBlue/80 transition duration-300 font-mono font-bold"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResumeModal;
