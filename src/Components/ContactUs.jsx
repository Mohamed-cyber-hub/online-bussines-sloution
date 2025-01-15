import React from 'react';
import ContactBg from '../../public/assets/contact-us-bg.png';
import { Fade, Slide } from 'react-awesome-reveal';

const ContactUs = () => {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
            <div className="w-full absolute -inset-1 bg-subheader/20 blur-3xl rounded-full z-0" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center justify-center">
                    {/* Form Section */}
                    <div className="w-full md:w-1/2 flex">
                        <Fade duration={1000} delay={200} triggerOnce>
                            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex-grow">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-headers mb-2">Contact Us</h2>
                                    <p className="text-text">Fill out the form below and we'll get back to you soon.</p>
                                </div>
                                
                                <form className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none transition-shadow"
                                            placeholder="Enter your message"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </Fade>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex">
                        <Slide direction="up" duration={1000} delay={200} triggerOnce>
                            <img 
                                src={ContactBg} 
                                alt="Contact us" 
                                className="w-full h-full object-cover object-center rounded-xl"
                            />
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
