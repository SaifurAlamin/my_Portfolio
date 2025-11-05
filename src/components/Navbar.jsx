import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 left-0 bg-gray-900 text-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <Link to="/" className="text-2xl font-bold flex items-center gap-1">
                    <span className="bg-gradient-to-r text-xl from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">&lt;/&gt;</span>
                    <span className="text-blue-400">Saifur</span>
                </Link>


                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="hover:text-blue-400 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {
                open && (
                    <ul className="md:hidden flex flex-col items-center gap-4 pb-6 bg-gray-800 text-sm">
                        {["Home", "About", "Projects", "Contact"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    className="hover:text-blue-400 transition"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </nav >
    );
};

export default Navbar;
