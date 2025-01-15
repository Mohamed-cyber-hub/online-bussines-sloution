import React from 'react';
import PricingCard from './PriceCard';
import { plans } from '../data';
import { Fade, Slide } from 'react-awesome-reveal';

const Price = () => {
    return (
        <section className='w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 pb-44 relative'>
            <div className="absolute top-0 left-0 w-1/4 h-full bg-subheader/20 blur-3xl rounded-full z-0" />
            <div className="absolute bottom-0 right-0 w-1/4 h-full bg-subheader/20 blur-3xl rounded-full z-0" />
            <div className='max-w-6xl mx-auto'>
                <Fade duration={1000} delay={200} triggerOnce>
                    <h4 className='text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide'>
                        Pricing
                    </h4>
                </Fade>
                
                <Fade duration={1000} delay={400} triggerOnce>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight'>
                        Affordable Pricing
                    </h2>
                </Fade>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                    {plans.map((plan, index) => (
                        <Slide key={index} direction="up" duration={800} delay={200} triggerOnce>
                            <PricingCard {...plan} />
                        </Slide>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Price;
