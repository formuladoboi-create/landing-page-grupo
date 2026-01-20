import React from 'react';

interface CTAButtonProps {
    className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className = "" }) => {
    return (
        <div className={`text-center ${className}`}>
            <a
                href="#formulario"
                className="inline-block gold-gradient text-white font-bold text-xs md:text-sm py-4 px-8 md:px-10 rounded-xl tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20 uppercase"
            >
                Quero Fazer Parte
            </a>
        </div>
    );
};

export default CTAButton;
