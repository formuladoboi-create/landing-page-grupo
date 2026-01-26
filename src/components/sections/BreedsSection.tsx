import React, { useEffect, useRef, useState } from 'react';

const videos = [
    { id: 'UnpREOe1s7c', title: 'Nelore PO' },
    { id: 'dABi1E-3oA4', title: 'Genética de Elite' },
    { id: 'DiA_dqQGVJQ', title: 'Raças de Excelência' }
];

const BreedsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-black mb-4">
                        Raças que <span className="text-gold-gradient">Trabalhamos</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto"></div>
                </div>

                <div className="flex justify-center items-center gap-4 md:gap-8">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl group"
                        aria-label="Vídeo anterior"
                    >
                        <span className="material-symbols-outlined text-2xl text-zinc-600 group-hover:text-white">
                            chevron_left
                        </span>
                    </button>

                    {/* Video */}
                    <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        {isVisible && (
                            <iframe
                                key={videos[currentIndex].id}
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videos[currentIndex].id}?autoplay=1&mute=1&rel=0`}
                                title={videos[currentIndex].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl group"
                        aria-label="Próximo vídeo"
                    >
                        <span className="material-symbols-outlined text-2xl text-zinc-600 group-hover:text-white">
                            chevron_right
                        </span>
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {videos.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-zinc-300 hover:bg-zinc-400'
                                }`}
                            aria-label={`Ir para vídeo ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Raças - Nelore Padrão e Pintado */}
                <div className="mt-16">
                    <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
                        {/* Nelore Padrão */}
                        <div className="group flex flex-col items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                                    verified
                                </span>
                            </div>
                            <span className="text-lg md:text-xl font-bold text-zinc-800 group-hover:text-primary transition-colors text-center">
                                Nelore Padrão
                            </span>
                        </div>

                        {/* Nelore Pintado */}
                        <div className="group flex flex-col items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                                    palette
                                </span>
                            </div>
                            <span className="text-lg md:text-xl font-bold text-zinc-800 group-hover:text-primary transition-colors text-center">
                                Nelore Pintado
                            </span>
                        </div>
                    </div>
                </div>

                {/* O que ofertamos no grupo */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-black mb-4">
                            O que <span className="text-gold-gradient">Ofertamos</span> no Grupo?
                        </h3>
                        <div className="w-20 h-1 gold-gradient mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {/* Sêmen */}
                        <div className="group flex flex-col items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                                    science
                                </span>
                            </div>
                            <span className="text-lg md:text-xl font-bold text-zinc-800 group-hover:text-primary transition-colors">
                                Sêmen
                            </span>
                        </div>

                        {/* Embrião */}
                        <div className="group flex flex-col items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                                    egg_alt
                                </span>
                            </div>
                            <span className="text-lg md:text-xl font-bold text-zinc-800 group-hover:text-primary transition-colors">
                                Embrião
                            </span>
                        </div>

                        {/* Touros */}
                        <div className="group flex flex-col items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                                    pets
                                </span>
                            </div>
                            <span className="text-lg md:text-xl font-bold text-zinc-800 group-hover:text-primary transition-colors">
                                Touros
                            </span>
                        </div>

                        {/* Matrizes */}
                        <div className="group flex flex-col items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                                    favorite
                                </span>
                            </div>
                            <span className="text-lg md:text-xl font-bold text-zinc-800 group-hover:text-primary transition-colors">
                                Matrizes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreedsSection;
