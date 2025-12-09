import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Lottie from "lottie-react";
import contactAnimation from "../assets/animations/contact.json";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiGmail, SiMongodb } from "react-icons/si";
import resume from "../assets/files/Full-Stack-Developer-Resume-of-Saifur.pdf";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <section className="bg-gray-950 text-white px-6 md:px-16 py-10">

            {/* ✅ HERO SECTION */}
            <div className="flex flex-col justify-center items-center py-20">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">

                    {/* LEFT TEXT SECTION */}
                    <div className="md:w-1/2 space-y-4 text-center md:text-left">
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Hi, I'm <span className="text-blue-400">Saifur Rahman</span>
                        </motion.h1>


                        <motion.p
                            className="text-gray-400 max-w-xl mx-auto md:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            A passionate{" "}
                            <span className="text-blue-300 font-semibold">
                                <Typewriter
                                    words={[
                                        "Full Stack Developer",
                                        "React Developer",
                                        "Node.js Enthusiast"
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>{" "}
                            crafting modern, interactive, and scalable web experiences with React and Node.js.
                        </motion.p>

                        {/* ✅ Download Resume + Socials */}
                        <motion.div
                            className="mt-8 flex items-center justify-center md:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.a
                                href={resume}
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm md:px-6 md:py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transition-transform duration-300"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 15px rgba(59,130,246,0.6), 0 0 25px rgba(59,130,246,0.4)",
                                }}
                            >
                                Download Resume
                                <HiArrowDown className="w-5 h-5" />
                            </motion.a>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <motion.a
                                    href="https://github.com/SaifurAlamin/"
                                    target="_blank"
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center transition-transform duration-300"
                                    whileHover={{ scale: 1.2, boxShadow: "0 0 12px rgba(59,130,246,0.6)" }}
                                >
                                    <FaGithub className="text-white w-4 h-4 md:w-5 md:h-5" />
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/saifur-rahman-4a158734a/"
                                    target="_blank"
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center transition-transform duration-300"
                                    whileHover={{ scale: 1.2, boxShadow: "0 0 12px rgba(59,130,246,0.6)" }}
                                >
                                    <FaLinkedin className="text-blue-500 w-4 h-4 md:w-5 md:h-5" />
                                </motion.a>

                                <motion.a
                                    href="mailto:saifurrahman1614@gmail.com"
                                    target="_blank"
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center transition-transform duration-300"
                                    whileHover={{ scale: 1.2, boxShadow: "0 0 12px rgba(59,130,246,0.6)" }}
                                >
                                    <SiGmail className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                                </motion.a>
                            </div>

                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <motion.div
                        className="w-full md:w-1/2 relative justify-center items-center hidden md:flex"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="relative w-64 h-64 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] overflow-visible">
                            <img
                                src={profile}
                                alt="Saifur Rahman"
                                className="w-full h-full object-cover rounded-full"
                            />

                            {/* Floating React Logo */}
                            <motion.div
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg"
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <FaReact className="text-blue-400 w-6 h-6" />
                            </motion.div>

                            {/* Floating Node Logo */}
                            <motion.div
                                className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg"
                                animate={{ y: [0, -5, 0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5 }}
                            >
                                <FaNodeJs className="text-green-500 w-6 h-6" />
                            </motion.div>

                            {/* Floating MongoDB Logo */}
                            <motion.div
                                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg"
                                animate={{ y: [5, -5, 5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <SiMongodb className="text-green-600 w-6 h-6" />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* ✅ ABOUT */}
            <div className="mt-8 w-full">
                <About />
            </div>

            {/* ✅ PROJECTS */}
            <div className="mt-8 w-full">
                <Projects />
            </div>

            {/* ✅ SKILLS */}
            <div className="mt-8 w-full">
                <Skills />
            </div>

            {/* ✅ SERVICES */}
            <div className="mt-8 w-full">
                <Services />
            </div>

            {/* ✅ CONTACT SECTION */}
            <section className="bg-gray-950 text-white w-full flex flex-col justify-center items-center px-6 py-20 mt-8">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-white">Connect </span>
                    <span className="text-blue-400">Me</span>
                </motion.h2>

                <motion.div
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className="hidden md:flex md:w-[45%] justify-center">
                        <Lottie animationData={contactAnimation} loop={true} className="w-72 md:w-80" />
                    </div>

                    <div className="w-full md:w-[45%]">
                        <Contact showSocials={true} hideHeader />
                    </div>
                </motion.div>
            </section>
        </section>
    );
};

export default Home;
