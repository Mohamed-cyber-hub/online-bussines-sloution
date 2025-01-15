import { clients } from "../data"
import { Fade, Slide } from 'react-awesome-reveal'

const Clients = () => {
    return (
        <section className='w-full py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12'>
                    
                    <Fade duration={1000} delay={200} triggerOnce>
                        <div className='text-left'>
                            <h4 className='text-lg sm:text-xl lg:text-xl text-slate-500'>
                                Companies We Helped Grow
                            </h4>
                        </div>
                    </Fade>
                    
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center'>
                        {clients.map((client, index) => (
                            <Slide direction="up" duration={800} delay={index * 200} triggerOnce key={client.id}>
                                <div 
                                    className='w-32 h-32 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center'
                                >
                                    <img 
                                        src={client.img}
                                        alt={`${client.name} logo`}
                                        className='w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
                                    />
                                </div>
                            </Slide>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients
