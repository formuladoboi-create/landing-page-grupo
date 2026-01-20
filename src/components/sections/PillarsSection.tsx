import React from 'react';

const pillars = [
    { icon: 'verified_user', title: 'Fim da Inadimplência', desc: 'Sistema rigoroso de compliance e histórico de compradores, garantindo segurança total no recebimento.' },
    { icon: 'trending_up', title: 'Valorização do Bezerro', desc: 'Exposição direta para compradores que valorizam genética PO, elevando o ticket médio da sua produção.' },
    { icon: 'speed', title: 'Escoamento Eficiente', desc: 'Liquidez imediata através da nossa rede. Otimize o giro do seu rebanho com processos ágeis.' }
];

const PillarsSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-black">Pilar de Negócios</h2>
                    <div className="w-24 h-1 gold-gradient mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((p, i) => (
                        <div key={i} className="group p-10 rounded-3xl border border-black/5 bg-zinc-50 hover:bg-white hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-xl">
                            <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-white text-3xl font-bold">{p.icon}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-5 tracking-wide uppercase text-black">{p.title}</h3>
                            <p className="text-zinc-500 font-normal leading-relaxed text-sm">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;
