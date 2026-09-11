import { useState } from 'react';
import { COMPANY_INFO, TOURS } from '../data/tourismData';
import { Compass, Users, Calendar, Plane, Check, Send, Sparkles, AlertCircle } from 'lucide-react';

export default function TripCalculator() {
  const [days, setDays] = useState<number>(4);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [includeTransfer, setIncludeTransfer] = useState<boolean>(true);
  const [selectedTourIds, setSelectedTourIds] = useState<string[]>([
    'cataratas-brasil',
    'macuco-safari',
    'cataratas-argentina',
    'compras-paraguai'
  ]);
  const [travelMonth, setTravelMonth] = useState<string>('Próximo mês');

  const toggleTour = (id: string) => {
    if (selectedTourIds.includes(id)) {
      setSelectedTourIds(selectedTourIds.filter(item => item !== id));
    } else {
      setSelectedTourIds([...selectedTourIds, id]);
    }
  };

  const handleSendToWhatsApp = () => {
    const selectedTourNames = TOURS
      .filter(t => selectedTourIds.includes(t.id))
      .map(t => `• ${t.title} (${t.destination})`)
      .join('\n');

    const message = 
`🗺️ *NOVO ROTEIRO PERSONALIZADO - 2R TURISMO FOZ* 🗺️

📅 *Dias de Viagem:* ${days} dias (${travelMonth})
👥 *Passageiros:* ${adults} adulto(s)${children > 0 ? ` + ${children} criança(s)` : ''}
✈️ *Transfer Aeroporto In/Out:* ${includeTransfer ? 'SIM (Recepção com placa no aeroporto)' : 'NÃO'}

📍 *Passeios Selecionados:*
${selectedTourNames || '• Roteiro livre a definir'}

💬 *Gostaria de saber:* Valores fechados para esse grupo, disponibilidade e formas de pagamento.`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 bg-[#0a0f18] border-y border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs tracking-[0.25em] uppercase mb-3 bg-amber-950/60 border border-amber-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            SIMULADOR INTERATIVO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Monte Seu Roteiro Sob Medida
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Personalize os dias, quantidade de pessoas e escolha as atrações desejadas. Envie tudo pronto para nosso consultor no WhatsApp em 1 clique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-[#121926] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            
            {/* Step 1: Trip Duration */}
            <div>
              <label className="block text-white font-extrabold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                1. Quantos dias você vai ficar em Foz?
              </label>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
                {[2, 3, 4, 5].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`py-3.5 px-3 rounded-xl font-black text-sm sm:text-base transition-all cursor-pointer ${
                      days === d
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 shadow-lg shadow-orange-950/50'
                        : 'bg-[#0a0f18] text-neutral-300 hover:bg-[#1a2335] border border-white/5'
                    }`}
                  >
                    {d === 5 ? '5+ Dias' : `${d} Dias`}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Passengers & Travel Window */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-white font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-400" />
                  Adultos
                </label>
                <div className="flex items-center bg-[#0a0f18] border border-white/10 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-black text-white text-base">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-400" />
                  Crianças (até 11 anos)
                </label>
                <div className="flex items-center bg-[#0a0f18] border border-white/10 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-black text-white text-base">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white font-extrabold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Previsão de Viagem
                </label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full bg-[#0a0f18] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Este mês">Neste Mês</option>
                  <option value="Próximo mês">Próximo Mês</option>
                  <option value="Férias de Julho">Férias de Julho</option>
                  <option value="Final de Ano / Réveillon">Final de Ano / Réveillon</option>
                  <option value="Primeiro Semestre">Primeiro Semestre</option>
                  <option value="Outra data">A Definir</option>
                </select>
              </div>
            </div>

            {/* Step 3: Airport Transfer Option */}
            <div className="p-4 bg-[#0a0f18] rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-sm font-bold">Transfer Aeroporto (Chegada e Retorno)</b>
                  <span className="text-neutral-400 text-xs">Recepção com placa nominal no saguão e transporte climatizado</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIncludeTransfer(!includeTransfer)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase transition-colors shrink-0 cursor-pointer ${
                  includeTransfer
                    ? 'bg-amber-400 text-neutral-950 shadow-md'
                    : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                }`}
              >
                {includeTransfer ? 'Incluído ✓' : '+ Adicionar'}
              </button>
            </div>

            {/* Step 4: Tour Select Checkboxes */}
            <div>
              <label className="block text-white font-extrabold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                2. Selecione os passeios que deseja fazer:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOURS.map((tour) => {
                  const isChecked = selectedTourIds.includes(tour.id);
                  return (
                    <div
                      key={tour.id}
                      onClick={() => toggleTour(tour.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-amber-950/30 border-amber-500/60 text-white shadow-sm'
                          : 'bg-[#0a0f18] border-white/5 text-neutral-300 hover:bg-[#161f30] hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-xs sm:text-sm text-white truncate">{tour.title}</p>
                          <span className="text-[11px] text-neutral-400 block">{tour.destination} • {tour.duration}</span>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-amber-400 text-black' : 'border border-white/20'
                      }`}>
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Summary Sidebar Right Column (4 cols) */}
          <div className="lg:col-span-4 bg-[#121926] rounded-2xl border border-amber-500/30 p-6 sm:p-7 shadow-2xl sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <h3 className="text-lg font-black text-white uppercase tracking-tight">
                Resumo do Roteiro
              </h3>
              <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                {selectedTourIds.length} Atração(ões)
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 mb-6">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Duração:</span>
                <span className="font-bold text-white">{days} Dias de Viagem</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Passageiros:</span>
                <span className="font-bold text-white">
                  {adults} Adulto(s) {children > 0 ? `+ ${children} Criança(s)` : ''}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Transfer Aeroporto:</span>
                <span className={`font-bold ${includeTransfer ? 'text-emerald-400' : 'text-neutral-500'}`}>
                  {includeTransfer ? 'Incluso (In/Out)' : 'Não'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Período:</span>
                <span className="font-bold text-white">{travelMonth}</span>
              </div>
            </div>

            {/* List of chosen tours */}
            <div className="bg-[#111714] p-3.5 rounded-xl border border-white/10 mb-6 max-h-48 overflow-y-auto">
              <span className="text-[11px] font-black uppercase text-emerald-400 tracking-wider block mb-2">
                Passeios Escolhidos:
              </span>
              {selectedTourIds.length === 0 ? (
                <p className="text-xs text-neutral-500 italic">Nenhum passeio selecionado ainda.</p>
              ) : (
                <ul className="space-y-1.5 text-xs text-neutral-200">
                  {TOURS.filter(t => selectedTourIds.includes(t.id)).map(t => (
                    <li key={t.id} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="truncate">{t.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Action Button */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 font-black py-4 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current text-black" />
              <span>ENVIAR ROTEIRO NO WHATSAPP</span>
            </button>

            <p className="text-[11px] text-neutral-400 text-center mt-3 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Sem compromisso. Resposta rápida de consultor local.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
