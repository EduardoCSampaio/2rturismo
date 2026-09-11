import { COMPANY_INFO } from '../data/tourismData';
import { Instagram, ShieldCheck, HeartHandshake, Compass, Award, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[#0d121b] border-t border-white/10 relative overflow-hidden">
      {/* Warm background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Instagram Card */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="/assets/tours/about_empresa.jpg"
                alt="2R Turismo - Experiência Inesquecível em Foz do Iguaçu"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d14]/90 via-black/20 to-transparent" />
              
              {/* Floating Instagram Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0f1522]/95 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Siga nosso dia a dia no Instagram</span>
                    <strong className="text-white text-sm font-black">{COMPANY_INFO.instagramHandle}</strong>
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#f09433] to-[#dc2743] hover:opacity-90 text-white font-extrabold text-xs px-4 py-2 rounded-lg flex items-center gap-1 transition-all shrink-0 shadow cursor-pointer"
                >
                  <span>Seguir</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#141b27] p-4 rounded-xl border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-amber-400">3</span>
                <span className="text-xs text-neutral-400 font-semibold">Países Atendidos</span>
              </div>
              <div className="bg-[#141b27] p-4 rounded-xl border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-amber-400">+100</span>
                <span className="text-xs text-neutral-400 font-semibold">Turistas Felizes</span>
              </div>
              <div className="bg-[#141b27] p-4 rounded-xl border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">100%</span>
                <span className="text-xs text-neutral-400 font-semibold">Pontualidade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Differentials */}
          <div>
            <span className="inline-block text-amber-400 font-black text-xs tracking-[0.25em] uppercase mb-3">
              Conheça a Empresa
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-6">
              2R Turismo: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                O Receptivo que Cuida de Você
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-4">
              Localizada no coração de Foz do Iguaçu, a <strong>2R Turismo</strong> nasceu com a missão de transformar a sua viagem em uma experiência memorável, segura e sem nenhum estresse de locomoção.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Ao contrário das grandes agências com ônibus superlotados e paradas obrigatórias intermináveis, nós oferecemos transporte privativo e personalizado. Você dita os seus horários, almoça onde preferir e recebe as melhores orientações locais para compras no Paraguai e jantares na Argentina.
            </p>

            {/* Differential Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Empresa Legalizada e Credenciada</h4>
                  <p className="text-neutral-400 text-xs mt-0.5">Veículos vistoriados, seguro de passageiros e alvará internacional para cruzar as fronteiras.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Consultoria e Dicas dos Melhores Locais</h4>
                  <p className="text-neutral-400 text-xs mt-0.5">Te indicamos onde comprar eletrônicos originais com nota, melhores casas de câmbio e parrillas premiadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Atendimento Direto com Especialistas</h4>
                  <p className="text-neutral-400 text-xs mt-0.5">Sem robôs complicados ou centrais telefônicas. Fale direto com nossa equipe via WhatsApp.</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Conheci a 2R Turismo e gostaria de orçar meu roteiro em Foz!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 font-black px-7 py-3.5 rounded-xl text-sm transition-all hover:translate-y-[-2px] shadow-lg shadow-emerald-950/40"
            >
              <span>FALAR COM NOSSO RECEPTIVO NO WHATSAPP</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
