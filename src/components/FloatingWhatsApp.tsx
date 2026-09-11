import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourismData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = 'Olá! Gostaria de tirar dúvidas sobre passeios em Foz do Iguaçu com a 2R Turismo.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-[#141b18] text-white text-xs px-3.5 py-2 rounded-xl border border-emerald-500/30 shadow-2xl flex items-center gap-2 animate-bounce-subtle max-w-[240px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-neutral-200">
            Dúvidas sobre roteiros? <strong>Fale conosco!</strong>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleOpenWhatsApp}
        aria-label="Conversar pelo WhatsApp com a 2R Turismo Foz"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25d366] hover:bg-[#1fb954] text-neutral-950 flex items-center justify-center shadow-2xl shadow-black/80 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-black" />
      </button>
    </div>
  );
}
