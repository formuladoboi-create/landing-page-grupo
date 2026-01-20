import React from 'react';

const TrustSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 border-t border-black/5 bg-white">
            <div className="max-w-7xl mx-auto">
                <p className="text-[10px] md:text-[11px] text-center text-zinc-400 uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold mb-16">
                    Fazendas de Referência & Linhagens de Elite
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-10 w-32 md:w-36 bg-zinc-100 rounded-lg border border-zinc-200 flex items-center justify-center text-[10px] font-black uppercase text-zinc-300">Brand {i}</div>
                    ))}
                </div>
                <div className="mt-24 text-center">
                    <div className="inline-block bg-white px-8 md:px-12 py-6 md:py-8 rounded-3xl border border-primary/20 shadow-2xl">
                        <div className="flex items-center gap-4 md:gap-6">
                            <span className="material-symbols-outlined text-primary text-3xl md:text-5xl">lock</span>
                            <div className="text-left">
                                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-1">Status do Ecossistema</p>
                                <p className="text-black font-bold text-sm md:text-lg tracking-tight">94% dos Membros Operando com Lucro Superior à Média</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
