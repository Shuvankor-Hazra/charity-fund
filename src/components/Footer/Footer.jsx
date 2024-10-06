import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const ImportantLinks = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "About Us",
    },
    {
        id: 3,
        name: "Services",
    },
    {
        id: 4,
        name: "Login",
    },
]

const Links = [
    {
        id: 1,
        name: "Community",
    },
    {
        id: 2,
        name: "Blog Posts",
    },
    {
        id: 3,
        name: "Terms & Conditions",
    },
    {
        id: 4,
        name: "Privacy Policy",
    },
]

const Footer = () => {
    return (
        <div className="text-white rounded-t-[50px] bg-gradient-to-r from-violet-950 via-violet-800 to-violet-950">
            <div className="max-w-[1200px] mx-auto p-4">
                {/* Footer Content Section */}
                <div className="grid py-5 md:grid-cols-3">
                    <div className="px-4 py-8 space-y-3">
                        <h1 className="mb-3 text-justify text-xl sm:text-left sm:text-3xl font-semibold">
                            <a href="/#Home" className="uppercase">
                                Charity
                                <span className="inline-block font-bold text-primary">Fund</span>
                            </a>
                        </h1>
                        <p className="mb-3">Seamlessly leverage other low-risk high-yield leadership whereas professional collaboration and idea-sharing. Competently conceptualize clicks-and-mortar alignments.</p>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>+88-01234-567890</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
                        <div className="px-4 py-8">
                            <h2 className="pb-3 text-xl font-bold sm:table-cell sm:text-xl">Important Links</h2>
                            <ul className="flex flex-col gap-3">
                                <FooterLinks links={ImportantLinks} />
                            </ul>
                        </div>
                        <div className="px-4 py-8">
                            <h2 className="pb-3 text-xl font-bold sm:table-cell sm:text-xl">Other Links</h2>
                            <ul className="flex flex-col gap-3">
                                <FooterLinks links={Links} />
                            </ul>
                        </div>
                        <div className="px-4 py-8">
                            <h2 className="pb-3 text-xl font-bold sm:table-cell sm:text-xl">Social Links</h2>
                            <div className="space-y-6">
                                <h2>Subscribe to our newsletter</h2>
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="rounded-full w-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                                <div className="flex items-center gap-3">
                                    <a href="#" className="hover:scale-110 duration-200">
                                        <FaInstagram className="text-3xl" />
                                    </a>
                                    <a href="#" className="hover:scale-110 duration-200">
                                        <FaFacebook className="text-3xl" />
                                    </a>
                                    <a href="#" className="hover:scale-110 duration-200">
                                        <FaLinkedin className="text-3xl" />
                                    </a>
                                    <a href="#" className="hover:scale-110 duration-200">
                                        <FaTwitter className="text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Section */}
                <div className="bottom-footer">
                    <p className="border-t-2 border-gray-300/50 py-6 text-center">Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
