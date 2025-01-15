import { useEffect, useState } from 'react'
import products1 from '../assets/product-1.png'
import products2 from '../assets/customers.png'
import DataChart from '../assets/products/Component 12.png'
import Button from './Button'
import { productsCollection } from '../data'
import { Fade, Slide } from 'react-awesome-reveal'

const Products = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => { setIsVisible(true);}, []);
    return (
        <section className='w-full py-12 px-4 sm:px-6 lg:px-8 bg-white'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16'>
                    
                    <Fade duration={1000} delay={200} triggerOnce>
                        <div className='flex flex-col justify-start items-start space-y-4 md:space-y-6 w-full md:w-1/2'>
                            <h4 className='text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide'>
                                we help you 
                            </h4>
                            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight'>
                                Sell
                                <br />
                                Stunning
                                <br />
                                Products
                            </h2>
                            <p className='text-lg sm:text-xl text-text max-w-lg'>
                                We'll guide you through our unique 5-steps brand-building framework
                            </p>
                            <Button />
                        </div>
                    </Fade>

                    <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                        <Slide direction="up" duration={800} triggerOnce>
                            <img 
                                src={products1} 
                                alt="Product showcase" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </Slide>
                    </div>
                </div>

                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {productsCollection.map((product) => (
                            <Slide direction="up" duration={800} delay={200 * (productsCollection.indexOf(product))} triggerOnce key={product.id}>
                                <div 
                                    className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
                                >
                                    <div className='aspect-w-16 aspect-h-9'>
                                        <img 
                                            src={product.img} 
                                            alt={product.title} 
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <h4 className='text-xl font-semibold text-headers capitalize mb-2'>
                                            {product.title}
                                        </h4>
                                        <p className='text-text'>
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mt-40'>
                    <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                        <Slide direction="up" duration={800} triggerOnce>
                            <img 
                                src={products2} 
                                alt="Product showcase" 
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </Slide>
                    </div>

                    <Fade duration={1000} delay={200} triggerOnce>
                        <div className='flex flex-col justify-start items-start space-y-4 md:space-y-6 w-full md:w-1/2'>
                            <h4 className='text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide'>
                                What We Do 
                            </h4>
                            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight'>
                                Increase our
                                <br />
                                Customers
                                <br />
                                Sales
                            </h2>
                            <p className='text-lg sm:text-xl text-text max-w-lg'>
                                Our Customers are seeing a big results within the first three months
                            </p>
                            <Button />
                        </div>
                    </Fade>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mt-40">
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
                        <div className="absolute -inset-4 bg-subheader/20 blur-3xl rounded-full" />
                        <div 
                        className={`relative transform transition-all duration-700 translate-y-8 opacity-0 ${ isVisible ? 'translate-y-0 opacity-100' : '' }`}>
                        <div className="relative p-6 z-10">
                            <img 
                            src={DataChart} 
                            alt="Product showcase" 
                            className="w-full h-auto rounded-lg bg-transparent object-cover"
                            />
                        </div>
                        </div>
                    </div>

                    <div className={`flex flex-col justify-start items-start space-y-4 md:space-y-6 w-full md:w-1/2 transition-all duration-1000 delay-200 opacity-0 translate-y-4 ${
                        isVisible ? 'opacity-100 translate-y-0' : ''}`}>
                        <h4 className="text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                        WE HELP YOU TO
                        </h4>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight">
                        Take Control
                        <br />
                        of Your
                        <br />
                        Finances
                        <br />
                        and Save
                        <br />
                        More
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-text max-w-lg">
                        Our Customers are seeing big results within the first three months
                        </p>
                        
                        <Button 
                        className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-3 flex items-center gap-2"
                        >
                        Learn More
                        <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7"
                            />
                        </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
