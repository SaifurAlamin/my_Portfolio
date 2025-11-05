import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";
import CountUp from "react-countup";

const About = () => {
    const services = [
        { id: 1, icon: <FaLaptopCode className="text-blue-400 w-6 h-6" />, title: "Website Development" },
        { id: 2, icon: <FaServer className="text-blue-400 w-6 h-6" />, title: "Backend Development" },
        { id: 3, icon: <FaMobileAlt className="text-blue-400 w-6 h-6" />, title: "Responsive Web Apps" },
    ];

    const stats = [
        { id: 1, label: "Completed projects", value: "10+" },
        { id: 2, label: "Client satisfaction", value: "90%" },
        { id: 3, label: "Years of experience", value: "4+" },
    ];

    return (
        <section className="bg-gray-950 text-white px-6 md:px-16 py-10 flex flex-col md:flex-row gap-10 items-start">
            {/* LEFT: Services Cards */}
            <motion.div
                className="md:w-1/2 flex flex-col gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group flex items-center gap-4 p-4 rounded-lg border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300"
                    >
                        <div>{service.icon}</div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </motion.div>

            {/* RIGHT: About + Stats */}
            <motion.div
                className="md:w-1/2 flex flex-col gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold">
                    <span className="text-white">About </span>
                    <span className="text-blue-400">Me</span>
                </h2>
                <p className="text-gray-300 text-lg">
                    I'm a full-stack web developer with a passion for creating intuitive,
                    dynamic user interfaces. My expertise lies in React, Node.js, Express,
                    and Oracle/MySQL databases. I love building projects that make a real impact.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group flex flex-col items-start p-2 rounded-lg border border-gray-700 hover:border-blue-400 hover:scale-105 transition-all duration-300 w-40"
                        >
                            <span className="text-2xl font-bold text-blue-400 group-hover:text-white">
                                <CountUp
                                    end={parseInt(stat.value)}
                                    duration={2}
                                />
                                {stat.value.includes("+") && "+"}
                                {stat.value.includes("%") && "%"}
                            </span>
                            <span className="text-gray-300 text-sm group-hover:text-blue-400 transition-colors duration-300">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
