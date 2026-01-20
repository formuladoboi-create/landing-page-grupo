import React from 'react';
import logo from '../../assets/logo.png';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-24" }) => (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
        <img
            alt="Fórmula do Boi Logo"
            className="h-full w-auto object-contain"
            src={logo}
        />
    </div>
);

export default Logo;
