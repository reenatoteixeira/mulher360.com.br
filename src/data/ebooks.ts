export interface EbookData {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  checkoutUrl: string;
  priceFrom: string;
  priceTo: string;
  catalogDescription: string;
  searchTerms: string[];
  cover: {
    brand: string;
    title: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    signedByLabel: string;
    signedBy: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  benefits: Array<{
    title: string;
    text: string;
  }>;
  contentSection: {
    title: string;
    description: string;
    points: string[];
  };
  author: {
    name: string;
    roleDescription: string;
    bio: string;
    imageSrc: string;
    imageAlt: string;
  };
  offer: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    deliverables: string[];
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const ebooks: EbookData[] = [
  {
    slug: "protocolo-hidratacao",
    title: "Protocolo de Hidratação",
    metaTitle: "Mulher 360 | Protocolo de Hidratação",
    description:
      "Descubra como usar a hidratação de forma estratégica para reduzir fome, retenção e inchaço com um protocolo simples, direto e aplicável à rotina.",
    // TODO: Update checkout link with the real URL.
    checkoutUrl: "https://checkout-example.com",
    priceFrom: "97,00",
    priceTo: "27,00",
    catalogDescription:
      "Ebook sobre hidratação estratégica para ajudar o corpo a desinchar, regular sinais e apoiar o emagrecimento com aplicação prática no dia a dia.",
    searchTerms: ["protocolo de hidratacao", "hidratacao", "emagrecimento", "desinchaco", "mulher 360"],
    cover: {
      brand: "Mulher 360",
      title: "Protocolo de Hidratação",
      titleLine1: "Protocolo",
      titleLine2: "de Hidratação",
      subtitle: "Para emagrecimento e desinchaço com uma estratégia simples de aplicar no dia a dia.",
      signedByLabel: "Assinado por",
      signedBy: "Dra. Luciana Teixeira"
    },
    hero: {
      eyebrow: "Ebook digital",
      title: "Hidratação estratégica para ajudar seu corpo a desinchar, regular sinais e apoiar o emagrecimento.",
      description:
        "Um protocolo direto, baseado no conteúdo do ebook, para mostrar como a água pode favorecer metabolismo, saciedade, intestino e retenção quando aplicada da forma certa.",
      primaryCta: "Quero começar o protocolo",
      secondaryCta: "Ver o conteúdo do ebook"
    },
    problem: {
      title: "Beber água sem estratégia pode manter o corpo no mesmo ciclo.",
      description:
        "O ebook parte de um ponto claro: muitas mulheres bebem pouca água, passam horas sem se hidratar, só lembram quando a sede aparece e acabam confundindo sinais do corpo. Isso pode favorecer falsa fome, retenção, desconfortos digestivos e sensação constante de inchaço."
    },
    solution: {
      title: "Transformar a hidratação em uma estratégia metabólica simples e objetiva.",
      description:
        "Em vez de só repetir “beba mais água”, o protocolo mostra como distribuir a ingestão ao longo do dia, como calcular uma base prática e quais ajustes ajudam o corpo a funcionar melhor sem complicar sua rotina."
    },
    benefits: [
      {
        title: "Menos fome confusa",
        text: "O ebook explica como sede e fome podem ser confundidas e como a hidratação correta ajuda a reduzir exageros e falsa fome."
      },
      {
        title: "Menos retenção e inchaço",
        text: "Você aprende por que beber pouca água pode aumentar retenção e como ajustar a ingestão para favorecer desinchaço."
      },
      {
        title: "Metabolismo mais eficiente",
        text: "A água participa dos processos metabólicos e o conteúdo mostra como isso favorece o emagrecimento quando o corpo está bem hidratado."
      },
      {
        title: "Rotina simples de seguir",
        text: "O protocolo organiza quantidade e timing ao longo do dia, sem complicar sua rotina e sem depender de dietas restritivas."
      }
    ],
    contentSection: {
      title: "O que você vai encontrar no material.",
      description: "O ebook foi estruturado para sair da teoria genérica e levar você para a aplicação prática da hidratação no dia a dia.",
      points: [
        "Como a hidratação correta ativa metabolismo, reduz retenção e favorece o emagrecimento",
        "Os pilares do protocolo: metabolismo, apetite, digestão e gasto energético explicados de forma prática",
        "Como calcular sua ingestão ideal e distribuir a água ao longo do dia para melhores resultados",
        "Erros comuns + estratégias simples para transformar a hidratação em um hábito consistente com resultados em até 14 dias"
      ]
    },
    author: {
      name: "Dra. Luciana Teixeira",
      roleDescription:
        "Nutricionista com foco no cuidado integral da mulher, unindo ciência, empatia e propósito em uma abordagem que considera corpo, mente e espírito.",
      bio:
        "Pós-graduanda em Neurociência e estudante de Educação Física e Fonoaudiologia, desenvolveu o projeto Mulher 360 para ajudar mulheres a resgatarem a autoestima, reconectarem-se com sua essência e construírem uma relação mais consciente com a alimentação.",
      imageSrc: "/images/autora.png",
      imageAlt: "Dra. Luciana Teixeira"
    },
    offer: {
      title: "Um material objetivo para começar a ajustar sua hidratação com clareza.",
      description: "Pagamento em até 3x e garantia incondicional de 7 dias.",
      primaryCta: "Quero garantir meu acesso",
      secondaryCta: "Ver perguntas frequentes",
      deliverables: [
        "Protocolo completo de hidratação para emagrecimento e desinchaço, em formato digital.",
        "Guia prático para calcular e distribuir sua ingestão diária + principais erros que travam seus resultados.",
        "Acesso imediato após a compra + garantia incondicional de 7 dias."
      ]
    },
    finalCta: {
      title: "Antes de mexer em mais uma dieta, ajuste a base do seu corpo que costuma ser ignorada.",
      description:
        "Se o seu objetivo é ajudar o corpo a funcionar melhor com uma estratégia correta de hidratação, este ebook entrega um caminho simples para começar.",
      primaryCta: "Quero acessar o ebook"
    },
    faqs: [
      {
        question: "Esse ebook promete emagrecimento sozinho?",
        answer:
          "Não. O próprio material reforça que a água não faz milagre sozinha. A proposta é usar a hidratação como estratégia para potencializar um corpo mais equilibrado e favorecer o processo."
      },
      {
        question: "O conteúdo é só sobre beber mais água?",
        answer:
          "Não. O ebook organiza quantidade, timing, erros comuns e estratégias práticas para aplicar a hidratação de forma funcional no dia a dia."
      },
      {
        question: "Em quanto tempo posso perceber mudanças?",
        answer:
          "O ebook cita resultados esperados entre 7 e 14 dias, especialmente em aspectos como inchaço, fome, disposição, intestino e ajuste inicial do peso."
      },
      {
        question: "Para quem esse material foi feito?",
        answer:
          "Para mulheres que querem otimizar o funcionamento do corpo por meio de uma estratégia correta de hidratação, com aplicação simples e objetiva."
      },
      {
        question: "Existe garantia?",
        answer: "Sim. A oferta informada para esta página inclui garantia incondicional de 7 dias."
      }
    ]
  }
];

export const getEbookBySlug = (slug: string) => ebooks.find((ebook) => ebook.slug === slug);
