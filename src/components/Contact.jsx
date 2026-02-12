import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "SERVICE_ID",      // 🔥 Replace
            "TEMPLATE_ID",     // 🔥 Replace
            form.current,
            "PUBLIC_KEY"       // 🔥 Replace
        )
            .then(() => {
                toast.success("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-lightBg/50 relative">
            <Toaster position="bottom-right" />
            <div className="max-w-4xl mx-auto px-6 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-neonBlue font-mono mb-4 text-sm tracking-widest">
                        What's Next?
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        Get In Touch
                    </h2>

                    <p className="max-w-xl mx-auto text-secondary text-lg mb-12 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="max-w-lg mx-auto bg-background p-8 rounded shadow-lg border border-gray-800 space-y-6 text-left"
                    >
                        <div className="flex flex-col">
                            <label className="text-neonBlue font-mono text-sm mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="from_name"   // ✅ MUST MATCH EMAILJS TEMPLATE
                                className="bg-lightBg border border-gray-700 rounded p-2 text-gray-300 focus:outline-none focus:border-neonBlue transition duration-300"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-neonBlue font-mono text-sm mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"  // ✅ MUST MATCH EMAILJS TEMPLATE
                                className="bg-lightBg border border-gray-700 rounded p-2 text-gray-300 focus:outline-none focus:border-neonBlue transition duration-300"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-neonBlue font-mono text-sm mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"   // ✅ MUST MATCH EMAILJS TEMPLATE
                                rows="4"
                                className="bg-lightBg border border-gray-700 rounded p-2 text-gray-300 focus:outline-none focus:border-neonBlue transition duration-300"
                                placeholder="Hello! I would like to discuss..."
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={loading}
                            className={`w-full py-3 bg-transparent border border-neonBlue text-neonBlue font-mono rounded hover:bg-neonBlue/10 transition duration-300 flex justify-center items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-neonBlue border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>
                    </form>

                    <div className="flex justify-center gap-8 mt-12 text-3xl">
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="https://github.com/anjalivarshney8923"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-neonBlue transition duration-300"
                        >
                            <AiFillGithub />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -5 }}
                            href="https://www.linkedin.com/in/anjali-varshney-7703302a2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-neonBlue transition duration-300"
                        >
                            <AiFillLinkedin />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
