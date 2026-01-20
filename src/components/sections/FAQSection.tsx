import React, { useState } from 'react';
import CTAButton from '../ui/CTAButton';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-black/5 last:border-0">
            <button
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-bold text-sm md:text-base uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-black group-hover:text-primary'}`}>
                    {question}
                </span>
                <span className={`material-symbols-outlined text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
                    expand_more
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection: React.FC = () => {
    const faqData = [
        {
            category: "Sobre o Fórmula do Boi",
            items: [
                {
                    question: "O que é o Fórmula do Boi?",
                    answer: "É uma comunidade fechada e curada para compradores de Nelore PO que desejam melhorar a genética de seu plantel, fortalecer relacionamento no setor, vender e comprar fora do leilão com mais previsibilidade."
                },
                {
                    question: "O Fórmula do Boi é uma corretora ou assessoria?",
                    answer: "Não. Não atuamos como corretora tradicional. O Fórmula do Boi é um ecossistema: comunidade + canal exclusivo + rotinas de relacionamento + suporte comercial para profissionalizar a venda direta."
                },
                {
                    question: "O Fórmula do Boi substitui o leilão?",
                    answer: "Não necessariamente. O objetivo é ampliar suas alternativas e reduzir dependência, criando um canal contínuo fora do leilão para gerar demanda e oportunidades ao longo do ano."
                }
            ]
        },
        {
            category: "Elegibilidade e Curadoria",
            items: [
                {
                    question: "Quem pode participar?",
                    answer: "Criadores de Nelore PO com interesse real em vender fora do leilão, construir relacionamento no setor e desenvolver um canal próprio com presença consistente."
                },
                {
                    question: "Existe processo de seleção?",
                    answer: "Sim. A entrada é mediante curadoria para manter qualidade do ambiente, alinhamento de perfil e preservar a dinâmica do canal."
                },
                {
                    question: "A comunidade tem limite de participantes?",
                    answer: "Sim. O modelo é limitado para garantir proximidade, conexão e qualidade de relacionamento entre os membros."
                },
                {
                    question: "Se eu me cadastrar, já entro automaticamente?",
                    answer: "Não. O cadastro é uma solicitação de avaliação. Após o envio, você passa pelo processo de curadoria e, se aprovado, segue para o onboarding."
                }
            ]
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-black mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-zinc-500">
                        Tire suas dúvidas sobre o funcionamento do ecossistema.
                    </p>
                </div>

                <div className="grid gap-12">
                    {faqData.map((section, idx) => (
                        <div key={idx} className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-black/5">
                            <h3 className="text-lg font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 border-b-2 border-primary/20 pb-4 inline-block">
                                {section.category}
                            </h3>
                            <div>
                                {section.items.map((item, itemIdx) => (
                                    <FAQItem key={itemIdx} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
