import { MessageCircle, Compass, ShieldCheck, MapPin, Sparkles, ArrowRight, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourismData';

export default function Hero() {
  const handleWhatsAppQuote = () => {
    const text = 'Olá! Gostaria de montar um roteiro personalizado e solicitar orçamento com a 2R Turismo Foz.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with layered radial gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('/assets/tours/cataratas_brasil.jpg')`
        }}
      />
      
      {/* Deep cinematic overlays with sunset warmth and high contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-[#090d14]/85 to-[#090d14]/65 z-1" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#090d14]/70 to-[#090d14] z-1" />

      {/* Warm Sunset & Amber ambient glows inspired by Instagram palette */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#dc2743]/10 rounded-full blur-3xl pointer-events-none z-1" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Instagram Profile Teaser Tag */}
        <a
          href={COMPANY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-xs font-bold text-neutral-200 mb-6 group transition-all hover:scale-105"
        >
          <span className="w-5 h-5 rounded-full p-[1px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0">
            <Instagram className="w-3 h-3" />
          </span>
          <span>Acompanhe os passeios em tempo real no <strong className="text-amber-400 group-hover:underline">@2rturismo_foz</strong></span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* Flanked Tag */}
        <div className="inline-flex items-center gap-3 text-amber-400 font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase mb-5">
          <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-amber-500" />
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            RECEPTIVO & PASSEIOS EXCLUSIVOS
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-amber-500" />
        </div>

        {/* Grand Headline with impact */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.96] mb-6 drop-shadow-2xl">
          VIVA A MELHOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
            EXPERIÊNCIA NA
          </span> <br />
          TRÍPLICE FRONTEIRA
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-neutral-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-10 drop-shadow">
          Passeios às Cataratas (Brasil e Argentina), Macuco Safari, compras guiadas no Paraguai,
          gastronomia em Puerto Iguazú e transfers privativos com pontualidade e conforto.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
          <button
            onClick={handleWhatsAppQuote}
            className="w-full sm:w-auto bg-[#25d366] hover:bg-[#20ba59] text-neutral-950 font-black px-8 py-4 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current text-black" />
            <span>Falar no WhatsApp</span>
          </button>

          <a
            href="#passeios"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base border border-white/15 hover:border-white/30 backdrop-blur-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <span>Ver Passeios Principais</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-300">
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Cadastur Regularizado</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Busca no seu Hotel em Foz</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Brasil • Argentina • Paraguai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
