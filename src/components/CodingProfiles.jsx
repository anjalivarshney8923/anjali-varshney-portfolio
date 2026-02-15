import React from 'react';
import { motion } from 'framer-motion';
import { SiCodechef} from 'react-icons/si';

const CodingProfiles = () => {
    return (
        <section id="problem-solving" className="py-20 px-6 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center">
                    <span className="text-neonBlue mr-2">Problem Solving & Coding Profiles</span>
                    <span className="h-[1px] bg-gray-700 flex-grow ml-4"></span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 justify-center">
                    {/* LeetCode */}
                    <a href="https://www.codechef.com/users/anjali_8923" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 bg-lightBg rounded-lg border border-gray-700 hover:border-orange-500 transition duration-300 group shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1">
                        <div className="text-5xl text-orange-500 group-hover:scale-110 transition duration-300">
                            <SiCodechef />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-gray-100 group-hover:text-orange-500 transition duration-300">CodeChef</h4>
                            <p className="text-gray-400 text-sm mt-1">Check out my problem solving journey</p>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
