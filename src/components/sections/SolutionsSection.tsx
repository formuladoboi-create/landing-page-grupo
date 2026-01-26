import React from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

const solutions = [
    { icon: 'storefront', title: 'Oportunidades em um só lugar', desc: 'Acesso direto a animais disponíveis fora do leilão, com comunicação objetiva e foco em negócio.' },
    { icon: 'credit_score', title: 'Compra Parcelada e Descomplicada', desc: 'Após o cadastro, você pode avançar com condições facilitadas para fechar com mais previsibilidade.' },
    { icon: 'local_shipping', title: 'Frete Compartilhado para Baratear', desc: 'Organização de logística e rotas compartilhadas para diluir custo e aumentar eficiência na entrega.' }
];

const SolutionsSection: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-zinc-50 relative border-y border-black/5 overflow-hidden">
            <div className="absolute inset-0 subtle-bg-texture opacity-5"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <ScrollReveal>
                            <h3 className="font-bold text-sm text-primary tracking-[0.3em] uppercase border-l-4 border-primary/50 pl-6">Como o Fórmula do Boi Ajuda o Comprador</h3>
                        </ScrollReveal>
                        <div className="space-y-6">
                            {solutions.map((item, idx) => (
                                <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                                    <div className="bg-white p-8 rounded-2xl border border-primary/20 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
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
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
                <ScrollReveal delay={0.5}>
                    <div className="mt-20">
                        <div className="text-center">
                            <a href="#formulario" className="inline-block gold-gradient text-white font-bold text-xs md:text-sm py-4 px-8 md:px-10 rounded-xl tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20 uppercase">
                                Quero Me Cadastrar Para Comprar
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default SolutionsSection;
