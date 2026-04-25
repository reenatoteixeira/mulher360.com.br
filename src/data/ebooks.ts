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
    checkoutUrl: "https://pay.hotmart.com/I105279156Y",
    priceFrom: "67,00",
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
  },
  {
    slug: "escala-do-doce",
    title: "Escala do Doce",
    metaTitle: "Mulher 360 | Escala do Doce",
    description:
      "Um guia prático para escolher doces com mais consciência, equilíbrio e autonomia, entendendo quais opções cabem melhor na rotina e quais devem ficar para momentos ocasionais.",
    checkoutUrl: "https://pay.hotmart.com/O105538410S",
    priceFrom: "97,00",
    priceTo: "47,00",
    catalogDescription:
      "Guia prático para entender a escala do doce, diferenciar melhores escolhas, boas opções e doces ocasionais, além de aprender o melhor momento para consumir.",
    searchTerms: [
      "escala do doce",
      "doce",
      "doces",
      "chocolate",
      "sobremesa",
      "equilibrio",
      "escolhas inteligentes",
      "mulher 360"
    ],
    cover: {
      brand: "Mulher 360",
      title: "Escala do Doce",
      titleLine1: "Escala",
      titleLine2: "do Doce",
      subtitle: "Do melhor ao mais ocasional: escolhas inteligentes para mais equilíbrio e menos culpa.",
      signedByLabel: "Assinado por",
      signedBy: "Dra. Luciana Teixeira"
    },
    hero: {
      eyebrow: "Ebook digital",
      title: "Aprenda a escolher doces com mais consciência, equilíbrio e menos culpa.",
      description:
        "Um guia pensado para quem quer parar de viver entre o 8 ou 80 com o doce e começar a fazer escolhas mais tranquilas, sem neura, sem proibição e sem depender de força de vontade o tempo todo.",
      primaryCta: "Quero acessar o guia",
      secondaryCta: "Ver como o guia funciona"
    },
    problem: {
      title: "A relação com o doce pode virar um ciclo de culpa, excesso e perda de controle.",
      description:
        "O guia parte de uma dificuldade comum: querer consumir doces, mas não saber diferenciar melhores escolhas das opções que devem aparecer com menos frequência. Sem clareza, o doce pode ser vivido como proibição ou exagero, em vez de uma escolha consciente dentro da rotina."
    },
    solution: {
      title: "Um jeito mais leve de entender onde o doce entra na sua rotina.",
      description:
        "A Escala do Doce organiza a decisão de um jeito simples e prático, para que você saiba avaliar melhor o contexto, a frequência e o impacto das suas escolhas sem transformar o doce em vilão nem em descontrole."
    },
    benefits: [
      {
        title: "Mais consciência nas escolhas",
        text: "Você passa a olhar para o doce com mais critério e menos impulso, entendendo melhor o que faz sentido para a rotina e o que vale deixar para exceções."
      },
      {
        title: "Menos culpa e menos extremos",
        text: "A proposta do guia não é proibir o doce, mas ajudar você a construir uma relação mais leve, inteligente e equilibrada com ele."
      },
      {
        title: "Melhor momento para consumir",
        text: "O material mostra um raciocínio simples que ajuda você a encaixar o doce de forma mais estratégica, em vez de consumir no automático."
      },
      {
        title: "Mais controle da fome",
        text: "Com escolhas mais bem posicionadas, a tendência é reduzir aquele efeito de vontade que volta rápido e faz parecer que nunca é suficiente."
      }
    ],
    contentSection: {
      title: "O que esse material te ajuda a perceber.",
      description:
        "Sem entregar uma lista solta de certo e errado, o ebook mostra uma lógica simples para você decidir melhor sem depender de regra decorada.",
      points: [
        "Uma forma simples de classificar melhor suas escolhas sem cair no pensamento de tudo ou nada",
        "Critérios práticos para entender quando algo cabe mais na rotina e quando vale tratar como exceção",
        "Orientações para não decidir no impulso e passar a consumir doce com mais consciência",
        "Um raciocínio fácil de aplicar no dia a dia para ter mais equilíbrio sem sensação de privação"
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
      title: "Um guia prático para decidir melhor quando a vontade de doce aparecer.",
      description: "Pagamento em até 3x e garantia incondicional de 7 dias.",
      primaryCta: "Quero garantir meu acesso",
      secondaryCta: "Ver perguntas frequentes",
      deliverables: [
        "Guia Escala do Doce, em formato digital.",
        "Método prático para analisar melhor suas escolhas sem depender de proibição ou culpa.",
        "Direcionamentos simples para consumir com mais consciência, equilíbrio e autonomia."
      ]
    },
    finalCta: {
      title: "Você não precisa parar de comer doce, só precisa saber em qual lugar ele entra na sua rotina.",
      description:
        "Se hoje o doce parece bagunçar sua rotina ou despertar culpa, esse guia pode te mostrar uma forma mais leve e inteligente de lidar com isso.",
      primaryCta: "Quero acessar o ebook"
    },
    faqs: [
      {
        question: "Esse ebook ensina a parar de comer doce?",
        answer:
          "Não. A proposta do material é mostrar que você não precisa deixar de viver nem parar de comer doce, mas aprender a escolher melhor e entender onde cada opção entra na rotina."
      },
      {
        question: "O guia proíbe algum tipo de doce?",
        answer:
          "Não. A proposta é trazer clareza para suas decisões, não montar uma lista de alimentos proibidos."
      },
      {
        question: "Qual é o melhor momento para comer doce?",
        answer:
          "O guia aborda esse ponto de forma prática, explicando como o contexto do consumo pode fazer diferença na sua rotina e na sua percepção de controle."
      },
      {
        question: "Quais doces aparecem como melhores escolhas?",
        answer:
          "O material não se resume a citar opções. Ele ensina o raciocínio por trás das escolhas para que você saiba avaliar melhor diferentes situações."
      },
      {
        question: "O que mais impacta o resultado?",
        answer:
          "O ebook ajuda você a enxergar os fatores que mais pesam nas escolhas do dia a dia, para sair do impulso e agir com mais consciência."
      }
    ]
  },
  {
    slug: "guia-de-trocas",
    title: "Guia de Trocas Inteligentes",
    metaTitle: "Mulher 360 | Guia de Trocas Inteligentes",
    description:
      "Um guia prático para fazer trocas inteligentes dentro dos grupos alimentares, mantendo equilíbrio nutricional, praticidade e prazer em comer sem depender de rigidez.",
    checkoutUrl: "https://pay.hotmart.com/X105541967B",
    priceFrom: "97,00",
    priceTo: "47,00",
    catalogDescription:
      "Guia prático de trocas alimentares para adaptar carboidratos, proteínas, gorduras, frutas, bebidas e refeições corridas com mais consciência e consistência.",
    searchTerms: [
      "guia de trocas",
      "trocas inteligentes",
      "alimentacao equilibrada",
      "carboidratos",
      "proteinas",
      "gorduras boas",
      "refeicoes praticas",
      "escolhas conscientes",
      "mulher 360"
    ],
    cover: {
      brand: "Mulher 360",
      title: "Guia de Trocas Inteligentes",
      titleLine1: "Guia de",
      titleLine2: "Trocas",
      subtitle: "Substituir e escolher o que te faz bem com praticidade, consciência e equilíbrio.",
      signedByLabel: "Assinado por",
      signedBy: "Dra. Luciana Teixeira"
    },
    hero: {
      eyebrow: "Ebook digital",
      title: "Trocas inteligentes para transformar sua alimentação sem rigidez.",
      description:
        "Um guia para quem quer comer melhor sem ficar presa a cardápio engessado, aprendendo a adaptar a alimentação com mais leveza, segurança e constância na vida real.",
      primaryCta: "Quero acessar o guia",
      secondaryCta: "Ver como o guia ajuda"
    },
    problem: {
      title: "Manter uma alimentação equilibrada nem sempre é simples na rotina real.",
      description:
        "O material reconhece que o dia a dia pode dificultar a constância. Quando a alimentação depende de rigidez ou perfeição, fica mais difícil adaptar as refeições, variar os alimentos e manter qualidade sem culpa."
    },
    solution: {
      title: "Usar trocas inteligentes para ter flexibilidade com direção.",
      description:
        "O guia apresenta uma lógica simples para você adaptar refeições, variar escolhas e manter uma alimentação mais equilibrada sem depender de rigidez, monotonia ou perfeição."
    },
    benefits: [
      {
        title: "Mais liberdade com direção",
        text: "Você entende que não precisa comer sempre a mesma coisa, desde que mantenha equilíbrio entre os grupos alimentares."
      },
      {
        title: "Trocas simples por grupo alimentar",
        text: "O material facilita decisões do cotidiano com uma linha de raciocínio clara para substituir melhor sem se perder."
      },
      {
        title: "Praticidade para dias corridos",
        text: "Mesmo quando a rotina aperta, você passa a ter mais repertório para ajustar refeições sem sentir que saiu totalmente do eixo."
      },
      {
        title: "Mais consistência, menos perfeição",
        text: "A mensagem central é que equilíbrio não é sobre perfeição, mas sobre consistência nas escolhas feitas todos os dias."
      }
    ],
    contentSection: {
      title: "O que esse guia destrava na prática.",
      description:
        "Em vez de te prender a combinações fixas, o ebook te ensina a fazer ajustes com mais autonomia e critério no dia a dia.",
      points: [
        "Uma forma simples de pensar substituições sem bagunçar o equilíbrio da alimentação",
        "Critérios para variar refeições com mais autonomia, sem depender de cardápio fixo",
        "Direcionamentos práticos para lidar melhor com rotina corrida e falta de tempo",
        "Princípios fáceis de aplicar para sustentar boas escolhas com mais constância"
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
      title: "Um guia para substituir melhor, variar com segurança e manter constância.",
      description: "Pagamento em até 3x e garantia incondicional de 7 dias.",
      primaryCta: "Quero garantir meu acesso",
      secondaryCta: "Ver perguntas frequentes",
      deliverables: [
        "Guia de Trocas Inteligentes, em formato digital.",
        "Estrutura prática para adaptar refeições com mais liberdade e segurança.",
        "Orientações simples para manter qualidade alimentar sem rigidez."
      ]
    },
    finalCta: {
      title: "Você não precisa seguir uma dieta rígida. Precisa aprender a fazer boas escolhas todos os dias.",
      description:
        "Se a sua dificuldade é saber como adaptar a alimentação sem se perder, esse guia te ajuda a construir mais segurança nas escolhas do dia a dia.",
      primaryCta: "Quero acessar o ebook"
    },
    faqs: [
      {
        question: "Esse guia é uma dieta rígida?",
        answer:
          "Não. O próprio material reforça que você não precisa de rigidez, e sim de estratégia. A proposta é dar flexibilidade com direção para adaptar a alimentação à rotina."
      },
      {
        question: "Quais grupos alimentares aparecem no guia?",
        answer:
          "O material cobre os principais contextos da rotina alimentar para ajudar você a fazer substituições com mais confiança e menos dúvida."
      },
      {
        question: "Preciso excluir carboidratos?",
        answer:
          "Não. O guia apresenta carboidratos como energia do corpo e afirma que é possível variar sem medo, sendo importante não excluir totalmente esse grupo."
      },
      {
        question: "O guia serve para dias corridos?",
        answer:
          "Sim. A proposta do guia é justamente funcionar na vida real, inclusive quando você precisa de praticidade para não desorganizar tudo."
      },
      {
        question: "Qual é a principal regra do material?",
        answer:
          "A principal ideia é sair da lógica da perfeição e construir consistência com escolhas mais conscientes, simples e sustentáveis."
      }
    ]
  }
];

export const getEbookBySlug = (slug: string) => ebooks.find((ebook) => ebook.slug === slug);
