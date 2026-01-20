import React from 'react';
import Logo from '../ui/Logo';

const EngineeringSection: React.FC = () => {
    return (
        <section className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden bg-zinc-50">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.05]">
                <Logo className="h-[500px] w-auto scale-[2] grayscale" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
                <h2 className="text-3xl md:text-5xl font-black tracking-[0.2em] md:tracking-[0.3em] leading-tight uppercase text-black">
                    ENGINEERING <br />
                    <span className="text-gold-gradient italic">STUDY</span> <br />
                    & CONTROL
                </h2>
                <div className="space-y-8 max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-zinc-800 font-medium leading-relaxed tracking-wide">
                        Não somos apenas um marketplace. Somos a engenharia por trás do agronegócio de precisão.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed italic border-l-2 border-primary/30 pl-8 text-left">
                        Aplicamos estudos avançados de genealogia e controle rigoroso de qualidade para que cada animal negociado represente o auge da raça Nelore.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EngineeringSection;
