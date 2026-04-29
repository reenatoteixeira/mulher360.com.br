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
  },
  {
    slug: "treine-sua-mente",
    title: "Treine Sua Mente",
    metaTitle: "Mulher 360 | Treine Sua Mente",
    description:
      "Um ebook para ajudar você a identificar padrões mentais que sabotam sua rotina, fortalecer sua consciência nas escolhas e sustentar o emagrecimento de dentro para fora.",
    checkoutUrl: "https://pay.hotmart.com/R105609089Q",
    priceFrom: "147,00",
    priceTo: "97,00",
    catalogDescription:
      "Guia para desenvolver uma mente mais alinhada ao emagrecimento, enxergando gatilhos, autossabotagens e decisões automáticas com mais clareza e direção.",
    searchTerms: [
      "treine sua mente",
      "mente",
      "mentalidade",
      "emagrecimento",
      "autossabotagem",
      "comportamento alimentar",
      "autoconhecimento",
      "mulher 360"
    ],
    hero: {
      eyebrow: "Ebook digital",
      title: "Antes de transformar o corpo, treine a mente que conduz suas escolhas todos os dias.",
      description:
        "Um material pensado para quem sente que sabe o que precisa fazer, mas ainda se perde em impulsos, recaídas e ciclos de autossabotagem. A proposta é mostrar como o emagrecimento também passa pela forma como você pensa, sente e reage na rotina.",
      primaryCta: "Quero acessar o ebook",
      secondaryCta: "Ver como esse material ajuda"
    },
    problem: {
      title: "Muitas travas no emagrecimento não começam no prato. Começam na mente.",
      description:
        "Quando a rotina é guiada por pensamentos automáticos, culpa, impulsividade ou falta de clareza emocional, fica mais difícil sustentar boas escolhas. O resultado costuma ser um ciclo cansativo de tentativa, interrupção e frustração, mesmo quando a intenção de mudar é real."
    },
    solution: {
      title: "Treinar a mente para reduzir autossabotagem e criar mais consistência.",
      description:
        "O ebook propõe um olhar mais profundo para os padrões que influenciam seu comportamento, ajudando você a perceber o que te desvia do processo e a construir uma base mental mais firme para emagrecer com consciência e continuidade."
    },
    benefits: [
      {
        title: "Mais clareza sobre seus gatilhos",
        text: "Você passa a perceber com mais nitidez o que antecede decisões impulsivas e quais padrões internos costumam desorganizar sua rotina."
      },
      {
        title: "Menos autossabotagem silenciosa",
        text: "O material ajuda a identificar comportamentos que parecem pequenos no dia a dia, mas que afastam você do resultado quando se repetem."
      },
      {
        title: "Mais força mental para sustentar escolhas",
        text: "Em vez de depender apenas de motivação, você começa a fortalecer uma postura interna mais alinhada com constância e direção."
      },
      {
        title: "Emagrecimento mais consciente",
        text: "A proposta é sair do automático e enxergar o processo com mais presença, maturidade e responsabilidade sobre o que você alimenta por dentro e por fora."
      }
    ],
    contentSection: {
      title: "O que esse ebook te ajuda a destravar.",
      description:
        "Sem expor tudo logo de cara, o material foi estruturado para provocar percepção, aprofundar consciência e abrir espaço para uma mudança mais consistente na forma como você conduz o processo.",
      points: [
        "Reflexões guiadas para reconhecer padrões mentais que dificultam constância e emagrecimento",
        "Um novo olhar sobre gatilhos emocionais, pensamentos automáticos e decisões repetidas no dia a dia",
        "Direcionamentos para fortalecer sua mentalidade sem depender apenas de motivação momentânea",
        "Uma base mais consciente para alinhar mente, comportamento e corpo no mesmo sentido"
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
      title: "Um guia para fortalecer a mente que sustenta o emagrecimento.",
      description: "Acesso digital imediato após a compra.",
      primaryCta: "Quero garantir meu acesso",
      secondaryCta: "Ver perguntas frequentes",
      deliverables: [
        "Ebook Treine Sua Mente, em formato digital.",
        "Conteúdo voltado para autoconhecimento, percepção de gatilhos e fortalecimento mental no processo de emagrecimento.",
        "Um material direto para apoiar escolhas mais conscientes e uma rotina com menos autossabotagem."
      ]
    },
    finalCta: {
      title: "Seu corpo segue a direção que sua mente sustenta todos os dias.",
      description:
        "Se você sente que o maior bloqueio não é falta de informação, mas dificuldade de se manter no processo, esse ebook pode ser o ponto de virada para começar de dentro para fora.",
      primaryCta: "Quero acessar o ebook"
    },
    faqs: [
      {
        question: "Esse ebook é sobre emagrecimento ou sobre mente?",
        answer:
          "Sobre os dois. A proposta é mostrar que o emagrecimento não depende apenas do que você come, mas também da forma como pensa, reage e sustenta suas escolhas ao longo da rotina."
      },
      {
        question: "O material substitui acompanhamento profissional?",
        answer:
          "Não. O ebook é um recurso educativo para ampliar consciência e direcionamento, mas não substitui acompanhamento individualizado quando ele for necessário."
      },
      {
        question: "Vou encontrar estratégias práticas ou só reflexões?",
        answer:
          "O conteúdo foi pensado para ir além de frases motivacionais. Ele provoca reflexão, mas também direciona um novo posicionamento mental diante da sua rotina e do seu processo."
      },
      {
        question: "Esse ebook é para quem vive começando e parando?",
        answer:
          "Sim. Ele conversa especialmente com quem sente dificuldade de manter constância, cai em autossabotagem com frequência ou percebe que o emocional interfere muito nas escolhas."
      },
      {
        question: "Como recebo o material?",
        answer:
          "Após a confirmação da compra, o acesso ao ebook é liberado em formato digital."
      }
    ]
  },
  {
    slug: "como-cuidar-do-corpo-sem-culpa",
    title: "Como Cuidar do Corpo Sem Culpa",
    metaTitle: "Mulher 360 | Como Cuidar do Corpo Sem Culpa",
    description:
      "Um ebook para ajudar você a reconstruir a relação com o próprio corpo, cuidar de si com mais leveza e sair do ciclo de cobrança, culpa e desconexão.",
    checkoutUrl: "https://pay.hotmart.com/O105609260P",
    priceFrom: "67,00",
    priceTo: "27,00",
    catalogDescription:
      "Guia para desenvolver uma relação mais gentil e consciente com o corpo, reduzindo culpa, cobranças e padrões que travam o autocuidado.",
    searchTerms: [
      "cuidar do corpo sem culpa",
      "corpo sem culpa",
      "autocuidado",
      "culpa",
      "imagem corporal",
      "autoestima",
      "relação com o corpo",
      "mulher 360"
    ],
    hero: {
      eyebrow: "Ebook digital",
      title: "Seu corpo não precisa de mais punição. Precisa de cuidado, presença e reconexão.",
      description:
        "Um material para mulheres que estão cansadas de viver o autocuidado a partir da culpa, da cobrança ou da sensação de nunca serem suficientes. A proposta é abrir um caminho mais leve para olhar o corpo com mais respeito, consciência e verdade.",
      primaryCta: "Quero acessar o ebook",
      secondaryCta: "Ver como esse material ajuda"
    },
    problem: {
      title: "Quando o cuidado nasce da culpa, ele raramente se sustenta.",
      description:
        "Muitas mulheres tentam mudar o corpo enquanto se criticam o tempo todo. Nesse cenário, alimentação, rotina e autocuidado deixam de ser expressão de amor-próprio e viram compensação, castigo ou cobrança. Isso desgasta emocionalmente e dificulta a construção de uma relação mais saudável consigo mesma."
    },
    solution: {
      title: "Trocar a culpa por consciência para cuidar do corpo com mais verdade.",
      description:
        "O ebook propõe uma virada de perspectiva: sair da lógica da autocobrança constante e começar a cultivar uma relação mais madura, gentil e consistente com o próprio corpo, sem romantizar o processo e sem reforçar violência interna."
    },
    benefits: [
      {
        title: "Menos culpa no autocuidado",
        text: "Você começa a reconhecer padrões de cobrança que contaminam suas escolhas e enfraquecem sua relação com o próprio corpo."
      },
      {
        title: "Mais gentileza sem perder direção",
        text: "O material ajuda a construir um olhar mais acolhedor, sem confundir leveza com desistência ou falta de compromisso consigo mesma."
      },
      {
        title: "Reconexão com o corpo real",
        text: "A proposta é sair da guerra interna e desenvolver mais presença para ouvir o corpo com menos ruído, comparação e rejeição."
      },
      {
        title: "Autocuidado mais sustentável",
        text: "Quando o cuidado deixa de ser punição, ele tem mais chance de virar constância, e não apenas esforço momentâneo."
      }
    ],
    contentSection: {
      title: "O que esse ebook convida você a enxergar.",
      description:
        "Em vez de entregar tudo de forma óbvia, o material foi estruturado para despertar percepção, aliviar pesos desnecessários e fortalecer uma relação mais consciente com o corpo.",
      points: [
        "Reflexões sobre culpa, cobrança e padrões que distorcem a forma como você se enxerga",
        "Um convite para repensar o autocuidado sem violência interna nem exigência impossível",
        "Direcionamentos para cultivar mais presença, respeito e reconexão com o corpo real",
        "Uma nova base emocional para cuidar de si com mais consistência e menos sofrimento"
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
      title: "Um guia para cuidar do corpo com mais leveza e menos culpa.",
      description: "Pagamento promocional e acesso digital imediato após a compra.",
      primaryCta: "Quero garantir meu acesso",
      secondaryCta: "Ver perguntas frequentes",
      deliverables: [
        "Ebook Como Cuidar do Corpo Sem Culpa, em formato digital.",
        "Conteúdo voltado para reconexão corporal, autocuidado consciente e redução de culpa.",
        "Um material direto para ajudar você a sair da cobrança e construir um cuidado mais sustentável."
      ]
    },
    finalCta: {
      title: "Cuidar do corpo pode deixar de ser um peso e voltar a ser um gesto de respeito por você.",
      description:
        "Se hoje o autocuidado parece vir misturado com culpa, rejeição ou cobrança excessiva, esse ebook pode ajudar você a iniciar uma relação mais leve e verdadeira com o próprio corpo.",
      primaryCta: "Quero acessar o ebook"
    },
    faqs: [
      {
        question: "Esse ebook é sobre autoestima ou sobre alimentação?",
        answer:
          "Ele conversa com a relação que você constrói com o próprio corpo, e isso naturalmente toca autoestima, autocuidado e a forma como suas escolhas acontecem no dia a dia."
      },
      {
        question: "A proposta é parar de querer mudar o corpo?",
        answer:
          "Não. A proposta é questionar a culpa e a violência interna como base da mudança, para que o cuidado aconteça com mais consciência e menos sofrimento."
      },
      {
        question: "Vou encontrar reflexões ou orientações práticas?",
        answer:
          "O material foi pensado para provocar percepção e também direcionar um novo jeito de se posicionar diante do próprio corpo e do autocuidado."
      },
      {
        question: "Esse ebook é para quem vive se cobrando demais?",
        answer:
          "Sim. Ele faz sentido especialmente para mulheres que sentem que a relação com o corpo está atravessada por culpa, comparação, exigência e desconexão."
      },
      {
        question: "Como recebo o material?",
        answer:
          "Após a confirmação da compra, o acesso ao ebook é liberado em formato digital."
      }
    ]
  }
];

export const getEbookBySlug = (slug: string) => ebooks.find((ebook) => ebook.slug === slug);
