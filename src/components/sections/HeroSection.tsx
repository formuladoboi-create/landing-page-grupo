import React from 'react';
import LeadForm from '../ui/LeadForm';

const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 -z-10 subtle-bg-texture"></div>
            <div className="absolute top-0 right-0 -z-20 w-72 h-72 md:w-[800px] md:h-[800px] bg-primary/5 blur-[100px] md:blur-[180px] rounded-full"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 animate-in fade-in">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Elite Nelore PO
                    </div>
                    <h1 className="font-sans text-3xl md:text-5xl font-black leading-tight tracking-[0.15em] uppercase text-black">
                        ELEVE O PADRÃO <span className="text-gold-gradient">GENÉTICO</span> DO SEU NELORE PO.
                    </h1>
                    <p className="text-base md:text-lg text-zinc-500 font-normal leading-relaxed max-w-xl">
                        Processo, rede e suporte para dar previsibilidade ao melhoramento e à valorização do seu plantel.
                    </p>

                </div>

                <div id="formulario" className="relative animate-in slide-in-from-right-10">
                    <LeadForm />
                    <div className="absolute -inset-4 bg-primary/5 blur-[60px] -z-0 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
