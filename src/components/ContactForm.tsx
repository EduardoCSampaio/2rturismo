import { useState, FormEvent } from 'react';
import { COMPANY_INFO } from '../data/tourismData';
import { Phone, Clock, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [people, setPeople] = useState('2 pessoas');
  const [hotel, setHotel] = useState('');
  const [interests, setInterests] = useState('Cataratas + Paraguai + Argentina');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedText = 
`🌴 *SOLICITAÇÃO DE ORÇAMENTO - SITE 2R TURISMO* 🌴

👤 *Nome:* ${name}
📱 *WhatsApp:* ${phone}
📅 *Data Prevista:* ${travelDate || 'A definir'}
👥 *Quantidade de Pessoas:* ${people}
🏨 *Hotel / Local em Foz:* ${hotel || 'Ainda vou reservar'}
🎯 *Passeios de Interesse:* ${interests}
📝 *Observações / Detalhes:* ${notes || 'Gostaria de sugestão de roteiro'}`;

    // Safely encode all special characters and Portuguese accents
    const targetUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(targetUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#164158] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-amber-400 font-black text-xs tracking-[0.25em] uppercase mb-1">
              Pedido Rápido
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              O que sua viagem <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                precisa hoje?
              </span>
            </h2>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Fale diretamente com quem vive em Foz do Iguaçu e conhece cada detalhe das fronteiras. Preencha seus dados para receber uma cotação completa no WhatsApp sem compromisso.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-sm font-bold">WhatsApp Direto</b>
                  <span className="text-neutral-400 text-sm">{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-sm font-bold">Horário de Atendimento</b>
                  <span className="text-neutral-400 text-sm">{COMPANY_INFO.businessHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-white text-sm font-bold">Área de Atendimento</b>
                  <span className="text-neutral-400 text-sm">{COMPANY_INFO.pickupNote}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#24546a]/80 p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full bg-[#0a0f18] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Seu WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (45) 92000-5513"
                    className="w-full bg-[#0a0f18] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Data da Viagem
                  </label>
                  <input
                    type="text"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    placeholder="Ex: 15/10 ou Feriado"
                    className="w-full bg-[#0a0f18] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Passageiros
                  </label>
                  <select
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="w-full bg-[#111714] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="1 pessoa">1 pessoa</option>
                    <option value="2 pessoas">2 pessoas (Casal)</option>
                    <option value="3 a 4 pessoas">3 a 4 pessoas</option>
                    <option value="5 a 8 pessoas">5 a 8 pessoas (Família)</option>
                    <option value="Grupo 9+ pessoas">Grupo (9+ pessoas)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Hotel em Foz
                  </label>
                  <input
                    type="text"
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                    placeholder="Nome do hotel ou Centro"
                    className="w-full bg-[#111714] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Passeios que deseja fazer
                </label>
                <input
                  type="text"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="Ex: Cataratas BR e ARG, Macuco Safari, Paraguai..."
                  className="w-full bg-[#111714] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Dúvidas ou Observações
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Precisa de transfer aeroporto? Dúvidas sobre documentos ou crianças?"
                  className="w-full bg-[#111714] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 font-black py-4 rounded-xl text-base flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xl shadow-emerald-950/50"
              >
                <MessageCircle className="w-5 h-5 fill-current text-black" />
                <span>ENVIAR SOLICITAÇÃO AO WHATSAPP</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Mensagem preparada com sucesso! Abrindo o WhatsApp...</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
