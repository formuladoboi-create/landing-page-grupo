import React, { useState, useEffect } from 'react';
import Logo from '../components/ui/Logo';

const ThankYouPage: React.FC = () => {
    // WhatsApp group link
    const groupLink = "https://chat.whatsapp.com/JYxJPWfkoHHLZfosHlywN9";

    // Countdown state
    const [countdown, setCountdown] = useState(4);

    // Auto-redirect after countdown
    useEffect(() => {
        if (countdown <= 0) {
            window.location.href = groupLink;
            return;
        }

        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="w-full py-6 px-8 flex justify-center items-center border-b border-black/5">
                <Logo className="h-16" />
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="max-w-2xl text-center space-y-8">
                    {/* Success Icon */}
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* Headline */}
                    <h1 className="font-sans text-3xl md:text-4xl font-black leading-tight tracking-[0.1em] uppercase text-black">
                        Cadastro confirmado. <span className="text-gold-gradient">Bem-vindo ao Fórmula do Boi.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base md:text-lg text-zinc-500 font-normal leading-relaxed max-w-xl mx-auto">
                        Você já deu o primeiro passo. Agora, entre no nosso grupo para receber orientações, atualizações e acessar o ecossistema de relacionamento e negócios.
                    </p>

                    {/* Countdown Timer */}
                    <div className="py-4">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-4 border-primary">
                            <span className="text-3xl font-black text-primary">{countdown}</span>
                        </div>
                        <p className="text-sm text-zinc-500 mt-3">
                            Redirecionando em <span className="font-bold text-primary">{countdown}</span> segundos...
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <a
                            href={groupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block gold-gradient text-white font-bold text-xs py-5 px-10 rounded-xl tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20 uppercase"
                        >
                            Entrar no Grupo Oficial do Fórmula do Boi
                        </a>
                    </div>

                    {/* Microcopy */}
                    <p className="text-[11px] text-zinc-400 tracking-[0.15em] uppercase">
                        A entrada é imediata. Lá você recebe as instruções e próximos passos.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-8 border-t border-black/5 text-center">
                <p className="text-[10px] tracking-[0.6em] text-zinc-400 font-bold uppercase">FÓRMULA DO BOI © 2024</p>
            </footer>
        </div>
    );
};

export default ThankYouPage;

