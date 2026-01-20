import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../../types';
import { getUFs, getCitiesByUF, IBGEUF, IBGECity } from '../../services/ibgeService';

const LeadForm: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        nomeFazenda: '',
        instagram: '',
        whatsapp: '',
        local: '',
        interesse: 'Selecione uma opção',
        buscaComprar: 'Selecione uma opção',
        quantidadeAnimais: 'Selecione uma opção'
    });

    const [ufs, setUfs] = useState<IBGEUF[]>([]);
    const [cities, setCities] = useState<IBGECity[]>([]);
    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isLoadingCities, setIsLoadingCities] = useState(false);

    useEffect(() => {
        getUFs().then(setUfs).catch(console.error);
    }, []);

    useEffect(() => {
        if (selectedUf) {
            setIsLoadingCities(true);
            getCitiesByUF(selectedUf)
                .then(cities => {
                    setCities(cities);
                    setSelectedCity('');
                })
                .catch(console.error)
                .finally(() => setIsLoadingCities(false));
        } else {
            setCities([]);
            setSelectedCity('');
        }
    }, [selectedUf]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (selectedCity && selectedUf) {
            setFormData(prev => ({ ...prev, local: `${selectedCity} - ${selectedUf}` }));
        } else {
            setFormData(prev => ({ ...prev, local: '' }));
        }
    }, [selectedCity, selectedUf]);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

            if (GOOGLE_SCRIPT_URL) {
                const payload = {
                    nome: formData.nome,
                    whatsapp: formData.whatsapp,
                    instagram: formData.instagram,
                    nomeFazenda: formData.nomeFazenda,
                    estado: selectedUf,
                    cidade: selectedCity,
                    interesse: formData.interesse,
                    buscaComprar: formData.buscaComprar,
                    quantidadeAnimais: formData.quantidadeAnimais
                };

                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });
            }

            // Navigate to thank you page after form submission
            navigate('/obrigado-whats');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Still navigate even if there's an error
            navigate('/obrigado-whats');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-black/10 shadow-2xl relative z-10">
            <h3 className="font-bold text-xl mb-8 tracking-widest uppercase text-black">ACESSE O GRUPO</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* 1. Nome Completo */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Nome Completo</label>
                    <input
                        required
                        value={formData.nome}
                        onChange={e => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 transition-all text-sm"
                        placeholder="Ex: João da Silva"
                        type="text"
                    />
                </div>

                {/* 2. Celular (WhatsApp) */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Celular</label>
                    <input
                        required
                        value={formData.whatsapp}
                        onChange={e => {
                            // Remove all non-numeric characters
                            const numericValue = e.target.value.replace(/\D/g, '');
                            // Limit to 11 digits
                            const limitedValue = numericValue.slice(0, 11);
                            // Apply mask (DD) 9XXXX-XXXX
                            let maskedValue = limitedValue;
                            if (limitedValue.length > 0) {
                                maskedValue = `(${limitedValue.slice(0, 2)}`;
                                if (limitedValue.length > 2) {
                                    maskedValue += `) ${limitedValue.slice(2, 7)}`;
                                }
                                if (limitedValue.length > 7) {
                                    maskedValue += `-${limitedValue.slice(7, 11)}`;
                                }
                            }
                            setFormData({ ...formData, whatsapp: maskedValue });
                        }}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 text-sm"
                        placeholder="(00) 00000-0000"
                        type="tel"
                        maxLength={16}
                    />
                </div>

                {/* 3. Instagram (opcional) */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Instagram <span className="text-zinc-400">(opcional)</span></label>
                    <input
                        value={formData.instagram}
                        onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 transition-all text-sm"
                        placeholder="@seuinstagram"
                        type="text"
                    />
                </div>

                {/* 4. Nome da Fazenda */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Nome da Fazenda</label>
                    <input
                        required
                        value={formData.nomeFazenda}
                        onChange={e => {
                            const formatted = e.target.value.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
                            setFormData({ ...formData, nomeFazenda: formatted });
                        }}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 transition-all text-sm"
                        placeholder="Ex: Fazenda Santa Maria"
                        type="text"
                    />
                </div>

                {/* 5. Estado */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Estado</label>
                    <select
                        required
                        value={selectedUf}
                        onChange={e => setSelectedUf(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
                    >
                        <option value="" disabled>Selecione o estado</option>
                        {ufs.map(uf => (
                            <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                        ))}
                    </select>
                </div>

                {/* 6. Cidade */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Cidade</label>
                    <select
                        required
                        value={selectedCity}
                        onChange={e => setSelectedCity(e.target.value)}
                        disabled={!selectedUf || isLoadingCities}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none disabled:opacity-50"
                    >
                        <option value="" disabled>
                            {isLoadingCities ? 'Carregando...' : (selectedUf ? 'Selecione a cidade' : 'Selecione um estado primeiro')}
                        </option>
                        {cities.map(city => (
                            <option key={city.id} value={city.nome}>{city.nome}</option>
                        ))}
                    </select>
                </div>

                {/* 7. Interesse */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Interesse</label>
                    <select
                        required
                        value={formData.interesse}
                        onChange={e => setFormData({ ...formData, interesse: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
                    >
                        <option disabled>Selecione uma opção</option>
                        <option>Já sou criador renomado, quero comprar ou vender</option>
                        <option>Já sou criador iniciante, quero comprar e vender</option>
                        <option>Estou iniciando e quero entender mais sobre gado PO</option>
                        <option>Crio gado comercial e quero começar no PO</option>
                    </select>
                </div>

                {/* 8. O que busca comprar */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">O que você busca comprar?</label>
                    <select
                        required
                        value={formData.buscaComprar}
                        onChange={e => setFormData({ ...formData, buscaComprar: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
                    >
                        <option disabled>Selecione uma opção</option>
                        <option>Embriões</option>
                        <option>Sêmen</option>
                        <option>Touro</option>
                        <option>Matrizes</option>
                    </select>
                </div>

                {/* 9. Quantidade de animais */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Quantidade de animais na fazenda</label>
                    <select
                        required
                        value={formData.quantidadeAnimais}
                        onChange={e => setFormData({ ...formData, quantidadeAnimais: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
                    >
                        <option disabled>Selecione uma opção</option>
                        <option>0 a 100</option>
                        <option>100 a 300</option>
                        <option>300 a 500</option>
                        <option>500+</option>
                    </select>
                </div>
                <button
                    className="w-full gold-gradient text-white font-bold text-xs py-5 md:py-6 rounded-xl tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 mt-6 shadow-xl shadow-primary/20 uppercase disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'ENVIANDO...' : 'QUERO ACESSAR O GRUPO DE VENDAS'}
                </button>
            </form>
            <p className="text-[9px] text-center text-zinc-400 mt-8 uppercase tracking-[0.3em] font-medium">Acesso restrito para pecuaristas selecionados</p>
        </div>
    );
};

export default LeadForm;
