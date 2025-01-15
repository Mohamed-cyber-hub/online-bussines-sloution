import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { testimonials } from '../data';
import { Fade, Slide } from 'react-awesome-reveal';

const Testimonials = () => {
    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 relative pt-32 pb-32">
            <div 
                className="absolute top-12 left-1/2 w-2/3 h-1/4 transform -translate-x-1/2 bg-subheader/20 blur-3xl rounded-full z-0"
            />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12 relative z-10">
                    <Fade duration={1000} delay={200} triggerOnce>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headers mb-4 leading-tight">
                            How We Helped Our Clients
                        </h2>
                    </Fade>
                    <Fade duration={1000} delay={400} triggerOnce>
                        <p className="text-lg sm:text-xl text-text">
                            Our achievements are a testament to our commitment to excellence.
                        </p>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Slide key={index} direction="up" duration={800} delay={200} triggerOnce>
                            <div 
                                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                            >
                                <div className="mb-4">
                                    <FaQuoteRight className="h-8 w-8 text-subheader" />
                                </div>
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="border-t border-gray-200 pt-4">
                                    <h3 className="font-semibold text-headers text-lg">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
