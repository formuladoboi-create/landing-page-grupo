import React from 'react';
import logo from '../../assets/logo.jpg';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-14" }) => (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
        <img
            alt="Fórmula do Boi Logo"
            className="h-full w-auto object-contain brightness-0"
            src={logo}
        />
        <span className="font-bold text-[10px] tracking-[0.5em] text-black mt-2 uppercase">FÓRMULA DO BOI</span>
    </div>
);

export default Logo;
