import React, { useEffect, useRef, useState } from 'react';

const BreedsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-black mb-4">
                        Raças que <span className="text-gold-gradient">Trabalhamos</span>
                    </h2>
                    <div className="w-24 h-1 gold-gradient mx-auto"></div>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        {isVisible && (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/UnpREOe1s7c?autoplay=1&mute=1&rel=0"
                                title="Raças que trabalhamos - Fórmula do Boi"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreedsSection;
