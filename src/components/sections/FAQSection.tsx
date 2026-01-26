import React, { useState } from 'react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
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
            category: "Sobre o Grupo e o Acesso",
            items: [
                {
                    question: "O que é o grupo do Fórmula do Boi?",
                    answer: "É um canal para compradores acessarem oportunidades de Nelore PO fora do leilão, com comunicação objetiva e foco em negócio. Você entra, acompanha as ofertas e conversa diretamente com o responsável pela venda quando tiver interesse."
                },
                {
                    question: "Quem pode entrar no grupo?",
                    answer: "Compradores com interesse real em adquirir Nelore PO fora do leilão — seja para reposição, genética, plantel ou investimento no rebanho."
                },
                {
                    question: "O grupo é só para vendas?",
                    answer: "O foco principal é oportunidade e negociação, mas você também recebe avisos, orientações e informações essenciais para comprar com mais segurança (documentação, logística e próximos passos)."
                }
            ]
        },
        {
            category: "Confiança e Segurança",
            items: [
                {
                    question: "Como eu sei que não é golpe?",
                    answer: "As oportunidades são publicadas com padrão mínimo de informação e o comprador sempre tem acesso aos dados necessários para validar a negociação antes de fechar. Além disso, nossa orientação é que nenhuma compra seja concluída sem confirmação formal das condições e documentação."
                },
                {
                    question: "O Fórmula do Boi recebe dinheiro do comprador?",
                    answer: "O grupo não existe para intermediar pagamento \"por fora\" ou receber depósitos sem formalização. O fechamento deve acontecer com clareza de condições, identificação do vendedor e documentação do animal/negócio."
                },
                {
                    question: "Vocês garantem a compra?",
                    answer: "O grupo reduz atrito e organiza acesso às oportunidades, mas a decisão e validação final é sempre do comprador. Nós orientamos boas práticas para aumentar segurança na negociação."
                }
            ]
        },
        {
            category: "Qualidade, Registro e Informações do Animal",
            items: [
                {
                    question: "É Nelore PO de verdade? Como confirmo?",
                    answer: "As ofertas são de Nelore PO e a recomendação é sempre validar registro/documentação e os dados apresentados antes do fechamento. Caso você queira, peça o conjunto completo de informações do animal no contato da negociação."
                },
                {
                    question: "As ofertas vêm com quais informações?",
                    answer: "O padrão é trazer o essencial para você decidir rápido: identificação do animal/lote, localização, objetivo do vendedor e dados que suportem a avaliação. Se algo estiver faltando, você pode solicitar diretamente no contato da oferta."
                },
                {
                    question: "Posso pedir vídeos, fotos e detalhes antes de fechar?",
                    answer: "Sim. O comprador deve solicitar tudo o que precisar para tomar decisão com segurança (vídeos, fotos, documentação, detalhes do lote e condições)."
                }
            ]
        },
        {
            category: "Pagamento e Parcelamento",
            items: [
                {
                    question: "Dá para comprar parcelado? Como funciona?",
                    answer: "Sim, existe possibilidade de compra parcelada mediante cadastro e alinhamento das condições. Na prática, você entra no grupo, identifica a oportunidade e, ao avançar, recebe a orientação sobre as opções disponíveis para fechar."
                },
                {
                    question: "O parcelamento é automático para todo mundo?",
                    answer: "Não. As condições dependem do tipo de negociação e do perfil cadastrado. O objetivo é facilitar o fechamento, mas sempre com critérios claros."
                },
                {
                    question: "Posso comprar à vista também?",
                    answer: "Sim. Você negocia a condição que fizer mais sentido para você (à vista ou parcelado), conforme a oportunidade."
                }
            ]
        },
        {
            category: "Frete e Logística",
            items: [
                {
                    question: "Como funciona o frete?",
                    answer: "O grupo facilita a conexão e a organização da negociação. Quando aplicável, existe possibilidade de frete compartilhado para diluir custo e deixar a logística mais eficiente."
                },
                {
                    question: "O que é frete compartilhado?",
                    answer: "É quando compradores da mesma região (ou com rota compatível) organizam uma logística conjunta para reduzir custo final por animal."
                },
                {
                    question: "Quem organiza o transporte?",
                    answer: "O transporte é definido na negociação, mas o grupo ajuda a dar visibilidade e a permitir combinações mais inteligentes quando houver oportunidade de rota compartilhada."
                }
            ]
        },
        {
            category: "Regras do Grupo",
            items: [
                {
                    question: "Vai virar grupo cheio de mensagem e bagunça?",
                    answer: "Não é esse o objetivo. O grupo tem regras para manter foco: oportunidades claras, comunicação objetiva e respeito ao comprador."
                },
                {
                    question: "Posso sair quando quiser?",
                    answer: "Sim. Você é livre para sair a qualquer momento."
                },
                {
                    question: "Como eu faço para não perder as oportunidades?",
                    answer: "Ative as notificações do grupo e acompanhe as publicações. As melhores oportunidades tendem a ter demanda rápida."
                }
            ]
        },
        {
            category: "Como Comprar",
            items: [
                {
                    question: "Entrei no grupo. Qual o passo a passo para comprar?",
                    answer: "1) Entre no grupo e veja as oportunidades. 2) Quando uma oferta fizer sentido, chame o contato indicado. 3) Solicite informações finais (documentação, vídeos, detalhes). 4) Alinhe condição (à vista/parcelado) e logística (frete). 5) Feche com formalização e clareza de entrega."
                },
                {
                    question: "Posso falar com alguém se eu tiver dúvida antes de comprar?",
                    answer: "Sim. Caso precise, você pode solicitar orientação no canal indicado dentro do grupo para tirar dúvidas sobre processo, logística e próximos passos."
                }
            ]
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-black mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-zinc-500">
                            Tire suas dúvidas sobre o funcionamento do grupo.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-8">
                    {faqData.map((section, idx) => (
                        <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                            <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-black/5">
                                <h3 className="text-lg font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 border-b-2 border-primary/20 pb-4 inline-block">
                                    {section.category}
                                </h3>
                                <div>
                                    {section.items.map((item, itemIdx) => (
                                        <FAQItem key={itemIdx} question={item.question} answer={item.answer} />
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.8}>
                    <div className="mt-16 text-center space-y-4">
                        <p className="text-zinc-600 font-medium">
                            Ainda com dúvidas? Entre no grupo e veja como as oportunidades são publicadas na prática.
                        </p>
                        <a
                            href="#formulario"
                            className="inline-block gold-gradient text-white font-bold text-xs md:text-sm py-4 px-8 md:px-10 rounded-xl tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20 uppercase"
                        >
                            Entrar no Grupo Agora
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FAQSection;
