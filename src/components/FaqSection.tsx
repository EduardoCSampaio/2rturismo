import { useState } from 'react';
import { FAQS } from '../data/tourismData';
import { ChevronDown, HelpCircle, FileText, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="dicas" className="py-24 bg-[#164158] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 font-black text-xs tracking-[0.25em] uppercase mb-3">
            Tudo o que você precisa saber
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Dúvidas & Dicas da Tríplice
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Orientações práticas sobre documentos, travessia de fronteiras, compras no Paraguai e transporte.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#24546a]/80 rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-white">{faq.question}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-neutral-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
