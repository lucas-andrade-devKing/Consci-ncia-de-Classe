/* ============================================
   O JOGO QUE NINGUÉM TE EXPLICOU
   Plataforma Educacional — script.js
   ============================================ */

// ============================================
// DADOS DOS MÓDULOS
// ============================================
const MODULES_DATA = [
  {
    id: 1,
    title: "O mundo não é justo, ele é estruturado",
    desc: "Entenda a diferença entre problema individual e estrutural.",
    objective: "Fazer você entender que muitos problemas não são apenas individuais, mas também estruturais.",
    sections: [
      {
        type: "text",
        title: "Problema individual vs. problema estrutural",
        content: `<p>Muitas vezes, quando algo dá errado na sua vida, a primeira reação é pensar: <strong>"a culpa é minha"</strong>. E às vezes é. Mas nem sempre.</p>
        <p>Existe uma diferença fundamental entre um <strong>problema individual</strong> — que depende das suas escolhas — e um <strong>problema estrutural</strong> — que depende de como a sociedade, a cidade, o sistema econômico e as regras do jogo foram montados.</p>
        <div class="highlight-box">
          <p><strong>Exemplo:</strong> Se você não consegue um emprego porque não tem qualificação, isso pode ser individual. Mas se na sua cidade não existe transporte público decente para chegar até as zonas de emprego, isso é estrutural.</p>
        </div>`
      },
      {
        type: "list",
        title: "O ambiente molda suas oportunidades",
        items: [
          "Uma cidade sem planejamento gera enchentes, trânsito e falta de acesso.",
          "O lixo acumulado não é só falta de educação — é falta de infraestrutura.",
          "Quem nasce em bairro periférico tem menos acesso a escolas, hospitais e empregos.",
          "Esforço importa, mas não explica tudo. Dois esforços iguais, em contextos diferentes, geram resultados diferentes.",
          "Entender a estrutura não é vitimismo. É clareza."
        ]
      },
      {
        type: "text",
        title: "Por que isso importa?",
        content: `<p>Quando você entende que parte dos seus problemas é estrutural, você para de se culpar por tudo. Isso não significa que você não deva agir. Significa que você vai <strong>agir com mais inteligência</strong>.</p>
        <p>Você vai perceber que algumas batalhas são pessoais, e outras são coletivas. E que as duas importam.</p>`
      }
    ],
    quote: "Esforço importa, mas não explica tudo. Dois esforços iguais, em contextos diferentes, geram resultados diferentes.",
    exercise: "Liste 3 problemas da sua vida. Para cada um, marque: é individual, coletivo, estrutural ou uma mistura dos três?",
    quiz: [
      {
        question: "Qual a diferença entre problema individual e estrutural?",
        options: [
          "Não existe diferença, tudo é individual",
          "Individual depende de você; estrutural depende de como o sistema está montado",
          "Estrutural é mais importante que individual",
          "Individual é financeiro e estrutural é político"
        ],
        correct: 1,
        feedback: "Exato. O problema individual está nas suas escolhas. O estrutural está nas regras e na infraestrutura que moldam o ambiente onde você vive."
      },
      {
        question: "Por que duas pessoas com o mesmo esforço podem ter resultados diferentes?",
        options: [
          "Porque uma é mais inteligente",
          "Porque o contexto e o acesso a oportunidades são diferentes",
          "Porque esforço não importa",
          "Porque uma tem mais sorte"
        ],
        correct: 1,
        feedback: "Isso. Contexto importa. Acesso a educação, transporte, rede de contatos e localização geográfica influenciam profundamente os resultados."
      },
      {
        question: "Entender problemas estruturais é sinônimo de vitimismo?",
        options: [
          "Sim, porque você para de se esforçar",
          "Não, é clareza para agir de forma mais inteligente",
          "Depende da pessoa",
          "Sim, porque o sistema nunca muda"
        ],
        correct: 1,
        feedback: "Correto. Entender a estrutura é o oposto de vitimismo. É enxergar o tabuleiro inteiro para jogar melhor."
      }
    ],
    reflection: "Pense em um problema que você vive hoje. O que nele é responsabilidade sua e o que é falha do sistema ao seu redor? Escreva com honestidade."
  },
  {
    id: 2,
    title: "Empregado, autônomo, microempreendedor e empresário real",
    desc: "Quebre a ilusão de que todo dono de negócio é livre.",
    objective: "Entender a diferença entre trabalhar, empreender e construir sistemas.",
    sections: [
      {
        type: "text",
        title: "Os cinco níveis do trabalho",
        content: `<p>A maioria das pessoas confunde ter um CNPJ com ter liberdade. São coisas completamente diferentes. Vamos esclarecer:</p>`
      },
      {
        type: "list",
        title: "As cinco posições",
        items: [
          "<strong>Empregado:</strong> Vende tempo por dinheiro. Troca horas por salário. Se parar de trabalhar, a renda para.",
          "<strong>Autônomo:</strong> Vende habilidade. Ganha mais que o empregado, mas ainda depende do seu trabalho direto.",
          "<strong>Microempreendedor preso:</strong> Abriu um negócio, mas o negócio depende 100% dele. Comprou o próprio emprego com mais responsabilidade.",
          "<strong>Empresário real:</strong> Constrói sistemas. Cria processos, equipes e estruturas que funcionam sem ele.",
          "<strong>Investidor:</strong> Coloca capital para trabalhar. O dinheiro gera dinheiro."
        ]
      },
      {
        type: "text",
        title: "O exemplo do padeiro",
        content: `<div class="example-box">
          <div class="example-label">Exemplo prático</div>
          <p>O padeiro dono da padaria acorda às 4h da manhã, abre a loja, faz o pão, atende, fecha, cuida das contas. Ele acha que é empresário. Mas se ele ficar doente por uma semana, a padaria para.</p>
          <p><strong>Ele não é empresário. Ele é um empregado de si mesmo.</strong></p>
          <p>Se você não pode parar, você ainda não é livre. Só mudou de uniforme.</p>
        </div>`
      },
      {
        type: "text",
        title: "O que muda de verdade?",
        content: `<p>A diferença não é ter CNPJ. A diferença é <strong>construir algo que funciona sem você</strong>. Um empresário real cria processos, contrata pessoas, delega e escala. Ele não é o gargalo do próprio negócio.</p>
        <p>Isso não é impossível. É uma escolha consciente de construir sistemas em vez de apenas vender horas.</p>`
      }
    ],
    quote: "Se você não pode parar, você ainda não é livre. Só mudou de uniforme.",
    exercise: "Em qual dessas cinco posições você se encontra hoje? Seja honesto. Não onde você quer estar — onde você está.",
    quiz: [
      {
        question: "O que diferencia um microempreendedor preso de um empresário real?",
        options: [
          "O microempreendedor ganha menos",
          "O empresário real constrói sistemas que funcionam sem ele",
          "O empresário tem mais funcionários",
          "Não existe diferença real"
        ],
        correct: 1,
        feedback: "Exatamente. O empresário constrói sistemas. O microempreendedor preso ainda é o centro de tudo — se ele para, o negócio para."
      },
      {
        question: "Um autônomo vende:",
        options: [
          "Tempo",
          "Habilidade",
          "Capital",
          "Sistemas"
        ],
        correct: 1,
        feedback: "Correto. O autônomo vende sua habilidade específica. Ele tem mais liberdade que o empregado, mas ainda depende diretamente do seu trabalho."
      },
      {
        question: "Ter CNPJ automaticamente significa ter liberdade?",
        options: [
          "Sim, porque você é seu próprio chefe",
          "Não, muitos CNPJs são apenas empregos disfarçados",
          "Depende do faturamento",
          "Sim, se você trabalhar muito"
        ],
        correct: 1,
        feedback: "Isso. Ter CNPJ não é sinônimo de liberdade. Muitos empreendedores trabalham mais que empregados e ganham menos, porque o negócio depende totalmente deles."
      }
    ],
    reflection: "Se você parasse de trabalhar por 30 dias, o que aconteceria com sua renda? Isso diz muito sobre sua posição atual no sistema."
  },
  {
    id: 3,
    title: "A ilusão do pequeno que acha que é grande",
    desc: "Entenda por que algumas pessoas defendem interesses que não são delas.",
    objective: "Mostrar como algumas pessoas sobem um pequeno degrau e começam a defender interesses que não são delas.",
    sections: [
      {
        type: "text",
        title: "O degrau ilusório",
        content: `<p>Quando alguém consegue uma pequena melhoria de vida — ganha um pouco mais, abre um pequeno negócio, consegue um cargo de chefia — é comum que essa pessoa comece a se identificar com quem está acima dela, e não com quem está abaixo.</p>
        <p>Isso cria uma <strong>falsa sensação de superioridade</strong>. A pessoa esquece de onde veio e começa a defender políticas, ideias e interesses que, na prática, a prejudicam.</p>`
      },
      {
        type: "list",
        title: "Sinais da ilusão",
        items: [
          "O pequeno empreendedor que se acha elite e critica trabalhador",
          "O trabalhador que critica outro trabalhador por ganhar pouco",
          "Quem defende corte de direitos trabalhistas achando que 'isso não me afeta'",
          "A falsa ideia de que quem está embaixo é preguiçoso",
          "A confusão entre 'parecer livre' e 'ser livre'"
        ]
      },
      {
        type: "text",
        title: "Parecer livre vs. ser livre",
        content: `<p>Parecer livre é ter um cargo bonito, um carro financiado e falar de 'mentalidade'. Ser livre é ter <strong>poder de escolha real</strong> — poder dizer não, poder parar, poder mudar de direção.</p>
        <p>Muitas pessoas confundem os dois. E acabam defendendo um sistema que as mantém presas.</p>`
      }
    ],
    quote: "O que eu defendo hoje que talvez esteja me prejudicando?",
    exercise: "Pense em algo que você defende com força. Agora se pergunte: isso me beneficia de verdade, ou eu estou defendendo o interesse de outra pessoa?",
    quiz: [
      {
        question: "Por que alguém que subiu um degrau social começa a defender interesses que não são os seus?",
        options: [
          "Porque é uma pessoa ruim",
          "Porque a falsa sensação de superioridade cria identificação com quem está acima",
          "Porque o dinheiro muda a personalidade",
          "Porque isso nunca acontece"
        ],
        correct: 1,
        feedback: "Exato. A identificação com a classe acima é um fenômeno psicológico poderoso. A pessoa se sente 'diferente' dos que estão abaixo e esquece que ainda está vulnerável."
      },
      {
        question: "Qual a diferença entre 'parecer livre' e 'ser livre'?",
        options: [
          "Não existe diferença",
          "Parecer livre é ter aparência de sucesso; ser livre é ter poder de escolha real",
          "Ser livre é ter muito dinheiro",
          "Parecer livre é ter CNPJ"
        ],
        correct: 1,
        feedback: "Correto. Aparência de liberdade (cargo, carro, discurso) não é liberdade real. Liberdade real é poder de escolha."
      },
      {
        question: "Trabalhador criticar outro trabalhador por ganhar pouco é um sinal de:",
        options: [
          "Meritocracia funcionando",
          "Falta de consciência de posição social",
          "Inteligência financeira",
          "Ambição saudável"
        ],
        correct: 1,
        feedback: "Isso. Essa atitude revela falta de consciência de classe. Ambos estão na mesma posição estrutural, mas um internalizou a narrativa de que o outro é inferior."
      }
    ],
    reflection: "Você já defendeu alguma ideia ou política que, pensando bem, talvez não te beneficie? O que te fez defendê-la?"
  },
  {
    id: 4,
    title: "Como o sistema captura sua mente",
    desc: "Identifique manipulação emocional no trabalho e em marcas.",
    objective: "Ensinar a identificar manipulação emocional no trabalho e em marcas.",
    sections: [
      {
        type: "text",
        title: "Quando a força não basta, vem a emoção",
        content: `<p>O sistema não precisa mais te obrigar pela força. Ele te convence pela emoção. E isso é muito mais eficiente.</p>
        <p>Empresas, marcas e culturas organizacionais usam técnicas sofisticadas para moldar comportamento, aumentar produtividade e criar lealdade — muitas vezes sem que você perceba.</p>`
      },
      {
        type: "list",
        title: "Técnicas comuns de captura emocional",
        items: [
          "<strong>Cultura de 'família':</strong> 'Somos uma família aqui.' Família não demite. Empresa demite.",
          "<strong>Metas abusivas disfarçadas de desafio:</strong> 'Estamos te testando para ver se você tem potencial.'",
          "<strong>Romantização do esforço:</strong> 'Quem dorme no escritório é quem cresce.' Não, quem dorme no escritório está cansado.",
          "<strong>Culpa produtiva:</strong> Fazer você se sentir culpado por não estar produzindo o suficiente, mesmo nas suas horas de descanso.",
          "<strong>Promoessa de sucesso individual:</strong> 'Se você se esforçar, chega lá.' Ignorando que o jogo é estrutural.",
          "<strong>Uso de propósito para aumentar produtividade:</strong> Transformar sua paixão em ferramenta de exploração."
        ]
      },
      {
        type: "text",
        title: "Equilíbrio necessário",
        content: `<div class="highlight-box">
          <p>Nem toda empresa é abusiva. Nem todo chefe é manipulador. Existem ambientes saudáveis, líderes éticos e culturas genuínas.</p>
          <p>Mas você precisa <strong>saber reconhecer os sinais</strong> para não ser pego desprevenido. A questão não é desconfiar de tudo. É enxergar com clareza.</p>
        </div>`
      }
    ],
    quote: "Quando o sistema não pode te obrigar pela força, ele tenta te convencer pela emoção.",
    exercise: "Pense no seu ambiente de trabalho atual ou passado. Você identifica algum dos sinais acima? Qual deles mais te afetou?",
    quiz: [
      {
        question: "Por que a cultura de 'somos uma família' pode ser problemática?",
        options: [
          "Porque famílias também têm conflitos",
          "Porque família não demite — empresa demite. A comparação cria lealdade artificial",
          "Porque é uma mentira",
          "Porque família é mais importante que trabalho"
        ],
        correct: 1,
        feedback: "Exato. A comparação com família cria um vínculo emocional que a empresa usa para justificar sacrifícios que não faria por um 'membro da família' real."
      },
      {
        question: "O que é 'culpa produtiva'?",
        options: [
          "Sentir orgulho do seu trabalho",
          "Fazer a pessoa se sentir culpada por não produzir o suficiente, mesmo no descanso",
          "Cobrar metas com firmeza",
          "Sentir remorso por não estudar"
        ],
        correct: 1,
        feedback: "Correto. A culpa produtiva é quando o ambiente te faz sentir que descansar é errado, que lazer é desperdício e que você nunca está fazendo o suficiente."
      },
      {
        question: "O uso de 'propósito' pelas empresas pode ser problemático quando:",
        options: [
          "O propósito é falso",
          "Transforma sua paixão e valores em ferramenta para extrair mais produtividade sem compensação justa",
          "Quando a empresa não tem propósito",
          "Nunca é problemático"
        ],
        correct: 1,
        feedback: "Isso. O propósito em si é bom. O problema é quando é usado como alavanca emocional para justificar exploração."
      }
    ],
    reflection: "Qual mensagem do ambiente de trabalho ou da sociedade mais te fez sentir culpa por querer descansar ou ter uma vida fora do trabalho?"
  },
  {
    id: 5,
    title: "A matemática da liberdade",
    desc: "Meça sua dependência real do trabalho.",
    objective: "Fazer você medir sua dependência real do trabalho e entender seus números.",
    sections: [
      {
        type: "text",
        title: "Liberdade tem número",
        content: `<p>Você não pode construir liberdade sem conhecer seus números. Não é sobre ganhar mais. É sobre <strong>entender quanto você precisa para sobreviver</strong> e quanto tempo você aguenta sem trabalhar.</p>
        <p>Use a calculadora abaixo para fazer uma análise honesta da sua situação financeira atual.</p>
        <div class="highlight-box">
          <p><strong>Níveis de liberdade financeira:</strong></p>
          <p>0 a 1 mês → Sobrevivência<br>
          2 a 6 meses → Respiro<br>
          6 a 12 meses → Proteção<br>
          1 a 3 anos → Liberdade parcial<br>
          3 anos ou mais → Poder de escolha</p>
        </div>`
      },
      {
        type: "text",
        title: "Conceitos importantes",
        content: `<ul>
          <li><strong>Reserva de emergência:</strong> Dinheiro guardado para cobrir seus gastos se a renda parar.</li>
          <li><strong>Custo de vida mensal:</strong> Quanto você precisa por mês para viver — não quanto gasta por impulso.</li>
          <li><strong>Dívida ruim:</strong> Dívida que não gera retorno. Cartão, empréstimo pessoal, financiamento de consumo.</li>
          <li><strong>Ativos:</strong> Coisas que colocam dinheiro no seu bolso — não que tiram.</li>
          <li><strong>Renda extra:</strong> Qualquer fonte de renda além do seu trabalho principal.</li>
        </ul>`
      }
    ],
    quote: "Liberdade não nasce de opinião. Liberdade nasce de estrutura.",
    exercise: "Use a calculadora abaixo. Seja brutalmente honesto com os números.",
    quiz: [
      {
        question: "O que é reserva de emergência?",
        options: [
          "Dinheiro para investir na bolsa",
          "Dinheiro guardado para cobrir gastos se a renda parar",
          "Crédito do cartão de crédito",
          "Empréstimo do banco"
        ],
        correct: 1,
        feedback: "Correto. Reserva de emergência é seu colchão de segurança. Sem ela, você está em modo de sobrevivência permanente."
      },
      {
        question: "Qual a diferença entre dívida boa e dívida ruim?",
        options: [
          "Dívida boa tem juros menores",
          "Dívida boa gera retorno; dívida ruim só consome recursos",
          "Dívida ruim é qualquer dívida",
          "Não existe dívida boa"
        ],
        correct: 1,
        feedback: "Exato. Dívida boa é aquela que gera retorno (ex: financiar um equipamento que aumenta sua renda). Dívida ruim é consumo financiado."
      },
      {
        question: "Ter 6 meses de gastos guardados coloca você em qual nível?",
        options: [
          "Sobrevivência",
          "Respiro",
          "Proteção",
          "Poder de escolha"
        ],
        correct: 2,
        feedback: "Correto. 6 a 12 meses de gastos guardados te coloca no nível de Proteção. Você já tem uma margem real de segurança."
      }
    ],
    reflection: "Depois de ver seus números, o que mais te preocupa? E o que te dá mais esperança?"
  },
  {
    id: 6,
    title: "Consciência sem ação é só revolta",
    desc: "Transforme entendimento em movimento real.",
    objective: "Evitar que você apenas reclame do sistema e não faça nada.",
    sections: [
      {
        type: "text",
        title: "O perigo da consciência parada",
        content: `<p>Entender como o sistema funciona pode te deixar irritado. E com razão. Mas <strong>irritação sem direção vira revolta estéril</strong>. Reclamar do sistema não muda sua posição nele.</p>
        <p>A diferença entre quem apenas entende e quem muda de vida é simples: <strong>ação</strong>.</p>`
      },
      {
        type: "list",
        title: "Do entendimento à ação",
        items: [
          "<strong>Entender o jogo</strong> → Saber como o sistema funciona",
          "<strong>Construir habilidade</strong> → Desenvolver algo que o mercado valoriza",
          "<strong>Criar renda paralela</strong> → Não depender de uma única fonte",
          "<strong>Organizar dinheiro</strong> → Controlar para onde cada real vai",
          "<strong>Agir com estratégia</strong> → Cada passo com propósito, não por impulso",
          "<strong>Construir sistemas</strong> → Criar algo que funciona sem você"
        ]
      },
      {
        type: "text",
        title: "Consciência + Ação = Transformação",
        content: `<div class="highlight-box">
          <p>Consciência sem ação é só revolta. Ação sem consciência é só movimento aleatório. Você precisa dos dois.</p>
          <p>Não adianta saber que o jogo é injusto se você não aprender a jogar melhor. E não adianta jogar bem se você não souber que o jogo existe.</p>
        </div>`
      }
    ],
    quote: "Consciência sem ação vira revolta parada.",
    exercise: "Qual é a primeira ação prática que você pode tomar esta semana para mudar sua posição no sistema? Seja específico.",
    quiz: [
      {
        question: "Por que consciência sem ação é problemática?",
        options: [
          "Porque consciência não serve para nada",
          "Porque vira revolta estéril — você entende mas não muda nada",
          "Porque ação é mais importante que consciência",
          "Porque as pessoas não gostam de quem reclama"
        ],
        correct: 1,
        feedback: "Exato. Consciência sem ação gera frustração. Você enxerga o problema mas não faz nada para mudar sua posição."
      },
      {
        question: "Qual o primeiro passo prático para sair da posição atual?",
        options: [
          "Pedir demissão",
          "Construir uma habilidade vendável e criar renda paralela",
          "Reclamar mais nas redes sociais",
          "Esperar o momento certo"
        ],
        correct: 1,
        feedback: "Correto. Construir habilidade e criar renda paralela são passos concretos que aumentam sua autonomia real."
      },
      {
        question: "Ação sem consciência é:",
        options: [
          "Melhor que nada",
          "Movimento aleatório — você corre, mas não sabe para onde",
          "Sempre positiva",
          "A mesma coisa que ação com consciência"
        ],
        correct: 1,
        feedback: "Isso. Ação sem entendimento é como correr no escuro. Você gasta energia, mas pode estar indo na direção errada."
      }
    ],
    reflection: "O que te impede de agir agora? Medo? Falta de clareza? Falta de recurso? Identifique o bloqueio real."
  },
  {
    id: 7,
    title: "O mapa da liberdade",
    desc: "Uma escada prática de evolução.",
    objective: "Mostrar uma escada prática de evolução financeira e profissional.",
    sections: [
      {
        type: "text",
        title: "A escada da evolução",
        content: `<p>Não existe atalho. Existe caminho. E o caminho tem degraus. Cada degrau representa uma posição diferente no sistema. O objetivo é subir um de cada vez.</p>`
      },
      {
        type: "list",
        title: "Os 6 níveis da liberdade",
        items: [
          "<strong>1. Sobrevivência:</strong> Você vive do salário ao salário. Qualquer imprevisto vira crise.",
          "<strong>2. Estabilidade:</strong> Você consegue pagar as contas e tem uma pequena reserva. Ainda depende do trabalho, mas com menos desespero.",
          "<strong>3. Habilidade vendável:</strong> Você desenvolveu algo que o mercado paga bem. Pode negociar melhores condições.",
          "<strong>4. Renda paralela:</strong> Você tem mais de uma fonte de renda. Se uma cai, a outra segura.",
          "<strong>5. Sistema:</strong> Você construiu algo que gera renda sem sua presença constante. Um negócio, um produto digital, um investimento.",
          "<strong>6. Liberdade estratégica:</strong> Você tem opções reais. Pode escolher onde trabalhar, com quem, como e quando."
        ]
      },
      {
        type: "text",
        title: "Onde você está?",
        content: `<p>Não importa onde você está. Importa <strong>para onde você está indo</strong>. O próximo degrau é sempre o mais importante.</p>
        <p>Se você está no nível 1, seu objetivo é chegar no 2. Não pule etapas. Construa base.</p>`
      }
    ],
    quote: "O sistema ensina você a trabalhar nele, mas raramente ensina você a construir um.",
    exercise: "Em qual dos 6 níveis você está? Qual é o próximo degrau e o que precisa acontecer para você chegar lá?",
    quiz: [
      {
        question: "Qual o nível 3 da escada da liberdade?",
        options: [
          "Sobrevivência",
          "Estabilidade",
          "Habilidade vendável",
          "Renda paralela"
        ],
        correct: 2,
        feedback: "Correto. No nível 3, você desenvolveu uma habilidade que o mercado valoriza e paga bem."
      },
      {
        question: "No nível 5 (Sistema), o que muda em relação aos anteriores?",
        options: [
          "Você ganha mais dinheiro",
          "Você constrói algo que gera renda sem sua presença constante",
          "Você para de trabalhar",
          "Você investe na bolsa"
        ],
        correct: 1,
        feedback: "Exato. O sistema é a virada de chave: a renda deixa de depender exclusivamente do seu trabalho direto."
      },
      {
        question: "Por que não se deve pular etapas?",
        options: [
          "Porque é ilegal",
          "Porque cada degrau constrói a base para o próximo",
          "Porque ninguém consegue pular",
          "Porque o sistema não permite"
        ],
        correct: 1,
        feedback: "Isso. Sem base, o próximo nível desmorona. Estabilidade vem antes de habilidade. Habilidade vem antes de renda paralela."
      }
    ],
    reflection: "Qual degrau você precisa conquistar agora? O que especificamente você pode fazer esta semana para dar esse passo?"
  },
  {
    id: 8,
    title: "Por que a pessoa defende o próprio cativeiro?",
    desc: "A psicologia por trás da defesa do sistema.",
    objective: "Explicar a psicologia por trás da defesa do sistema.",
    sections: [
      {
        type: "text",
        title: "A armadilha psicológica",
        content: `<p>Uma das coisas mais fascinantes — e frustrantes — do comportamento humano é ver pessoas defendendo com unhas e dentes um sistema que as prejudica.</p>
        <p>Isso não é burrice. É psicologia. E entender os mecanismos por trás disso é essencial para não cair neles.</p>`
      },
      {
        type: "list",
        title: "Mecanismos psicológicos",
        items: [
          "<strong>Medo de admitir que foi enganado:</strong> Reconhecer que você dedicou anos a algo que não te trouxe liberdade dói. Então a mente prefere defender.",
          "<strong>Identidade ligada ao sofrimento:</strong> 'Eu sofri para chegar aqui.' Se o sofrimento não valeu a pena, a identidade desmorona.",
          "<strong>Orgulho de trabalhar demais:</strong> Trabalhar 12h por dia vira badge de honra. Descansar vira fraqueza.",
          "<strong>Crença de que exploração é mérito:</strong> 'Se eu consigo, qualquer um consegue.' Ignorando privilégios e contexto.",
          "<strong>Necessidade de se sentir superior:</strong> Criticar quem está embaixo dá uma falsa sensação de progresso.",
          "<strong>Comparação social:</strong> A pessoa não se compara com quem está no topo. Se compara com quem está embaixo."
        ]
      },
      {
        type: "text",
        title: "Como escapar disso?",
        content: `<div class="highlight-box">
          <p>A saída é <strong>coragem intelectual</strong>. Ter a humildade de admitir que talvez você estivesse errado. Ter a força de reconstruir sua identidade sem depender do sofrimento como prova de valor.</p>
          <p>Você não é o que você sofre. Você é o que você constrói.</p>
        </div>`
      }
    ],
    quote: "Quando o sistema não pode te obrigar pela força, ele tenta te convencer pela emoção.",
    exercise: "Identifique uma crença sua sobre trabalho e dinheiro. Agora questione: essa crença é sua ou foi colocada em você?",
    quiz: [
      {
        question: "Por que alguém defende um sistema que o prejudica?",
        options: [
          "Porque é burro",
          "Porque mecanismos psicológicos como medo, identidade e comparação social o impedem de enxergar",
          "Porque recebe dinheiro para defender",
          "Porque gosta de sofrer"
        ],
        correct: 1,
        feedback: "Correto. São mecanismos psicológicos profundos, não falta de inteligência. O ego, o medo e a identidade criam barreiras poderosas."
      },
      {
        question: "O que significa 'identidade ligada ao sofrimento'?",
        options: [
          "Gostar de trabalhar",
          "Usar o sofrimento como prova de valor e base da própria identidade",
          "Ser uma pessoa triste",
          "Trabalhar por paixão"
        ],
        correct: 1,
        feedback: "Exato. Quando o sofrimento vira parte da identidade, a pessoa não consegue questioná-lo sem sentir que está se destruindo."
      },
      {
        question: "Qual é a saída para escapar dessas armadilhas psicológicas?",
        options: [
          "Ignorar tudo",
          "Coragem intelectual — admitir erros e reconstruir identidade sem depender do sofrimento",
          "Trabalhar mais",
          "Mudar de emprego"
        ],
        correct: 1,
        feedback: "Isso. Coragem intelectual é a chave. Admitir que talvez você estivesse errado é o primeiro passo para enxergar a verdade."
      }
    ],
    reflection: "Qual crença sobre trabalho que você tem hoje pode ter sido 'colocada' em você pelo ambiente, e não escolhida por você?"
  },
  {
    id: 9,
    title: "Brasil real: cidade, política e trabalho",
    desc: "Aplique consciência de classe ao cotidiano.",
    objective: "Aplicar consciência de classe ao cotidiano: cidade, política e trabalho.",
    sections: [
      {
        type: "text",
        title: "O Brasil que você vive todo dia",
        content: `<p>A teoria é bonita. Mas é no cotidiano que o jogo se revela. Na sua cidade, no seu bairro, no seu trabalho. É lá que a consciência de classe precisa aterrissar.</p>`
      },
      {
        type: "list",
        title: "O cotidiano do Brasil real",
        items: [
          "<strong>Cidade pequena:</strong> Poucas oportunidades, tudo gira em torno de quem manda.",
          "<strong>Prefeitura e vereador:</strong> Quem você elege importa. Mas a maioria não fiscaliza.",
          "<strong>Infraestrutura:</strong> Lixo, buracos, transporte precário — problemas estruturais que afetam quem não tem alternativa.",
          "<strong>Emprego:</strong> Salários baixos, poucas vagas, concorrência desleal.",
          "<strong>Comércio local:</strong> Dependente de quem tem poder de compra. O ciclo vicioso do pequeno.",
          "<strong>Povo que reclama mas não fiscaliza:</strong> Reclamar do prefeito e não ir à câmara é contradição.",
          "<strong>Trabalhador brigando com trabalhador:</strong> A maior energia gasta é contra quem está no mesmo barco."
        ]
      },
      {
        type: "text",
        title: "O que fazer com isso?",
        content: `<div class="example-box">
          <div class="example-label">Reflexão prática</div>
          <p>Fiscalize. Vote com consciência. Não brigue com quem está no mesmo barco. Construa alternativas. Entenda que política não é só eleição — é orçamento, é fiscalização, é participação.</p>
          <p>A pergunta não é só quem te explora. A pergunta é: <strong>o que você vai construir agora?</strong></p>
        </div>`
      }
    ],
    quote: "A pergunta não é só quem te explora. A pergunta é: o que você vai construir agora?",
    exercise: "Na sua cidade, qual problema estrutural mais te afeta? O que poderia ser feito — por você e pela comunidade?",
    quiz: [
      {
        question: "Por que trabalhador brigar com trabalhador é problemático?",
        options: [
          "Porque gera competição saudável",
          "Porque ambos estão no mesmo barco e a energia deveria ser direcionada para construir alternativas",
          "Porque é ilegal",
          "Porque o patrão gosta"
        ],
        correct: 1,
        feedback: "Exato. A briga entre iguais é o maior desperdício de energia. Ambos estão na mesma posição estrutural."
      },
      {
        question: "Fiscalizar políticos é importante porque:",
        options: [
          "É obrigação do Ministério Público apenas",
          "Políticas públicas afetam diretamente a vida de quem não tem alternativa",
          "Não faz diferença real",
          "Só importa em ano de eleição"
        ],
        correct: 1,
        feedback: "Correto. Quem não tem alternativa depende mais de políticas públicas. Fiscalizar é exercer cidadania real."
      },
      {
        question: "O que o 'Brasil real' mostra sobre consciência de classe?",
        options: [
          "Que não existe classe social no Brasil",
          "Que a estrutura da cidade, do emprego e da política afeta desproporcionalmente quem tem menos recursos",
          "Que tudo é igual para todos",
          "Que o problema é individual"
        ],
        correct: 1,
        feedback: "Isso. O cotidiano revela como a estrutura afeta mais quem tem menos opções. Consciência de classe é enxergar isso."
      }
    ],
    reflection: "Na sua cidade, o que você poderia fazer de diferente para influenciar positivamente o ambiente ao seu redor?"
  },
  {
    id: 10,
    title: "Plano de 90 dias",
    desc: "Saia com um plano prático para os próximos 90 dias.",
    objective: "Fazer você sair com um plano prático de ação para os próximos 90 dias.",
    sections: [
      {
        type: "text",
        title: "Da consciência à ação",
        content: `<p>Todo conhecimento sem execução é entretenimento intelectual. Você não chegou até aqui para apenas pensar. Chegou para <strong>fazer</strong>.</p>
        <p>Os próximos 90 dias são seus. Cada semana tem uma missão. Não pule. Não acelere demais. Vá um passo de cada vez.</p>`
      },
      {
        type: "list",
        title: "A estrutura do plano",
        items: [
          "<strong>Semana 1-2:</strong> Entender seus gastos, cortar desperdícios, calcular custo de vida real.",
          "<strong>Semana 3-4:</strong> Escolher uma habilidade vendável para desenvolver.",
          "<strong>Mês 2:</strong> Testar uma renda extra pequena. Valide antes de escalar.",
          "<strong>Mês 3:</strong> Criar processo, oferta e rotina. Transforme teste em sistema."
        ]
      },
      {
        type: "text",
        title: "Use o checklist abaixo",
        content: `<p>Marque cada etapa conforme for completando. O progresso é visível. Cada item concluído é um passo real em direção à liberdade.</p>
        <div class="highlight-box">
          <p><strong>Lembre-se:</strong> Liberdade não nasce de opinião. Liberdade nasce de estrutura. Construa a sua.</p>
        </div>`
      }
    ],
    quote: "Liberdade não nasce de opinião. Liberdade nasce de estrutura.",
    exercise: "Use o checklist abaixo para organizar seus próximos 90 dias. Seja disciplinado.",
    quiz: [
      {
        question: "Qual é o primeiro passo do plano de 90 dias?",
        options: [
          "Pedir demissão",
          "Entender gastos, cortar desperdícios e calcular custo de vida",
          "Investir na bolsa",
          "Abrir uma empresa"
        ],
        correct: 1,
        feedback: "Correto. Antes de qualquer coisa, você precisa saber para onde seu dinheiro vai e quanto você realmente precisa."
      },
      {
        question: "Por que testar uma renda extra pequena antes de escalar?",
        options: [
          "Porque é mais barato",
          "Porque validar antes de escalar evita perder tempo e dinheiro com algo que não funciona",
          "Porque renda extra não é importante",
          "Porque é a lei"
        ],
        correct: 1,
        feedback: "Exato. Validar com pouco risco é mais inteligente que investir tudo em algo não testado."
      },
      {
        question: "O que significa 'criar processo, oferta e rotina' no mês 3?",
        options: [
          "Trabalhar mais horas",
          "Transformar o que funcionou no teste em algo sistemático e repetível",
          "Contratar funcionários",
          "Mudar de cidade"
        ],
        correct: 1,
        feedback: "Isso. Processo, oferta e rotina transformam um experimento em algo sustentável. É a base de qualquer sistema."
      }
    ],
    reflection: "Daqui a 90 dias, onde você quer estar? Escreva uma carta para o seu 'eu' do futuro descrevendo o que você construiu."
  }
];

// Perguntas do diagnóstico inicial
const DIAGNOSIS_QUESTIONS = [
  {
    id: "d1",
    question: "Se você parar de trabalhar hoje, quanto tempo sua vida continua normal?",
    options: [
      "Menos de 1 mês",
      "1 a 3 meses",
      "3 a 6 meses",
      "6 meses ou mais"
    ]
  },
  {
    id: "d2",
    question: "Você sabe a diferença entre autônomo e empresário?",
    options: [
      "Não sei a diferença",
      "Mais ou menos",
      "Sei, mas nunca apliquei",
      "Sei e vivo essa diferença"
    ]
  },
  {
    id: "d3",
    question: "Você já defendeu algo que, pensando bem, te prejudicava?",
    options: [
      "Nunca parei para pensar nisso",
      "Sim, e já percebi",
      "Sim, e ainda não tenho certeza",
      "Não acredito que já fiz isso"
    ]
  },
  {
    id: "d4",
    question: "Você sabe exatamente para onde vai cada real que ganha?",
    options: [
      "Não faço ideia",
      "Mais ou menos",
      "Sei as categorias principais",
      "Controle cada centavo"
    ]
  },
  {
    id: "d5",
    question: "Qual frase mais te descreve hoje?",
    options: [
      "Sobrevivo e não sei como sair disso",
      "Estável, mas sem plano de crescimento",
      "Tenho habilidades, mas dependo de alguém",
      "Estou construindo algo que me dá autonomia"
    ]
  }
];

// Plano de 90 dias
const PLAN_90 = [
  {
    week: "Semana 1 e 2 — Diagnóstico Financeiro",
    tasks: [
      "Listar todos os gastos do último mês",
      "Identificar gastos desnecessários",
      "Calcular custo de vida real mensal",
      "Definir meta de reserva de emergência",
      "Cortar pelo menos 2 desperdícios identificados"
    ]
  },
  {
    week: "Semana 3 e 4 — Habilidade Vendável",
    tasks: [
      "Listar 3 habilidades que você já tem",
      "Pesquisar quais habilidades são mais valorizadas no mercado",
      "Escolher 1 habilidade para desenvolver",
      "Definir como vai aprender (curso, prática, mentor)",
      "Criar cronograma de estudo de 30 dias"
    ]
  },
  {
    week: "Mês 2 — Renda Extra",
    tasks: [
      "Definir uma forma de gerar renda extra com a habilidade escolhida",
      "Criar uma oferta simples (produto ou serviço)",
      "Testar com 3 a 5 pessoas",
      "Coletar feedback e ajustar",
      "Validar se há demanda real"
    ]
  },
  {
    week: "Mês 3 — Sistema e Rotina",
    tasks: [
      "Criar um processo repetível para sua renda extra",
      "Definir uma rotina semanal dedicada",
      "Automatizar o que for possível",
      "Avaliar resultados e planejar próximos passos",
      "Definir meta para os próximos 90 dias"
    ]
  }
];

// ============================================
// ESTADO DA APLICAÇÃO
// ============================================
let state = {
  currentView: "landing",
  currentModule: null,
  completedModules: [],
  quizScores: {},
  reflections: {},
  diagnosisAnswers: {},
  diagnosisInitial: {},
  notes: "",
  plan90Checks: {},
  consciousnessLevel: 0,
  quizSubmitted: {}
};

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderDiagnosis();
  renderModulesList();
  renderPlan90();
  setupEventListeners();
  showView(state.currentView || "landing");
  updateProgressUI();
});

// ============================================
// LOCAL STORAGE
// ============================================
function saveState() {
  try {
    localStorage.setItem("jogo_progress", JSON.stringify(state));
  } catch (e) {
    console.warn("Erro ao salvar no localStorage:", e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem("jogo_progress");
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.warn("Erro ao carregar do localStorage:", e);
  }
}

function resetState() {
  state = {
    currentView: "landing",
    currentModule: null,
    completedModules: [],
    quizScores: {},
    reflections: {},
    diagnosisAnswers: {},
    diagnosisInitial: {},
    notes: "",
    plan90Checks: {},
    consciousnessLevel: 0,
    quizSubmitted: {}
  };
  saveState();
  showView("landing");
  updateProgressUI();
  renderModulesList();
  renderPlan90();
  closeAllModals();
}

// ============================================
// NAVEGAÇÃO
// ============================================
function showView(viewName) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("view--active"));
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add("view--active");
    state.currentView = viewName;
    saveState();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ============================================
// DIAGNÓSTICO
// ============================================
function renderDiagnosis() {
  const container = document.getElementById("diagnosis-questions");
  if (!container) return;

  container.innerHTML = DIAGNOSIS_QUESTIONS.map((q, i) => `
    <div class="diagnosis-question">
      <p>${q.question}</p>
      <div class="diagnosis-options">
        ${q.options.map((opt, j) => `
          <div class="diagnosis-option">
            <input type="radio" name="diagnosis-${q.id}" id="diag-${q.id}-${j}" value="${j}"
              ${state.diagnosisAnswers[q.id] === j ? "checked" : ""}>
            <label for="diag-${q.id}-${j}">${opt}</label>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function submitDiagnosis() {
  const answers = {};
  let allAnswered = true;

  DIAGNOSIS_QUESTIONS.forEach(q => {
    const selected = document.querySelector(`input[name="diagnosis-${q.id}"]:checked`);
    if (selected) {
      answers[q.id] = parseInt(selected.value);
    } else {
      allAnswered = false;
    }
  });

  if (!allAnswered) {
    alert("Por favor, responda todas as perguntas do diagnóstico.");
    return;
  }

  state.diagnosisAnswers = answers;

  // Calcular nível inicial (0-10%)
  let initialScore = 0;
  if (answers["d1"] >= 2) initialScore += 3;
  if (answers["d2"] >= 2) initialScore += 3;
  if (answers["d3"] >= 1) initialScore += 2;
  if (answers["d4"] >= 2) initialScore += 2;

  state.diagnosisInitial = { score: initialScore };
  state.consciousnessLevel = initialScore;

  saveState();
  showView("modules");
  updateProgressUI();
}

// ============================================
// MÓDULOS
// ============================================
function renderModulesList() {
  const container = document.getElementById("modules-list");
  if (!container) return;

  container.innerHTML = MODULES_DATA.map((mod, i) => {
    const isCompleted = state.completedModules.includes(mod.id);
    const isLocked = i > 0 && !state.completedModules.includes(MODULES_DATA[i - 1].id);
    const isActive = !isCompleted && !isLocked;

    let statusClass = "";
    let statusText = "";
    if (isCompleted) {
      statusClass = "module-card--completed";
      statusText = '<span class="module-status module-status--completed">✓ Concluído</span>';
    } else if (isActive) {
      statusClass = "module-card--active";
      statusText = '<span class="module-status module-status--active">▶ Disponível</span>';
    } else {
      statusClass = "module-card--locked";
      statusText = '<span class="module-status module-status--locked">🔒 Bloqueado</span>';
    }

    return `
      <div class="module-card ${statusClass}" data-module-id="${mod.id}"
        ${isLocked ? 'style="pointer-events:none;"' : ""}>
        <div class="module-number">${String(mod.id).padStart(2, "0")}</div>
        <div class="module-info">
          <div class="module-title">${mod.title}</div>
          <div class="module-desc">${mod.desc}</div>
        </div>
        ${statusText}
      </div>
    `;
  }).join("");

  // Event listeners nos cards
  container.querySelectorAll(".module-card").forEach(card => {
    card.addEventListener("click", () => {
      const moduleId = parseInt(card.dataset.moduleId);
      openModule(moduleId);
    });
  });

  updateNextMission();
}

function updateNextMission() {
  const nextModule = MODULES_DATA.find(m => !state.completedModules.includes(m.id));
  const el = document.getElementById("next-mission-text");
  if (el) {
    if (nextModule) {
      el.textContent = `Sua próxima missão: Módulo ${nextModule.id} — ${nextModule.title}`;
    } else {
      el.textContent = "Parabéns! Você completou todos os módulos.";
    }
  }
}

function openModule(moduleId) {
  const mod = MODULES_DATA.find(m => m.id === moduleId);
  if (!mod) return;

  state.currentModule = moduleId;
  saveState();

  // Renderizar conteúdo da aula
  renderLessonContent(mod);
  showView("lesson");
}

function renderLessonContent(mod) {
  document.getElementById("lesson-badge").textContent = `MÓDULO ${mod.id}`;
  document.getElementById("lesson-title").textContent = mod.title;
  document.getElementById("lesson-objective").textContent = mod.objective;

  const contentArea = document.getElementById("lesson-content");
  contentArea.innerHTML = mod.sections.map(section => {
    if (section.type === "text") {
      return `<div class="content-block">
        <h3>${section.title}</h3>
        ${section.content}
      </div>`;
    } else if (section.type === "list") {
      return `<div class="content-block">
        <h3>${section.title}</h3>
        <ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>`;
    }
    return "";
  }).join("");

  // Frase de impacto
  const quoteArea = document.getElementById("lesson-quote-area");
  if (mod.quote) {
    quoteArea.innerHTML = `
      <div class="quote-mark">"</div>
      <p class="quote-text">${mod.quote}</p>
    `;
    quoteArea.classList.remove("hidden");
  } else {
    quoteArea.classList.add("hidden");
  }

  // Exercício (mostrar como nota no final)
  const exerciseNote = document.createElement("div");
  exerciseNote.className = "content-block";
  exerciseNote.innerHTML = `
    <h3>📝 Exercício</h3>
    <p>${mod.exercise}</p>
  `;
  contentArea.appendChild(exerciseNote);
}

// ============================================
// QUIZ
// ============================================
function openQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;

  document.getElementById("quiz-title").textContent = `Quiz — ${mod.title}`;

  const container = document.getElementById("quiz-questions");
  container.innerHTML = mod.quiz.map((q, i) => `
    <div class="quiz-question" data-question-index="${i}">
      <div class="quiz-question-header">
        <span class="quiz-q-number">Q${i + 1}</span>
        <span class="quiz-q-text">${q.question}</span>
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, j) => `
          <div class="quiz-option">
            <input type="radio" name="quiz-${state.currentModule}-${i}" id="q-${state.currentModule}-${i}-${j}" value="${j}"
              ${state.quizSubmitted[state.currentModule]?.[i] === j ? "checked" : ""}>
            <label for="q-${state.currentModule}-${i}-${j}">${opt}</label>
          </div>
        `).join("")}
      </div>
      <div class="quiz-feedback-area" id="feedback-${state.currentModule}-${i}"></div>
    </div>
  `).join("");

  // Esconder resultado anterior
  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("btn-after-quiz").classList.add("hidden");
  document.getElementById("btn-submit-quiz").classList.remove("hidden");

  showView("quiz");
}

function submitQuiz() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;

  let correctCount = 0;
  const quizAnswers = {};

  mod.quiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name="quiz-${mod.id}-${i}"]:checked`);
    const feedbackArea = document.getElementById(`feedback-${mod.id}-${i}`);

    if (selected) {
      const answerIndex = parseInt(selected.value);
      quizAnswers[i] = answerIndex;

      if (answerIndex === q.correct) {
        correctCount++;
        feedbackArea.innerHTML = `<div class="quiz-feedback quiz-feedback--correct">
          <strong>✓ Correto!</strong> ${q.feedback}
        </div>`;
      } else {
        feedbackArea.innerHTML = `<div class="quiz-feedback quiz-feedback--incorrect">
          <strong>✗ Incorreto.</strong> ${q.feedback}
        </div>`;
      }
    } else {
      feedbackArea.innerHTML = `<div class="quiz-feedback quiz-feedback--incorrect">
        <strong>Não respondida.</strong> ${q.feedback}
      </div>`;
    }
  });

  state.quizSubmitted[mod.id] = quizAnswers;
  state.quizScores[mod.id] = {
    correct: correctCount,
    total: mod.quiz.length,
    percentage: Math.round((correctCount / mod.quiz.length) * 100)
  };

  // Mostrar resultado
  const resultArea = document.getElementById("quiz-result");
  const percentage = state.quizScores[mod.id].percentage;
  const passed = percentage >= 60;

  resultArea.classList.remove("hidden");
  resultArea.className = `quiz-result ${passed ? "quiz-result--success" : "quiz-result--retry"}`;
  resultArea.innerHTML = `
    <h3>${passed ? "✓ Bom trabalho!" : "↺ Revise e tente novamente"}</h3>
    <p>Você acertou ${correctCount} de ${mod.quiz.length} perguntas (${percentage}%).</p>
    ${passed ? '<p>Você pode prosseguir para a reflexão.</p>' : '<p>Releia o conteúdo e tente novamente. A compreensão é importante.</p>'}
  `;

  if (passed) {
    document.getElementById("btn-after-quiz").classList.remove("hidden");
    document.getElementById("btn-submit-quiz").classList.add("hidden");

    // Completar módulo
    if (!state.completedModules.includes(mod.id)) {
      state.completedModules.push(mod.id);
      // Atualizar nível de consciência (cada módulo = +5%, máximo 50%)
      state.consciousnessLevel = Math.min(50, state.completedModules.length * 5);
      saveState();
      updateProgressUI();
      renderModulesList();
    }
  }

  saveState();
}

// ============================================
// REFLEXÃO
// ============================================
function openReflection() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;

  document.getElementById("reflection-prompt").textContent = mod.reflection;

  // Carregar reflexão salva
  const textarea = document.getElementById("reflection-input");
  textarea.value = state.reflections[mod.id] || "";

  showView("reflection");
}

function saveReflection() {
  const mod = MODULES_DATA.find(m => m.id === state.currentModule);
  if (!mod) return;

  const text = document.getElementById("reflection-input").value.trim();
  state.reflections[mod.id] = text;
  saveState();

  // Verificar se todos os módulos foram completados
  if (state.completedModules.length === MODULES_DATA.length) {
    showView("completion");
    renderCompletion();
  } else {
    showView("modules");
    renderModulesList();
    updateProgressUI();
  }
}

// ============================================
// CALCULADORA FINANCEIRA
// ============================================
function calculateFreedom() {
  const income = parseFloat(document.getElementById("calc-income").value) || 0;
  const expense = parseFloat(document.getElementById("calc-expense").value) || 0;
  const savings = parseFloat(document.getElementById("calc-savings").value) || 0;

  if (income <= 0 || expense <= 0) {
    alert("Por favor, preencha sua renda e seus gastos.");
    return;
  }

  const months = expense > 0 ? Math.floor(savings / expense) : 0;
  const balance = income - expense;

  let level, levelClass, title, suggestion;

  if (months <= 1) {
    level = "Sobrevivência";
    levelClass = "calc-result-level--survival";
    title = "⚠️ Você está em modo de sobrevivência";
    suggestion = "Prioridade máxima: corte gastos desnecessários e comece a construir uma reserva mínima, mesmo que pequena. Cada real guardado é um dia a mais de segurança.";
  } else if (months <= 6) {
    level = "Respiro";
    levelClass = "calc-result-level--breath";
    title = "🔶 Você tem um respiro, mas não segurança";
    suggestion = "Continue construindo reserva. Tente guardar pelo menos 10% da renda mensal. Explore formas de renda paralela.";
  } else if (months <= 12) {
    level = "Proteção";
    levelClass = "calc-result-level--protection";
    title = "✅ Você tem proteção financeira";
    suggestion = "Boa posição. Agora foque em desenvolver habilidades vendáveis e criar fontes de renda adicionais.";
  } else if (months <= 36) {
    level = "Liberdade Parcial";
    levelClass = "calc-result-level--partial";
    title = "🟢 Liberdade parcial conquistada";
    suggestion = "Você já tem opções. Use essa margem para tomar decisões estratégicas: investir, empreender ou negociar melhores condições.";
  } else {
    level = "Poder de Escolha";
    levelClass = "calc-result-level--choice";
    title = "🏆 Poder de escolha real";
    suggestion = "Você está em uma posição privilegiada. Foque em multiplicar patrimônio e construir sistemas que gerem renda passiva.";
  }

  const resultArea = document.getElementById("calc-result");
  resultArea.classList.remove("hidden");
  resultArea.innerHTML = `
    <span class="calc-result-level ${levelClass}">${level}</span>
    <h3>${title}</h3>
    <p>Sem trabalhar, você sobrevive por aproximadamente <strong>${months} ${months === 1 ? "mês" : "meses"}</strong>.</p>
    <p>Saldo mensal: <strong>R$ ${balance.toFixed(2)}</strong> ${balance >= 0 ? "(positivo)" : "(negativo — atenção)"}</p>
    <div class="calc-suggestion">
      <strong>Sugestão:</strong> ${suggestion}
    </div>
  `;
}

// ============================================
// PLANO 90 DIAS
// ============================================
function renderPlan90() {
  const container = document.getElementById("plan90-weeks");
  if (!container) return;

  container.innerHTML = PLAN_90.map((week, wi) => `
    <div class="plan-week ${wi === 0 ? "open" : ""}" data-week-index="${wi}">
      <div class="plan-week-header">
        <h3>${week.week}</h3>
        <span class="plan-week-toggle">▼</span>
      </div>
      <div class="plan-week-body">
        <div class="plan-checklist">
          ${week.tasks.map((task, ti) => {
            const checkId = `plan-${wi}-${ti}`;
            const isChecked = state.plan90Checks[checkId] || false;
            return `
              <div class="plan-check-item">
                <input type="checkbox" id="${checkId}" ${isChecked ? "checked" : ""}>
                <label for="${checkId}">${task}</label>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // Event listeners
  container.querySelectorAll(".plan-week-header").forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("open");
    });
  });

  container.querySelectorAll(".plan-check-item input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      state.plan90Checks[checkbox.id] = checkbox.checked;
      saveState();
    });
  });
}

// ============================================
// CONCLUSÃO
// ============================================
function renderCompletion() {
  const totalModules = MODULES_DATA.length;
  const completedCount = state.completedModules.length;

  // Calcular média dos quizzes
  let totalCorrect = 0;
  let totalQuestions = 0;
  Object.values(state.quizScores).forEach(score => {
    totalCorrect += score.correct;
    totalQuestions += score.total;
  });
  const quizAvg = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  document.getElementById("final-consciousness").textContent = `${state.consciousnessLevel}%`;
  document.getElementById("final-modules").textContent = `${completedCount} de ${totalModules}`;
  document.getElementById("final-quizzes").textContent = `${quizAvg}%`;

  // Comparação
  const beforeLevel = state.diagnosisInitial?.score || 0;
  document.getElementById("comparison-before").textContent = `${beforeLevel}%`;
  document.getElementById("comparison-after").textContent = `${state.consciousnessLevel}%`;

  // Data do certificado
  const now = new Date();
  const dateStr = now.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric"
  });
  document.getElementById("cert-date").textContent = `Concluído em ${dateStr}`;
  document.getElementById("cert-level").textContent = `Nível de Consciência: ${state.consciousnessLevel}%`;

  // Mensagem personalizada
  const msgEl = document.getElementById("completion-message");
  if (state.consciousnessLevel >= 40) {
    msgEl.textContent = "Você chegou longe. Agora a parte mais importante começa: aplicar tudo isso na prática. O conhecimento que você tem agora é uma ferramenta. Use-a.";
  } else if (state.consciousnessLevel >= 25) {
    msgEl.textContent = "Você deu passos importantes. Continue construindo. Cada módulo que você completou mudou a forma como você enxerga o mundo. Não pare aqui.";
  } else {
    msgEl.textContent = "Você começou. Isso já é mais do que a maioria faz. Continue avançando módulo por módulo. A transformação é gradual, mas real.";
  }
}

// ============================================
// PROGRESSO UI
// ============================================
function updateProgressUI() {
  const total = MODULES_DATA.length;
  const completed = state.completedModules.length;
  const percentage = Math.round((completed / total) * 100);

  // Porcentagem no círculo
  const circumference = 2 * Math.PI * 54; // r=54
  const offset = circumference - (percentage / 100) * circumference;
  const ring = document.getElementById("progress-ring");
  if (ring) {
    ring.style.strokeDashoffset = offset;
  }

  const percEl = document.getElementById("progress-percentage");
  if (percEl) percEl.textContent = `${percentage}%`;

  const levelEl = document.getElementById("consciousness-level");
  if (levelEl) levelEl.textContent = `Nível: ${state.consciousnessLevel}%`;

  const modulesEl = document.getElementById("progress-modules");
  if (modulesEl) modulesEl.textContent = `${completed} de ${total} concluídos`;
}

// ============================================
// MODAIS
// ============================================
function openProgressModal() {
  const modal = document.getElementById("modal-progress");
  modal.classList.remove("hidden");

  const statsContainer = document.getElementById("modal-stats");
  statsContainer.innerHTML = `
    <div class="modal-stat">
      <span class="modal-stat-value">${state.completedModules.length}</span>
      <span class="modal-stat-label">Módulos</span>
    </div>
    <div class="modal-stat">
      <span class="modal-stat-value">${state.consciousnessLevel}%</span>
      <span class="modal-stat-label">Consciência</span>
    </div>
    <div class="modal-stat">
      <span class="modal-stat-value">${Object.keys(state.reflections).length}</span>
      <span class="modal-stat-label">Reflexões</span>
    </div>
    <div class="modal-stat">
      <span class="modal-stat-value">${Object.values(state.plan90Checks).filter(v => v).length}</span>
      <span class="modal-stat-label">Tarefas</span>
    </div>
  `;

  const moduleStatus = document.getElementById("modal-module-status");
  moduleStatus.innerHTML = MODULES_DATA.map(mod => {
    const done = state.completedModules.includes(mod.id);
    return `
      <div class="modal-module-item">
        <span>Módulo ${mod.id} — ${mod.title.substring(0, 40)}${mod.title.length > 40 ? "..." : ""}</span>
        <span class="${done ? "status-done" : "status-pending"}">${done ? "✓ Concluído" : "Pendente"}</span>
      </div>
    `;
  }).join("");
}

function openNotesModal() {
  const modal = document.getElementById("modal-notes");
  modal.classList.remove("hidden");

  const textarea = document.getElementById("notes-area");
  textarea.value = state.notes || "";

  // Salvar automaticamente ao digitar
  textarea.oninput = () => {
    state.notes = textarea.value;
    saveState();
  };
}

function openResetModal() {
  document.getElementById("modal-reset").classList.remove("hidden");
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
  // Botão iniciar
  document.getElementById("btn-start").addEventListener("click", () => {
    showView("diagnosis");
  });

  // Diagnóstico
  document.getElementById("btn-submit-diagnosis").addEventListener("click", submitDiagnosis);

  // Navegação header
  document.getElementById("btn-progress").addEventListener("click", openProgressModal);
  document.getElementById("btn-notes").addEventListener("click", openNotesModal);
  document.getElementById("btn-reset").addEventListener("click", openResetModal);

  // Voltar aos módulos
  document.getElementById("btn-back-modules").addEventListener("click", () => {
    showView("modules");
    renderModulesList();
    updateProgressUI();
  });

  // Iniciar quiz
  document.getElementById("btn-start-quiz").addEventListener("click", openQuiz);

  // Voltar à aula do quiz
  document.getElementById("btn-back-lesson").addEventListener("click", () => {
    showView("lesson");
  });

  // Enviar quiz
  document.getElementById("btn-submit-quiz").addEventListener("click", submitQuiz);

  // Pós quiz -> reflexão
  document.getElementById("btn-after-quiz").addEventListener("click", openReflection);

  // Salvar reflexão
  document.getElementById("btn-save-reflection").addEventListener("click", saveReflection);

  // Calculadora
  document.getElementById("btn-calculate").addEventListener("click", calculateFreedom);

  // Modais - fechar
  document.getElementById("modal-progress-close").addEventListener("click", closeAllModals);
  document.getElementById("modal-progress-backdrop").addEventListener("click", closeAllModals);
  document.getElementById("modal-notes-close").addEventListener("click", closeAllModals);
  document.getElementById("modal-notes-backdrop").addEventListener("click", closeAllModals);
  document.getElementById("modal-reset-close").addEventListener("click", closeAllModals);
  document.getElementById("modal-reset-backdrop").addEventListener("click", closeAllModals);

  // Reset
  document.getElementById("btn-cancel-reset").addEventListener("click", closeAllModals);
  document.getElementById("btn-confirm-reset").addEventListener("click", resetState);

  // Voltar à trilha na conclusão
  document.getElementById("btn-back-modules-end").addEventListener("click", () => {
    showView("modules");
    renderModulesList();
    updateProgressUI();
  });

  // Fechar modais com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}