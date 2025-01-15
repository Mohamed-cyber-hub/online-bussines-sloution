import Clients from './Components/Clients'
import HeroSection from './Components/HeroSection'
import Navbar from './Layout/Navbar'
import Products from './Components/Products'
import ContactUs from './Components/ContactUs'
import Testimonials from './Components/Testimonials'
import Price from './Components/Price'
import Footer from './Layout/Footer'


function App() {
  return (
    <div className=' w-full h-screen  '>
      <Navbar />
      <HeroSection />
      <Clients />
      <Products />
      <Testimonials />
      <Price />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
