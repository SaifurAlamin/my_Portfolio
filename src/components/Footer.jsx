import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-gray-400 py-8 px-6 bg-gray-900"> {/* bg-gray-900 matches most dark page backgrounds */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Coded by */}
                <div className="text-sm text-gray-400 flex items-center gap-1 order-1 md:order-1">
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">&lt;/&gt;</span>
                    <span>Saifur Rahman</span>
                </div>

                {/* Center: Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-2 order-2 md:order-2">
                    <div className="flex items-center gap-2">
                        <FaPhone className="w-4 h-4" />
                        <span>+8801789781614</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="w-4 h-4" />
                        <span>saifurrahman1614@gmail.com</span>
                    </div>
                </div>

                {/* Right: Links */}
                <div className="flex items-center gap-4 order-3 md:order-3">
                    <a
                        href="https://github.com/SaifurAlamin/"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/saifur-rahman-4a158734a/"
                        target="_blank"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
