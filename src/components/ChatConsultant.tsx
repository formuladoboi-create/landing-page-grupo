import React, { useState, useRef, useEffect } from 'react';
import { getGeminiConsultantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatConsultant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Olá! Sou seu consultor da Fórmula do Boi. Como posso ajudar com sua genética de elite hoje?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const aiResponse = await getGeminiConsultantResponse(userMsg);
            setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', text: 'Erro ao conectar. Tente novamente mais tarde.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {isOpen ? (
                <div className="bg-white w-80 md:w-96 h-[500px] shadow-2xl rounded-2xl border border-black/10 flex flex-col overflow-hidden animate-in fade-in">
                    <div className="gold-gradient p-4 text-white flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-sm tracking-widest uppercase">Consultor AI</h3>
                            <p className="text-[10px] opacity-80 uppercase tracking-tighter">Especialista em Nelore PO</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-50">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-black/5 text-zinc-700 rounded-tl-none'
                                    }`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-black/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                    <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce"></div>
                                    <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                                    <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-white border-t border-black/5 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Digite sua dúvida..."
                            className="flex-1 border border-zinc-200 rounded-lg text-xs px-3 py-2 focus:ring-primary focus:border-primary focus:outline-none"
                        />
                        <button
                            onClick={handleSend}
                            className="gold-gradient p-2 rounded-lg text-white shadow-lg shadow-primary/20"
                        >
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="gold-gradient w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-105 transition-transform group"
                >
                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                    <div className="absolute right-full mr-4 bg-black text-white text-[10px] py-1 px-3 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">
                        Falar com especialista
                    </div>
                </button>
            )}
        </div>
    );
};

export default ChatConsultant;
