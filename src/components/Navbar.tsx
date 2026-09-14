import { useState } from 'react';
import { Compass, MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourismData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = 'Olá, equipe 2R Turismo! Estou no site e gostaria de tirar dúvidas e orçar passeios em Foz do Iguaçu.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#123349]/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - Just 2R TURISMO */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-950/40 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-neutral-950 font-bold" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-white">2R</span>
              <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                TURISMO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-300">
            <a href="#passeios" className="hover:text-amber-400 transition-colors">Passeios</a>
            <a href="#pacotes" className="hover:text-amber-400 transition-colors">Pacotes & Combos</a>
            <a href="#instagram-feed" className="hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#calculadora" className="hover:text-amber-400 transition-colors">Montador de Roteiro</a>
            <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre</a>
            <a href="#dicas" className="hover:text-amber-400 transition-colors">Dicas</a>
            <a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a>
          </nav>

          {/* Right Action: Standardized WhatsApp Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25d366] hover:bg-[#20ba59] text-neutral-950 font-black px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-md shadow-emerald-950/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-black fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#123349]/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-semibold text-neutral-200">
            <a
              href="#passeios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Passeios em Destaque
            </a>
            <a
              href="#pacotes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Pacotes & Combos
            </a>
            <a
              href="#instagram-feed"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Feed do Instagram
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Montador de Roteiro
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Sobre a 2R Turismo
            </a>
            <a
              href="#dicas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Dicas & Documentos
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 transition-colors"
            >
              Pedir Orçamento
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="w-full bg-[#25d366] hover:bg-[#20ba59] text-neutral-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-black" />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
