import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineCheckCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const name = formData.get('from_name');
        const email = formData.get('from_email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            toast.error("Please fill in all fields.");
            return;
        }

        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
            .then(() => {
                setSuccess(true);
                toast.success("Message sent successfully!");
                form.current.reset();
                setTimeout(() => setSuccess(false), 5000);
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
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-background relative z-10 w-full border-t border-gray-800">
            <Toaster position="bottom-right" toastOptions={{ style: { background: '#112240', color: '#ccd6f6' } }} />

            <div className="max-w-4xl mx-auto px-6 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-neonBlue font-mono mb-4 text-sm tracking-widest uppercase">
                        What's Next?
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 font-mono">
                        Get In Touch
                    </h2>

                    <p className="max-w-xl mx-auto text-secondary text-lg mb-12 leading-relaxed">
                        I'm currently looking for new opportunities as a Java Full Stack Developer.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    {success ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-green-500/10 border border-green-500 text-green-400 p-8 rounded-lg max-w-lg mx-auto flex flex-col items-center gap-4"
                        >
                            <AiOutlineCheckCircle className="text-6xl" />
                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                            <p>Thanks for reaching out. I'll get back to you soon.</p>
                            <button onClick={() => setSuccess(false)} className="text-sm underline mt-4 hover:text-white">Send another message</button>
                        </motion.div>
                    ) : (
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="max-w-lg mx-auto bg-lightBg p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-neonBlue/30 transition duration-500"
                        >
                            <div className="space-y-6 text-left">
                                <div className="flex flex-col group">
                                    <label className="text-neonBlue font-mono text-sm mb-2 group-focus-within:text-white transition">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        className="bg-background border border-gray-700 rounded p-3 text-gray-300 focus:outline-none focus:border-neonBlue transition duration-300"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col group">
                                    <label className="text-neonBlue font-mono text-sm mb-2 group-focus-within:text-white transition">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        className="bg-background border border-gray-700 rounded p-3 text-gray-300 focus:outline-none focus:border-neonBlue transition duration-300"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col group">
                                    <label className="text-neonBlue font-mono text-sm mb-2 group-focus-within:text-white transition">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="bg-background border border-gray-700 rounded p-3 text-gray-300 focus:outline-none focus:border-neonBlue transition duration-300 resize-none"
                                        placeholder="Hello! I would like to discuss..."
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    className={`w-full py-4 bg-transparent border border-neonBlue text-neonBlue font-mono rounded hover:bg-neonBlue/10 transition duration-300 flex justify-center items-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-neonBlue border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            Send Message <AiOutlineMail />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    )}

                    <div className="flex justify-center gap-8 mt-16 text-3xl">
                        <motion.a
                            whileHover={{ y: -5, color: '#00ffff' }}
                            href="https://github.com/anjalivarshney8923"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition duration-300"
                        >
                            <AiFillGithub />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -5, color: '#00ffff' }}
                            href="https://www.linkedin.com/in/anjali-varshney-7703302a2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition duration-300"
                        >
                            <AiFillLinkedin />
                        </motion.a>

                    </div>

                    <footer className="mt-12 text-gray-600 text-sm font-mono">
                        <p>Designed & Built by Anjali Varshney</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
