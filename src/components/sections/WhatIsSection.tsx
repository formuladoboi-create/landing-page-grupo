import React from 'react';
import CTAButton from '../ui/CTAButton';

const WhatIsSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-zinc-50 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-black mb-4">
                        O que é <span className="text-zinc-400">(e o que não é)</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Eliminando confusões: entenda exatamente o propósito da nossa comunidade.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* O que é */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary/10 shadow-xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-500"></div>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
                            <h3 className="text-2xl font-bold uppercase tracking-wide text-black">O que é</h3>
                        </div>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
                            Uma comunidade fechada e exclusiva de criadores de Nelore PO para desenvolver canal próprio, estreitar relacionamentos, apoiar vendas fora dos leilões e construir presença contínua.
                            <br /><br />
                            "Ajudar o produtor a vender aquele gado que não vai para leilão, você acha que não tem venda, mas tem muita gente querendo seu gado!"
                        </p>
                    </div>

                    {/* O que não é */}
                    <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-500/50 group-hover:bg-red-500 transition-colors duration-500"></div>
                        <div className="mb-6 flex items-center gap-4">
                            <span className="material-symbols-outlined text-4xl text-red-500">cancel</span>
                            <h3 className="text-2xl font-bold uppercase tracking-wide text-white">O que não é</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                    Não é consultoria tradicional.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                    Não é uma corretora de gado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
};

export default WhatIsSection;
