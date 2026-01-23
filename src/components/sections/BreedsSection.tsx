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
            </div>
        </section>
    );
};

export default BreedsSection;
