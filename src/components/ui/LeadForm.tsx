import React, { useState, useEffect } from 'react';
import { FormData } from '../../types';
import { getUFs, getCitiesByUF, IBGEUF, IBGECity } from '../../services/ibgeService';

const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        nomeFazenda: '',
        whatsapp: '',
        local: '',
        interesse: 'Selecione uma opção'
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

    useEffect(() => {
        if (selectedCity && selectedUf) {
            setFormData(prev => ({ ...prev, local: `${selectedCity} - ${selectedUf}` }));
        } else {
            setFormData(prev => ({ ...prev, local: '' }));
        }
    }, [selectedCity, selectedUf]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Obrigado, ${formData.nome}! Nossa equipe de elite entrará em contato em breve.`);
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-black/10 shadow-2xl relative z-10">
            <h3 className="font-bold text-xl mb-8 tracking-widest uppercase text-black">Acesse a Elite</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">WhatsApp</label>
                        <input
                            required
                            value={formData.whatsapp}
                            onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 text-sm"
                            placeholder="(00) 00000-0000"
                            type="tel"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Estado</label>
                        <select
                            required
                            value={selectedUf}
                            onChange={e => setSelectedUf(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
                        >
                            <option value="" disabled>UF</option>
                            {ufs.map(uf => (
                                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>
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
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Interesse Principal</label>
                    <select
                        value={formData.interesse}
                        onChange={e => setFormData({ ...formData, interesse: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
                    >
                        <option disabled>Selecione uma opção</option>
                        <option>Quero Comprar Genética</option>
                        <option>Quero Vender Plantel</option>
                        <option>Ambas as Opções</option>
                    </select>
                </div>
                <button
                    className="w-full gold-gradient text-white font-bold text-xs py-5 md:py-6 rounded-xl tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 mt-6 shadow-xl shadow-primary/20 uppercase"
                    type="submit"
                >
                    QUERO ACESSAR O GRUPO DE VENDAS
                </button>
            </form>
            <p className="text-[9px] text-center text-zinc-400 mt-8 uppercase tracking-[0.3em] font-medium">Acesso restrito para pecuaristas selecionados</p>
        </div>
    );
};

export default LeadForm;
