import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-white py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl text-subheader font-bold mb-4">About Us</h3>
                        <p className="text-text text-sm">
                            We are committed to providing top-notch services and building lasting relationships with our customers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl text-subheader font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-text">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-text">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-text">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-text">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl text-subheader font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="text-text">
                                <span className="font-bold">Email:</span> info@example.com
                            </li>
                            <li className="text-text">
                                <span className="font-bold">Phone:</span> +1 (123) 456-7890
                            </li>
                            <li className="text-text">
                                <span className="font-bold">Address:</span> 123 Main Street, City, Country
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl text-subheader font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 transition duration-200"
                            >
                                <FaFacebookF className="text-text" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-400 transition duration-200"
                            >
                                <FaTwitter className="text-text" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-500 transition duration-200"
                            >
                                <FaInstagram className="text-text" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 transition duration-200"
                            >
                                <FaYoutube className="text-text" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-text text-sm">
                    © {new Date().getFullYear()} Online Business Solution. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
