import { useState } from 'react';
import { Tour } from '../types';
import { TOURS, COMPANY_INFO } from '../data/tourismData';
import { Clock, MapPin, CheckCircle2, MessageCircle, Info, Sparkles, X, ArrowRight } from 'lucide-react';

export default function ToursSection() {
  const [activeModalTour, setActiveModalTour] = useState<Tour | null>(null);

  // Exatamente os 3 principais passeios de Foz do Iguaçu
  const mainTours = TOURS.filter(t => 
    t.id === 'cataratas-brasil' || t.id === 'macuco-safari' || t.id === 'cataratas-argentina'
  );

  const handleWhatsAppInquiry = (tour: Tour) => {
    const text = `Olá, 2R Turismo! Tenho interesse no passeio *${tour.title}* (${tour.destination}). Poderiam me passar os valores atualizados e disponibilidade para minha viagem?`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="passeios" className="py-24 bg-[#123349] relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-amber-400 font-black text-xs tracking-[0.25em] uppercase mb-3">
            O que fazer em Foz do Iguaçu
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Passeios & Experiências
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Os 3 passeios mais procurados e indispensáveis na Tríplice Fronteira com transporte privativo, conforto e pontualidade.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mainTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-gradient-to-b from-[#24546a]/85 to-[#1d465a]/85 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden group hover:shadow-2xl hover:shadow-orange-950/30 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141d] via-transparent to-black/30" />

                {/* Destination Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-black tracking-wide uppercase backdrop-blur-md ${
                    tour.destination === 'Brasil'
                      ? 'bg-emerald-500/90 text-neutral-950'
                      : tour.destination === 'Argentina'
                      ? 'bg-sky-500/90 text-neutral-950'
                      : tour.destination === 'Paraguai'
                      ? 'bg-red-500/90 text-white'
                      : 'bg-amber-500/90 text-neutral-950'
                  }`}>
                    {tour.destination}
                  </span>
                  {tour.badge && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-black/70 text-white border border-white/15 backdrop-blur-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {tour.badge}
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-200 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {tour.subtitle}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6 flex-1">
                  {tour.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppInquiry(tour)}
                    className="flex-1 bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-black" />
                    <span>CONSULTAR NO WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => setActiveModalTour(tour)}
                    title="Ver detalhes completos"
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom request notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121926] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-bold text-sm sm:text-base">
              Procurando outros passeios como Compras no Paraguai, Parque das Aves ou Itaipu?
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
              Montamos seu roteiro completo com quantos dias e passeios você desejar.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, 2R Turismo! Gostaria de consultar outros passeios para montar meu roteiro personalizado.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 font-extrabold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Falar com Consultor</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tour Detail Modal */}
      {activeModalTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#121926] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setActiveModalTour(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
              <img
                src={activeModalTour.image}
                alt={activeModalTour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121926] via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-md text-xs font-black uppercase bg-amber-400 text-black mb-2 inline-block">
                  {activeModalTour.destination}
                </span>
                <h3 className="text-2xl font-black text-white">{activeModalTour.title}</h3>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {activeModalTour.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-3">O que está incluído</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalTour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {activeModalTour.tips && (
              <div className="bg-amber-950/30 border border-amber-500/20 p-4 rounded-xl mb-8 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-200">
                  <strong className="block text-amber-300 font-bold mb-0.5">Dica de Especialista 2R:</strong>
                  {activeModalTour.tips}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  handleWhatsAppInquiry(activeModalTour);
                  setActiveModalTour(null);
                }}
                className="flex-1 bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 font-black py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
              </button>
              <button
                onClick={() => setActiveModalTour(null)}
                className="px-6 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-neutral-300 text-sm font-semibold cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
