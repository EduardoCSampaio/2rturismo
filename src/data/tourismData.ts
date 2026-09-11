import { Tour, TravelPackage, Testimonial, FaqItem, InstagramPost, InstagramStory } from '../types';

export const COMPANY_INFO = {
  name: '2R Turismo Foz',
  shortName: '2R Turismo',
  instagramHandle: '@2rturismo_foz',
  instagramUrl: 'https://www.instagram.com/2rturismo_foz/',
  phoneDisplay: '+55 (45) 92000-5513',
  whatsappNumber: '5545920005513', // 45 92000-5513
  address: 'Av. das Cataratas, Foz do Iguaçu - PR, Brasil',
  pickupNote: 'Buscamos e deixamos com pontualidade em qualquer hotel de Foz do Iguaçu',
  email: 'contato@2rturismofoz.com.br',
  businessHours: 'Todos os dias: 07:00 às 22:00 | Receptivo 24h para voos agendados',
  cadastur: '18.042.890/0001-20'
};

export const TOURS: Tour[] = [
  {
    id: 'cataratas-brasil',
    title: 'Cataratas do Iguaçu (Brasil)',
    subtitle: 'Uma das 7 Maravilhas da Natureza com passarela panorâmica',
    category: 'imperdiveis',
    categoryLabel: 'Imperdível',
    image: '/assets/tours/cataratas_brasil.jpg',
    duration: '4 a 5 horas',
    badge: 'Mais Procurado',
    destination: 'Brasil',
    description: 'A mais espetacular vista panorâmica dos saltos das Cataratas, com passarela que leva bem em frente à monumental Garganta do Diabo e elevador panorâmico com mirante superior.',
    highlights: [
      'Vista panorâmica completa de mais de 270 quedas',
      'Passarela sobre as águas até a Garganta do Diabo',
      'Transporte privativo do seu hotel com ar-condicionado',
      'Tempo livre para fotos e contemplação sem pressa'
    ],
    tips: 'Leve capa de chuva ou aproveite o banho de spray natural refrescante!'
  },
  {
    id: 'macuco-safari',
    title: 'Macuco Safari (Aventura de Barco)',
    subtitle: 'Navegação em barco inflável bimotor até as quedas d\'água',
    category: 'aventura',
    categoryLabel: 'Aventura',
    image: '/assets/tours/macuco_aventura.jpg',
    duration: '2h30 a 3 horas',
    badge: 'Pura Emoção',
    destination: 'Brasil',
    description: 'Trilha em veículo elétrico pela selva do Parque Nacional, caminhada opcional e embarque em botes infláveis potentes para o emocionante banho sob as grandes quedas!',
    highlights: [
      'Passeio em carreta elétrica com guia botânico',
      'Barco bimotor de alta potência e segurança máxima',
      'Batismo inesquecível de água nas grandes quedas',
      'Armários e vestiários disponíveis no local'
    ],
    tips: 'Traga roupa extra para trocar depois do passeio molhado.'
  },
  {
    id: 'cataratas-argentina',
    title: 'Cataratas do Iguaçu (Argentina)',
    subtitle: 'Caminhe por cima da Garganta do Diabo e trilhas imersivas',
    category: 'imperdiveis',
    categoryLabel: 'Imperdível',
    image: '/assets/tours/cataratas_argentina.jpg',
    duration: 'Dia Inteiro (6 a 7 horas)',
    badge: 'Experiência Completa',
    destination: 'Argentina',
    description: 'Sinta a força colossal da água bem de cima na famosa Garganta do Diabo Argentina. Inclui trem ecológico e circuitos superiores e inferiores pela selva missioneira.',
    highlights: [
      'Trem Ecológico da Selva até a Garganta do Diabo',
      'Passarela sobre o Rio Iguaçu de tirar o fôlego',
      'Assessoria completa para travessia na aduana',
      'Veículo regularizado com autorização internacional'
    ],
    tips: 'Documento obrigatório: RG original recente (menos de 10 anos) ou passaporte.'
  },
  {
    id: 'parque-das-aves',
    title: 'Parque das Aves',
    subtitle: 'Maior parque de preservação de aves da América Latina',
    category: 'familia',
    categoryLabel: 'Família',
    image: '/assets/tours/parque_aves.jpg',
    duration: '2 a 3 horas',
    badge: 'Natureza & Vida',
    destination: 'Brasil',
    description: 'Imersão em viveiros gigantes onde tucanos, araras coloridas, flamingos e borboletas voam ao seu redor. Um santuário de resgate e conservação da Mata Atlântica.',
    highlights: [
      'Viveiros de imersão onde as aves voam livremente',
      'Encontro com araras, tucanos, harpias e corujas',
      'Excelente para todas as idades e acessível a carrinhos',
      'Localizado bem em frente à entrada das Cataratas'
    ],
    tips: 'Combine no mesmo dia com as Cataratas do Brasil para otimizar o tempo.'
  },
  {
    id: 'compras-paraguai',
    title: 'Compras no Paraguai (Ciudad del Este)',
    subtitle: 'Transporte seguro, pontualidade e dicas das melhores lojas',
    category: 'compras_noite',
    categoryLabel: 'Compras',
    image: '/assets/tours/compras_paraguai.jpg',
    duration: '5 a 6 horas',
    badge: 'Economia & Tecnologia',
    destination: 'Paraguai',
    description: 'Vá às compras com total tranquilidade. Levamos você do hotel até as lojas mais seguras e renomadas (Cellshop, Nissei, Shopping China) e buscamos no horário combinado.',
    highlights: [
      'Travessia rápida da Ponte da Amizade com motorista credenciado',
      'Ponto de encontro climatizado e seguro para guardar sacolas',
      'Dicas de lojas autorizadas (eletrônicos, perfumes, cosméticos)',
      'Retorno confortável sem carregar peso até o seu hotel'
    ],
    tips: 'Cota de isenção aduaneira de US$ 500 por pessoa por via terrestre.'
  },
  {
    id: 'noite-argentina',
    title: 'Noite na Argentina (Puerto Iguazú)',
    subtitle: 'Jantar em Parrilla, feirinha típica, vinhos & Duty Free',
    category: 'compras_noite',
    categoryLabel: 'Gastronomia & Noite',
    image: '/assets/tours/parrilla_argentina.jpg',
    duration: '4 a 5 horas (noite)',
    badge: 'Experiência Gastronômica',
    destination: 'Argentina',
    description: 'Uma noite inesquecível em Puerto Iguazú: deguste o melhor bife de chorizo em restaurantes renomados, conheça a famosa Feirinha das Azeitonas e compre vinhos de alta gama.',
    highlights: [
      'Parada opcional no Duty Free Shop Puerto Iguazú',
      'Visita à tradicional Feirinha (empanadas, queijos, alfajores e doces de leite)',
      'Reserva de mesas nas melhores parrillas argentinas',
      'Acompanhamento e transporte de ida e volta ao seu hotel'
    ],
    tips: 'Aceitam Real, Peso Argentino e Cartão internacional. Ótimos preços em vinhos!'
  },
  {
    id: 'itaipu-binacional',
    title: 'Itaipu Binacional & Iluminação Noturna',
    subtitle: 'Uma das maiores usinas hidrelétricas e produtoras de energia limpa',
    category: 'familia',
    categoryLabel: 'Cultura & Engenharia',
    image: '/assets/tours/itaipu_aerea.jpg',
    duration: '2h30 a 3h30',
    badge: 'Engenharia Monumental',
    destination: 'Brasil',
    description: 'Conheça de perto a grandiosidade da engenharia humana na fronteira entre Brasil e Paraguai. Opções de tour panorâmico de dia ou o espetáculo da iluminação da barragem à noite.',
    highlights: [
      'Visão panorâmica dos vertedouros e do lago de Itaipu',
      'Mirante central com vista grandiosa da barragem',
      'Show de luzes sincronizadas e música na Iluminação Noturna',
      'Transporte de ida e volta com guia local'
    ],
    tips: 'A iluminação especial ocorre em dias específicos (sextas e sábados).'
  },
  {
    id: 'marco-tres-fronteiras',
    title: 'Marco das Três Fronteiras',
    subtitle: 'Pôr do sol mágico no encontro dos Rios Iguaçu e Paraná',
    category: 'compras_noite',
    categoryLabel: 'Pôr do Sol & Cultura',
    image: '/assets/tours/marco_tres_fronteiras.jpg',
    duration: '3 a 4 horas (final de tarde)',
    badge: 'Cultura & Show',
    destination: 'Tríplice Fronteira',
    description: 'Local onde Brasil, Argentina e Paraguai se encontram visualmente. Oferece shows folclóricos das 3 culturas, arquitetura missioneira, gastronomia e um lindo pôr do sol.',
    highlights: [
      'Vista única do encontro dos rios e dos três obeliscos',
      'Espetáculo de danças típicas latino-americanas',
      'Vila cenográfica das Missões Jesuíticas',
      'Restaurante e quiosques com chopp e aperitivos'
    ],
    tips: 'Chegue por volta das 17h30 para pegar o pôr do sol e os melhores lugares do show.'
  }
];

export const PACKAGES: TravelPackage[] = [
  {
    id: 'combo-essencial',
    title: 'Combo Essencial Foz',
    days: '3 Dias / 2 Noites',
    tag: 'Mais Econômico',
    image: '/assets/tours/cataratas_brasil.jpg',
    description: 'O roteiro ideal para quem tem poucos dias e quer conhecer os pontos mais icônicos da cidade com agilidade e conforto.',
    includedTours: [
      'Transfer Aeroporto In / Out com recepção personalizada',
      'Cataratas do Iguaçu (Lado Brasileiro)',
      'Parque das Aves (Mata Atlântica)',
      'Compras no Paraguai (Ciudad del Este)'
    ],
    idealFor: 'Viagens rápidas de final de semana ou feriados prolongados.'
  },
  {
    id: 'combo-triplice-vip',
    title: 'Combo Tríplice Fronteira VIP',
    days: '4 Dias / 3 Noites',
    tag: 'O Mais Vendido',
    popular: true,
    image: '/assets/tours/marco_tres_fronteiras.jpg',
    description: 'A experiência completa dos 3 países com transporte privativo, assistência aduaneira e horários flexíveis.',
    includedTours: [
      'Transfer Aeroporto In / Out',
      'Cataratas do Iguaçu Lado Brasileiro + Parque das Aves',
      'Passeio de Barco Macuco Safari',
      'Cataratas da Argentina (Garganta do Diabo)',
      'Noite em Puerto Iguazú (Parrilla & Feirinha)',
      'Manhã de Compras no Paraguai'
    ],
    idealFor: 'Casais, famílias e grupos que buscam o melhor custo-benefício sem estresse.'
  },
  {
    id: 'combo-aventura-familia',
    title: 'Combo Família & Aventura',
    days: '5 Dias / 4 Noites',
    tag: 'Experiência Premium',
    image: '/assets/tours/macuco_aventura.jpg',
    description: 'Um pacote completo para explorar a natureza, a história, o lazer e todas as atrações modernas de Foz.',
    includedTours: [
      'Transfer Aeroporto In / Out 24h',
      'Cataratas BR + Macuco Safari + Parque das Aves',
      'Cataratas Argentina completo',
      'Compras Paraguai com guia de compras',
      'Itaipu Binacional + Marco das 3 Fronteiras',
      'Noite gastronômica na Argentina'
    ],
    idealFor: 'Quem quer desfrutar de Foz do Iguaçu sem perder nenhuma atração.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina & Marcelo Mendes',
    origin: 'São Paulo - SP',
    comment: 'A 2R Turismo fez toda a diferença na nossa viagem! O carro estava sempre impecável, ar gelando e o motorista super pontual. Passamos na aduana da Argentina sem fila nenhuma com a orientação deles!',
    rating: 5,
    tourTaken: 'Combo Tríplice Fronteira VIP',
    date: 'Há 2 semanas'
  },
  {
    id: '2',
    name: 'Renato Albuquerque',
    origin: 'Belo Horizonte - MG',
    comment: 'Fizemos as compras no Paraguai com eles e foi super tranquilo. O motorista nos orientou sobre as lojas confiáveis e o ponto de encontro facilitou muito para não ficar carregando sacola pesada. Nota 10!',
    rating: 5,
    tourTaken: 'Compras Paraguai + Cataratas',
    date: 'Mês passado'
  },
  {
    id: '3',
    name: 'Família Silveira (5 pessoas)',
    origin: 'Porto Alegre - RS',
    comment: 'Viajar com crianças e idosos exige paciência e pontualidade, e a equipe da 2R superou qualquer expectativa. O Macuco Safari foi a melhor experiência da nossa vida!',
    rating: 5,
    tourTaken: 'Roteiro Personalizado Família',
    date: 'Há 3 semanas'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Quais documentos são exigidos para cruzar para Argentina e Paraguai?',
    answer: 'Para ingressar na Argentina e no Paraguai, é necessário portar RG original expedido há menos de 10 anos em perfeito estado de conservação OU Passaporte válido. CNH brasileira é aceita no Paraguai e em Puerto Iguazú na Argentina, mas recomendamos sempre levar o RG. Menores de 18 anos desacompanhados de um dos pais precisam de autorização registrada em cartório.',
    category: 'Documentação'
  },
  {
    question: 'Como funciona o transporte? É compartilhado ou privativo?',
    answer: 'Trabalhamos com opções privativas e executivas. Nosso diferencial é a pontualidade, flexibilidade de horários para a sua família e veículos modernos com ar-condicionado. Buscamos e deixamos você diretamente na porta do seu hotel em Foz do Iguaçu.',
    category: 'Transporte'
  },
  {
    question: 'Qual é a cota de compras isenta de impostos no Paraguai?',
    answer: 'A cota terrestre para compras no Paraguai e Argentina é de US$ 500 (dólares americanos) por pessoa, renovável a cada 30 dias. Valores que excedam a cota estão sujeitos à declaração na Receita Federal.',
    category: 'Compras'
  },
  {
    question: 'Qual a melhor época para visitar as Cataratas do Iguaçu?',
    answer: 'As Cataratas são exuberantes o ano inteiro! No verão (dezembro a março), as águas ficam mais volumosas e com dias quentes ideais para o Macuco Safari. No inverno e meia estação (maio a setembro), o clima é ameno e ideal para caminhadas longas com céu limpo.',
    category: 'Dicas'
  },
  {
    question: 'Como faço para reservar e pagar os passeios?',
    answer: 'Tudo é combinado de forma simples e transparente direto pelo WhatsApp com nossos consultores. Você escolhe as datas, recebe o voucher detalhado e pode pagar via Pix ou Cartão de Crédito parcelado.',
    category: 'Reservas'
  }
];

export const INSTAGRAM_STORIES: InstagramStory[] = [
  { id: 'cataratas', title: 'Amanhecer BR', iconName: 'Waves', image: '/assets/tours/cataratas_brasil.jpg' },
  { id: 'macuco', title: 'Macuco Safari', iconName: 'Compass', image: '/assets/tours/macuco_aventura.jpg' },
  { id: 'sunset', title: 'Pôr do Sol', iconName: 'Sun', image: '/assets/tours/por_do_sol_cataratas.jpg' },
  { id: 'fauna', title: 'Fauna & Aves', iconName: 'Camera', image: '/assets/tours/parque_aves.jpg' },
  { id: 'argentina', title: 'Puerto Iguazú', iconName: 'Utensils', image: '/assets/tours/parrilla_argentina.jpg' },
  { id: 'paraguai', title: 'Compras CDE', iconName: 'ShoppingBag', image: '/assets/tours/compras_paraguai.jpg' },
  { id: 'gastronomia', title: 'Porto Canoas', iconName: 'Coffee', image: '/assets/tours/porto_canoas.jpg' },
  { id: 'transfers', title: 'Frota VIP', iconName: 'Car', image: '/assets/tours/transfer_executivo.jpg' }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: '/assets/tours/cataratas_passarela.jpg',
    caption: 'Sensação única ao caminhar na passarela das Cataratas com vista privilegiada da Garganta do Diabo e esse arco-íris espetacular! 🌈💦 Reserve seu transfer com a 2R Turismo.',
    likes: 428,
    comments: 34,
    location: 'Cataratas do Iguaçu - Brasil',
    tag: '#CataratasDoIguaçu'
  },
  {
    id: 'post-2',
    image: '/assets/tours/macuco_aventura.jpg',
    caption: 'Batismo de alma nas grandes quedas com o Macuco Safari! Aventura indescritível navegando bem pertinho da névoa das cataratas. Muita emoção e segurança! 🚤🌊',
    likes: 562,
    comments: 49,
    location: 'Macuco Safari - Foz do Iguaçu',
    tag: '#MacucoSafari'
  },
  {
    id: 'post-3',
    image: '/assets/tours/por_do_sol_cataratas.jpg',
    caption: 'Pôr do sol inesquecível no Parque Nacional do Iguaçu! Momentos especiais registrados pelos nossos passageiros. Vem viver essa experiência com a gente! 🌅✨',
    likes: 389,
    comments: 27,
    location: 'Cataratas do Iguaçu - Brasil',
    tag: '#PorDoSolCataratas'
  }
];
