import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'outline', 
  size = 'md', 
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center uppercase tracking-widest font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 rounded-sm";
  
  const variants = {
    primary: "bg-brand-red text-white border-2 border-brand-red hover:bg-red-700 hover:border-red-700",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
    white: "bg-white text-brand-dark hover:bg-gray-200",
    ghost: "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white"
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-3 text-xs",
    lg: "px-10 py-4 text-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};