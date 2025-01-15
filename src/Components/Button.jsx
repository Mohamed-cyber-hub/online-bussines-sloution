import React from 'react'
import { LuCircleArrowRight } from 'react-icons/lu';
const Button = ({ 
    label = 'More Details', 
    onClick, 
    icon: Icon = LuCircleArrowRight,
    className = '' 
}) => {
    return (
        <button 
            onClick={onClick}
            className={`
                flex items-center justify-center gap-2 
                bg-gradient-to-br from-purple-500 via-purple-500 to-blue-500 
                text-white px-5 py-2.5 rounded-full 
                shadow-md hover:shadow-lg
                hover:opacity-90 active:scale-95 
                transition-all duration-200
                ${className}
            `}
        >
            <span className="text-center text-md font-medium">
                {label}
            </span>
            <Icon className="w-10 h-7" />
        </button>
    );
};

export default Button