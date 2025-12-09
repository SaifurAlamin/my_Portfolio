import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = ({ showSocials = false, hideHeader = false }) => {
    return (
        <section
            className={`bg-gray-950 text-white flex flex-col justify-center items-center w-full 
            ${hideHeader ? "pt-2 lg:pt-10" : "pt-2 lg:pt-24"} pb-2 lg:pb-20`}
        >
            {/* Header (hide if needed) */}
            {!hideHeader && (
                <motion.h2
                    className="text-4xl font-bold mb-6 mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-white">Connect </span>
                    <span className="text-blue-400">Me</span>
                </motion.h2>
            )}

            {/* Form */}
            <motion.form
                className="w-full max-w-md space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-white/30 text-white placeholder-white/60 
                               focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 
                               transition-all duration-300"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-white/30 text-white placeholder-white/60 
                               focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 
                               transition-all duration-300"
                />

                <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded-lg border border-white/30 text-white placeholder-white/60 
                               focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 
                               transition-all duration-300"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold transition-all duration-300"
                >
                    Send Message
                </button>
            </motion.form>

            {/* Social Icons */}
            {showSocials && (
                <motion.div
                    className="flex items-center justify-center gap-6 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <a href="#" className="text-white hover:text-blue-400 text-2xl">
                        <FaGithub />
                    </a>

                    <a href="#" className="text-white hover:text-blue-400 text-2xl">
                        <FaLinkedin />
                    </a>

                    <a href="#" className="text-white hover:text-blue-400 text-2xl">
                        <FaEnvelope />
                    </a>
                </motion.div>
            )}
        </section>
    );
};

export default Contact;
