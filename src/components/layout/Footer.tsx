import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="py-16 px-8 border-t border-black/5 bg-white text-center space-y-10">
            <div className="flex flex-col items-center gap-6">
                <Logo className="h-10 opacity-40 hover:opacity-100 transition-opacity" />
                <p className="text-[10px] tracking-[0.6em] text-zinc-400 font-bold uppercase">FÓRMULA DO BOI © 2024</p>
            </div>
            <div className="flex justify-center gap-8 md:gap-12 text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">
                <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                <a href="#" className="hover:text-primary transition-colors">Termos</a>
                <a href="#" className="hover:text-primary transition-colors">Contato</a>
            </div>
        </footer>
    );
};

export default Footer;
