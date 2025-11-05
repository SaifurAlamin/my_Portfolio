import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
} from "react-icons/fa";
import {
    SiMongodb,
    SiOracle,
    SiMysql,
    SiFirebase,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
    const skills = [
        { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React", level: 95, color: "#61DBFB" },
        { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js", level: 90, color: "#3C873A" },
        { icon: <FaJsSquare className="text-yellow-400 text-5xl" />, name: "JavaScript", level: 95, color: "#F7E018" },
        { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5", level: 98, color: "#E34C26" },
        { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS3", level: 90, color: "#2965F1" },
        { icon: <RiTailwindCssFill className="text-sky-500 text-5xl" />, name: "Tailwind", level: 98, color: "#38BDF8" },
        { icon: <SiMongodb className="text-green-600 text-5xl" />, name: "MongoDB", level: 75, color: "#4DB33D" },
        { icon: <SiOracle className="text-red-500 text-5xl" />, name: "OracleDB", level: 50, color: "#F80000" },
        { icon: <SiMysql className="text-blue-400 text-5xl" />, name: "MySQL", level: 45, color: "#00758F" },
        { icon: <SiFirebase className="text-yellow-400 text-5xl" />, name: "Firebase", level: 90, color: "#FFCA28" },
    ];

    return (
        <div className="text-center py-16 px-6">
            <motion.h2
                className="text-4xl font-bold mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My <span className="text-blue-400">Skills</span>
            </motion.h2>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col items-center justify-center w-32"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="w-24 h-24 mb-3 relative group">
                            <CircularProgressbar
                                value={skill.level}
                                text={`${skill.level}%`}
                                strokeWidth={3}
                                styles={buildStyles({
                                    textColor: "#fff",
                                    pathColor: `${skill.color}`,
                                    trailColor: "#2d2d2d",
                                    textSize: "20px",
                                    pathTransitionDuration: 0.5,
                                })}
                            />

                            {/* Glow Animation Layer */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1,
                                    boxShadow: `0 0 12px ${skill.color}, 0 0 24px ${skill.color}`,
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            {skill.icon}
                            {/* <span className="text-sm font-medium text-gray-300">{skill.name}</span> */}
                        </div>
                    </motion.div>
                ))}



            </motion.div>
        </div>
    );
};

export default Skills;
