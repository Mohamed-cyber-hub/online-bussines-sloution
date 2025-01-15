import products1 from '../../public/assets/product-1.png'
import products2 from '../../public/assets/customers.png'
import DataChart from '../../public/assets/Component 12.png'
import Button from './Button'
import { productsCollection } from '../data'
import { Fade, Slide } from 'react-awesome-reveal'

const Products = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
                <Fade duration={1000} triggerOnce>
                    <div className="flex flex-col justify-start items-start space-y-4 md:space-y-6 w-full md:w-1/2">
                        <h4 className="text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                            we help you
                        </h4>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight">
                            Sell<br />Stunning<br />Products
                        </h2>
                        <p className="text-lg sm:text-xl text-text max-w-lg">
                            We'll guide you through our unique 5-steps brand-building framework
                        </p>
                        <Button />
                    </div>
                </Fade>

                <div className="w-full md:w-1/2">
                    <Slide direction="up" duration={800} triggerOnce>
                        <img 
                            src={products1} 
                            alt="Product showcase" 
                            className="w-full h-auto rounded-lg object-cover"
                            />
                    </Slide>
                </div>
            </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {productsCollection.map((product, index) => (
                <Slide direction="up" duration={800} delay={200 * index} triggerOnce key={product.id}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-w-16 aspect-h-9">
                            <img 
                            src={product.img} 
                            alt={product.title} 
                            className="w-full h-96 object-cover"
                        />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-semibold text-headers capitalize mb-2">
                                {product.title}
                            </h4>
                            <p className="text-text">{product.desc}</p>
                        </div>
                    </div>
                </Slide>
            ))}
        </div>

        {/* Customers Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mt-40">
                <div className="w-full md:w-1/2">
                    <Slide direction="up" duration={800} triggerOnce>
                        <img 
                            src={products2} 
                            alt="Product showcase" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </Slide>
                </div>
            
                <Fade duration={1000} triggerOnce>
                    <div className="flex flex-col justify-start items-start space-y-4 md:space-y-6 w-full md:w-1/2">
                        <h4 className="text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                            What We Do
                        </h4>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight">
                            Increase our<br />Customers<br />Sales
                        </h2>
                        <p className="text-lg sm:text-xl text-text max-w-lg">
                            Our Customers are seeing a big results within the first three months
                        </p>
                        <Button />
                    </div>
                </Fade>
            </div>

        {/* Finance Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mt-40">
            <div className="w-full md:w-1/2 relative">
                <div className="absolute -inset-4 bg-subheader/20 blur-3xl rounded-full" />
                    <div className="relative p-6 z-10">
                        <img 
                            src={DataChart} 
                            alt="Financial data visualization" 
                            className="w-full h-auto rounded-lg bg-transparent object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start space-y-4 md:space-y-6 w-full md:w-1/2">
                    <h4 className="text-subheader uppercase text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                        WE HELP YOU TO
                    </h4>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headers leading-tight">
                        Take Control<br />of Your<br />Finances
                    </h2>
                    <p className="w-1/2 text-lg sm:text-xl text-text max-w-lg">
                        Our Customers are seeing big results within the first three months
                    </p>
                    <Button />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Products