
import React, { useState } from 'react';
import Logo from './components/Logo';
import ChatConsultant from './components/ChatConsultant';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    local: '',
    interesse: 'Selecione uma opção'
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! Nossa equipe de elite entrará em contato em breve.`);
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 py-4 px-8 flex justify-center items-center backdrop-blur-md border-b border-black/5 bg-white/80">
        <Logo />
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 subtle-bg-texture"></div>
        <div className="absolute top-0 right-0 -z-20 w-72 h-72 md:w-[800px] md:h-[800px] bg-primary/5 blur-[100px] md:blur-[180px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Elite Nelore PO
            </div>
            <h1 className="font-sans text-3xl md:text-5xl font-black leading-tight tracking-[0.15em] uppercase text-black">
              A FÓRMULA DA <br/>
              <span className="text-gold-gradient">GENÉTICA</span> <br/>
              DE ALTA PERFORMANCE
            </h1>
            <p className="text-base md:text-lg text-zinc-500 font-normal leading-relaxed max-w-xl">
              Venda direta, sem intermediários. Conectamos os maiores criadores do Brasil através de um ecossistema exclusivo e controlado.
            </p>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img 
                    key={i} 
                    alt={`User ${i}`} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  />
                ))}
              </div>
              <p className="text-[10px] md:text-xs font-medium text-zinc-400 uppercase tracking-widest">
                Junte-se a <span className="text-black font-bold">+1,500</span> pecuaristas.
              </p>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-10 duration-700">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-black/10 shadow-2xl relative z-10">
              <h3 className="font-bold text-xl mb-8 tracking-widest uppercase text-black">Elite Access</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Nome Completo</label>
                  <input 
                    required
                    value={formData.nome}
                    onChange={e => setFormData({...formData, nome: e.target.value})}
                    className="w-full bg-zinc-50 border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 transition-all text-sm" 
                    placeholder="Ex: João da Silva" 
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">WhatsApp</label>
                    <input 
                      required
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full bg-zinc-50 border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 text-sm" 
                      placeholder="(00) 00000-0000" 
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Fazenda / Cidade</label>
                    <input 
                      required
                      value={formData.local}
                      onChange={e => setFormData({...formData, local: e.target.value})}
                      className="w-full bg-zinc-50 border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black placeholder-zinc-400 text-sm" 
                      placeholder="Localidade" 
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Interesse Principal</label>
                  <select 
                    value={formData.interesse}
                    onChange={e => setFormData({...formData, interesse: e.target.value})}
                    className="w-full bg-zinc-50 border-zinc-200 rounded-xl py-3 md:py-4 px-5 focus:ring-primary focus:border-primary text-black text-sm appearance-none"
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
            <div className="absolute -inset-4 bg-primary/5 blur-[60px] -z-0 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-zinc-50 relative border-y border-black/5 overflow-hidden">
        <div className="absolute inset-0 subtle-bg-texture opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-black tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4 leading-tight text-black">
              Destrave o Potencial de Vendas <br className="hidden md:block"/>
              <span className="text-gold-gradient">Da Sua Criação</span>
            </h2>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h3 className="font-bold text-sm text-zinc-400 tracking-[0.3em] uppercase border-l-4 border-zinc-200 pl-6">Desafios Atuais</h3>
              <div className="space-y-6">
                {[
                  { icon: 'block', title: 'Acesso Limitado', desc: 'Dificuldade em alcançar compradores qualificados fora da sua região geográfica imediata.' },
                  { icon: 'trending_down', title: 'Preços Desvalorizados', desc: 'Venda de genética de elite em mercados comuns, sem o devido reconhecimento financeiro.' },
                  { icon: 'history_edu', title: 'Burocracia na Negociação', desc: 'Processos lentos e intermediários que consomem tempo e margem de lucro do produtor.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-2xl border border-black/5 bg-white hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors">{item.icon}</span>
                      <h4 className="text-lg font-bold text-black uppercase tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-bold text-sm text-primary tracking-[0.3em] uppercase border-l-4 border-primary/50 pl-6">A Solução Fórmula do Boi</h3>
              <div className="space-y-6">
                {[
                  { icon: 'public', title: 'Alcance Nacional Imediato', desc: 'Conectamos sua fazenda aos maiores investidores de Nelore PO do Brasil em segundos.' },
                  { icon: 'payments', title: 'Valorização Real do Ativo', desc: 'Nossa plataforma educa o comprador sobre a sua linhagem, garantindo o preço justo pela sua genética.' },
                  { icon: 'flash_on', title: 'Negociação Destravada', desc: 'Agilidade total do anúncio ao fechamento. Menos papelada, mais liquidez para o seu caixa.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-primary/20 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-black">Pilar de Negócios</h2>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'verified_user', title: 'Fim da Inadimplência', desc: 'Sistema rigoroso de compliance e histórico de compradores, garantindo segurança total no recebimento.' },
              { icon: 'trending_up', title: 'Valorização do Bezerro', desc: 'Exposição direta para compradores que valorizam genética PO, elevando o ticket médio da sua produção.' },
              { icon: 'speed', title: 'Escoamento Eficiente', desc: 'Liquidez imediata através da nossa rede. Otimize o giro do seu rebanho com processos ágeis.' }
            ].map((p, i) => (
              <div key={i} className="group p-10 rounded-3xl border border-black/5 bg-zinc-50 hover:bg-white hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-3xl font-bold">{p.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-5 tracking-wide uppercase text-black">{p.title}</h3>
                <p className="text-zinc-500 font-normal leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING SECTION */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden bg-zinc-50">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.05]">
          <Logo className="h-[500px] w-auto scale-[2] grayscale" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-[0.2em] md:tracking-[0.3em] leading-tight uppercase text-black">
            ENGINEERING <br/>
            <span className="text-gold-gradient italic">STUDY</span> <br/>
            & CONTROL
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-zinc-800 font-medium leading-relaxed tracking-wide">
              Não somos apenas um marketplace. Somos a engenharia por trás do agronegócio de precisão.
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed italic border-l-2 border-primary/30 pl-8 text-left">
              Aplicamos estudos avançados de genealogia e controle rigoroso de qualidade para que cada animal negociado represente o auge da raça Nelore.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6 md:px-12 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] md:text-[11px] text-center text-zinc-400 uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold mb-16">
            Fazendas de Referência & Linhagens de Elite
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-10 w-32 md:w-36 bg-zinc-100 rounded-lg border border-zinc-200 flex items-center justify-center text-[10px] font-black uppercase text-zinc-300">Brand {i}</div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <div className="inline-block bg-white px-8 md:px-12 py-6 md:py-8 rounded-3xl border border-primary/20 shadow-2xl">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl md:text-5xl">lock</span>
                <div className="text-left">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-1">Status do Ecossistema</p>
                  <p className="text-black font-bold text-sm md:text-lg tracking-tight">94% dos Membros Operando com Lucro Superior à Média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 border-t border-black/5 bg-white text-center space-y-10">
        <div className="flex flex-col items-center gap-6">
          <Logo className="h-10 opacity-40 hover:opacity-100 transition-opacity" />
          <p className="text-[10px] tracking-[0.6em] text-zinc-400 font-bold uppercase">FÓRMULA DO BOI © 2024</p>
        </div>
        <div className="flex justify-center gap-8 md:gap-12 text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </footer>

      {/* AI CHAT WIDGET */}
      <ChatConsultant />
    </div>
  );
};

export default App;
