import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-background py-20 px-6 relative z-10 w-full">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                        <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                            <span className="text-neonBlue mr-2"></span> About Me
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full max-w-[200px] hidden md:block"></div>
                    </div>

                    <div className="text-secondary text-lg leading-relaxed space-y-6">
                        <p>
                            I am a <span className="text-neonBlue">3rd Year B.Tech CSE student</span> at ABES Institute of Technology with a passion for backend engineering and system architecture.
                            My journey in software development is driven by a strong desire to build scalable, efficient, and reliable systems.
                        </p>

                        <p>
                            I have developed a robust foundation in the <span className="text-neonBlue">Java ecosystem</span>, specializing in <span className="text-neonBlue">Spring Boot</span> for enterprise-grade applications.
                            My expertise extends to designing <span className="text-neonBlue">RESTful APIs</span>, optimizing database schemas with <span className="text-neonBlue">MySQL & PostgreSQL</span>, and creating responsive frontends using <span className="text-neonBlue">React</span>.
                        </p>

                        <p>
                            I am currently exploring microservices and cloud-native technologies to broaden my understanding of distributed systems.
                            I am eager to contribute to a product-based organization where I can apply my full-stack skills to solve complex problems and deliver impact.
                            
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
