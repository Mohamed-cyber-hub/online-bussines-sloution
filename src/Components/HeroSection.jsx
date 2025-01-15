import React, { useEffect } from 'react'
import HeroBg from '../../public/assets/HeroBg.png'
import { Fade, Slide } from 'react-awesome-reveal'

const HeroSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className='w-full px-4 sm:p-6 md:p-8 lg:px-10 relative'>
            <div className='w-full flex flex-col md:flex-row'>
                
                <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                    <Fade duration={1000} delay={300} triggerOnce>
                        <img 
                            src={HeroBg}
                            alt="Hero Background" 
                            className='w-full h-full object-cover object-center rounded-lg'
                        />
                    </Fade>
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-center items-start md:pl-8 space-y-6 relative'>
                    <div className="w-full absolute -inset-4 bg-subheader/10 blur-3xl rounded-3xl z-0" />
                    
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <svg className="absolute w-full h-full" viewBox="0 0 400 400">
                            <path
                                d="M50 150 L200 50 L350 150 Z"
                                className="fill-purple-500/10 blur-xl"
                                transform="rotate(-5)"
                            />
                            <circle 
                                cx="300" 
                                cy="150" 
                                r="50" 
                                className="fill-pink-500/10 blur-2xl"
                            />
                            <path
                                d="M100 300 L200 200 L300 300 Z"
                                className="fill-orange-500/10 blur-2xl"
                                transform="rotate(15)"
                            />
                            <rect
                                x="50"
                                y="250"
                                width="100"
                                height="100"
                                className="fill-blue-500/10 blur-xl"
                                transform="rotate(30 100 300)"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <Fade duration={1000} delay={500} triggerOnce>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight'>
                                We Help You
                                <br />
                                Build & Grow an
                                <br />
                                Online Business
                            </h1>
                        </Fade>

                        <div className='relative w-full md:w-3/4 lg:w-2/3'>
                            <Slide direction="up" duration={1000} delay={700} triggerOnce>
                                <input
                                    type="text"
                                    placeholder="Tell us what you need to build..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg text-sm sm:text-base"
                                />
                            </Slide>
                            
                            <button className='absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="currentColor" 
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                                    />
                                </svg>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
