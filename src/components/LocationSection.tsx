import { MapPin, Navigation, Compass, ExternalLink, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourismData';

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-[#164158] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-emerald-400 font-black text-xs tracking-[0.25em] uppercase mb-3">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Base em Foz do Iguaçu
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Atendimento presencial e receptivo em todos os hotéis, pousadas, aeroporto e rodoviária da cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Details & Pickup Coverage */}
          <div className="bg-[#24546a]/80 p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
                <Compass className="w-3.5 h-3.5" />
                <span>Receptivo Oficial</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Nosso ponto de apoio e equipe de motoristas estão estrategicamente posicionados no corredor turístico de Foz do Iguaçu.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Áreas com Busca Incluída:</strong>
                    <span className="text-neutral-400 text-xs sm:text-sm">
                      Avenida das Cataratas, Centro de Foz, Vila Portes, Rodoviária e Aeroporto Internacional de Foz (IGU).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Pontualidade no Seu Hotel:</strong>
                    <span className="text-neutral-400 text-xs sm:text-sm">
                      Informamos com antecedência o horário exato da van no lobby do seu hotel com acompanhamento via WhatsApp.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Foz+do+Iguaçu+PR+Cataratas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl text-sm border border-white/15 transition-colors"
            >
              <span>Abrir no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Photo Banner */}
          <div className="relative min-h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="/assets/tours/marco_tres_fronteiras.jpg"
              alt="Marco das Três Fronteiras - Foz do Iguaçu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#164158]/75 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-1">
                Tríplice Fronteira
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
                Foz do Iguaçu • Puerto Iguazú • Ciudad del Este
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Viva três culturas e as maiores quedas do planeta com quem é especialista no destino.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
