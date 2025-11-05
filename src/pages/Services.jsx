import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

const services = [
    {
        id: 1,
        icon: <FaLaptopCode className="w-8 h-8 text-blue-400" />,
        title: "Frontend Development",
        description: "Building responsive, modern, and interactive web interfaces using React, TailwindCSS, and other frontend technologies."
    },
    {
        id: 2,
        icon: <FaServer className="w-8 h-8 text-green-400" />,
        title: "Backend Development",
        description: "Designing and implementing scalable APIs and server-side logic with Node.js, Express, and database integration."
    },
    {
        id: 3,
        icon: <FaMobileAlt className="w-8 h-8 text-purple-400" />,
        title: "Full Stack Solutions",
        description: "End-to-end development from database to frontend ensuring seamless integration and performance."
    },
    {
        id: 4,
        icon: <FaDatabase className="w-8 h-8 text-yellow-400" />,
        title: "Database Management",
        description: "Efficient database design, queries, and optimization using MySQL, MongoDB, or Oracle for robust data handling."
    },
];

const Services = () => {
    return (
        <section className="bg-gray-950 text-white px-6 md:px-16 py-16">
            {/* Header */}
            <motion.h2
                className="text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span className="text-white">My </span>
                <span className="text-blue-400">Services</span>
            </motion.h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className="group relative p-6 rounded-xl border border-gray-700 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: service.id * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Glow on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileHover={{
                                opacity: 1,
                                boxShadow: "0 0 12px rgba(59,130,246,0.6), 0 0 24px rgba(59,130,246,0.4)"
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        <div className="relative z-10">{service.icon}</div>
                        <h3 className="relative z-10 text-xl font-semibold transition-colors duration-300 group-hover:text-blue-400">
                            {service.title}
                        </h3>
                        <p className="relative z-10 text-gray-300">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
