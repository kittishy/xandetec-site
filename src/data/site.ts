export const site = {
  name: 'XandeTEC Soluções e Treinamentos',
  shortName: 'XandeTEC',
  tagline: 'Fazer bem feito, para fazer sempre!',
  region: 'Jaraguá do Sul e região',
  regionLong: 'Jaraguá do Sul e região, inclusive litoral norte',
  since: '2012',
  phoneTel: 'tel:+5547999412086',
  whatsappNumber: '(47) 99941-2086',
  phoneDisplay: '(47) 99941-2086',
  whatsappUrl: 'https://wa.me/5547999412086',
  instagram: 'https://www.instagram.com/xandetecsolucoes/',
  instagramHandle: '@xandetecsolucoes',
} as const;

const wa = (subject: string) =>
  `${site.whatsappUrl}?text=${encodeURIComponent(
    `Olá! Vim pelo site da XandeTEC e gostaria de um orçamento sobre ${subject}.`,
  )}`;

export const links = {
  geral: wa('os serviços da XandeTEC'),
  instalacao: wa('instalação de ar-condicionado'),
  manutencao: wa('manutenção e higienização de ar-condicionado'),
  seguranca: wa('câmeras, alarmes e controle de acesso'),
  eletrica: wa('instalações e manutenções elétricas'),
  portao: wa('portão eletrônico e automação'),
  documentos: wa('PMOC, laudos técnicos e TRT'),
  treinamentos: wa('treinamentos'),
} as const;

export const primaryService = {
  id: 'climatizacao',
  title: 'Climatização',
  scope: 'Instalação, higienização e manutenção',
  text: 'Sistemas split, inverter e cassete para residências, escritórios e estabelecimentos comerciais. Foco no rendimento térmico correto, economia de energia e durabilidade dos aparelhos.',
  items: [
    'Instalação técnica de splits e multisplits',
    'Higienização química e bactericida de evaporadoras',
    'Manutenção preventiva e corretiva programada',
    'Carga de fluido refrigerante e diagnóstico de vazamentos',
  ],
  link: links.instalacao,
};

export const companionServices = [
  {
    id: 'seguranca',
    title: 'Sistemas de Segurança',
    scope: 'CFTV, alarmes e controle de acesso',
    text: 'Instalação de câmeras de alta definição, monitoramento por aplicativo e interfonia inteligente.',
    link: links.seguranca,
  },
  {
    id: 'eletrica',
    title: 'Instalações Elétricas',
    scope: 'Circuitos dedicados e infraestrutura',
    text: 'Adequação de quadros de distribuição, disjuntores, cabeamento e proteção para climatização.',
    link: links.eletrica,
  },
  {
    id: 'portao',
    title: 'Portão Eletrônico',
    scope: 'Automação residencial e condominial',
    text: 'Instalação e reparo de motores para portões basculantes e deslizantes, centrais e controles.',
    link: links.portao,
  },
  {
    id: 'pmoc',
    title: 'PMOC, Laudos & TRT',
    scope: 'Documentação técnica e conformidade legal',
    text: 'Plano de Manutenção, Operação e Controle (Lei 13.589/2018) para empresas, laudos e TRT.',
    link: links.documentos,
  },
  {
    id: 'treinamentos',
    title: 'Treinamentos Técnicos',
    scope: 'Capacitação profissional prática',
    text: 'Instrução técnica em boas práticas de refrigeração, procedimentos de vácuo e segurança.',
    link: links.treinamentos,
  },
] as const;

export const services = [
  primaryService,
  ...companionServices.map((s) => ({
    ...s,
    items: [],
  })),
];

export const pillars = [
  {
    title: 'Frota e Equipe Identificada',
    description: 'Veículos próprios caracterizados e profissionais com uniforme e identificação.',
  },
  {
    title: 'Cobertura Regional',
    description: 'Atendimento contínuo em Jaraguá do Sul, municípios vizinhos e litoral norte catarinense.',
  },
  {
    title: 'Responsabilidade e Documentação',
    description: 'Atendimento técnico com emissão de laudos, PMOC para pessoas jurídicas e Termo de Responsabilidade Técnica (TRT).',
  },
] as const;

export const fleetPhoto = {
  src: '/images/display/frota-identificada.jpg',
  alt: 'Veículo da frota própria XandeTEC com identificação visual oficial',
};

export const evidence = [
  {
    src: '/images/higienizacao-ar-condicionado.jpg',
    alt: 'Higienização preventiva de evaporadora de ar-condicionado com produto bactericida',
    caption: 'Higienização preventiva com bactericida e proteção da parede',
    meta: 'Climatização',
    className: 'gitem--tall',
  },
  {
    src: '/images/display/equipe-em-servico.jpg',
    alt: 'Técnicos da XandeTEC trabalhando em condensadora com ferramental de campo',
    caption: 'Trabalho de campo em condensadora com manifold e carga de fluido',
    meta: 'Trabalho Técnico',
    className: 'gitem--wide',
  },
  {
    src: '/images/equipamentos-intelbras.webp',
    alt: 'Equipamentos de segurança eletrônica e CFTV Intelbras sobre bancada',
    caption: 'Equipamentos e câmeras Intelbras para monitoramento e segurança',
    meta: 'Segurança Eletrônica',
    className: 'gitem--band',
  },
  {
    src: '/images/manutencao-tecnica.jpg',
    alt: 'Equipamento de refrigeração com mangueiras, manifold e ferramentas durante serviço técnico',
    caption: 'Diagnóstico e manutenção técnica em sistema de refrigeração',
    meta: 'Refrigeração Técnica',
    className: 'gitem--tall',
  },
] as const;

export const brands = [
  { name: 'TCL', role: 'Climatização' },
  { name: 'ELGIN', role: 'Climatização' },
  { name: 'AGRATTO', role: 'Climatização' },
  { name: 'GREE', role: 'Climatização' },
  { name: 'HITACHI', role: 'Climatização' },
  { name: 'FUJITSU', role: 'Climatização' },
  { name: 'DAIKIN', role: 'Climatização' },
  { name: 'Intelbras', role: 'CFTV & Segurança' },
] as const;

export const steps = [
  {
    step: '01',
    title: 'Primeiro Contato no WhatsApp',
    text: 'Você envia uma mensagem informando sua demanda, localização e, se disponível, fotos ou medidas do local. Atendimento humano direto.',
  },
  {
    step: '02',
    title: 'Análise Técnica & Escopo',
    text: 'Avaliamos a capacidade térmica ideal, o trajeto de tubulação ou os pontos estratégicos para câmeras, indicando a melhor abordagem técnica.',
  },
  {
    step: '03',
    title: 'Proposta & Execução',
    text: 'Você recebe um orçamento transparente e sem custos ocultos. Com a aprovação, nossa equipe executa com data combinada e suporte técnico.',
  },
] as const;

export const faqs = [
  [
    'Quais serviços a XandeTEC oferece?',
    'Atuamos em climatização (venda, instalação, higienização e manutenção), sistemas de segurança eletrônica (CFTV, alarmes e controle de acesso), instalações elétricas dedicadas, portão eletrônico, documentação técnica (PMOC, laudos e TRT) e treinamentos práticos.',
  ],
  [
    'Qual é a região de atendimento da empresa?',
    'Atendemos Jaraguá do Sul e municípios vizinhos (Guaramirim, Schroeder, Corupá, Massaranduba), com atendimento estendido também ao litoral norte catarinense.',
  ],
  [
    'Como solicito uma visita técnica ou orçamento?',
    'Basta clicar no botão de WhatsApp ou enviar mensagem para o número (47) 99941-2086. Descreva o que precisa resolver e orientamos sobre a melhor solução.',
  ],
  [
    'A XandeTEC atende residências e empresas?',
    'Sim. Atendemos desde instalações residenciais em casas e apartamentos até contratos corporativos comerciais e prediais com emissão de nota fiscal e PMOC.',
  ],
  [
    'O que é o PMOC e por que minha empresa precisa dele?',
    'O PMOC (Plano de Manutenção, Operação e Controle) é exigido pela Lei Federal 13.589/2018 para edifícios comerciais e coletivos. Ele assegura a qualidade do ar em ambientes climatizados e evita sanções sanitárias.',
  ],
  [
    'A empresa vende aparelhos de ar-condicionado ou apenas instala?',
    'Trabalhamos com indicação e instalação dos aparelhos das principais marcas do mercado, com instalação técnica no padrão recomendado pelos fabricantes.',
  ],
] as const;
