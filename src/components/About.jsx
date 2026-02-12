import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-lightBg py-20 px-6">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Placeholder with Frame */}
                    <div className="relative group mx-auto md:mx-0">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-neonBlue rounded-lg transition-transform duration-300 group-hover:top-2 group-hover:left-2"></div>
                        <div className="w-[300px] h-[300px] bg-gray-700 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-500 relative z-10">
                            {/* Replace with actual image */}
                            <div className="flex items-center justify-center h-full text-gray-500 bg-gray-800">
                                User Image
                            </div>
                        </div>
                    </div>

                    <div className="text-secondary">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                                About Me
                            </h2>
                            <div className="h-[1px] bg-gray-700 flex-grow max-w-[200px]"></div>
                        </div>

                        <p className="mb-6 leading-relaxed">
                            Hello! My name is Anjali Varshney and I enjoy creating things that live on the internet.
                            My interest in full stack development started back in my first year of college when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                        </p>

                        <p className="mb-6 leading-relaxed">
                            Fast-forward to today, I'm a <span className="text-neonBlue">3rd Year B.Tech CSE student</span> at ABES Institute of Technology.
                            I have a strong foundation in the <span className="text-neonBlue">Java ecosystem</span> and <span className="text-neonBlue">Spring Boot</span>, along with extensive experience in building scalable web applications using <span className="text-neonBlue">React</span>, <span className="text-neonBlue">Node.js</span>, and <span className="text-neonBlue">PostgreSQL</span>.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            I am currently looking for opportunities to apply my skills in a professional environment and contribute to innovative projects.
                        </p>

                        <ul className="grid grid-cols-2 gap-2 font-mono text-sm max-w-sm mt-8">
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> Java (DSA)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> React.js
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> Spring Boot
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> Node.js
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> MySQL
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> Tailwind CSS
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-neonBlue">▹</span> PostgreSQL
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
