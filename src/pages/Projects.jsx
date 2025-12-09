import { motion } from "framer-motion";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const projects = [
    {
        image: project1,
        title: "E-commerce Website",
        description:
            "A full-stack E-commerce platform with product listing, cart, checkout, and user authentication using React, Node.js, and MongoDB.",
        link: "http://global-path-liquidators-user.netlify.app/",
        github: "https://github.com/yourusername/ecommerce",
    },
    {
        image: project2,
        title: "Social Organization Website",
        description:
            "A modern website for a social organization showcasing events, programs, and donations, built with React and Tailwind CSS.",
        link: "https://novojatra.netlify.app",
        github: "https://github.com/yourusername/social-organization",
    },
    {
        image: project3,
        title: "POS / Super Shop System",
        description:
            "A point-of-sale system for a retail shop, including inventory management, sales tracking, and reporting, built with React, Node.js, and databases.",
        link: "https://dokaner-hishab.vercel.app/",
        github: "https://github.com/yourusername/pos-system",
    },
];

const Projects = () => {
    return (
        <section className="bg-gray-950 text-white px-6 md:px-16 py-10 pt-2 lg:pt-28">
            <motion.h2
                className="text-4xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                My <span className="text-blue-400">Projects</span>
            </motion.h2>

            <div className="grid gap-10 md:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden border border-gray-700 shadow-lg cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-5 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex gap-3">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="px-4 py-2 rounded font-semibold border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                                >
                                    View
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="px-4 py-2 rounded font-semibold border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;


