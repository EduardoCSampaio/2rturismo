import { TESTIMONIALS } from '../data/tourismData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-[#090d15] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block text-amber-400 font-black text-xs tracking-[0.25em] uppercase mb-2">
              Depoimentos Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Quem Viajou Recomenda
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-[#131a26] border border-white/10 px-5 py-3 rounded-2xl shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-left leading-tight">
              <span className="text-white font-black text-sm block">5.0 / 5.0</span>
              <span className="text-xs text-neutral-400">Satisfação Máxima de Clientes</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-b from-[#121926] to-[#0d131f] p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">{review.date}</span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-500/20" />
                  </h4>
                  <span className="text-xs text-neutral-400 block">{review.origin}</span>
                </div>
                <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20">
                  {review.tourTaken}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
