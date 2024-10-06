import { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const [showMenu, setShowMenu] = useState(false);
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [element.classList, theme]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


    return (
        <>
            <nav className="bg-gradient-to-l from-violet-900 via-violet-500 to-violet-900 text-white fixed top-0 left-0 w-full border-b-2 border-primary/50">
                <div className="container">
                    <div className="flex items-center justify-between h-[70px] py-2">
                        {/* Logo Section */}
                        <div className="text-2xl md:text-3xl uppercase">
                            <a href="#">Charity<span className="inline-block font-bold text-primary">Fund</span></a>
                        </div>
                        {/* Desktop Menu Section */}
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-10">
                                <li className="group relative cursor-pointer">
                                    <a href="#" className="flex items-center gap-[2px] h-[72px]">Home
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 transition-all duration-200 text-xl" />
                                        </span>
                                    </a>
                                    {/* Dropdown Menu Section */}
                                    <div className="absolute -left-9 z-[999] hidden w-[150px] bg-white rounded-md p-2 text-black shadow-md group-hover:block">
                                        <ul className="space-y-3">
                                            <li className="p-2 hover:bg-violet-200">Blog</li>
                                            <li className="p-2 hover:bg-violet-200">Service</li>
                                            <li className="p-2 hover:bg-violet-200">Privacy Policy</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>About Us</li>
                                <li>
                                    <div className="flex items-center gap-4">
                                        {/* Icon Section */}
                                        <div>
                                            <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md bg-primary hover:bg-primary/90 p-2" />
                                        </div>
                                        {/* Number Section */}
                                        <div>
                                            <p>Talk to us</p>
                                            <p>+88-01234-567890</p>
                                        </div>
                                    </div>
                                </li>
                                {/* Light and Dark Mode Switcher */}
                                {
                                    theme === "dark" ? (
                                        <BiSolidSun
                                            onClick={() => setTheme("light")}
                                            className="text-2xl" />

                                    ) : (
                                        <BiSolidMoon
                                            onClick={() => setTheme("dark")}
                                            className="text-2xl" />
                                    )
                                }
                            </ul>
                        </div>
                        {/* Mobile Menu Section */}
                        <div className="md:hidden flex items-center gap-4">
                            {
                                theme === "dark" ? (
                                    <BiSolidSun
                                        onClick={() => setTheme("light")}
                                        className="text-2xl" />

                                ) : (
                                    <BiSolidMoon
                                        onClick={() => setTheme("dark")}
                                        className="text-2xl" />
                                )
                            }
                            {
                                showMenu ? (
                                    <HiMenuAlt1
                                        className="cursor-pointer transition-all"
                                        size={30}
                                        onClick={toggleMenu}
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        className="cursor-pointer transition-all"
                                        size={30}
                                        onClick={toggleMenu}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile Side Menu Component */}
            <ResponsiveMenu showMenu={showMenu} />
        </>
    );
}

export default Navbar;
