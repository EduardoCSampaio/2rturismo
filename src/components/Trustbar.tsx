import { ShieldCheck, Car, Clock, Sparkles } from 'lucide-react';

export default function Trustbar() {
  return (
    <div className="bg-[#24546a]/80 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="py-7 md:px-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <b className="block text-white font-extrabold text-base mb-1 tracking-tight">
                Frota Nova & Climatizada
              </b>
              <span className="text-neutral-400 text-sm leading-relaxed block">
                Vans, sedans e minivans com ar-condicionado potente e busca na porta do seu hotel em Foz.
              </span>
            </div>
          </div>

          <div className="py-7 md:px-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <b className="block text-white font-extrabold text-base mb-1 tracking-tight">
                Assessoria nas Aduanas
              </b>
              <span className="text-neutral-400 text-sm leading-relaxed block">
                Cruzamos para Argentina e Paraguai com documentação correta e agilidade, sem perder tempo.
              </span>
            </div>
          </div>

          <div className="py-7 md:px-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <b className="block text-white font-extrabold text-base mb-1 tracking-tight">
                Roteiros Sem Pressa
              </b>
              <span className="text-neutral-400 text-sm leading-relaxed block">
                Você aproveita cada atração no seu ritmo, sem correria de excursão engessada.
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
