import React from 'react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 w-full z-50 py-4 px-8 flex justify-center items-center backdrop-blur-md border-b border-black/5 bg-white/80">
            <Logo />
        </header>
    );
};

export default Header;
