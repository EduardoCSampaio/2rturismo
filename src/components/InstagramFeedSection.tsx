import { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, MapPin, CheckCircle, Award } from 'lucide-react';
import { COMPANY_INFO, INSTAGRAM_STORIES, INSTAGRAM_POSTS, TOURS } from '../data/tourismData';
import { InstagramPost, InstagramStory, Tour } from '../types';

interface InstagramFeedSectionProps {
  onSelectTour?: (tour: Tour) => void;
}

export default function InstagramFeedSection({ onSelectTour }: InstagramFeedSectionProps) {
  const [activeStory, setActiveStory] = useState<InstagramStory | null>(null);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const handleOpenInstagram = () => {
    window.open(COMPANY_INFO.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppFromPost = (post: InstagramPost) => {
    const text = `Olá, 2R Turismo! Vi a publicação no Instagram sobre *${post.location}* (${post.tag}) e gostaria de orçar esse passeio!`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="instagram-feed" className="py-24 bg-[#0a0e14] relative border-t border-white/10 overflow-hidden">
      {/* Ambient background glows inspired by Instagram warm palette */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#f09433]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#dc2743]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Profile Header Card */}
        <div className="bg-gradient-to-r from-[#121822] via-[#161f2c] to-[#121822] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl mb-14">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            
            {/* Profile Info Left */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              {/* Profile Avatar with Instagram Story Gradient Ring */}
              <a 
                href={COMPANY_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group p-[3px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] shadow-lg shadow-orange-950/40 hover:scale-105 transition-transform shrink-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[#0d1117] p-1">
                  <img
                    src="/assets/tours/cataratas_brasil.jpg"
                    alt="2R Turismo Foz Instagram"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-[#f09433] to-[#dc2743] p-1.5 rounded-full text-white shadow-md">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </a>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {COMPANY_INFO.instagramHandle}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full text-xs font-bold">
                    <CheckCircle className="w-3 h-3 fill-current" />
                    <span>Oficial</span>
                  </span>
                </div>

                <p className="text-sm text-neutral-300 max-w-xl leading-relaxed mb-3">
                  <strong className="text-white font-bold">{COMPANY_INFO.name}</strong> • Receptivo & Passeios Exclusivos em Foz do Iguaçu, Argentina e Paraguai. Roteiros sem pressa e transfers com pontualidade máxima!
                </p>

                {/* Profile Stats */}
                <div className="flex items-center justify-center sm:justify-start gap-6 text-xs sm:text-sm">
                  <div>
                    <span className="font-extrabold text-white">+50</span> <span className="text-neutral-400">posts</span>
                  </div>
                  <div>
                    <span className="font-extrabold text-white">+1k</span> <span className="text-neutral-400">seguidores</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Award className="w-4 h-4 text-amber-400 fill-current" />
                    <span>5.0 Avaliação</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Action Right */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] to-[#cc2366] hover:opacity-95 text-white font-extrabold px-6 py-3 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-rose-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo Instagram @2rturismo_foz e quero tirar dúvidas sobre os passeios!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 text-white font-bold px-5 py-3 rounded-xl text-sm border border-white/10 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Instagram Story Highlights Row */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-black uppercase tracking-wider text-neutral-300">
                Destaques dos Roteiros (@2rturismo_foz)
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
              {INSTAGRAM_STORIES.map((story) => (
                <a
                  key={story.id}
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
                >
                  <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-[#0a0e14] p-0.5">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover rounded-full group-hover:brightness-110 transition-all"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                    {story.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 border border-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-wider mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>Galeria de Momentos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Direto do Nosso Feed
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Veja as fotos autênticas dos nossos passeios e turistas vivendo Foz do Iguaçu, Argentina e Paraguai.
          </p>
        </div>

        {/* Posts Grid - Exactly 3 posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-b from-[#131a24] to-[#0f141d] rounded-2xl border border-white/10 overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col group hover:shadow-2xl hover:shadow-orange-950/30 hover:-translate-y-1"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#f09433] to-[#dc2743]">
                    <img
                      src="/assets/tours/cataratas_brasil.jpg"
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>2rturismo_foz</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-rose-400" />
                      <span>{post.location}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white p-1"
                  aria-label="Ver no Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Post Image with Hover Overlay */}
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden cursor-pointer" onClick={() => handleWhatsAppFromPost(post)}>
                <img
                  src={post.image}
                  alt={post.location}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-6 text-white font-black text-sm backdrop-blur-[2px]">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    {post.comments}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <span className="font-extrabold text-amber-400">{post.tag}</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      <strong className="text-neutral-200">{post.likes}</strong> curtidas
                    </span>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    <strong className="text-white font-bold mr-1">2rturismo_foz</strong>
                    {post.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleWhatsAppFromPost(post)}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-black py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Orçar Este Passeio</span>
                  </button>

                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                    title="Ver perfil no Instagram"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-black px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-rose-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Instagram className="w-5 h-5" />
            <span>Ver Mais Fotos e Vídeos em @2rturismo_foz</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
}
