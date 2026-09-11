import { PACKAGES, COMPANY_INFO } from '../data/tourismData';
import { Check, Star, MessageCircle, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { TravelPackage } from '../types';

export default function PackagesSection() {
  const handleSelectPackage = (pkg: TravelPackage) => {
    const text = `Olá, 2R Turismo! Gostei do pacote *${pkg.title}* (${pkg.days}). Poderiam me passar os detalhes, valores e disponibilidade?`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pacotes" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-400 font-black text-xs tracking-[0.25em] uppercase mb-3">
            Roteiros Prontos & Econômicos
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Combos Mais Pedidos
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Pacotes organizados dia a dia para você aproveitar o máximo da Tríplice Fronteira com economia de tempo e dinheiro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col ${pkg.popular ? 'pt-5 lg:-translate-y-2' : ''}`}
            >
              {/* Popular Tag */}
              {pkg.popular && (
                <div className="absolute top-1 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 text-[10px] sm:text-xs font-black px-3 sm:px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Escolha Mais Popular</span>
                </div>
              )}

              <div
                className={`rounded-2xl flex flex-col transition-all duration-300 relative h-full ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#1e1a29] via-[#161d2b] to-[#101520] border-2 border-amber-500/80 shadow-2xl shadow-orange-950/40'
                  : 'bg-[#121824] border border-white/10 hover:border-white/20'
                }`}
              >

              {/* Package Header with Image preview */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-neutral-200 border border-white/10 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{pkg.days}</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                    {pkg.tag}
                  </span>
                  <h3 className="text-xl font-black text-white">{pkg.title}</h3>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-6 flex-1">
                  <span className="text-xs font-extrabold uppercase text-neutral-400 tracking-wider block mb-3">
                    O que está incluído no combo:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.includedTours.map((tour, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{tour}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/30 p-3.5 rounded-xl border border-white/5 mb-6 text-xs text-neutral-400">
                  <strong className="text-neutral-300 block mb-0.5">Ideal para:</strong>
                  {pkg.idealFor}
                </div>

                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 shadow-lg shadow-emerald-950/40'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-emerald-500/50'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current text-black" />
                  <span>CONSULTAR ESSE COMBO</span>
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
