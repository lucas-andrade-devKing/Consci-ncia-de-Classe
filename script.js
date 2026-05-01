/* ============================================
   O JOGO QUE NINGUÉM TE EXPLICOU
   Plataforma Educacional — script.js (v2)
   ============================================ */

// ============================================
// GLOSSÁRIO
// ============================================
const GLOSSARY_DATA = {
  estrutural: {
    title: "Estrutural",
    definition: "Algo que vem do jeito como as coisas são organizadas — a cidade, as leis, o transporte, a economia — e não de uma escolha pessoal.",
    example: "Se na sua cidade não tem ônibus para a zona de emprego, isso é um problema estrutural. Não foi você que escolheu isso."
  },
  sistema: {
    title: "Sistema",
    definition: "O conjunto de regras, costumes e forças que organizam como a sociedade funciona — quem ganha mais, quem tem acesso, quem decide.",
    example: "O sistema de saúde, o sistema escolar, o sistema econômico — todos afetam sua vida, mesmo que você não perceba."
  },
  classe: {
    title: "Classe",
    definition: "Grupo de pessoas que vivem em condições parecidas: ganham parecido, moram em lugares parecidos, têm acesso parecido.",
    example: "Quem ganha salário mínimo e quem é dono de empresa grande vive em classes diferentes. Não é só dinheiro — é acesso, poder e oportunidade."
  },
  renda: {
    title: "Renda",
    definition: "Todo dinheiro que entra para você: salário, bico, venda, aluguel, pensão.",
    example: "Se você ganha R$ 2.000 de salário e R$ 500 de bico, sua renda total é R$ 2.500 por mês."
  },
  ativo: {
    title: "Ativo",
    definition: "Algo que coloca dinheiro no seu bolso sem você precisar trabalhar naquele momento. O oposto de dívida.",
    example: "Uma máquina que produz e vende, um imóvel alugado, um curso gravado que continua vendendo — são ativos."
  },
  autonomia: {
    title: "Autonomia",
    definition: "Capacidade de tomar decisões sobre sua própria vida sem depender da permissão de outra pessoa.",
    example: "Ter autonomia é poder dizer 'não' para um trabalho ruim porque você tem outra fonte de renda. Sem autonomia, você aceita qualquer coisa."
  },
  merito: {
    title: "Mérito",
    definition: "A ideia de que o resultado vem do esforço da pessoa. É verdade em parte, mas ignora que o ponto de partida e o caminho são diferentes para cada um.",
    example: "Duas pessoas estudam igual, mas uma tem internet boa e a outra não. O esforço foi igual, mas o contexto não."
  },
  exploracao: {
    title: "Exploração",
    definition: "Quando alguém lucra muito mais do que é justo com o trabalho de outra pessoa, sem devolver valor proporcional.",
    example: "Se você produz R$ 10.000 por mês para a empresa e ganha R$ 1.500, a diferença está indo para alguém. Isso não é sempre errado, mas é bom saber."
  },
  "politica-publica": {
    title: "Política pública",
    definition: "Decisões do governo (prefeitura, estado, país) que afetam a vida de todo mundo: saúde, transporte, escola, segurança.",
    example: "Se a prefeitura decide construir um posto de saúde no seu bairro, isso é uma política pública. Se decide não construir, também é."
  },
  "poder-de-escolha": {
    title: "Poder de escolha",
    definition: "A liberdade real de escolher o que fazer com seu tempo, trabalho e dinheiro — sem ser forçado pela situação.",
    example: "Quem tem reserva financeira pode escolher trocar de emprego. Quem não tem, aceita o que vier. A diferença é poder de escolha."
  },
  consciencia: {
    title: "Consciência",
    definition: "Enxergar como as coisas funcionam de verdade — não só como parecem. Entender onde você está e o que pode fazer.",
    example: "Consciência não é reclamar. É entender o jogo, saber onde você está no tabuleiro e decidir seu próximo passo."
  }
};

// ============================================
// DADOS DOS MÓDULOS (AULA 0 + MÓDULOS 1–10)
// ============================================
const MODULES_DATA = [
  // ==================== AULA 0 ====================
  {
    id: 0,
    badge: "AULA 0",
    title: "Antes de enxergar o jogo",
    desc: "Preparação mental: o que este curso é e o que não é.",
    objective: "Preparar sua mente para aprender sem criar ódio, sem vitimismo e sem simplificar demais.",
    sections: [
      {
        type: "story",
        content: "Ana abriu as redes sociais e viu um vídeo dizendo que 'o sistema te escraviza'. Ficou com raiva. Depois viu outro dizendo que 'se você quiser, consegue — é só mérito'. Ficou confusa. Quem está certo? Os dois? Nenhum? Ela sentiu que faltava uma peça.",
        simpleVersion: "Ana viu opiniões opostas na internet e ficou confusa. Uma dizia que a culpa é do sistema, outra que é só esforço. Ela sentiu que ninguém explicou direito."
      },
      {
        type: "contrast",
        surface: "O sistema é malvado e quer te prender. Você é vítima e não pode fazer nada.",
        depth: "O sistema tem regras. Algumas são justas, outras não. Entender as regras não te faz vítima — te dá mapa para agir melhor."
      },
      {
        type: "simple",
        content: "Este curso não é para criar ódio contra patrão, empresa, rico ou político. Também não é para dizer que tudo é culpa sua. É para te ajudar a separar três coisas: o que depende de você, o que depende do ambiente e o que depende de ação junto com outras pessoas. Consciência não é vitimismo. Consciência é mapa."
      },
      {
        type: "concept",
        name: "Consciência como mapa",
        explanation: "Consciência é a capacidade de enxergar onde você está, o que te rodeia e quais caminhos existem. Não é reclamar. Não é odiar. É ver com clareza para agir com inteligência.",
        simpleVersion: "Pense num GPS: ele não reclama do trânsito, ele mostra o caminho. Consciência é seu GPS na vida real."
      },
      {
        type: "list",
        title: "O que este curso NÃO é",
        items: [
          "Não é para dizer que tudo é culpa do sistema.",
          "Não é para dizer que nada é responsabilidade sua.",
          "Não é para atacar quem empreende, trabalha ou tem mais.",
          "Não é para criar revolta sem ação.",
          "Não é para te fazer se sentir inferior."
        ]
      },
      {
        type: "check",
        question: "Qual é o objetivo principal deste curso?",
        options: [
          "Ensinar a odiar o sistema",
          "Dar um mapa para entender o jogo e agir melhor",
          "Dizer que tudo é culpa da pessoa",
          "Fazer política"
        ],
        correct: 1,
        feedback: "Isso mesmo. O curso é um mapa. Você não está aqui para odiar o jogo — está aqui para enxergar o tabuleiro."
      },
      {
        type: "action",
        title: "Sua primeira ação",
        items: [
          "Respire fundo. Abra a mente.",
          "Aceite que talvez você descubra coisas que incomodam — e tudo bem.",
          "Lembre: o objetivo não é culpa. É clareza."
        ]
      }
    ],
    quote: "Você não está aqui para odiar o jogo. Está aqui para aprender a enxergar o tabuleiro.",
    quiz: [
      {
        question: "Este curso é sobre criar ódio contra patrões e empresários?",
        options: ["Sim, é um curso de revolta", "Não — é sobre enxergar o tabuleiro e agir com inteligência", "Depende do módulo", "Sim, contra os ricos"],
        correct: 1,
        feedback: "Correto! O curso é sobre clareza e ação, não sobre ódio.",
        wrongFeedback: "Cuidado: parece tentador simplificar, mas o curso não é sobre atacar ninguém. É sobre enxergar o tabuleiro inteiro para jogar melhor."
      },
      {
        question: "Consciência é a mesma coisa que vitimismo?",
        options: ["Sim, quem reclama é vitimista", "Não — consciência é mapa, vitimismo é parar no lugar", "São sinônimos", "Consciência é só para intelectual"],
        correct: 1,
        feedback: "Exato. Consciência mostra o caminho. Vitimismo para no meio da estrada.",
        wrongFeedback: "A armadilha é achar que entender o sistema = reclamar sem agir. Consciência de verdade leva à ação."
      },
      {
        question: "O que depende de você neste curso?",
        options: ["Nada, o sistema decide tudo", "Ler com atenção, refletir e agir", "Só fazer o quiz", "Decorar conceitos"],
        correct: 1,
        feedback: "Isso. Sua parte é ler, refletir e agir. O curso dá o mapa — você anda.",
        wrongFeedback: "O curso dá ferramentas, mas a transformação depende de você abrir a mente, refletir com honestidade e colocar em prática."
      }
    ],
    reflectionSteps: [
      { question: "O que te trouxe até este curso?", placeholder: "Ex: curiosidade, indicação, vontade de mudar..." },
      { question: "O que você espera aprender?", placeholder: "Ex: entender por que tá difícil, saber como melhorar..." },
      { question: "Existe algo que te incomoda sobre trabalho ou dinheiro?", placeholder: "Ex: ganho pouco, trabalho muito, sinto que falta algo..." },
      { question: "Qual sua disposição para questionar suas próprias crenças?", placeholder: "Ex: estou aberto, tenho um pouco de medo, vou tentar..." }
    ],
    microAction: "Conte para uma pessoa de confiança que você começou este curso. Diga com suas palavras: 'estou aprendendo a enxergar o tabuleiro'."
  },

  // ==================== MÓDULO 1 ====================
  {
    id: 1,
    badge: "MÓDULO 1",
    title: "Nem todo problema começa em você",
    desc: "Entenda a diferença entre problema da pessoa, do ambiente e mistura dos dois.",
    objective: "Separar, de forma prática, o que nasce da sua escolha, o que nasce do ambiente e o que mistura os dois.",
    sections: [
      {
        type: "story",
        content: "Imagine João e Pedro. Os dois querem melhorar de vida. João mora perto do trabalho, tem ônibus, internet, família que apoia e tempo para estudar. Pedro mora longe, pega transporte ruim, chega cansado, ajuda em casa e não tem internet boa. Os dois podem se esforçar. Mas eles começaram do mesmo ponto?",
        simpleVersion: "Duas pessoas querem crescer. Uma tem ônibus, internet e tempo. A outra não. As duas se esforçam igual. Quem tem mais chance?"
      },
      {
        type: "contrast",
        surface: "Se Pedro não consegue, é porque não se esforçou o bastante.",
        depth: "Pedro pode se esforçar tanto quanto João, mas o caminho dele é mais difícil — por causa do lugar, do transporte e do acesso. O esforço importa, mas o ponto de partida também."
      },
      {
        type: "simple",
        content: "Tem coisa que nasce da sua escolha. Tem coisa que nasce do lugar onde você foi colocado. E tem coisa que mistura as duas. Saber separar isso não é desculpa — é inteligência."
      },
      {
        type: "concept",
        name: "Problema individual vs. problema estrutural",
        explanation: "Problema individual: nasce da sua decisão (gastar demais, faltar sem motivo). Problema estrutural: nasce de como as coisas são organizadas (cidade sem transporte, bairro sem escola). Problema misto: os dois ao mesmo tempo.",
        simpleVersion: "Individual = você escolheu. Estrutural = o lugar te colocou nisso. Misto = um pouco de cada."
      },
      {
        type: "example",
        content: "<strong>Problema individual:</strong> gastar mais do que ganha, faltar sem motivo, não querer aprender, tratar mal as pessoas.<br><br><strong>Problema do ambiente:</strong> cidade sem transporte, bairro sem escola boa, salário baixo na região, hospital lotado, enchente por falta de planejamento.<br><br><strong>Problema misto:</strong> pessoa endividada porque gastou mal, mas também ganha pouco numa economia cara. Rua alagando porque pessoas jogam lixo, mas também porque falta limpeza e bueiro."
      },
      {
        type: "classify",
        situations: [
          { text: "Pessoa falta ao trabalho sem motivo.", correct: "individual", feedback: "Faltar sem motivo é uma escolha pessoal." },
          { text: "Cidade não tem ônibus para a zona de emprego.", correct: "estrutural", feedback: "Transporte é responsabilidade do planejamento urbano." },
          { text: "Rua alaga por lixo jogado e bueiro entupido sem limpeza.", correct: "misto", feedback: "Moradores jogam lixo (individual) e a prefeitura não limpa bueiro (estrutural)." },
          { text: "Pessoa gasta todo o salário por impulso.", correct: "individual", feedback: "Gasto por impulso é uma decisão pessoal, mesmo que a renda seja baixa." },
          { text: "Bairro não tem escola boa.", correct: "estrutural", feedback: "Falta de escola é um problema de planejamento e investimento público." },
          { text: "Trabalhador quer crescer, mas na cidade quase não tem vaga.", correct: "misto", feedback: "A vontade é da pessoa (individual), mas a falta de vaga é do ambiente (estrutural)." }
        ]
      },
      {
        type: "check",
        question: "Se uma pessoa se esforça muito mas mora num lugar sem oportunidade, o problema é só dela?",
        options: ["Sim, esforço resolve tudo", "Não — parte do problema é do ambiente onde ela está", "Ela deveria se mudar", "Não existe esse tipo de problema"],
        correct: 1,
        feedback: "Correto. O esforço importa, mas o ambiente limita ou amplia o que o esforço consegue alcançar."
      },
      {
        type: "mistake",
        content: "Erro comum: achar que entender o problema do ambiente é 'dar desculpa'. Não é. É enxergar o tabuleiro inteiro para jogar melhor. Quem só olha para o esforço pessoal fica cego para metade do jogo.",
        simpleVersion: "Entender que o ambiente atrapalha não é preguiça. É inteligência. Você age melhor quando vê o quadro completo."
      }
    ],
    quote: "Esforço importa, mas não explica tudo. Dois esforços iguais, em contextos diferentes, geram resultados diferentes.",
    quiz: [
      {
        question: "Maria perdeu oportunidades porque não quis estudar e recusou ajuda. Isso é mais o quê?",
        options: ["Problema estrutural", "Problema individual", "Problema misto", "Não é problema"],
        correct: 1,
        feedback: "Maria fez escolhas que a prejudicaram. Isso é individual.",
        wrongFeedback: "A armadilha é querer proteger Maria. Mas se ela teve acesso e recusou, a responsabilidade principal é dela. Individual não é xingamento — é clareza."
      },
      {
        question: "Carlos quer trabalhar, mas não tem transporte público para chegar na empresa. Isso é mais o quê?",
        options: ["Problema individual", "Problema estrutural", "Falta de esforço", "Problema misto"],
        correct: 1,
        feedback: "Carlos quer trabalhar. O transporte é que falta. O ambiente está travando ele.",
        wrongFeedback: "A armadilha é pensar 'ele devia dar um jeito'. Mas transporte público não depende de um indivíduo — depende de planejamento da cidade."
      },
      {
        question: "A rua alaga porque moradores jogam lixo e a prefeitura não limpa bueiro. Isso é o quê?",
        options: ["Só culpa dos moradores", "Só culpa da prefeitura", "Problema misto — dos dois lados", "Não tem solução"],
        correct: 2,
        feedback: "Os dois lados contribuem. Moradores jogam lixo (individual) e falta infraestrutura (estrutural).",
        wrongFeedback: "A armadilha é simplificar — culpar só um lado. Na realidade, problemas mistos precisam de ação dos dois lados para serem resolvidos."
      }
    ],
    reflectionSteps: [
      { question: "Pense em um problema que você vive hoje. Qual é?", placeholder: "Ex: dívida, trabalho ruim, pouca oportunidade..." },
      { question: "O que nesse problema depende de você?", placeholder: "Ex: meus hábitos, minhas escolhas, minha atitude..." },
      { question: "O que nesse problema depende do ambiente?", placeholder: "Ex: falta de vaga, transporte ruim, salário baixo na região..." },
      { question: "Qual pequena ação você pode tomar esta semana?", placeholder: "Ex: pesquisar curso grátis, anotar gastos, conversar com alguém..." }
    ],
    microAction: "Escolha 1 problema da sua vida e escreva num papel: 'o que é meu' e 'o que é do ambiente'. Cole na geladeira."
  },

  // ==================== MÓDULO 2 ====================
  {
    id: 2,
    badge: "MÓDULO 2",
    title: "Quem trabalha, quem empreende, quem constrói",
    desc: "A diferença entre vender tempo, vender habilidade e construir sistema.",
    objective: "Entender as 5 posições no mundo do trabalho e descobrir onde você está — sem vergonha.",
    sections: [
      {
        type: "story",
        content: "Cida é cabeleireira. Trabalha das 8h às 20h, de segunda a sábado. Ganha bem nos dias bons. Mas quando ficou gripada por uma semana, não entrou nenhum real. Seu Antônio tem uma padaria. Acorda às 4h, faz o pão, atende, fecha, cuida das contas. Se ele tira férias, a padaria fecha. Os dois acham que são 'donos do próprio negócio'. Mas os dois são prisioneiros do próprio trabalho.",
        simpleVersion: "Cida corta cabelo e Seu Antônio faz pão. Os dois trabalham para si mesmos. Mas se eles pararem, a renda para junto. Isso é liberdade?"
      },
      {
        type: "contrast",
        surface: "Abri meu negócio, agora sou livre. Sou meu próprio patrão.",
        depth: "Ter negócio não é ser livre. Se o negócio para quando você para, você comprou um emprego — com mais responsabilidade."
      },
      {
        type: "simple",
        content: "Existem 5 posições no mundo do trabalho. Nenhuma é vergonha. Vergonha é não saber onde você está. O importante é enxergar sua posição real para poder subir de forma consciente."
      },
      {
        type: "concept",
        name: "As 5 posições no mundo do trabalho",
        explanation: "1. Empregado: vende tempo por salário. 2. Autônomo: vende habilidade (cabeleireiro, eletricista, designer). 3. Microempreendedor preso: tem negócio, mas o negócio depende 100% dele. 4. Empresário real: construiu sistema com equipe e processos que funciona sem ele. 5. Investidor: coloca capital para trabalhar.",
        simpleVersion: "Empregado troca hora por dinheiro. Autônomo troca habilidade por dinheiro. Dono preso é empregado de si mesmo. Empresário real criou algo que funciona sozinho. Investidor põe dinheiro para render."
      },
      {
        type: "example",
        content: "<strong>Funcionário de mercado:</strong> ganha salário fixo, bate ponto. Se for demitido, renda para.<br><strong>Cida, cabeleireira:</strong> ganha por cliente. Trabalha mais = ganha mais. Mas se ficar doente, ganha zero.<br><strong>Seu Antônio, padeiro:</strong> é dono da padaria, mas faz tudo sozinho. Se ele viajar, a padaria fecha.<br><strong>Dona Regina, dona de mercado:</strong> contratou gerente e equipe. O mercado funciona quando ela está e quando não está.<br><strong>Investidor:</strong> comprou um imóvel e aluga. Recebe todo mês sem trabalhar naquele imóvel."
      },
      {
        type: "tool",
        question: "Se você parasse de trabalhar por 30 dias, o que aconteceria com sua renda?",
        options: [
          { text: "Para totalmente", feedback: "Você vende tempo ou habilidade direta. Sua renda depende 100% da sua presença." },
          { text: "Cai bastante", feedback: "Você tem alguma estrutura, mas ainda depende muito de você. Está entre autônomo e microempreendedor preso." },
          { text: "Cai um pouco", feedback: "Você já construiu algo que funciona parcialmente sem você. Está no caminho do sistema." },
          { text: "Continua quase igual", feedback: "Você tem sistema, investimento ou estrutura sólida. Está no nível de empresário real ou investidor." }
        ]
      },
      {
        type: "check",
        question: "Seu Antônio tem padaria mas faz tudo sozinho. Se ele para, a padaria fecha. Ele é empresário?",
        options: ["Sim, ele é dono do CNPJ", "Não — ele é um empregado de si mesmo", "Depende do faturamento", "Sim, porque ele não tem patrão"],
        correct: 1,
        feedback: "Ter CNPJ não é ser empresário. Se o negócio para quando você para, você é empregado de si mesmo — só mudou de uniforme."
      },
      {
        type: "action",
        title: "Descubra sua posição",
        items: [
          "Responda com honestidade: se eu parar, minha renda para?",
          "Identifique se você vende tempo, habilidade ou sistema.",
          "Não julgue sua posição. Entenda ela."
        ]
      }
    ],
    quote: "Se você não pode parar, você ainda não é livre. Só mudou de uniforme.",
    quiz: [
      {
        question: "Cida trabalha 12 horas por dia como cabeleireira autônoma. Quando ficou doente, não ganhou nada. Ela é livre?",
        options: ["Sim, ela é dona do próprio tempo", "Não — ela depende 100% do próprio trabalho para ter renda", "Sim, porque não tem patrão", "Depende de quanto ela ganha"],
        correct: 1,
        feedback: "Cida vende habilidade. Se parar, a renda para. Autonomia de horário não é liberdade financeira.",
        wrongFeedback: "A armadilha é confundir 'não ter patrão' com 'ser livre'. Liberdade real é quando a renda não depende da sua presença constante."
      },
      {
        question: "O que diferencia o microempreendedor preso do empresário real?",
        options: ["O faturamento", "O empresário real construiu sistema que funciona sem ele", "O número de funcionários", "O CNPJ"],
        correct: 1,
        feedback: "Sistema é a chave. O empresário real pode se ausentar e o negócio continua.",
        wrongFeedback: "Não é sobre faturamento nem sobre quantidade de funcionários. É sobre se o negócio funciona sem você — isso é sistema."
      },
      {
        question: "Qual a diferença entre empregado e autônomo?",
        options: ["Autônomo ganha mais", "Empregado vende tempo fixo; autônomo vende habilidade específica", "Não existe diferença real", "Autônomo tem CNPJ"],
        correct: 1,
        feedback: "Empregado troca hora por salário fixo. Autônomo troca habilidade por pagamento variável. Os dois dependem do próprio trabalho.",
        wrongFeedback: "A diferença não é quanto ganha — é o que vende. Empregado vende tempo. Autônomo vende habilidade. Mas os dois param de ganhar se pararem de trabalhar."
      }
    ],
    reflectionSteps: [
      { question: "Em qual das 5 posições você está hoje?", placeholder: "Empregado, autônomo, micro preso, empresário real ou investidor?" },
      { question: "O que te mantém nessa posição?", placeholder: "Ex: medo, falta de conhecimento, falta de capital, zona de conforto..." },
      { question: "Para qual posição você quer ir?", placeholder: "Qual seria o próximo degrau realista?" },
      { question: "O que você pode fazer esta semana para começar a se mover?", placeholder: "Uma ação pequena, concreta, hoje." }
    ],
    microAction: "Pergunte a 2 pessoas que você conhece: 'se você parasse de trabalhar por 30 dias, o que aconteceria com sua renda?' Observe as respostas."
  },

  // ==================== MÓDULO 3 ====================
  {
    id: 3,
    badge: "MÓDULO 3",
    title: "A ilusão de subir um degrau",
    desc: "Por que algumas pessoas defendem interesses que as prejudicam.",
    objective: "Entender por que uma pessoa pode melhorar um pouco e começar a se identificar com quem tem muito mais poder.",
    sections: [
      {
        type: "story",
        content: "Rodrigo era ajudante de loja. Depois de 3 anos, virou encarregado. Ganhou R$ 500 a mais e uma crachá diferente. De repente, começou a tratar os antigos colegas como inferiores. Passou a dizer: 'Eu consegui porque me esforcei. Se eles não sobem, é porque não querem.' Rodrigo esqueceu que, um mês antes da promoção, ele reclamava das mesmas coisas que os colegas.",
        simpleVersion: "Rodrigo subiu de cargo e começou a tratar os antigos colegas como inferiores. Esqueceu que era igual a eles pouco tempo antes."
      },
      {
        type: "contrast",
        surface: "Rodrigo merece se sentir superior — ele se esforçou e foi promovido.",
        depth: "Rodrigo subiu um degrau, mas ainda é funcionário. A diferença de poder entre ele e o dono da rede de lojas é enorme. Ele se identifica com quem está acima, mas sua posição real continua vulnerável."
      },
      {
        type: "simple",
        content: "Quando a pessoa melhora um pouco de vida — ganha mais, vira chefe, abre um pequeno negócio — é comum começar a se identificar com quem está muito acima. Ela esquece de onde veio e passa a defender ideias que, na prática, não a beneficiam."
      },
      {
        type: "example",
        content: "<strong>O encarregado Rodrigo:</strong> virou chefe e começou a tratar funcionários como inferiores, esquecendo que era um deles.<br><br><strong>O MEI que se acha elite:</strong> abriu CNPJ, posta 'mentalidade de sucesso', mas não consegue parar uma semana sem trabalhar e tem dívida no cartão.<br><br><strong>O carro financiado como troféu:</strong> pessoa financiou um carro em 60 vezes, acha que venceu na vida, mas perdeu liberdade — agora precisa manter o emprego a qualquer custo para não perder o carro."
      },
      {
        type: "check",
        question: "Uma pessoa abre MEI, trabalha 14h por dia sem folga, tem dívida no cartão, mas posta que é 'empresário de sucesso'. Isso é liberdade?",
        options: ["Sim, ela é dona do negócio", "Não — ela comprou um emprego com mais pressão e menos segurança", "Depende do faturamento", "Sim, porque tem CNPJ"],
        correct: 1,
        feedback: "Ter CNPJ sem ter sistema é trocar um emprego por outro mais pesado. Liberdade não é aparência."
      },
      {
        type: "mistake",
        content: "Erro comum: confundir parecer livre com ser livre. Parecer livre é ter cargo bonito, carro financiado e falar de 'mentalidade'. Ser livre é ter poder de escolha real — poder dizer não, poder parar, poder mudar de direção sem desmoronar.",
        simpleVersion: "Parecer livre = aparência (cargo, carro, discurso). Ser livre = poder real de dizer não sem quebrar."
      },
      {
        type: "action",
        title: "Pergunta para levar com você",
        items: [
          "O que eu defendo hoje porque me faz sentir superior, mas talvez não me ajude de verdade?",
          "Estou me comparando com quem está acima ou com quem está abaixo?",
          "Minha 'vitória' é real ou é aparência?"
        ]
      }
    ],
    quote: "Não é vergonha estar em nenhum nível. Vergonha é não saber onde está.",
    quiz: [
      {
        question: "Rodrigo virou encarregado e começou a tratar colegas como inferiores. Por quê?",
        options: ["Porque ele é uma pessoa ruim", "Porque subir um degrau criou uma falsa sensação de superioridade", "Porque o cargo muda a personalidade", "Porque ele tem razão"],
        correct: 1,
        feedback: "A falsa sensação de superioridade é um fenômeno psicológico. Rodrigo não é mau — está cego pela ilusão do degrau.",
        wrongFeedback: "A armadilha é julgar Rodrigo como 'mau'. Não é sobre caráter. É sobre como a mente funciona quando subimos um pouquinho — tendemos a nos identificar com quem está acima."
      },
      {
        question: "Qual a diferença entre parecer livre e ser livre?",
        options: ["Não existe diferença", "Parecer livre é aparência; ser livre é poder de escolha real", "Ser livre é ter muito dinheiro", "Parecer livre é ter CNPJ"],
        correct: 1,
        feedback: "Parecer livre é imagem. Ser livre é poder real de escolha.",
        wrongFeedback: "Dinheiro ajuda, mas não define liberdade. Tem gente rica presa em obrigações. Liberdade real = poder de escolha sem depender de uma única coisa."
      },
      {
        question: "Financiar um carro em 60x para 'parecer que venceu' é sinal de quê?",
        options: ["Sucesso financeiro", "Troca de liberdade por aparência — agora precisa manter o emprego a qualquer custo", "Investimento inteligente", "Mérito pessoal"],
        correct: 1,
        feedback: "O carro virou uma corrente. Em vez de dar liberdade, tirou a opção de sair do emprego.",
        wrongFeedback: "A armadilha é achar que ter carro = vencer. Se o carro te prende ao emprego por medo de perder, ele virou uma corrente dourada."
      }
    ],
    reflectionSteps: [
      { question: "Você já se sentiu superior a alguém por ter conseguido algo?", placeholder: "Pense com honestidade, sem julgamento..." },
      { question: "O que você defende hoje que talvez esteja te prejudicando?", placeholder: "Ex: ideia sobre trabalho, sobre mérito, sobre esforço..." },
      { question: "Sua posição real é tão diferente assim de quem está abaixo?", placeholder: "Compare com números: renda, reserva, poder de escolha..." },
      { question: "Qual ação você pode tomar para se avaliar com mais honestidade?", placeholder: "Ex: olhar meus números reais, conversar com alguém..." }
    ],
    microAction: "Esta semana, observe: quando você criticar alguém que ganha menos ou tem menos, pare e pergunte: 'eu sou realmente tão diferente dessa pessoa?'"
  },

  // ==================== MÓDULO 4 ====================
  {
    id: 4,
    badge: "MÓDULO 4",
    title: "Quando o trabalho usa emoção contra você",
    desc: "Aprenda a reconhecer manipulação emocional no ambiente de trabalho.",
    objective: "Identificar sinais de manipulação emocional no trabalho — sem achar que toda empresa é abusiva.",
    sections: [
      {
        type: "story",
        content: "Lucas trabalha na ChocoMax, uma fábrica de chocolates. O slogan interno é 'Somos uma família ChocoMax'. Nas reuniões, o gerente diz: 'Quem veste a camisa, cresce.' Lucas faz hora extra todo dia, não tira férias, e se sente culpado quando descansa. No ano passado, demitem 30 pessoas de uma vez. A 'família' mandou embora sem aviso. Lucas ficou se perguntando: família faz isso?",
        simpleVersion: "Lucas trabalha numa empresa que diz 'somos família'. Ele dá tudo de si. Quando a empresa precisou cortar custos, mandou 30 pessoas embora de uma vez. Família de verdade faz isso?"
      },
      {
        type: "contrast",
        surface: "A empresa me trata como família. Se eu me esforçar, vou crescer.",
        depth: "Família não demite. Empresa demite. Quando o discurso de família serve para você trabalhar mais e reclamar menos, é ferramenta de controle — não carinho."
      },
      {
        type: "simple",
        content: "Algumas empresas usam emoção para fazer você trabalhar mais sem pagar mais. Isso não significa que toda empresa é ruim. Mas você precisa saber reconhecer os sinais para não ser usado sem perceber."
      },
      {
        type: "list",
        title: "Sinais de manipulação emocional no trabalho",
        items: [
          "<strong>Discurso de família:</strong> 'Somos uma família aqui.' Família não demite em massa.",
          "<strong>Metas abusivas disfarçadas de desafio:</strong> 'Estamos testando seu potencial.' Na verdade, querem mais resultado sem pagar mais.",
          "<strong>Culto à produtividade:</strong> 'Quem dorme no escritório é quem cresce.' Não — quem dorme no escritório está exausto.",
          "<strong>Culpa por descansar:</strong> Fazer você sentir que folgar é fraqueza e que bom funcionário não reclama.",
          "<strong>Promessa de que qualquer um chega ao topo:</strong> 'Se você se esforçar, chega lá.' Ignorando que há 500 funcionários e 3 vagas de gerente.",
          "<strong>Uso de propósito para aumentar esforço:</strong> Transformar sua paixão em ferramenta para extrair mais trabalho sem compensação justa."
        ]
      },
      {
        type: "check",
        question: "Uma empresa diz 'somos família' e depois demite 30 pessoas sem aviso. O que isso mostra?",
        options: ["Que a empresa é malvada", "Que o discurso de família era ferramenta de controle, não relação real", "Que as 30 pessoas eram ruins", "Que é normal"],
        correct: 1,
        feedback: "O discurso de família criava lealdade emocional para extrair mais trabalho. Quando não precisou mais, descartou."
      },
      {
        type: "mistake",
        content: "Erro comum: achar que TODA empresa é manipuladora. Não é. Existem empresas éticas, líderes genuínos e culturas saudáveis. O objetivo aqui é aprender a reconhecer os sinais — não desconfiar de tudo.",
        simpleVersion: "Nem toda empresa é ruim. Mas saber reconhecer manipulação te protege. O objetivo é clareza, não paranoia."
      },
      {
        type: "action",
        title: "O que observar no seu trabalho",
        items: [
          "A empresa pede sacrifício mas compensa de forma justa?",
          "Você se sente culpado por descansar? Quem colocou essa culpa?",
          "As promessas de crescimento são reais ou ilusórias?"
        ]
      }
    ],
    quote: "Quando o sistema não pode te obrigar pela força, ele tenta te convencer pela emoção.",
    quiz: [
      {
        question: "Por que o discurso de 'somos uma família' pode ser problemático?",
        options: ["Porque família é sagrada", "Porque cria lealdade artificial — família não demite, empresa demite", "Porque é mentira sempre", "Porque família tem conflito"],
        correct: 1,
        feedback: "A comparação com família cria vínculo emocional que a empresa usa para justificar sacrifícios que não faria por um 'membro da família' real.",
        wrongFeedback: "Nem sempre é mentira — algumas empresas são genuínas. Mas o problema é quando o discurso de família é usado para impedir você de questionar condições ruins."
      },
      {
        question: "O que é 'culpa produtiva'?",
        options: ["Sentir orgulho do trabalho", "Sentir culpa por descansar, como se folgar fosse fraqueza", "Cobrar metas com firmeza", "Trabalhar por paixão"],
        correct: 1,
        feedback: "Culpa produtiva é quando o ambiente te faz sentir que descansar é errado e que você nunca está fazendo o suficiente.",
        wrongFeedback: "A armadilha é confundir cobrança normal com manipulação. Cobrança justa vem com compensação justa. Culpa produtiva faz você trabalhar mais sem ganhar mais."
      },
      {
        question: "Nem toda empresa é manipuladora. O que importa é:",
        options: ["Nunca confiar em nenhuma", "Saber reconhecer os sinais para não ser usado sem perceber", "Aceitar tudo calado", "Só trabalhar em empresa grande"],
        correct: 1,
        feedback: "Clareza, não paranoia. Reconhecer sinais te dá poder de escolha.",
        wrongFeedback: "Desconfiar de tudo é tão prejudicial quanto não perceber nada. O equilíbrio é ter os olhos abertos e saber o que observar."
      }
    ],
    reflectionSteps: [
      { question: "Você já se sentiu culpado por descansar ou tirar férias?", placeholder: "Descreva a situação..." },
      { question: "De onde veio essa culpa? De você ou do ambiente?", placeholder: "Pense: chefe, colegas, cultura da empresa..." },
      { question: "Seu esforço no trabalho é compensado de forma justa?", placeholder: "Compare o que você entrega com o que recebe..." },
      { question: "O que você pode fazer para proteger seus limites?", placeholder: "Ex: falar com chefe, definir horários, buscar alternativa..." }
    ],
    microAction: "Esta semana, observe uma frase que você ouve no trabalho ('vista a camisa', 'somos família', 'quem quer cresce'). Anote e pergunte: isso me ajuda ou me prende?"
  },

  // ==================== MÓDULO 5 ====================
  {
    id: 5,
    badge: "MÓDULO 5",
    title: "A matemática da liberdade",
    desc: "Meça sua dependência real do trabalho com números.",
    objective: "Conhecer seus números reais e entender em qual nível de liberdade financeira você está.",
    sections: [
      {
        type: "story",
        content: "Dona Marta ganha R$ 2.800 por mês. Gasta R$ 2.600. Tem R$ 300 guardados. Quando perguntaram quanto tempo ela aguenta sem trabalhar, ela disse: 'talvez uma semana.' Dona Marta não é irresponsável. Ela nunca teve alguém que sentasse com ela e mostrasse os números. Ninguém ensinou. Agora ela vai aprender.",
        simpleVersion: "Dona Marta ganha quase tudo que gasta. Tem pouquíssimo guardado. Nunca ninguém ensinou ela a ver os próprios números. Hoje ela vai aprender."
      },
      {
        type: "contrast",
        surface: "Eu ganho razoável. Dá para viver. Tá tudo bem.",
        depth: "Se você não sabe quanto tempo aguenta sem trabalhar, você não sabe se está bem. Você está no escuro. Liberdade começa com números."
      },
      {
        type: "simple",
        content: "Isso não é para te assustar. É para te dar mapa. Conhecer seus números é o primeiro passo para mudar eles. Sem mapa, você anda no escuro."
      },
      {
        type: "concept",
        name: "Nível de liberdade financeira",
        explanation: "Divide o que você tem guardado pelo que gasta por mês. O resultado é quantos meses você sobrevive sem trabalhar. Quanto mais meses, mais liberdade de escolha.",
        simpleVersion: "Conta simples: dinheiro guardado ÷ gasto mensal = quantos meses você aguenta. Poucos meses = modo sobrevivência. Muitos meses = poder de escolha."
      },
      {
        type: "list",
        title: "Os 5 níveis",
        items: [
          "<strong>Sobrevivência:</strong> 0 a 1 mês. Qualquer imprevisto vira crise.",
          "<strong>Pequeno respiro:</strong> 2 a 6 meses. Tem margem, mas pouca.",
          "<strong>Proteção:</strong> 6 a 12 meses. Pode tomar decisões com calma.",
          "<strong>Liberdade parcial:</strong> 1 a 3 anos. Pode negociar, trocar, planejar.",
          "<strong>Poder de escolha:</strong> 3 anos ou mais. Você escolhe — não é escolhido."
        ]
      },
      {
        type: "text",
        title: "Use a calculadora",
        content: "<p>Preencha a calculadora abaixo com seus números reais. Se não souber o valor exato, chute por baixo. O importante é começar.</p><p><strong>Clique no botão de quiz no fim da aula para acessar a calculadora automaticamente.</strong></p>"
      },
      {
        type: "check",
        question: "Dona Marta tem R$ 300 guardados e gasta R$ 2.600/mês. Em qual nível ela está?",
        options: ["Proteção", "Respiro", "Sobrevivência — menos de 1 mês de reserva", "Liberdade parcial"],
        correct: 2,
        feedback: "R$ 300 ÷ R$ 2.600 = ~0,1 mês. Ela está em modo sobrevivência total."
      }
    ],
    quote: "Liberdade não nasce de opinião. Liberdade nasce de estrutura.",
    quiz: [
      {
        question: "O que é reserva de emergência?",
        options: ["Dinheiro para investir na bolsa", "Dinheiro guardado para cobrir gastos se a renda parar", "Crédito do cartão", "Empréstimo do banco"],
        correct: 1,
        feedback: "Reserva de emergência é seu colchão de segurança. Sem ela, você está em modo sobrevivência.",
        wrongFeedback: "Crédito e empréstimo são dívida, não reserva. Reserva é dinheiro seu, guardado, disponível para emergência."
      },
      {
        question: "Ter 6 meses de gastos guardados coloca você em qual nível?",
        options: ["Sobrevivência", "Respiro", "Proteção", "Poder de escolha"],
        correct: 2,
        feedback: "6 a 12 meses = Proteção. Você pode tomar decisões com mais calma.",
        wrongFeedback: "6 meses não é respiro (2-6) nem sobrevivência (0-1). É o início da proteção — você já pode respirar e pensar antes de agir."
      },
      {
        question: "Por que conhecer seus números é importante?",
        options: ["Para ficar triste", "Para ter mapa e saber o que mudar", "Não é importante", "Só serve para rico"],
        correct: 1,
        feedback: "Números são mapa. Sem mapa, você anda no escuro. Com mapa, cada passo tem direção.",
        wrongFeedback: "A armadilha é evitar os números por medo. Mas o medo de ver é pior que a realidade de saber. Conhecer é o primeiro passo para mudar."
      }
    ],
    reflectionSteps: [
      { question: "Depois de ver (ou imaginar) seus números, o que mais te preocupa?", placeholder: "Ex: não tenho nada guardado, gasto muito por impulso..." },
      { question: "O que te dá esperança?", placeholder: "Ex: sei que posso cortar gastos, tenho uma habilidade..." },
      { question: "Qual gasto você pode cortar ou reduzir esta semana?", placeholder: "Ex: delivery, assinatura que não uso, compra por impulso..." },
      { question: "Qual meta de reserva você quer alcançar em 3 meses?", placeholder: "Coloque um número real, mesmo que pequeno. Ex: R$ 500" }
    ],
    microAction: "Anote hoje TODOS os gastos dos últimos 7 dias. Tudo. Sem julgamento. Só anote. Amanhã você analisa."
  },

  // ==================== MÓDULO 6 ====================
  {
    id: 6,
    badge: "MÓDULO 6",
    title: "Consciência sem ação vira revolta parada",
    desc: "Transforme entendimento em movimento real e estratégico.",
    objective: "Sair da reclamação e entrar na ação — com estratégia, não por impulso.",
    sections: [
      {
        type: "story",
        content: "Marcos leu sobre política, economia e desigualdade. Sabe explicar tudo. Posta comentários longos nas redes sociais. Reclama do sistema em toda conversa. Mas nos últimos 2 anos, Marcos não mudou nada na própria vida. Mesma renda, mesma dívida, mesma rotina. Marcos tem consciência. Mas não tem ação. E consciência sem ação vira revolta parada.",
        simpleVersion: "Marcos sabe tudo sobre o sistema, mas não mudou nada na própria vida em 2 anos. Saber sem agir é ficar parado reclamando."
      },
      {
        type: "contrast",
        surface: "Eu sei como o sistema funciona. Isso já é o bastante.",
        depth: "Saber é o primeiro passo. Mas se parar no saber, você vira Marcos: irritado, informado e imóvel. Consciência + ação = transformação."
      },
      {
        type: "simple",
        content: "Existem 3 reações possíveis: reclamar (fácil, não muda nada), agir no impulso (perigoso, sem estratégia), ou agir com estratégia (eficiente). O objetivo é o terceiro."
      },
      {
        type: "list",
        title: "Ações pequenas que mudam posição",
        items: [
          "Anotar todos os gastos por 30 dias.",
          "Estudar uma habilidade nova por 30 minutos por dia.",
          "Oferecer um serviço simples para 5 pessoas.",
          "Melhorar o currículo e enviar para 10 vagas.",
          "Conversar com 3 pessoas que estão onde você quer chegar.",
          "Cortar uma dívida ruim por mês.",
          "Guardar qualquer valor — mesmo R$ 20 por semana."
        ]
      },
      {
        type: "check",
        question: "Marcos sabe tudo sobre desigualdade mas não mudou nada em 2 anos. O que está faltando?",
        options: ["Mais informação", "Ação concreta e estratégica", "Mais revolta", "Mais tempo"],
        correct: 1,
        feedback: "Informação sem ação é entretenimento intelectual. O que falta é movimento real, com direção."
      },
      {
        type: "example",
        content: "<strong>Reclamar:</strong> 'O salário é baixo, esse país não presta.' → Nada muda.<br><strong>Agir no impulso:</strong> 'Vou pedir demissão amanhã e abrir um negócio.' → Sem preparo, pode piorar.<br><strong>Agir com estratégia:</strong> 'Vou aprender uma habilidade, testar uma renda extra em 60 dias, e só mudar quando tiver proteção.' → Movimento com direção."
      },
      {
        type: "action",
        title: "Sua checklist de ação",
        items: [
          "Escolha UMA ação da lista acima.",
          "Defina quando vai começar (dia e hora).",
          "Faça por 7 dias seguidos.",
          "Depois de 7 dias, avalie e escolha a próxima."
        ]
      }
    ],
    quote: "Consciência sem ação vira revolta parada. Ação sem consciência é movimento no escuro.",
    quiz: [
      {
        question: "Qual a diferença entre reclamar e agir com estratégia?",
        options: ["Não existe diferença", "Reclamar gasta energia sem mudar nada; agir com estratégia move com direção", "Reclamar é melhor que agir", "Agir é sempre impulsivo"],
        correct: 1,
        feedback: "Reclamar dá alívio temporário. Agir com estratégia gera mudança real.",
        wrongFeedback: "A armadilha é achar que reclamar já é fazer algo. Não é. É gastar energia no lugar errado."
      },
      {
        question: "Agir no impulso (pedir demissão sem preparo) é inteligente?",
        options: ["Sim, é corajoso", "Não — agir sem preparo pode piorar sua situação", "Depende da sorte", "Sempre funciona"],
        correct: 1,
        feedback: "Coragem sem estratégia é imprudência. Prepare-se primeiro, depois mude.",
        wrongFeedback: "Parece corajoso, mas coragem sem mapa é risco desnecessário. Estratégia não é medo — é inteligência."
      },
      {
        question: "Qual a menor ação que já gera resultado?",
        options: ["Abrir empresa", "Anotar gastos por 30 dias — ver para onde vai cada real", "Investir na bolsa", "Esperar o momento certo"],
        correct: 1,
        feedback: "Anotar gastos é simples, grátis e poderoso. É o mapa financeiro mais básico.",
        wrongFeedback: "Esperar o momento certo é a desculpa mais comum para nunca agir. A menor ação (anotar gastos) já muda a consciência sobre seu dinheiro."
      }
    ],
    reflectionSteps: [
      { question: "O que te impede de agir hoje?", placeholder: "Medo? Preguiça? Falta de clareza? Falta de recurso?" },
      { question: "Qual parte disso depende de você resolver?", placeholder: "Ex: organizar tempo, vencer o medo, começar pequeno..." },
      { question: "Qual parte depende do ambiente?", placeholder: "Ex: falta de internet, de vaga, de acesso..." },
      { question: "Qual UMA ação concreta você vai fazer nesta semana?", placeholder: "Escolha uma só. Específica. Com dia e hora." }
    ],
    microAction: "Escolha uma ação da lista (anotar gastos, estudar habilidade ou melhorar currículo). Comece HOJE — não amanhã."
  },

  // ==================== MÓDULO 7 ====================
  {
    id: 7,
    badge: "MÓDULO 7",
    title: "O mapa da liberdade — 6 níveis",
    desc: "Entenda os degraus da evolução e descubra onde você está.",
    objective: "Visualizar a jornada completa da liberdade e identificar seu nível atual.",
    sections: [
      {
        type: "story",
        content: "Pense na sua vida como uma escada. Cada degrau muda o que você pode fazer, o que pode escolher e o que pode recusar. Não importa em qual degrau você está — importa saber qual é o próximo e o que fazer para chegar lá. Sem pressa. Um de cada vez.",
        simpleVersion: "A vida tem degraus. Saber em qual você está e qual é o próximo é mais útil do que querer pular direto para o topo."
      },
      {
        type: "text",
        title: "Nível 1 — Sobrevivência",
        content: "<p><strong>Sinais:</strong> vive do salário ao salário. Qualquer imprevisto vira crise. Não consegue dizer 'não' para nenhum trabalho.</p><p><strong>Erro comum:</strong> gastar tudo tentando parecer que está bem.</p><p><strong>Próximo passo:</strong> cortar 1 gasto por impulso e guardar qualquer valor, mesmo R$ 20.</p>"
      },
      {
        type: "text",
        title: "Nível 2 — Estabilidade",
        content: "<p><strong>Sinais:</strong> paga as contas, tem uma pequena reserva. Ainda depende do emprego, mas com menos desespero.</p><p><strong>Erro comum:</strong> achar que está seguro e parar de construir.</p><p><strong>Próximo passo:</strong> desenvolver uma habilidade que o mercado paga bem.</p>"
      },
      {
        type: "text",
        title: "Nível 3 — Habilidade vendável",
        content: "<p><strong>Sinais:</strong> você sabe fazer algo que as pessoas pagam. Pode negociar melhores condições.</p><p><strong>Erro comum:</strong> depender de um único cliente ou empregador.</p><p><strong>Próximo passo:</strong> criar uma renda paralela usando essa habilidade.</p>"
      },
      {
        type: "text",
        title: "Nível 4 — Renda paralela",
        content: "<p><strong>Sinais:</strong> mais de uma fonte de renda. Se uma cai, outra segura.</p><p><strong>Erro comum:</strong> se sobrecarregar fazendo tudo sozinho.</p><p><strong>Próximo passo:</strong> transformar a renda extra em algo sistemático.</p>"
      },
      {
        type: "text",
        title: "Nível 5 — Sistema",
        content: "<p><strong>Sinais:</strong> você construiu algo que gera renda sem sua presença constante (negócio com equipe, produto digital, investimento).</p><p><strong>Erro comum:</strong> querer controlar tudo e virar gargalo do próprio sistema.</p><p><strong>Próximo passo:</strong> delegar, automatizar e diversificar.</p>"
      },
      {
        type: "text",
        title: "Nível 6 — Liberdade estratégica",
        content: "<p><strong>Sinais:</strong> você tem opções reais. Pode escolher com quem trabalhar, quando, como e onde.</p><p><strong>Erro comum:</strong> esquecer de onde veio e perder a consciência.</p><p><strong>Próximo passo:</strong> usar a liberdade para construir algo maior que você.</p>"
      },
      {
        type: "check",
        question: "Uma pessoa tem uma habilidade boa, mas depende de um único empregador. Em qual nível ela está?",
        options: ["Nível 1 — Sobrevivência", "Nível 3 — Habilidade vendável", "Nível 5 — Sistema", "Nível 6 — Liberdade"],
        correct: 1,
        feedback: "Ela tem habilidade, mas depende de uma fonte. Próximo passo: criar renda paralela com essa habilidade."
      }
    ],
    quote: "O sistema ensina você a trabalhar nele, mas raramente ensina você a construir um.",
    quiz: [
      {
        question: "No nível 4 (Renda paralela), o que muda?",
        options: ["Você ganha mais dinheiro", "Você tem mais de uma fonte de renda — se uma cai, outra segura", "Você para de trabalhar", "Você investe na bolsa"],
        correct: 1,
        feedback: "Diversificar fontes de renda é proteção real. Uma só fonte = risco total.",
        wrongFeedback: "Não é sobre ganhar mais — é sobre não depender de uma coisa só. Se sua única fonte de renda cai, você cai junto."
      },
      {
        question: "Por que não se deve pular etapas?",
        options: ["Porque é ilegal", "Porque cada degrau constrói a base para o próximo", "Porque ninguém consegue", "Porque o sistema não permite"],
        correct: 1,
        feedback: "Sem base, o próximo nível desmorona. Estabilidade antes de habilidade. Habilidade antes de renda paralela.",
        wrongFeedback: "Pular etapas parece atalho, mas é armadilha. Quem tenta abrir negócio sem ter reserva de emergência se arrisca a perder tudo."
      },
      {
        question: "Qual erro comum do nível 2 (Estabilidade)?",
        options: ["Gastar tudo", "Achar que está seguro e parar de construir", "Trabalhar demais", "Pedir empréstimo"],
        correct: 1,
        feedback: "Estabilidade dá conforto. E conforto pode virar zona de estagnação se você não continuar subindo.",
        wrongFeedback: "A armadilha da estabilidade é o conforto. 'Tá dando pra viver' vira desculpa para não crescer."
      }
    ],
    reflectionSteps: [
      { question: "Em qual dos 6 níveis você se encontra hoje?", placeholder: "Seja honesto. Sem vergonha." },
      { question: "Quais sinais confirmam esse nível?", placeholder: "Ex: vivo do salário, tenho pouca reserva, dependo de um emprego..." },
      { question: "Qual é o próximo degrau para você?", placeholder: "Descreva o que precisa mudar..." },
      { question: "O que especificamente você pode fazer esta semana para subir?", placeholder: "Uma ação. Concreta. Simples." }
    ],
    microAction: "Escreva num papel: 'Estou no nível ___. Meu próximo passo é ___.' Cole em algum lugar que você veja todo dia."
  },

  // ==================== MÓDULO 8 ====================
  {
    id: 8,
    badge: "MÓDULO 8",
    title: "Por que a mente protege a prisão?",
    desc: "Entenda a psicologia por trás de defender o que te prejudica.",
    objective: "Compreender por que às vezes defendemos coisas que nos prejudicam — sem chamar ninguém de burro.",
    sections: [
      {
        type: "story",
        content: "Sandra trabalha há 12 anos na mesma empresa. Ganha pouco, faz hora extra sem receber, e o chefe grita. Quando a amiga pergunta por que ela não sai, Sandra diz: 'Pelo menos é fixo. Tem gente pior.' Sandra não é burra. Sandra tem medo. Admitir que 12 anos foram em condições ruins dói. Então a mente prefere defender a situação a enfrentar a dor de mudar.",
        simpleVersion: "Sandra fica num trabalho ruim há 12 anos porque admitir que precisava ter saído antes dói demais. A mente protege a gente da dor — às vezes protege demais."
      },
      {
        type: "contrast",
        surface: "Sandra é acomodada. Se quisesse, sairia.",
        depth: "Sandra está presa por mecanismos psicológicos: medo, identidade, comparação com quem está pior. Não é falta de vontade — é proteção da mente contra a dor de admitir."
      },
      {
        type: "simple",
        content: "Às vezes a pessoa defende algo que prejudica ela não porque é burra, mas porque admitir a verdade dói. A mente humana prefere manter uma ilusão confortável a enfrentar uma verdade dolorosa. Isso não é defeito — é como o cérebro funciona. Mas dá para superar."
      },
      {
        type: "list",
        title: "6 razões pelas quais a mente protege a prisão",
        items: [
          "<strong>Medo de admitir que errou:</strong> 'Dediquei 10 anos a isso. Se estava errado, perdi 10 anos.' A dor é tão grande que a mente prefere negar.",
          "<strong>Orgulho de sofrer:</strong> 'Eu sofri para chegar aqui.' O sofrimento vira identidade. Questionar o sofrimento = questionar quem você é.",
          "<strong>Identidade no trabalho:</strong> 'Eu sou meu cargo.' Se o cargo é ruim, admitir isso é destruir sua identidade.",
          "<strong>Comparação com quem está pior:</strong> 'Pelo menos eu tenho emprego.' Olhar para baixo em vez de olhar para frente.",
          "<strong>Necessidade de se sentir superior:</strong> criticar quem ganha menos dá uma falsa sensação de progresso.",
          "<strong>Medo de mudar:</strong> o conhecido, mesmo ruim, parece mais seguro que o desconhecido."
        ]
      },
      {
        type: "check",
        question: "Sandra fica 12 anos num trabalho ruim e diz 'pelo menos é fixo'. Isso é sinal de quê?",
        options: ["Inteligência financeira", "Mecanismo de proteção psicológica — comparação com quem está pior para evitar a dor de mudar", "Satisfação genuína", "Falta de ambição"],
        correct: 1,
        feedback: "Sandra se compara com quem está pior para não precisar enfrentar a dor de admitir que precisa mudar."
      },
      {
        type: "action",
        title: "Como sair dessa armadilha",
        items: [
          "Aceite que admitir um erro não apaga o que você construiu.",
          "Pare de se comparar com quem está pior. Compare com quem você quer ser.",
          "Separe sua identidade do seu cargo ou situação.",
          "Medo de mudar é normal — mas ficar parado também tem custo."
        ]
      }
    ],
    quote: "Você não é o que você sofre. Você é o que você constrói.",
    quiz: [
      {
        question: "Por que alguém defende um sistema que o prejudica?",
        options: ["Porque é burro", "Porque mecanismos psicológicos como medo e identidade impedem de enxergar", "Porque recebe dinheiro para isso", "Porque gosta de sofrer"],
        correct: 1,
        feedback: "São mecanismos profundos, não falta de inteligência. Medo, ego e identidade criam barreiras poderosas.",
        wrongFeedback: "Chamar de burro é a armadilha. Inteligência não protege contra mecanismos psicológicos. Pessoas brilhantes caem neles também."
      },
      {
        question: "O que significa 'identidade ligada ao sofrimento'?",
        options: ["Gostar de trabalhar", "Usar o sofrimento como prova de valor e base da própria identidade", "Ser triste", "Trabalhar por paixão"],
        correct: 1,
        feedback: "Quando 'eu sofri para chegar aqui' vira identidade, questionar o sofrimento = questionar quem você é.",
        wrongFeedback: "Não é sobre ser triste. É sobre transformar o sofrimento em troféu. 'Eu dormi no escritório, eu passei fome' vira motivo de orgulho em vez de sinal de alerta."
      },
      {
        question: "Qual é o primeiro passo para sair da armadilha?",
        options: ["Ignorar tudo", "Ter coragem de admitir que talvez esteja errado — sem destruir quem você é", "Trabalhar mais", "Reclamar mais"],
        correct: 1,
        feedback: "Coragem intelectual: admitir sem se destruir. Reconhecer o erro é força, não fraqueza.",
        wrongFeedback: "Trabalhar mais ou ignorar são mecanismos de fuga. O primeiro passo real é parar e se perguntar: 'isso que defendo me ajuda ou me prende?'"
      }
    ],
    reflectionSteps: [
      { question: "Existe algo que você defende que talvez te prejudique?", placeholder: "Ex: ideia sobre trabalho, sobre esforço, sobre sofrimento..." },
      { question: "Por que é difícil questionar isso?", placeholder: "Ex: medo, orgulho, identidade, hábito..." },
      { question: "Se essa crença estiver errada, o que muda na sua vida?", placeholder: "Pense no que abriria de possibilidade..." },
      { question: "Qual pequena mudança de pensamento você pode experimentar?", placeholder: "Ex: 'e se eu não precisar sofrer para ter valor?'" }
    ],
    microAction: "Identifique UMA crença que você tem sobre trabalho. Pergunte: 'isso é meu ou foi colocado em mim?' Escreva a resposta."
  },

  // ==================== MÓDULO 9 ====================
  {
    id: 9,
    badge: "MÓDULO 9",
    title: "O Brasil real — cidade, política e trabalho",
    desc: "Aplique consciência ao cotidiano da sua cidade e região.",
    objective: "Ver o jogo funcionando no dia a dia: cidade pequena, prefeitura, comércio, transporte e salário.",
    sections: [
      {
        type: "story",
        content: "Na cidade de Renato, tem buraco na rua há 3 anos. O posto de saúde vive lotado. O ônibus passa de hora em hora. O salário médio é R$ 1.500. Renato reclama todo dia no bar. Mas nunca foi à câmara de vereadores. Nunca perguntou para onde vai o orçamento da prefeitura. Renato tem razão de reclamar. Mas só reclamar não muda buraco.",
        simpleVersion: "A cidade de Renato é cheia de problemas. Ele reclama todo dia, mas nunca foi atrás de saber para onde vai o dinheiro da prefeitura. Reclamar sozinho não tapa buraco."
      },
      {
        type: "contrast",
        surface: "Esse país não presta. Não adianta fazer nada.",
        depth: "Os problemas são reais. Mas 'não adianta fazer nada' é a mentira mais conveniente do sistema — porque quem não age não incomoda."
      },
      {
        type: "simple",
        content: "Todo problema do cotidiano tem 3 partes: o que depende da pessoa, o que depende da estrutura (prefeitura, governo, planejamento) e o que depende de ação coletiva (comunidade se organizando). Entender qual parte é qual te ajuda a agir no lugar certo."
      },
      {
        type: "example",
        content: "<strong>Enchente no bairro:</strong><br>• Pessoa: não jogar lixo na rua.<br>• Estrutura: prefeitura limpar bueiros e fazer drenagem.<br>• Coletivo: vizinhos cobrarem juntos na câmara.<br><br><strong>Salário baixo na região:</strong><br>• Pessoa: desenvolver habilidade mais valorizada.<br>• Estrutura: políticas de geração de emprego e qualificação.<br>• Coletivo: exigir investimento em educação e infraestrutura.<br><br><strong>Transporte ruim:</strong><br>• Pessoa: planejar horários e alternativas.<br>• Estrutura: investimento em transporte público.<br>• Coletivo: cobrar e fiscalizar o serviço."
      },
      {
        type: "list",
        title: "O que observar na sua cidade",
        items: [
          "Para onde vai o orçamento da prefeitura? Quem decide?",
          "O vereador que você votou fez o que prometeu?",
          "O transporte público atende quem mais precisa?",
          "Trabalhador está brigando com trabalhador — e quem lucra com isso?",
          "O comércio local depende de quem tem poder de compra — e esse poder está diminuindo?"
        ]
      },
      {
        type: "check",
        question: "Renato reclama do buraco há 3 anos mas nunca foi à câmara. O que está faltando?",
        options: ["Mais reclamação", "Ação coletiva — cobrar na câmara junto com outros moradores", "Paciência", "Mudar de cidade"],
        correct: 1,
        feedback: "Reclamar no bar não tapa buraco. Cobrar na câmara junto com vizinhos pode."
      },
      {
        type: "action",
        title: "4 perguntas para qualquer problema da sua cidade",
        items: [
          "Qual parte depende da pessoa?",
          "Qual parte depende da estrutura (governo, prefeitura)?",
          "Qual parte depende de ação coletiva?",
          "Qual ação inteligente eu posso tomar?"
        ]
      }
    ],
    quote: "A pergunta não é só quem te explora. A pergunta é: o que você vai construir agora?",
    quiz: [
      {
        question: "Por que 'trabalhador brigando com trabalhador' é problemático?",
        options: ["Gera competição saudável", "Ambos estão no mesmo barco e a energia deveria ir para construir alternativas", "É ilegal", "É bom para a economia"],
        correct: 1,
        feedback: "Briga entre iguais é o maior desperdício de energia. A estrutura que mantém ambos vulneráveis continua intacta.",
        wrongFeedback: "A armadilha é achar que competir entre iguais te faz subir. Quem ganha com trabalhador brigando com trabalhador não é nenhum dos dois."
      },
      {
        question: "Fiscalizar políticos é importante porque:",
        options: ["É obrigação só do Ministério Público", "Políticas públicas afetam quem não tem alternativa — e quem não fiscaliza é governado por quem quer", "Não faz diferença", "Só importa em eleição"],
        correct: 1,
        feedback: "Política não é só voto. É orçamento, fiscalização e participação contínua.",
        wrongFeedback: "Achar que política só importa em eleição é o que permite que dinheiro público vá para o lugar errado durante 4 anos."
      },
      {
        question: "A enchente no bairro é culpa de quem?",
        options: ["Só dos moradores que jogam lixo", "Só da prefeitura que não faz drenagem", "É misto — moradores, prefeitura e falta de ação coletiva", "De ninguém, é natural"],
        correct: 2,
        feedback: "Problema misto: individual (lixo), estrutural (drenagem) e coletivo (cobrança organizada).",
        wrongFeedback: "Simplificar para um culpado só é o erro. Problemas do cotidiano quase sempre são mistos — e exigem ação em mais de uma frente."
      }
    ],
    reflectionSteps: [
      { question: "Qual é o maior problema da sua cidade ou bairro?", placeholder: "Ex: transporte, saúde, segurança, emprego..." },
      { question: "O que nesse problema depende das pessoas?", placeholder: "Ex: comportamento, hábitos, cuidado..." },
      { question: "O que depende de estrutura e governo?", placeholder: "Ex: investimento, planejamento, fiscalização..." },
      { question: "Qual ação inteligente você ou sua comunidade poderia tomar?", placeholder: "Ex: cobrar na câmara, organizar mutirão, votar consciente..." }
    ],
    microAction: "Descubra o nome de um vereador da sua cidade e o que ele votou nos últimos 3 meses. Leva 5 minutos na internet."
  },

  // ==================== MÓDULO 10 ====================
  {
    id: 10,
    badge: "MÓDULO 10",
    title: "Plano de 90 dias — seu sistema",
    desc: "Saia com um plano prático, concreto e seu.",
    objective: "Criar um plano de 90 dias com meta, habilidade, renda extra, oferta e rotina.",
    sections: [
      {
        type: "story",
        content: "Fernanda completou o curso inteiro. Entendeu o tabuleiro. Sabe que o problema é misto. Sabe que precisa agir. Mas se não tiver um plano concreto, ela vai voltar para a rotina e esquecer tudo em 2 semanas. O plano de 90 dias transforma consciência em movimento real. Não é para mudar de vida em 90 dias. É para começar a se mover.",
        simpleVersion: "Saber tudo e não ter plano é como ter GPS e não dirigir. O plano de 90 dias é o começo do movimento."
      },
      {
        type: "simple",
        content: "Você não precisa mudar de vida em 90 dias. Precisa começar a se mover. Cada semana, uma ação. Cada mês, um resultado pequeno. Em 90 dias, você está num lugar diferente de hoje."
      },
      {
        type: "list",
        title: "Estrutura do plano",
        items: [
          "<strong>Semana 1-2:</strong> Entender seus gastos, cortar desperdícios, calcular custo de vida real.",
          "<strong>Semana 3-4:</strong> Escolher uma habilidade vendável e começar a estudar.",
          "<strong>Mês 2:</strong> Testar uma renda extra pequena. Oferecer para 5 pessoas. Coletar feedback.",
          "<strong>Mês 3:</strong> Criar processo, oferta e rotina. Transformar teste em sistema. Avaliar e planejar os próximos 90 dias."
        ]
      },
      {
        type: "text",
        title: "Preencha o sistema abaixo",
        content: "<p>Use os campos do Plano de 90 Dias para definir: meta principal, habilidade, renda extra, primeira oferta, primeira pessoa para abordar, rotina semanal e indicador de progresso.</p><p><strong>Depois de preencher e fazer o quiz, o checklist completo aparecerá para você acompanhar semana a semana.</strong></p>"
      },
      {
        type: "check",
        question: "Qual é o maior risco depois de terminar um curso como este?",
        options: ["Aplicar tudo de uma vez", "Voltar para a rotina e esquecer em 2 semanas", "Ficar com medo", "Nenhum risco"],
        correct: 1,
        feedback: "Exato. Sem plano concreto, a rotina engole a consciência. O plano existe para isso: não deixar você esquecer."
      },
      {
        type: "action",
        title: "Seu compromisso final",
        items: [
          "Preencha os 7 campos do plano de 90 dias.",
          "Faça o checklist semana a semana.",
          "Revise a cada domingo: o que fiz? O que falta?",
          "Em 90 dias, volte aqui e veja seu progresso."
        ]
      }
    ],
    quote: "Liberdade não nasce de opinião. Liberdade nasce de estrutura. Construa a sua.",
    quiz: [
      {
        question: "Qual é o primeiro passo do plano de 90 dias?",
        options: ["Pedir demissão", "Entender gastos, cortar desperdícios e calcular custo de vida real", "Investir na bolsa", "Abrir uma empresa"],
        correct: 1,
        feedback: "Antes de qualquer coisa: saber para onde vai cada real. Esse é o mapa.",
        wrongFeedback: "Pedir demissão ou abrir empresa sem saber seus números é dirigir no escuro. O primeiro passo é sempre o mapa financeiro."
      },
      {
        question: "Por que testar renda extra com poucas pessoas antes de escalar?",
        options: ["Porque é mais barato", "Porque validar antes de escalar evita perder tempo e dinheiro", "Porque não é importante", "Porque é a lei"],
        correct: 1,
        feedback: "Teste pequeno, ajuste, depois escale. Menos risco, mais inteligência.",
        wrongFeedback: "A armadilha é querer ir grande de primeira. Testar com 5 pessoas custa quase nada e te dá informação valiosa."
      },
      {
        question: "O plano de 90 dias é para mudar de vida em 90 dias?",
        options: ["Sim, é mágico", "Não — é para começar a se mover na direção certa", "Depende do esforço", "Não funciona"],
        correct: 1,
        feedback: "90 dias não mudam uma vida. Mas mudam a direção. E direção certa, com consistência, muda tudo.",
        wrongFeedback: "Nem mágica nem fracasso. 90 dias é o tempo de criar hábito, testar uma ideia e ver os primeiros resultados reais."
      }
    ],
    reflectionSteps: [
      { question: "Daqui a 90 dias, onde você quer estar?", placeholder: "Descreva em uma frase simples..." },
      { question: "O que depende de você para chegar lá?", placeholder: "Ex: disciplina, estudo, cortar gastos, testar renda..." },
      { question: "O que pode atrapalhar o caminho?", placeholder: "Ex: preguiça, medo, falta de apoio, imprevisto..." },
      { question: "Escreva uma frase para o seu 'eu' de 90 dias no futuro:", placeholder: "Ex: 'Você começou quando todo mundo duvidou. Continue.'" }
    ],
    microAction: "Preencha AGORA os 7 campos do plano de 90 dias. Não deixe para depois. O plano que não começa hoje não começa nunca."
  }
];

// ============================================
// DIAGNÓSTICO
// ============================================
const DIAGNOSIS_QUESTIONS = [
  { id: "d1", question: "Se você parar de trabalhar hoje, quanto tempo sua vida continua normal?", options: ["Menos de 1 mês", "1 a 3 meses", "3 a 6 meses", "6 meses ou mais"] },
  { id: "d2", question: "Você sabe a diferença entre autônomo e empresário?", options: ["Não sei a diferença", "Mais ou menos", "Sei, mas nunca apliquei", "Sei e vivo essa diferença"] },
  { id: "d3", question: "Você já defendeu algo que, pensando bem, te prejudicava?", options: ["Nunca parei para pensar nisso", "Sim, e já percebi", "Sim, e ainda não tenho certeza", "Não acredito que já fiz isso"] },
  { id: "d4", question: "Você sabe exatamente para onde vai cada real que ganha?", options: ["Não faço ideia", "Mais ou menos", "Sei as categorias principais", "Controlo cada centavo"] },
  { id: "d5", question: "Qual frase mais te descreve hoje?", options: ["Sobrevivo e não sei como sair disso", "Estável, mas sem plano de crescimento", "Tenho habilidades, mas dependo de alguém", "Estou construindo algo que me dá autonomia"] },
  { id: "d6", question: "Sobre seu trabalho: quem mais lucra com o seu esforço?", options: ["Não sei", "Meu patrão ou cliente", "Eu e meu empregador", "Eu, porque construo algo meu"] },
  { id: "d7", question: "O problema mais grave da sua cidade é individual ou do ambiente?", options: ["Nunca pensei nisso", "Acho que é individual", "Acho que é do ambiente", "É mistura dos dois"] }
];

// ============================================
// PLANO 90 DIAS
// ============================================
const PLAN_90 = [
  { week: "Semana 1 e 2 — Diagnóstico Financeiro", tasks: ["Listar todos os gastos do último mês", "Identificar gastos por impulso", "Calcular custo de vida real mensal", "Definir meta de reserva de emergência", "Cortar pelo menos 2 desperdícios"] },
  { week: "Semana 3 e 4 — Habilidade Vendável", tasks: ["Listar 3 habilidades que você já tem", "Pesquisar quais são mais valorizadas no mercado", "Escolher 1 para desenvolver", "Definir como vai aprender (curso, prática, mentor)", "Criar cronograma de 30 dias de estudo"] },
  { week: "Mês 2 — Renda Extra", tasks: ["Definir uma forma de gerar renda extra", "Criar uma oferta simples (produto ou serviço)", "Oferecer para 5 pessoas reais", "Coletar feedback e ajustar", "Validar se há demanda real"] },
  { week: "Mês 3 — Sistema e Rotina", tasks: ["Criar um processo repetível para sua renda extra", "Definir rotina semanal dedicada", "Automatizar o que for possível", "Avaliar resultados dos 90 dias", "Definir meta para os próximos 90 dias"] }
];

// ============================================
// DESAFIO FINAL
// ============================================
const FINAL_CHALLENGE_DATA = [
  { text: "Dona Vera trabalha em casa fazendo marmita. Ganha R$ 1.800 por mês. Quando ficou doente por 15 dias, não entrou nenhum real. Ela diz que é empresária. Qual é a posição real dela e o que ela poderia fazer?", correct: "ação inteligente", feedback: "Dona Vera é microempreendedora presa — o negócio depende 100% dela. Uma ação inteligente seria ensinar alguém a fazer as marmitas para que o negócio continue sem ela." },
  { text: "Na cidade de Marcos, a escola pública mais perto fica a 12km e não tem ônibus escolar. As crianças perdem aula quando chove. Isso é problema de quem?", correct: "estrutural", feedback: "Falta de escola perto e de transporte escolar é problema de planejamento público — estrutural. As famílias não têm como resolver sozinhas." },
  { text: "Ricardo gastou o 13º inteiro em roupas de marca e celular novo. Agora não tem reserva e está endividado no cartão. Isso é problema de quem?", correct: "individual", feedback: "Ricardo tinha o recurso e gastou por impulso. É uma decisão individual. Mesmo ganhando pouco, a forma de gastar o 13º foi escolha dele." },
  { text: "A rua do bairro de Fátima alaga todo verão. Moradores jogam lixo no córrego. A prefeitura não limpa bueiro há 2 anos. Quem tem culpa?", correct: "misto", feedback: "Os dois lados contribuem. Moradores jogam lixo (individual) e prefeitura não cuida da drenagem (estrutural). Resolver precisa de ação dos dois lados." },
  { text: "Jorge sabe que ganha pouco e que o patrão lucra muito mais com o trabalho dele. Reclama todo dia no almoço. Mas nos últimos 2 anos não estudou nada novo nem buscou alternativa. O que está faltando?", correct: "ação inteligente", feedback: "Jorge tem consciência, mas falta ação. Uma ação inteligente seria estudar uma habilidade vendável e testar uma renda paralela, em vez de apenas reclamar." }
];

// ============================================
// ESTADO
// ============================================
let state = {
  currentView: "landing",
  currentModule: null,
  completedModules: [],
  quizScores: {},
  quizSubmitted: {},
  quizMastery: {},
  reflections: {},
  reflectionSteps: {},
  diagnosisAnswers: {},
  diagnosisInitial: {},
  notes: "",
  plan90Checks: {},
  planSystem: {},
  consciousnessLevel: 0,
  simpleMode: false,
  finalChallengeAnswers: {},
  finalChallengeScore: 0,
  finalChallengePassed: false
};

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  if (state.simpleMode) document.body.classList.add("mode-simple");
  renderDiagnosis();
  renderModulesList();
  renderPlan90();
  setupEventListeners();
  showView(state.currentView || "landing");
  updateProgressUI();
  updateSimpleModeBtn();
});

// ============================================
// LOCAL STORAGE
// ============================================
function saveState() {
  try { localStorage.setItem("jogo_progress", JSON.stringify(state)); }
  catch(e) { console.warn("Erro ao salvar:", e); }
}

function loadState() {
  try {
    const saved = localStorage.getItem("jogo_progress");
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      // Migrar reflexões antigas (string → objeto)
      if (state.reflections && !state.reflectionSteps) state.reflectionSteps = {};
      Object.keys(state.reflections || {}).forEach(id => {
        if (typeof state.reflections[id] === "string" && !state.reflectionSteps[id]) {
          state.reflectionSteps[id] = { 0: state.reflections[id], 1: "", 2: "", 3: "" };
        }
      });
    }
  } catch(e) { console.warn("Erro ao carregar:", e); }
}

function resetState() {
  state = { currentView: "landing", currentModule: null, completedModules: [], quizScores: {}, quizSubmitted: {}, quizMastery: {}, reflections: {}, reflectionSteps: {}, diagnosisAnswers: {}, diagnosisInitial: {}, notes: "", plan90Checks: {}, planSystem: {}, consciousnessLevel: 0, simpleMode: false, finalChallengeAnswers: {}, finalChallengeScore: 0, finalChallengePassed: false };
  document.body.classList.remove("mode-simple");
  saveState();
  showView("landing");
  updateProgressUI();
  renderModulesList();
  renderPlan90();
  closeAllModals();
  updateSimpleModeBtn();
}

// ============================================
// NAVEGAÇÃO
// ============================================
function showView(viewName) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("view--active"));
  const target = document.getElementById("view-" + viewName);
  if (target) {
    target.classList.add("view--active");
    state.currentView = viewName;
    saveState();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ============================================
// MODO SIMPLES
// ============================================
function toggleSimpleMode() {
  state.simpleMode = !state.simpleMode;
  document.body.classList.toggle("mode-simple", state.simpleMode);
  saveState();
  updateSimpleModeBtn();
}

function updateSimpleModeBtn() {
  const btn = document.getElementById("btn-simple-mode");
  if (btn) btn.classList.toggle("nav-btn--active", state.simpleMode);
}

// ============================================
// DIAGNÓSTICO
// ============================================
function renderDiagnosis() {
  const c = document.getElementById("diagnosis-questions");
  if (!c) return;
  c.innerHTML = DIAGNOSIS_QUESTIONS.map(q => `
    <div class="diagnosis-question"><p>${q.question}</p><div class="diagnosis-options">
    ${q.options.map((opt, j) => `<div class="diagnosis-option"><input type="radio" name="diagnosis-${q.id}" id="diag-${q.id}-${j}" value="${j}" ${state.diagnosisAnswers[q.id]===j?"checked":""}><label for="diag-${q.id}-${j}">${opt}</label></div>`).join("")}
    </div></div>
  `).join("");
}

function submitDiagnosis() {
  const answers = {};
  let allAnswered = true;
  DIAGNOSIS_QUESTIONS.forEach(q => {
    const sel = document.querySelector(`input[name="diagnosis-${q.id}"]:checked`);
    if (sel) answers[q.id] = parseInt(sel.value); else allAnswered = false;
  });
  if (!allAnswered) { alert("Por favor, responda todas as perguntas do diagnóstico."); return; }
  state.diagnosisAnswers = answers;
  let score = 0;
  if ((answers.d1||0) >= 2) score += 2;
  if ((answers.d1||0) >= 3) score += 1;
  if ((answers.d2||0) >= 2) score += 2;
  if ((answers.d3||0) >= 1) score += 1;
  if ((answers.d4||0) >= 2) score += 1;
  if ((answers.d5||0) >= 2) score += 1;
  if ((answers.d6||0) >= 2) score += 1;
  if ((answers.d7||0) >= 2) score += 1;
  state.diagnosisInitial = { score: Math.min(10, score) };
  recalculateConsciousness();
  saveState();
  showView("modules");
  renderModulesList();
  updateProgressUI();
}

// ============================================
// CONSCIÊNCIA — CÁLCULO
// ============================================
function recalculateConsciousness() {
  let points = state.diagnosisInitial?.score || 0;
  const moduleIds = MODULES_DATA.map(m => m.id);
  moduleIds.forEach(id => {
    if (state.completedModules.includes(id)) {
      points += 3;
      const qs = state.quizScores[id];
      if (qs && qs.percentage >= 80) points += 1;
      const rs = state.reflectionSteps[id];
      if (rs && Object.values(rs).every(v => (v||"").length >= 40)) points += 1;
    }
  });
  if (state.finalChallengePassed) points += state.finalChallengeScore * 2;
  // Normalizar para 0-50%
  const maxPoints = 10 + (11*3) + (11*1) + (11*1) + 10; // 10+33+11+11+10 = 75
  state.consciousnessLevel = Math.min(50, Math.round((points / maxPoints) * 50));
  saveState();
}

// ============================================
// MÓDULOS — LISTA
// ============================================
function renderModulesList() {
  const c = document.getElementById("modules-list");
  if (!c) return;
  c.innerHTML = MODULES_DATA.map((mod, i) => {
    const done = state.completedModules.includes(mod.id);
    const locked = i > 0 && !state.completedModules.includes(MODULES_DATA[i-1].id);
    const active = !done && !locked;
    let sc = "", st = "", mastery = "";
    if (done) {
      sc = "module-card--completed";
      const m = state.quizMastery[mod.id] || "basic";
      const mLabels = { basic: "Básico", solid: "Sólido", master: "Domínio" };
      const mClasses = { basic: "mastery-badge--basic", solid: "mastery-badge--solid", master: "mastery-badge--master" };
      mastery = `<span class="mastery-badge ${mClasses[m]}">${mLabels[m]}</span>`;
      st = `<span class="module-status module-status--completed">✓ Concluído</span>`;
    } else if (active) {
      sc = "module-card--active";
      st = `<span class="module-status module-status--active">▶ Disponível</span>`;
    } else {
      sc = "module-card--locked";
      st = `<span class="module-status module-status--locked">🔒 Bloqueado</span>`;
    }
    const numLabel = mod.id === 0 ? "A0" : String(mod.id).padStart(2,"0");
    return `<div class="module-card ${sc}" data-module-id="${mod.id}" ${locked?'style="pointer-events:none;"':""}>
      <div class="module-number">${numLabel}</div>
      <div class="module-info"><div class="module-title">${mod.title}</div><div class="module-desc">${mod.desc}</div>${mastery}</div>${st}</div>`;
  }).join("");

  c.querySelectorAll(".module-card").forEach(card => {
    card.addEventListener("click", () => openModule(parseInt(card.dataset.moduleId)));
  });

  updateNextMission();
  updateFinalChallengeCard();
}

function updateNextMission() {
  const next = MODULES_DATA.find(m => !state.completedModules.includes(m.id));
  const el = document.getElementById("next-mission-text");
  if (el) el.textContent = next ? `Sua próxima missão: ${next.badge} — ${next.title}` : "Todas as aulas concluídas! Faça o Desafio Final.";
}

function updateFinalChallengeCard() {
  const card = document.getElementById("final-challenge-card");
  const btn = document.getElementById("btn-open-final");
  if (!card || !btn) return;
  const allDone = MODULES_DATA.every(m => state.completedModules.includes(m.id));
  if (allDone) {
    card.classList.add("unlocked");
    btn.disabled = false;
    btn.textContent = state.finalChallengePassed ? "✓ Concluído" : "Fazer Desafio Final →";
  } else {
    card.classList.remove("unlocked");
    btn.disabled = true;
    btn.textContent = "Trancado";
  }
}

// ============================================
// AULA — RENDERIZAÇÃO
// ============================================
function openModule(moduleId) {
  const mod = MODULES_DATA.find(m => m.id === moduleId);
  if (!mod) return;
  state.currentModule = moduleId;
  saveState();
  renderLessonContent(mod);
  showView("lesson");
}

function renderLessonContent(mod) {
  document.getElementById("lesson-badge").textContent = mod.badge;
  document.getElementById("lesson-title").textContent = mod.title;
  document.getElementById("lesson-objective").textContent = mod.objective;

  const ca = document.getElementById("lesson-content");
  ca.innerHTML = mod.sections.map((s, idx) => renderSection(s, mod.id, idx)).join("");

  // Frase de impacto
  const qa = document.getElementById("lesson-quote-area");
  if (mod.quote) {
    qa.innerHTML = `<div class="quote-mark">"</div><p class="quote-text">${mod.quote}</p>`;
    qa.classList.remove("hidden");
  } else qa.classList.add("hidden");

  // Botão quiz (módulo 5 → calculadora antes)
  const btnQuiz = document.getElementById("btn-start-quiz");
  if (mod.id === 5) btnQuiz.textContent = "Usar a Calculadora e fazer Quiz →";
  else if (mod.id === 10) btnQuiz.textContent = "Ir para o Plano de 90 Dias e Quiz →";
  else btnQuiz.textContent = "Fazer o Quiz desta aula →";

  setupLessonInteractions(mod);
}

function renderSection(s, modId, idx) {
  const simpleBtn = s.simpleVersion ? `<button class="btn-not-understood" onclick="toggleSimpleExplanation('se-${modId}-${idx}')">Não entendi</button><div class="simple-explanation hidden" id="se-${modId}-${idx}"><span class="simple-tag">Explicação mais simples</span><p>${s.simpleVersion}</p></div>` : "";

  switch(s.type) {
    case "story":
      return `<div class="story-card"><p>${s.content}</p>${simpleBtn}</div>`;
    case "contrast":
      return `<div class="contrast-card"><div class="contrast-side contrast-side--surface"><div class="contrast-label">O que a maioria pensa</div><p>${s.surface}</p></div><div class="contrast-side contrast-side--depth"><div class="contrast-label">O que está acontecendo de verdade</div><p>${s.depth}</p></div></div>`;
    case "simple":
      return `<div class="simple-card"><span class="simple-label">Explicação simples</span><p>${s.content}</p></div>`;
    case "concept":
      return `<div class="concept-card"><span class="concept-label">Nome do conceito</span><h4>${s.name}</h4><p>${s.explanation}</p>${simpleBtn}</div>`;
    case "example":
      return `<div class="example-card"><span class="example-label">Exemplo do cotidiano</span><p>${s.content}</p></div>`;
    case "text":
      return `<div class="content-block"><h3>${s.title}</h3>${s.content}</div>`;
    case "list":
      return `<div class="content-block"><h3>${s.title}</h3><ul>${s.items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`;
    case "check":
      return `<div class="understand-check" id="uc-${modId}-${idx}"><span class="check-label">Teste rápido</span><p class="check-question">${s.question}</p><div class="check-options">${s.options.map((o,oi)=>`<button class="check-option" data-mod="${modId}" data-sec="${idx}" data-opt="${oi}">${o}</button>`).join("")}</div></div>`;
    case "mistake":
      return `<div class="mistake-card"><span class="mistake-label">Erro comum</span><p>${s.content}</p>${simpleBtn}</div>`;
    case "action":
      return `<div class="action-card"><span class="action-label">Ação prática</span><h4>${s.title}</h4><ul>${s.items.map(i=>`<li>${i}</li>`).join("")}</ul></div>`;
    case "classify":
      return `<div class="classify-exercise" id="classify-${modId}"><h4>Exercício: classifique cada situação</h4>${s.situations.map((sit,si)=>`<div class="classify-item" id="ci-${modId}-${si}"><p class="classify-text">${sit.text}</p><div class="classify-buttons"><button onclick="handleClassify(${modId},${si},'individual')">Individual</button><button onclick="handleClassify(${modId},${si},'estrutural')">Ambiente</button><button onclick="handleClassify(${modId},${si},'misto')">Mistura</button></div><div class="classify-feedback" id="cf-${modId}-${si}"></div></div>`).join("")}</div>`;
    case "tool":
      return `<div class="tool-card"><h4>${s.question}</h4><div class="tool-options" id="tool-${modId}">${s.options.map((o,oi)=>`<button data-mod="${modId}" data-opt="${oi}">${o.text}</button>`).join("")}</div><div class="tool-feedback hidden" id="tf-${modId}"></div></div>`;
    default:
      return "";
  }
}

function setupLessonInteractions(mod) {
  // Check answers
  document.querySelectorAll(".check-option").forEach(btn => {
    btn.addEventListener("click", function() {
      const mId = parseInt(this.dataset.mod);
      const sIdx = parseInt(this.dataset.sec);
      const oIdx = parseInt(this.dataset.opt);
      handleCheckAnswer(mId, sIdx, oIdx);
    });
  });
  // Tool options
  document.querySelectorAll(".tool-options button").forEach(btn => {
    btn.addEventListener("click", function() {
      const mId = parseInt(this.dataset.mod);
      const oIdx = parseInt(this.dataset.opt);
      handleToolAnswer(mId, oIdx);
    });
  });
}

function toggleSimpleExplanation(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("hidden");
}

function handleCheckAnswer(modId, secIdx, optIdx) {
  const mod = MODULES_DATA.find(m => m.id === modId);
  const sec = mod.sections[secIdx];
  const container = document.getElementById(`uc-${modId}-${secIdx}`);
  const buttons = container.querySelectorAll(".check-option");
  buttons.forEach((b, i) => {
    b.disabled = true;
    b.classList.remove("check-option--correct", "check-option--wrong");
    if (i === sec.correct) b.classList.add("check-option--correct");
    else if (i === optIdx && i !== sec.correct) b.classList.add("check-option--wrong");
  });
  const isCorrect = optIdx === sec.correct;
  let existing = container.querySelector(".check-feedback");
  if (existing) existing.remove();
  const fb = document.createElement("div");
  fb.className = `check-feedback ${isCorrect?"check-feedback--ok":"check-feedback--no"}`;
  fb.innerHTML = isCorrect ? `<strong>✓ Correto!</strong> ${sec.feedback}` : `<strong>✗ Não é essa.</strong> ${sec.feedback}`;
  container.appendChild(fb);
}

function handleClassify(modId, sitIdx, answer) {
  const mod = MODULES_DATA.find(m => m.id === modId);
  const sec = mod.sections.find(s => s.type === "classify");
  const sit = sec.situations[sitIdx];
  const container = document.getElementById(`ci-${modId}-${sitIdx}`);
  const buttons = container.querySelectorAll(".classify-buttons button");
  const isRight = answer === sit.correct;
  buttons.forEach(b => {
    b.disabled = true;
    b.classList.remove("right", "wrong");
    const val = b.textContent.toLowerCase().includes("individual") ? "individual" : b.textContent.toLowerCase().includes("ambiente") ? "estrutural" : "misto";
    if (val === sit.correct) b.classList.add("right");
    else if (val === answer && !isRight) b.classList.add("wrong");
  });
  document.getElementById(`cf-${modId}-${sitIdx}`).textContent = sit.feedback;
}

function handleToolAnswer(modId, optIdx) {
  const mod = MODULES_DATA.find(m => m.id === modId);
  const sec = mod.sections.find(s => s.type === "tool");
  const container = document.getElementById(`tool-${modId}`);
  container.querySelectorAll("button").forEach((b,i) => {
    b.classList.toggle("selected", i === optIdx);
  });
  const fb = document.getElementById(`tf-${modId}`);
  fb.classList.remove("hidden");
  fb.innerHTML = sec.options[optIdx].feedback;
}

// ============================================
// QUIZ
// ============================================
function openQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;
  // Module 5 → open calculator first
  if (mod.id === 5) { showView("calculator"); return; }
  if (mod.id === 10) { showView("plan90"); return; }
  renderQuiz(mod);
}

function renderQuiz(mod) {
  document.getElementById("quiz-title").textContent = `Quiz — ${mod.title}`;
  const c = document.getElementById("quiz-questions");
  c.innerHTML = mod.quiz.map((q, i) => `
    <div class="quiz-question" data-qi="${i}"><div class="quiz-question-header"><span class="quiz-q-number">Q${i+1}</span><span class="quiz-q-text">${q.question}</span></div>
    <div class="quiz-options">${q.options.map((o,j)=>`<div class="quiz-option" id="qo-${mod.id}-${i}-${j}"><input type="radio" name="quiz-${mod.id}-${i}" id="q-${mod.id}-${i}-${j}" value="${j}"><label for="q-${mod.id}-${i}-${j}">${o}</label></div>`).join("")}</div>
    <div class="quiz-feedback-area" id="feedback-${mod.id}-${i}"></div></div>
  `).join("");

  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("btn-after-quiz").classList.add("hidden");
  document.getElementById("btn-retry-quiz").classList.add("hidden");
  document.getElementById("btn-submit-quiz").classList.remove("hidden");
  showView("quiz");
}

function submitQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;
  let correct = 0;
  const answers = {};
  mod.quiz.forEach((q, i) => {
    const sel = document.querySelector(`input[name="quiz-${mod.id}-${i}"]:checked`);
    const fa = document.getElementById(`feedback-${mod.id}-${i}`);
    const ansIdx = sel ? parseInt(sel.value) : -1;
    answers[i] = ansIdx;

    // Mark options
    mod.quiz[i].options.forEach((_, j) => {
      const optEl = document.getElementById(`qo-${mod.id}-${i}-${j}`);
      optEl.classList.remove("option--correct", "option--wrong");
      if (j === q.correct) optEl.classList.add("option--correct");
      else if (j === ansIdx && j !== q.correct) optEl.classList.add("option--wrong");
    });

    if (ansIdx === q.correct) {
      correct++;
      fa.innerHTML = `<div class="quiz-feedback quiz-feedback--correct"><strong>✓ Correto!</strong> ${q.feedback}</div>`;
    } else {
      fa.innerHTML = `<div class="quiz-feedback quiz-feedback--incorrect">
        <strong>✗ Não é essa.</strong>
        <div class="fb-block"><span class="fb-tag">Por que errou</span>${q.wrongFeedback || ""}</div>
        <div class="fb-block"><span class="fb-tag">Resposta certa</span>${q.feedback}</div>
      </div>`;
    }
    // Disable radios
    document.querySelectorAll(`input[name="quiz-${mod.id}-${i}"]`).forEach(r => r.disabled = true);
  });

  state.quizSubmitted[mod.id] = answers;
  const pct = Math.round((correct / mod.quiz.length) * 100);
  state.quizScores[mod.id] = { correct, total: mod.quiz.length, percentage: pct };

  // Mastery
  let mastery = null;
  if (pct >= 80) mastery = "master";
  else if (pct >= 60) mastery = "basic";
  state.quizMastery[mod.id] = mastery;

  const ra = document.getElementById("quiz-result");
  ra.classList.remove("hidden");

  if (pct >= 60) {
    ra.className = pct >= 80 ? "quiz-result quiz-result--success" : "quiz-result quiz-result--retry";
    ra.innerHTML = `<h3>${pct >= 80 ? "✓ Domínio!" : "✓ Entendeu o básico"}</h3>
      <p>Você acertou ${correct} de ${mod.quiz.length} (${pct}%).</p>
      <div class="quiz-score-bar"><div class="quiz-score-bar-fill" style="width:${pct}%"></div></div>
      <p>${pct >= 80 ? "Excelente compreensão. Pode avançar para a reflexão." : "Você passou! Para domínio, tente acertar 80% ou mais."}</p>`;
    document.getElementById("btn-after-quiz").classList.remove("hidden");
    document.getElementById("btn-submit-quiz").classList.add("hidden");
    if (!state.completedModules.includes(mod.id)) {
      state.completedModules.push(mod.id);
    }
    recalculateConsciousness();
    updateProgressUI();
    renderModulesList();
  } else {
    ra.className = "quiz-result quiz-result--fail";
    ra.innerHTML = `<h3>↺ Precisa refazer</h3><p>Você acertou ${correct} de ${mod.quiz.length} (${pct}%). Precisa de pelo menos 60% para avançar.</p>
      <div class="quiz-score-bar"><div class="quiz-score-bar-fill" style="width:${pct}%"></div></div>
      <p>Releia o conteúdo da aula e tente novamente. Sem pressa.</p>`;
    document.getElementById("btn-retry-quiz").classList.remove("hidden");
    document.getElementById("btn-submit-quiz").classList.add("hidden");
  }
  saveState();
}

function retryQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (mod) renderQuiz(mod);
}

// ============================================
// REFLEXÃO
// ============================================
function openReflection() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;

  const stepsContainer = document.getElementById("reflection-steps");
  const steps = mod.reflectionSteps || [
    { question: "O que aconteceu?", placeholder: "Descreva..." },
    { question: "O que depende de mim?", placeholder: "..." },
    { question: "O que depende do ambiente?", placeholder: "..." },
    { question: "Qual pequena ação posso tomar?", placeholder: "..." }
  ];

  const saved = state.reflectionSteps[mod.id] || {};
  stepsContainer.innerHTML = steps.map((s, i) => {
    const val = saved[i] || "";
    const charOk = val.length >= 40;
    return `<div class="reflection-step"><span class="step-num">PASSO ${i+1}</span><h4>${s.question}</h4>
      <textarea id="ref-step-${mod.id}-${i}" placeholder="${s.placeholder}" data-mod="${mod.id}" data-step="${i}">${val}</textarea>
      <span class="char-count ${charOk?"ok":""}" id="cc-${mod.id}-${i}">${val.length}/40</span></div>`;
  }).join("");

  // Micro-ação
  const maText = document.getElementById("micro-action-text");
  if (maText) maText.textContent = mod.microAction || "";

  // Char count listeners
  stepsContainer.querySelectorAll("textarea").forEach(ta => {
    ta.addEventListener("input", function() {
      const cc = document.getElementById(`cc-${this.dataset.mod}-${this.dataset.step}`);
      cc.textContent = `${this.value.length}/40`;
      cc.classList.toggle("ok", this.value.length >= 40);
    });
  });

  showView("reflection");
}

function saveReflection() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;
  const steps = mod.reflectionSteps || [{},{},{},{}];
  const data = {};
  let valid = true;
  steps.forEach((_, i) => {
    const ta = document.getElementById(`ref-step-${mod.id}-${i}`);
    const val = ta ? ta.value.trim() : "";
    data[i] = val;
    if (val.length < 40) valid = false;
  });

  if (!valid) {
    alert("Cada resposta precisa ter pelo menos 40 caracteres. Isso garante que a reflexão seja real, não apenas um clique rápido.");
    return;
  }

  state.reflectionSteps[mod.id] = data;
  state.reflections[mod.id] = Object.values(data).join("\n---\n");
  recalculateConsciousness();
  saveState();

  // Check if all done
  const allDone = MODULES_DATA.every(m => state.completedModules.includes(m.id));
  if (allDone && state.finalChallengePassed) {
    showView("completion");
    renderCompletion();
  } else {
    showView("modules");
    renderModulesList();
    updateProgressUI();
  }
}

// ============================================
// CALCULADORA
// ============================================
function calculateFreedom() {
  const v = id => parseFloat(document.getElementById(id)?.value) || 0;
  const income = v("calc-income");
  const extra = v("calc-extra");
  const essential = v("calc-essential");
  const impulse = v("calc-impulse");
  const debt = v("calc-debt");
  const savings = v("calc-savings");
  const goal = v("calc-goal");

  const totalIncome = income + extra;
  const totalExpense = essential + impulse + debt;
  if (totalIncome <= 0 && totalExpense <= 0) { alert("Preencha pelo menos renda e gastos."); return; }

  const balance = totalIncome - totalExpense;
  const months = totalExpense > 0 ? Math.floor(savings / totalExpense) : 0;
  const monthsToGoal = balance > 0 ? Math.ceil((goal - savings) / balance) : Infinity;

  let level, lClass, title, suggestion;
  if (months <= 1) {
    level = "Sobrevivência"; lClass = "calc-result-level--survival"; title = "⚠️ Você está no modo sobrevivência";
    suggestion = "Prioridade máxima: corte gastos por impulso e comece a guardar qualquer valor. Cada real é um dia a mais de segurança.";
  } else if (months <= 6) {
    level = "Pequeno respiro"; lClass = "calc-result-level--breath"; title = "🔶 Você tem um pequeno respiro";
    suggestion = "Continue guardando. Tente 10% da renda. Explore renda paralela.";
  } else if (months <= 12) {
    level = "Proteção"; lClass = "calc-result-level--protection"; title = "✅ Você tem proteção";
    suggestion = "Boa posição. Foque em habilidades vendáveis e fontes adicionais de renda.";
  } else if (months <= 36) {
    level = "Liberdade parcial"; lClass = "calc-result-level--partial"; title = "🟢 Liberdade parcial";
    suggestion = "Você tem opções. Use essa margem para decisões estratégicas.";
  } else {
    level = "Poder de escolha"; lClass = "calc-result-level--choice"; title = "🏆 Poder de escolha";
    suggestion = "Posição privilegiada. Foque em multiplicar e construir sistemas.";
  }

  const ra = document.getElementById("calc-result");
  ra.classList.remove("hidden");
  ra.innerHTML = `
    <span class="calc-result-level ${lClass}">${level}</span>
    <h3>${title}</h3>
    <div class="calc-numbers">
      <div class="calc-number-tile"><span class="tile-label">Renda total</span><span class="tile-value">R$ ${totalIncome.toFixed(0)}</span></div>
      <div class="calc-number-tile"><span class="tile-label">Gasto total</span><span class="tile-value">R$ ${totalExpense.toFixed(0)}</span></div>
      <div class="calc-number-tile"><span class="tile-label">Saldo mensal</span><span class="tile-value" style="color:${balance>=0?"var(--color-green-light)":"#e8a59e"}">R$ ${balance.toFixed(0)}</span></div>
      <div class="calc-number-tile"><span class="tile-label">Meses de reserva</span><span class="tile-value">${months}</span></div>
    </div>
    <p>Sem trabalhar, você sobrevive por <strong>${months} ${months===1?"mês":"meses"}</strong>.</p>
    ${impulse > 0 ? `<p>Gasto por impulso mensal: <strong>R$ ${impulse.toFixed(0)}</strong>. Em 1 ano = <strong>R$ ${(impulse*12).toFixed(0)}</strong>.</p>` : ""}
    ${goal > 0 && balance > 0 ? `<p>Para atingir sua meta de R$ ${goal.toFixed(0)}: <strong>~${monthsToGoal} meses</strong> guardando R$ ${balance.toFixed(0)}/mês.</p>` : ""}
    <div class="calc-suggestion"><strong>Sugestão:</strong> ${suggestion}</div>
    <p style="margin-top:1rem;font-size:0.88rem;color:var(--color-text-secondary)"><em>Isso não é para te assustar. É para te dar mapa.</em></p>
  `;
}

function goFromCalcToQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (mod) renderQuiz(mod);
}

// ============================================
// PLANO 90 DIAS
// ============================================
function renderPlan90() {
  const c = document.getElementById("plan90-weeks");
  if (!c) return;
  c.innerHTML = PLAN_90.map((w, wi) => `
    <div class="plan-week ${wi===0?"open":""}" data-wi="${wi}"><div class="plan-week-header"><h3>${w.week}</h3><span class="plan-week-toggle">▼</span></div>
    <div class="plan-week-body"><div class="plan-checklist">${w.tasks.map((t, ti) => {
      const cid = `plan-${wi}-${ti}`;
      return `<div class="plan-check-item"><input type="checkbox" id="${cid}" ${state.plan90Checks[cid]?"checked":""}><label for="${cid}">${t}</label></div>`;
    }).join("")}</div></div></div>
  `).join("");

  c.querySelectorAll(".plan-week-header").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
  c.querySelectorAll(".plan-check-item input").forEach(cb => cb.addEventListener("change", () => { state.plan90Checks[cb.id] = cb.checked; saveState(); }));

  // Plan system inputs
  ["plan-goal","plan-skill","plan-extra","plan-offer","plan-person","plan-routine","plan-indicator"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.value = state.planSystem[id] || "";
      el.addEventListener("input", () => { state.planSystem[id] = el.value; saveState(); });
    }
  });
}

function goFromPlanToQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (mod) renderQuiz(mod);
}

// ============================================
// DESAFIO FINAL
// ============================================
function renderFinalChallenge() {
  const c = document.getElementById("final-cases");
  if (!c) return;
  c.innerHTML = FINAL_CHALLENGE_DATA.map((cs, i) => `
    <div class="case-challenge" id="case-${i}"><span class="case-num">CASO ${i+1}</span><p class="case-text">${cs.text}</p>
    <div class="case-options">${["Individual","Estrutural","Misto","Ação inteligente"].map(opt => {
      const key = opt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ /g," ");
      return `<button data-case="${i}" data-answer="${opt.toLowerCase()}">${opt}</button>`;
    }).join("")}</div>
    <div class="case-feedback hidden" id="casefb-${i}"></div></div>
  `).join("");

  document.getElementById("final-result").classList.add("hidden");
  document.getElementById("btn-finish-course").classList.add("hidden");
  document.getElementById("btn-submit-final").classList.remove("hidden");

  c.querySelectorAll(".case-options button").forEach(btn => {
    btn.addEventListener("click", function() {
      const ci = parseInt(this.dataset.case);
      this.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      this.classList.add("selected");
      state.finalChallengeAnswers[ci] = this.dataset.answer;
      saveState();
    });
  });

  showView("final");
}

function submitFinalChallenge() {
  const answers = state.finalChallengeAnswers;
  if (Object.keys(answers).length < FINAL_CHALLENGE_DATA.length) {
    alert("Responda todos os 5 casos antes de enviar.");
    return;
  }

  let score = 0;
  FINAL_CHALLENGE_DATA.forEach((cs, i) => {
    const userAnswer = (answers[i] || "").toLowerCase();
    const correctNorm = cs.correct.toLowerCase();
    // Normalize: "ação inteligente" may come as "ação inteligente"
    const isRight = userAnswer.includes(correctNorm) || correctNorm.includes(userAnswer);

    const btns = document.querySelectorAll(`#case-${i} .case-options button`);
    btns.forEach(b => {
      b.disabled = true;
      b.classList.remove("right", "wrong", "selected");
      if (b.dataset.answer.includes(correctNorm) || correctNorm.includes(b.dataset.answer)) b.classList.add("right");
      else if (b.dataset.answer === userAnswer && !isRight) b.classList.add("wrong");
    });

    const fb = document.getElementById(`casefb-${i}`);
    fb.classList.remove("hidden");
    fb.textContent = cs.feedback;

    if (isRight) score++;
  });

  state.finalChallengeScore = score;
  state.finalChallengePassed = score >= 4;

  const ra = document.getElementById("final-result");
  ra.classList.remove("hidden");
  if (state.finalChallengePassed) {
    ra.className = "final-result final-result--pass";
    ra.innerHTML = `<h3>✓ Parabéns! ${score}/5 acertos</h3><p>Você demonstrou consciência real. O certificado está liberado.</p>`;
    document.getElementById("btn-finish-course").classList.remove("hidden");
  } else {
    ra.className = "final-result final-result--fail";
    ra.innerHTML = `<h3>↺ ${score}/5 acertos — precisa de pelo menos 4</h3><p>Revise as aulas e tente novamente. Cada erro é aprendizado.</p>`;
  }

  document.getElementById("btn-submit-final").classList.add("hidden");
  recalculateConsciousness();
  saveState();
  updateProgressUI();
}

// ============================================
// CONCLUSÃO & ANTES/DEPOIS
// ============================================
function renderCompletion() {
  recalculateConsciousness();
  const total = MODULES_DATA.length;
  const completed = state.completedModules.length;
  let tc = 0, tq = 0;
  Object.values(state.quizScores).forEach(s => { tc += s.correct; tq += s.total; });
  const qAvg = tq > 0 ? Math.round((tc/tq)*100) : 0;

  document.getElementById("final-consciousness").textContent = state.consciousnessLevel + "%";
  document.getElementById("final-modules").textContent = `${completed} de ${total}`;
  document.getElementById("final-quizzes").textContent = qAvg + "%";

  // Before / After
  renderBeforeAfter();

  // Certificate
  const certArea = document.getElementById("certificate-area");
  if (state.finalChallengePassed) {
    certArea.classList.remove("hidden");
    const now = new Date();
    document.getElementById("cert-date").textContent = `Concluído em ${now.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}`;
    document.getElementById("cert-level").textContent = `Nível de Consciência: ${state.consciousnessLevel}%`;
  } else {
    certArea.classList.add("hidden");
  }

  // Message
  const msgEl = document.getElementById("completion-message");
  if (state.consciousnessLevel >= 40) msgEl.textContent = "Você chegou longe. A parte mais importante começa agora: aplicar tudo na prática. O conhecimento que você tem é uma ferramenta. Use.";
  else if (state.consciousnessLevel >= 25) msgEl.textContent = "Passos importantes dados. Continue construindo. Cada módulo mudou como você enxerga o mundo.";
  else msgEl.textContent = "Você começou. Isso já é mais do que a maioria faz. Continue módulo por módulo.";
}

function renderBeforeAfter() {
  const grid = document.getElementById("before-after-grid");
  if (!grid) return;
  const d = state.diagnosisAnswers || {};
  const dims = [
    { label: "Visão sobre trabalho", before: ["Não sabia a diferença entre empregado e empresário","Sabia vagamente","Sabia mas não aplicava","Vivia a diferença"][d.d2||0], after: "Agora você sabe as 5 posições e onde está." },
    { label: "Visão sobre dinheiro", before: ["Não controlava gastos","Controlava vagamente","Sabia categorias","Controlava tudo"][d.d4||0], after: "Agora você tem mapa financeiro e sabe seu nível de liberdade." },
    { label: "Visão sobre sistema", before: ["Nunca pensou nisso","Percebia algo","Tinha dúvidas","Já percebia"][d.d7||0], after: "Agora você separa individual, estrutural e misto." },
    { label: "Visão sobre ação", before: ["Sobrevivia sem plano","Estável sem direção","Habilidade sem ação","Já construía"][d.d5||0], after: "Agora você tem um plano de 90 dias concreto." }
  ];
  grid.innerHTML = dims.map(d => `
    <div class="ba-row"><div class="ba-cell ba-cell--before"><span class="ba-tag">${d.label} — Antes</span><span class="ba-value">${d.before}</span></div>
    <span class="ba-arrow">→</span>
    <div class="ba-cell ba-cell--after"><span class="ba-tag">${d.label} — Depois</span><span class="ba-value">${d.after}</span></div></div>
  `).join("");
}

// ============================================
// PROGRESSO UI
// ============================================
function updateProgressUI() {
  const total = MODULES_DATA.length;
  const completed = state.completedModules.length;
  const level = state.consciousnessLevel || 0;
  // Ring mostra nível de consciência (0-50) mapeado para 0-100% do anel
  const ringPct = (level / 50) * 100;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (ringPct / 100) * circumference;
  const ring = document.getElementById("progress-ring");
  if (ring) ring.style.strokeDashoffset = offset;
  const pe = document.getElementById("progress-percentage");
  if (pe) pe.textContent = level + "%";
  const le = document.getElementById("consciousness-level");
  if (le) le.textContent = "Nível: " + level + "%";
  const me = document.getElementById("progress-modules");
  if (me) me.textContent = `${completed} de ${total} concluídos`;
}

// ============================================
// MODAIS
// ============================================
function openProgressModal() {
  document.getElementById("modal-progress").classList.remove("hidden");
  const sc = document.getElementById("modal-stats");
  sc.innerHTML = `
    <div class="modal-stat"><span class="modal-stat-value">${state.completedModules.length}</span><span class="modal-stat-label">Aulas</span></div>
    <div class="modal-stat"><span class="modal-stat-value">${state.consciousnessLevel}%</span><span class="modal-stat-label">Consciência</span></div>
    <div class="modal-stat"><span class="modal-stat-value">${Object.keys(state.reflectionSteps).length}</span><span class="modal-stat-label">Reflexões</span></div>
    <div class="modal-stat"><span class="modal-stat-value">${Object.values(state.plan90Checks).filter(v=>v).length}</span><span class="modal-stat-label">Tarefas</span></div>
  `;
  const ms = document.getElementById("modal-module-status");
  ms.innerHTML = MODULES_DATA.map(mod => {
    const done = state.completedModules.includes(mod.id);
    const m = state.quizMastery[mod.id];
    let statusHtml = "";
    if (done && m === "master") statusHtml = '<span class="module-status-tag status-mastered">◆ Domínio</span>';
    else if (done) statusHtml = '<span class="module-status-tag status-done">✓ Concluído</span>';
    else statusHtml = '<span class="module-status-tag status-pending">Pendente</span>';
    return `<div class="modal-module-item"><span>${mod.badge} — ${mod.title.substring(0,35)}${mod.title.length>35?"...":""}</span>${statusHtml}</div>`;
  }).join("");
}

function openNotesModal() {
  document.getElementById("modal-notes").classList.remove("hidden");
  const ta = document.getElementById("notes-area");
  ta.value = state.notes || "";
  ta.oninput = () => { state.notes = ta.value; saveState(); };
}

function openResetModal() { document.getElementById("modal-reset").classList.remove("hidden"); }

function openGlossary(key) {
  const entry = GLOSSARY_DATA[key];
  if (!entry) return;
  document.getElementById("glossary-term-title").textContent = entry.title;
  document.getElementById("glossary-term-text").textContent = entry.definition;
  document.getElementById("glossary-term-example").textContent = entry.example;
  document.getElementById("modal-glossary").classList.remove("hidden");
}

function closeAllModals() { document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden")); }

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
  const on = (id, evt, fn) => { const el = document.getElementById(id); if (el) el.addEventListener(evt, fn); };

  on("btn-start", "click", () => showView("diagnosis"));
  on("btn-submit-diagnosis", "click", submitDiagnosis);
  on("btn-progress", "click", openProgressModal);
  on("btn-notes", "click", openNotesModal);
  on("btn-reset", "click", openResetModal);
  on("btn-simple-mode", "click", toggleSimpleMode);

  on("btn-back-modules", "click", () => { showView("modules"); renderModulesList(); updateProgressUI(); });
  on("btn-start-quiz", "click", openQuiz);
  on("btn-back-lesson", "click", () => showView("lesson"));
  on("btn-submit-quiz", "click", submitQuiz);
  on("btn-after-quiz", "click", openReflection);
  on("btn-retry-quiz", "click", retryQuiz);
  on("btn-save-reflection", "click", saveReflection);
  on("btn-calculate", "click", calculateFreedom);

  // Final challenge
  on("btn-open-final", "click", renderFinalChallenge);
  on("btn-submit-final", "click", submitFinalChallenge);
  on("btn-finish-course", "click", () => { showView("completion"); renderCompletion(); });
  on("btn-back-modules-final", "click", () => { showView("modules"); renderModulesList(); updateProgressUI(); });

  // Modais - fechar
  ["modal-progress-close","modal-progress-backdrop","modal-notes-close","modal-notes-backdrop","modal-reset-close","modal-reset-backdrop","modal-glossary-close","modal-glossary-backdrop"].forEach(id => on(id, "click", closeAllModals));

  on("btn-cancel-reset", "click", closeAllModals);
  on("btn-confirm-reset", "click", resetState);
  on("btn-back-modules-end", "click", () => { showView("modules"); renderModulesList(); updateProgressUI(); });

  // Calculator -> Quiz bridge
  const calcResult = document.getElementById("calc-result");
  if (calcResult) {
    const observer = new MutationObserver(() => {
      if (!calcResult.classList.contains("hidden") && state.currentModule === 5) {
        if (!document.getElementById("btn-calc-to-quiz")) {
          const btn = document.createElement("button");
          btn.id = "btn-calc-to-quiz";
          btn.className = "btn btn--primary btn--large";
          btn.style.marginTop = "1.5rem";
          btn.textContent = "Agora fazer o Quiz →";
          btn.addEventListener("click", goFromCalcToQuiz);
          calcResult.appendChild(btn);
        }
      }
    });
    observer.observe(calcResult, { attributes: true, attributeFilter: ["class"] });
  }

  // Plan -> Quiz bridge (add button at bottom of plan view)
  const planContainer = document.querySelector(".plan-container");
  if (planContainer && !document.getElementById("btn-plan-to-quiz")) {
    const btn = document.createElement("button");
    btn.id = "btn-plan-to-quiz";
    btn.className = "btn btn--primary btn--large";
    btn.style.marginTop = "2rem";
    btn.textContent = "Fazer o Quiz do Módulo 10 →";
    btn.addEventListener("click", goFromPlanToQuiz);
    planContainer.appendChild(btn);
  }

  // ESC fecha modais
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeAllModals(); });
}
