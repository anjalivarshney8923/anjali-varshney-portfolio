import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
    const certifications = [
        {
            title: "Java Foundation",
            organization: "Infosys Springboard",
            date: "2024",
            link: "/assets/certificates/java-foundation.pdf",
            description: "Deep dive into Java fundamentals and object-oriented programming."
        },
        {
            title: "Data Analytics",
            organization: "NPTEL",
            date: "2023",
            link: "/assets/certificates/nptel-data-analytics.pdf",
            description: "Comprehensive course on data analysis techniques and tools."
        },
        {
            title: "AI Training",
            organization: "Ministry of Education (MoE)",
            date: "2023",
            link: "/assets/certificates/moe-ai-training.pdf",
            description: "Training on Artificial Intelligence concepts and applications."
        },
        {
            title: "JSP & MySQL",
            organization: "ABESIT",
            date: "2022",
            link: "/assets/certificates/abesit-jsp-mysql.pdf",
            description: "Web development with Java Server Pages and database management."
        },
        {
            title: "Data Science",
            organization: "NITTTR",
            date: "2023",
            link: "/assets/certificates/nitttr-data-science.pdf",
            description: "Data Science methodologies and practical implementations."
        }
    ];

    return (
        <section id="certifications" className="py-20 px-6 bg-lightBg relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center">
                    <span className="text-neonBlue mr-2">Certifications</span>
                    <span className="h-[1px] bg-gray-700 flex-grow ml-4"></span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background/50 p-6 rounded-lg border border-gray-700 hover:border-neonBlue transition duration-300 flex flex-col justify-between group shadow-lg hover:shadow-neonBlue/10"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-neonBlue/10 p-3 rounded-full text-neonBlue text-2xl group-hover:scale-110 transition duration-300">
                                    <FaCertificate />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-neonBlue transition duration-300">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">{cert.organization}</p>
                                </div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center text-sm">
                                <span className="text-gray-500 font-mono">{cert.date}</span>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neonBlue hover:underline transition font-bold">
                                    View Certificate <FaExternalLinkAlt size={12} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
