import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import logo from '../../public/assets/logo-no-background.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='shadow-md'>
            <div className='max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8'>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            src={logo} 
                            alt="logo" 
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-6">
                            <li className="hover:underline cursor-pointer">
                                Get Started Now
                            </li>
                            <li className="p-3 bg-[#F5F8FD] rounded-full cursor-pointer hover:bg-[#E5E8ED] transition-colors">
                                Login
                            </li>
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <BiX className="h-6 w-6" />
                            ) : (
                                <BiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 cursor-pointer">
                                Get Started Now
                            </div>
                            <div className="block px-3 py-2 rounded-md text-base font-medium bg-[#F5F8FD] hover:bg-[#E5E8ED] cursor-pointer">
                                Login
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar