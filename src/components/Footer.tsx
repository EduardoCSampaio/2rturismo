import { Compass, Instagram, MessageCircle, Heart, ArrowUpRight, Code2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourismData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070a10] border-t border-white/10 text-neutral-400 text-sm py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-bold shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className="text-lg font-black text-white">2R</span>
                <span className="text-lg font-black text-amber-400 ml-1">TURISMO FOZ</span>
              </div>
            </div>
            
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Agência de receptivo privativo e passeios em Foz do Iguaçu. Transfers para hotéis e aeroportos, Cataratas, Paraguai e Argentina.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 border border-[#dc2743]/40 flex items-center gap-1.5 text-white text-xs font-bold hover:border-[#dc2743]/70 transition-colors"
                aria-label="Instagram 2R Turismo"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{COMPANY_INFO.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#25d366]/20 border border-[#25d366]/40 flex items-center gap-1.5 text-white text-xs font-bold hover:border-[#25d366]/70 transition-colors"
                aria-label="WhatsApp 2R Turismo"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366] fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#passeios" className="hover:text-amber-400 transition-colors">Passeios em Destaque</a></li>
              <li><a href="#instagram-feed" className="hover:text-amber-400 transition-colors">Instagram Feed</a></li>
              <li><a href="#pacotes" className="hover:text-amber-400 transition-colors">Pacotes & Combos</a></li>
              <li><a href="#calculadora" className="hover:text-amber-400 transition-colors">Montador de Roteiro</a></li>
              <li><a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre a 2R Turismo</a></li>
              <li><a href="#dicas" className="hover:text-amber-400 transition-colors">Dicas & Documentos</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">Contato & Base</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="text-neutral-200 font-semibold">{COMPANY_INFO.phoneDisplay}</li>
              <li className="text-neutral-400">{COMPANY_INFO.address}</li>
              <li className="text-neutral-400">Atendimento a todos os hotéis de Foz do Iguaçu</li>
              <li className="text-[11px] text-amber-400/80 pt-2 font-mono">
                CADASTUR REGULARIZADO
              </li>
            </ul>
          </div>

          {/* Col 4: HTML Standalone Version */}
          <div className="bg-[#0f1522] p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white font-black text-sm mb-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Versão 100% HTML</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Arquivo HTML puro autocontido. Funciona em qualquer navegador ou hospedagem sem precisar de Node.js.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="/site-puro.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-3 rounded-xl transition-all shadow"
              >
                <span>Visualizar HTML Puro</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Perfil oficial:</span>
            <a 
              href={COMPANY_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:underline font-bold flex items-center gap-0.5"
            >
              <span>{COMPANY_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

