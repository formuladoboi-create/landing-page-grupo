import React from 'react';
import CTAButton from '../ui/CTAButton';
import whatsappGroupImage from '../../assets/whatsapp-group.png';

const WhatIsSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-zinc-50 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-black mb-4">
                        O que é
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Entenda exatamente o propósito da nossa comunidade.
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* O que é */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary/10 shadow-xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500 max-w-2xl w-full">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-500"></div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-2xl text-primary mt-1">check_circle</span>
                                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
                                    Conectamos criadores com compradores com melhores lotes PO
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-2xl text-primary mt-1">check_circle</span>
                                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
                                    Grupo de Whatsapp fechado de comercialização direto com o criador
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Group Image */}
                <div className="flex justify-center mt-12">
                    <img
                        src={whatsappGroupImage}
                        alt="Grupo WhatsApp Fórmula do Boi"
                        className="max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                    />
                </div>

                <div className="mt-16">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
