import React from 'react';
import CTAButton from '../ui/CTAButton';

const challenges = [
    { icon: 'block', title: 'Acesso Limitado', desc: 'Dificuldade em alcançar compradores qualificados fora da sua região geográfica imediata.' },
    { icon: 'trending_down', title: 'Preços Desvalorizados', desc: 'Venda de genética de elite em mercados comuns, sem o devido reconhecimento financeiro.' },
    { icon: 'history_edu', title: 'Burocracia na Negociação', desc: 'Processos lentos e intermediários que consomem tempo e margem de lucro do produtor.' }
];

const solutions = [
    { icon: 'public', title: 'Alcance Nacional Imediato', desc: 'Conectamos sua fazenda aos maiores investidores de Nelore PO do Brasil em segundos.' },
    { icon: 'payments', title: 'Valorização Real do Ativo', desc: 'Nossa plataforma educa o comprador sobre a sua linhagem, garantindo o preço justo pela sua genética.' },
    { icon: 'flash_on', title: 'Negociação Destravada', desc: 'Agilidade total do anúncio ao fechamento. Menos papelada, mais liquidez para o seu caixa.' }
];

const SolutionsSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-zinc-50 relative border-y border-black/5 overflow-hidden">
            <div className="absolute inset-0 subtle-bg-texture opacity-5"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-4xl font-black tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4 leading-tight text-black">
                        Destrave o Potencial de Vendas <br className="hidden md:block" />
                        <span className="text-gold-gradient">Da Sua Criação</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="space-y-8">
                        <h3 className="font-bold text-sm text-zinc-400 tracking-[0.3em] uppercase border-l-4 border-zinc-200 pl-6">Desafios Atuais</h3>
                        <div className="space-y-6">
                            {challenges.map((item, idx) => (
                                <div key={idx} className="p-8 rounded-2xl border border-black/5 bg-white hover:shadow-lg transition-all group">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors">{item.icon}</span>
                                        <h4 className="text-lg font-bold text-black uppercase tracking-tight">{item.title}</h4>
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="font-bold text-sm text-primary tracking-[0.3em] uppercase border-l-4 border-primary/50 pl-6">A Solução Fórmula do Boi</h3>
                        <div className="space-y-6">
                            {solutions.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl border border-primary/20 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                                    <div className="flex items-start gap-6 relative z-10">
                                        <div className="w-12 h-12 rounded-xl gold-gradient flex-shrink-0 flex items-center justify-center shadow-lg shadow-primary/20">
                                            <span className="material-symbols-outlined text-white font-bold">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-2 uppercase tracking-wide">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
