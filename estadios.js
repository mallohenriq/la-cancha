const estadios = [
  {
    nome: "maracana",
    nomeCompleto: "Estádio Jornalista Mário Filho",
    imagem: "images/maracana_sat.jpg",
    dicas: ["Foi inaugurado antes do fim de sua construção",
  "O maior público registrado no estádio é de 183.341 pessoas",
  "O maior artilheiro da história desse estádio marcou 334 gols",
  "Recebeu finais de Copa do Mundo e Olimpíadas",
  "Seu nome homenageia um grande cronista esportivo"]
  },
  {
    nome: "sao januario",
    nomeCompleto: "Estádio de São Januário",
    imagem: "images/sao_januario_sat.jpg",
    dicas: ["Foi considerado até 1930 o maior estádio da América do Sul",
    "Foi palco de eventos importantes, como discursos presidenciais e desfiles de escolas de samba",
    "Foi o primeiro estádio do Brasil a receber jogos noturnos, sendo o primeiro no dia 31 de março de 1928",
    "Romário marcou seu milésimo gol neste estádio",
    "Foi construído com dinheiro de torcedores e sócios do clube, que levantaram quantias para a compra do terreno e construção do estádio"]
  },
  {
    nome: "nilton santos",
    nomeCompleto: "Estádio Nilton Santos",
    imagem: "images/nilton_santos_sat.jpg",
    dicas: ["O primeiro jogo desse estádio foi um clássico - 2x1 para os donos da casa",
    "Seu nome antigo fazia homenagem a um ex-presidente da Fifa",
    "Foi construído para os Jogos Pan-Americanos do Rio de Janeiro",
    "Foi usado nas Olimpíadas do Rio em 2016, com destaque para a medalha de ouro de Usain Bolt na prova de 100 metros do atletismo",
    "Desde a implementação de grama sintética, o estádio ganhou o apelido de tapetinho"]
  },
  {
    nome: "allianz parque",
    nomeCompleto: "Allianz Parque",
    imagem: "images/allianz_parque_sat.jpg",
    dicas: ["Este estádio ainda mantém uma parte da infraestrutura do estádio anterior",
    "Até o momento, já foram realizados mais de 300 jogos neste campo",
    "Foi o segundo estádio do país a aderir a grama sintética",
    "Grandes nomes da música realizaram shows neste estádio, como Paul McCartney e Elton John",
    "A equipe da casa já venceu mais de 1000 vezes, somados o estádio antigo e este estádio"]
  },
  {
    nome: "neo quimica arena",
    nomeCompleto: "Neo Química Arena",
    imagem: "images/neo_quimica_arena_sat.jpg",
    dicas: ["Este estádio foi construído para a Copa do Mundo de 2014",
    "Seu jogo inaugural foi o jogo de abertura da Copa daquele mesmo ano",
    "O maior público da história desse estádio é de 63.267 pessoas",
    "O campo deste estádio está a 777 metros acima do nível do mar",
    "É o único estádio de São Paulo a receber jogos de Copa do Mundo e das olimpíadas"]
  },
  {
    nome: "morumbi",
    nomeCompleto: "Estádio Cícero Pompeu de Toledo (Morumbi)",
    imagem: "images/morumbi_sat.jpg",
    dicas: ["Este é o maior estádio particular do Brasil, com capacidade para 66.795 pessoas atualmente.",
    "O maior artilheiro desse estádio marcou, ao todo, 135 gols. Já o jogador com mais jogos disputados neste estádio jogou por 594 partidas.",
    "Por muito tempo, foi considerado o maior estádio do mundo, alcançando picos de 150 mil pessoas.",
    "Em sua construção, foram consumidos mais de 500 toneladas de ferro.",
    "Sua partida inaugural foi realizada em 2 de outubro de 1960, aonde os donos da casa enfrentaram o Sporting Clube de Portugal."]
  },
  {
    nome: "vila belmiro",
    nomeCompleto: "Estádio Urbano Caldeira (Vila Belmiro)",
    imagem: "images/vila_belmiro_sat.jpg",
    dicas: ["O maior público registrado neste estádio é de 31.662 pessoas.",
    "Seu nome faz homenagem a um funcionário histórico do clube.",
    "Este estádio foi o primeiro estádio do Brasil a receber um jogo de futebol americano, em 2010.",
    "Em 21 de novembro de 1964, Pelé marcou oito gols em jogo contra o Botafogo-SP, partida vencida pelos donos da casa por 11 a 0.",
    "Em 2011, o gol vencedor do prêmio Puskás foi marcado neste estádio."]
  },
  {
    nome: "maiao",
    nomeCompleto: "Estádio José Maria Campos Maia (Maião)",
    imagem: "images/maiao_sat.jpg",
    dicas: ["Seu nome é homenagem a um ex prefeito da cidade onde está localizado, que doou o terreno para fomentar a prática esportiva.",
    "Este estádio é de posse da prefeitura da cidade, sendo apenas uma concessão ao principal clube.",
    "O estádio tem duas inaugurações: em 1925, apenas como campo, e em 1983, já com arquibancadas construídas.",
    "Recebeu seu primeiro jogo de Libertadores em 2026.",
    "Em 2025, o estádio recebeu sua maior modernização, ganhando uma nova fachada, novos acessos e acrílico nos alambrados."]
  },
  {
    nome: "nabi abi chedid",
    nomeCompleto: "Estádio Nabi Abi Chedid",
    imagem: "images/nabi_abi_chedid_sat.jpg",
    dicas: ["Está localizado em uma cidade cujo nome tem origem em uma expressão indígena ligada à caça.",
  "Foi um dos primeiros estádios do interior paulista a receber jogos da elite nacional de forma recorrente no século XXI.",
  "Passou por uma reconstrução completa recentemente, sendo demolido e erguido praticamente do zero no mesmo local.",
  "Fica muito próximo a uma rodovia importante que liga o interior de São Paulo à capital.",
  "É conhecido por ter um ambiente compacto, com arquibancadas próximas ao campo e forte pressão da torcida."]
  },
  {
    nome: "mineirao",
    nomeCompleto: "Estádio Mineirão",
    imagem: "images/mineirao_sat.jpg",
    dicas: ["Entre 1970 e 1977, este estádio recebia o processo seletivo da maior universidade federal do estado onde está localizado, reunindo cerca de 25 mil estudantes nos anos dos exames.",
    "O maior público da história deste estádio é de 132.834 pessoas. Este número é maior que 98% da população dos municípios onde este estádio está localizado.",
    "Três jogadores já conseguiram realizar o feito de chutar a bola para fora do estádio.",
    "Este estádio já recebeu ao todo cinco finais de Libertadores.",
    "Neste estádio aconteceu a derrota mais dolorosa do Brasil em Copas do Mundo."]
  },
  {
    nome: "arena mrv",
    nomeCompleto: "Arena MRV",
    imagem: "images/arena_mrv_sat.jpg",
    dicas: ["Foi construída em um terreno que passou por um longo processo de requalificação urbana, envolvendo antigas áreas industriais e ferroviárias",
  "É um dos poucos estádios do Brasil projetados desde o início com foco em eficiência energética, reaproveitamento de água e certificações ambientais",
  "Sua arquitetura foi pensada para aproximar o público do campo, eliminando o fosso tradicional presente em muitos estádios antigos",
  "Fica localizada em Belo Horizonte e pertence a um clube que por décadas mandou seus jogos em um estádio estadual",
  "É a casa de um dos clubes mais tradicionais de Minas Gerais"]
  },
  {
    nome: "fonte nova",
    nomeCompleto: "Arena Fonte Nova",
    imagem: "images/fonte_nova_sat.jpg",
    dicas: ["Ficou conhecido como Arena das goleadas na Copa do Mundo de 2014.",
    "Na sua arquitetura, destaca-se a abertura para o Dique do Tororó, um lago famoso situado nos arredores do estádio",
    "Seu nome oficial homenageia Octavio Mangabeira, o governador do estado a época em que foi inaugurado.",
    "O estádio passou pelo capítulo mais triste da sua história em 2007, quando parte da arquibancada desabou em comemoração ao acesso do Bahia a série B",
    "Quando o estádio foi demolido em 2010, 100% do concreto foi triturado, reciclado e reutilizado."]
  },
  {
    nome: "barradao",
    nomeCompleto: "Estádio Manoel Barradas (Barradão)",
    imagem: "images/barradao_sat.jpg",
    dicas: ["Este estádio foi construído em um antigo aterro sanitário.",
    "Seu nome homenageia um antigo presidente do clube mandante, que foi responsável pela compra do terreno e doou recursos do própio bolso para a construção",
    "Este estádio foi inaugurado duas vezes: a primeira no ano de 1986, e a segunda no ano de 1991.",
    "A chegada do estádio mudou a vida da população que morava no bairro onde ele está localizado, sendo um divisor de águas na renda dos moradores.",
    "Seu maior público já registrado é de 51.000 pessoas."]
  },
  {
    nome: "mangueirao",
    nomeCompleto: "Estádio Mangueirão",
    imagem: "images/mangueirao_sat.jpg",
    dicas: ["Seu nome homenageia um dos pioneiros da rádio esportiva nesse estado.",
    "Sua arquitetura foi pensada para que, além da acústica, não se sinta calor dentro do estádio.",
    "A partida inaugural foi realizada no dia 4 de março de 1978.",
    "Este estádio se tornou um estádio olímpico em 2002.",
    "Seu nome é uma homenagem direta a cidade de Belém, carinhosamente chamada de Cidade das Mangueiras."]
  },
  {
    nome: "baenao",
    nomeCompleto: "Estádio Baenão",
    imagem: "images/baenao_sat.jpg",
    dicas: ["Este estádio está a 200 metros do estádio do seu maior rival.",
    "Torcedores e sócios do clube se uniram para reformar este estádio.",
    "Há uma estátua do mascote do clube em uma das arquibancadas deste estádio.",
    "Sua inauguração aconteceu em 15 de agosto de 1917.",
    "Este é o estádio de propiedade privada mais antigo do norte do país."]
  },
  {
    nome: "arena conda",
    nomeCompleto: "Arena Condá",
    imagem: "images/arena_conda_sat.jpg",
    dicas: ["Seu nome homenageia um dos principais líderes e caciques do povo indígena Kaingang.",
    "Em 1976, o primeiro gol deste estádio foi marcado pela equipe visitante. Em 2009, após reformas, o primeiro gol foi marcado pelos donos da casa.",
    "Apesar da identificação, este estádio é de propiedade da prefeitura da cidade.",
    "Além de uma estátua ao homenageado do estádio, os arredores concentram um memorial as vítimas do grave acidente aéreo sofrido pelo clube em 2016.",
    "Foi palco de um dos momentos mais históricos do futebol catarinense: a defesa de Danilo no último minuto de jogo na semifinak da Sul Americana de 2016."]
  },
  {
    nome: "beira rio",
    nomeCompleto: "Estádio Beira-Rio",
    imagem: "images/beira_rio_sat.jpg",
    dicas: ["A campanha do tijolo torna a construção desse estádio emblemática.",
    "Seu nome oficial é em homenagem ao engenheiro que liderou a construção desse estádio, e faleceu quatro anos antes da conclusão da obra",
    "Muito antes do estádio existir, foi construída a capela no terreno, em 1957. Ela continua existindo até hoje.",
    "Uma cápsula do tempo foi enterrada nas imediações do estádio. A ideia é abri-lá em 2069, ano do centenário do estádio.",
    "Seu apelido faz jus a localização do estádio."]
  },
  {
    nome: "arena gremio",
    nomeCompleto: "Arena do Grêmio",
    imagem: "images/arena_gremio_sat.jpg",
    dicas: ["Sua inauguração foi realizada com uma revanche: um amistoso no dia 8 de dezembro de 2012.",
    "Este estádio foi construído para a copa de 2014, mas não a sediou.",
    "Em sua esplanada, há uma estátua em bronze de um dos maiores ídolos do time da casa.",
    "O primeiro gol do estádio e o primeiro gol do estádio em jogos oficiais foram marcados em datas diferentes",
    "O estádio não está localizado no mesmo bairro histórico do seu antecessor, o que mudou completamente a rotina e dinâmica do clube."]
  },
  {
    nome: "couto pereira",
    nomeCompleto: "Estádio Couto Pereira",
    imagem: "images/couto_pereira_sat.jpg",
    dicas: ["Este estádio não nasceu com o nome que o consagrou.",
    "Seu nome atual homenageia um ex-presidente do clube que foi responsável pela compra do terreno onde o estádio se localiza.",
    "A torcida custeou por conta própia uma estátua para um dos maiores ídolos do clube, que hoje está nos arredores do estádio.",
    "Ficou muito conhecido pela green hell, festa feita pela torcida usando sinalizadores",
    "Foi lar de um clube de outro estado em um desastre natural ocorrido em 2024"]
  },
  {
    nome: "vila capanema",
    nomeCompleto: "Estádio Durival Britto e Silva (Vila Capanema)",
    imagem: "images/vila_capanema_sat.jpg",
    dicas: ["Foi o primeiro estádio do sul do Brasil construído especificamente para a prática do futebol, ainda na década de 1910.",
  "Sua localização original foi escolhida estrategicamente por causa da proximidade com linhas férreas e áreas industriais da cidade.",
  "O estádio pertence a um clube que nasceu da fusão de duas agremiações rivais do início do século XX.",
  "Está situado em um bairro tradicional, próximo ao centro, conhecido por sua forte ligação com a história urbana da cidade.",
  "É famoso por ter arquibancadas muito próximas ao gramado e por um clima considerado hostil para visitantes."]
  },
  {
    nome: "moca bonita",
    nomeCompleto: "Estádio Moça Bonita",
    imagem: "images/moca_bonita_sat.jpg",
    dicas: ["Seu nome oficial é em homenagem a um diretor da fábrica de tecidos da região.",
    "Seu apelido é em homenagem a fazenda que existia no local onde o estádio foi construído.",
    "Seu maior público foi de 32.000 pessoas",
    "É conhecido e apelidado carinhosamente como forno, devido as altas temperaturas na região onde está localizado.",
    "Foi erguido pelos trabalhadores da Fábrica de tecidos Bangu."]
  },
  {
    nome: "conselheiro galvao",
    nomeCompleto: "Estádio Conselheiro Galvão",
    imagem: "images/conselheiro_galvao_sat.jpg",
    dicas: ["O estádio leva o nome de uma figura ligada à política e à administração pública, e não a um atleta ou dirigente esportivo.",
  "Está localizado em um bairro que teve forte crescimento com a expansão ferroviária na Zona Norte do Rio de Janeiro.",
  "É tradicionalmente associado a um clube que utiliza as cores verde, vermelho e branco.",
  "Fica em uma região cercada por linhas de trem e vias suburbanas importantes da cidade.",
  "É conhecido por ter arquibancadas muito próximas ao campo e por um clima intenso em jogos de menor público."]
  },
  {
    nome: "ressacada",
    nomeCompleto: "Estádio da Ressacada",
    imagem: "images/ressacada_sat.jpg",
    dicas: ["Em 2008, o dono deste estádio foi o único a não perder jogos como mandante nas três principais divisões do Campeonato Brasileiro",
    "Seu maior artilheiro marcou 61 vezes nesse estádio.",
    "Em 2012, o estádio recebeu um show do ex-beatle Paul McCartney, sendo considerada o maior evento musical já feito na cidade desse estádio.",
    "Seu recorde de público em um jogo é de 32.226 pessoas.",
    "Seu nome homenageia um ex governador da cidade e torcedor ilustre do clube."]
  },
  {
    nome: "orlando scarpelli",
    nomeCompleto: "Estádio Orlando Scarpelli",
    imagem: "images/orlando_scarpelli_sat.jpg",
    dicas: ["Este estádio está localizado na parte continental.",
    "O homenageado foi um desportivista e empresário, responsável por viabilizar a doação do terreno para a construção.",
    "Sua inauguração foi feita a parcelas, tendo a obra iniciada em 1948, mas sua inauguração parcial sendo realizada em 1960.",
    "A maior final de sua história foi realizada em 2007, onde a equipe da casa perdeu o título da Copa do Brasil para o Fluminense.",
    "O maior público registrado na história do estádio foi de 33.000 pessoas."]
  },
  {
    nome: "heriberto hulse",
    nomeCompleto: "Estádio Heriberto Hülse",
    imagem: "images/heriberto_hulse_sat.jpg",
    dicas: ["O estádio homenageia um ex governador do estado onde está localizado, que foi responsável por doar o sistema de iluminação ao clube.",
    "É um dos poucos estádios do Brasil a ter 100% da sua arquibancada coberta",
    "Seu maior momento foi a final da Copa do Brasil de 1991, onde a equipe da casa se sagrou campeã invicta da competição.",
    "É conhecido como majestoso, devido a sua arquitetura e tamanho.",
    "Viralizou na internet por conta do Bar do fosso, um bar localizado dentro do fosso que há no estádio, entre as arquibancadas e o campo."]
  },
  {
    nome: "curuzu",
    nomeCompleto: "Estádio da Curuzu",
    imagem: "images/curuzu_sat.jpg",
    dicas: ["Apesar do estádio ser de 1914, seu propietário só o adquiriu em julho de 1918, com sua inauguração sendo feita no dia 27 daquele mesmo mês.",
    "No dia 01 de novembro de 1950, foi inaugurado o sistema de iluminação do estádio. No clássico disputado neste dia, a equipe da casa venceu seu rival por 3 a 1.",
    "Apesar do apelido, seu nome é Leônidas Sodré de Castro, presidente responsável pela compra do terreno do estádio.",
    "Este estádio está a 200 metros do estádio do seu maior rival.",
    "Em 2009, o atacante Robgol doou um placar eletrônico a ser instalado no estádio."]
  },
  {
    nome: "frasqueirao",
    nomeCompleto: "Estádio Frasqueirão",
    imagem: "images/frasqueirao_sat.jpg",
    dicas: ["Este estádio foi inaugurado em 22 de janeiro de 2006.",
    "Serviu de centro oficial de treinamento para a Copa do Mundo de 2014, para as seleções que disputaram jogos na cidade onde está localizado.",
    "Um dos módulos deste estádio leva o nome de um ídolo do clube.",
    "Os donos da casa são conhecidos por serem os maiores campeões do mundo",
    "Seu nome de batismo homenageia Maria Lamas Farache, figura histórica no Rio Grande do Norte."]
  },
  {
    nome: "castelao",
    nomeCompleto: "Estádio Castelão",
    imagem: "images/castelao_sat.jpg",
    dicas: ["Seu nome original é em homenagem a um ex governador que idealizou o projeto e fomentou a construção.",
    "O maior público já registrado na história do estádio em uma partida de futebol foi de 118.496 torcedores.",
    "O estádio recebeu, em 1980, a visita do Papa João Paulo II. Estima-se que mais de 120 mil fiéis estiveram presentes para acompanhar a chegada do pontífice.",
    "Foi o primeiro estádio do país a ficar pronto para a Copa do Mundo de 2014.",
    "Ficou conhecido pelas grandes festas e mosaicos realizados pelos dois maiores clubes do estádio aonde está localizado."]
  },
  {
    nome: "ilha do retiro",
    nomeCompleto: "Estádio Ilha do Retiro",
    imagem: "images/ilha_do_retiro_sat.jpg",
    dicas: ["Seu nome oficial é uma homenagem a um ex presidente que comandou a reforma do local em 1950",
    "Foi a única sede do nordeste a receber um jogo da Copa do Mundo de 1950.",
    "O recorde de público desse estádio é de 56.875 pessoas, registrado no dia 7 de junho de 1998.",
    "O estádio é ladeado por um famoso canal. Era comum os atletas isolarem bolas que iam parar nas águas do canal às margens do estádio.",
    "Sua inauguração ocorreu no dia 4 de julho de 1937, em um clássico vencido pela equipe da casa por 6 a 5."]
  },
  {
    nome: "aflitos",
    nomeCompleto: "Estádio dos Aflitos",
    imagem: "images/aflitos_sat.jpg",
    dicas: ["Seu nome original homenageia um dirigente histórico do clube, que o presidiu por 14 mandatos.",
    "Seu principal apelido é em homenagem a uma Igreja localizada no mesmo bairro do estádio",
    "Foi palco de um dos maiores jogos da história do futebol brasileiro, onde o Grêmio, mesmo com quatro jogadores a menos, conseguiu vencer a equipe da casa e conquistar o acesso a primeira divisão do ano seguinte.",
    "Sua inauguração aconteceu no dia 25 de junho de 1939, com uma vitória do time da casa sobre seu rival por 5 a 2.",
    "Foi o primeiro estádio do nordeste a receber refletores para a realização de jogos noturnos, em 1941."]
  },
  {
    nome: "arruda",
    nomeCompleto: "Estádio do Arruda",
    imagem: "images/arruda_sat.jpg",
    dicas: ["Seu nome oficial homenageia um ex prefeito da cidade aonde está localizado.",
    "O maior público da história do estado onde está localizado foi neste estádio: cerca de 90 mil pessoas foram assistir um amistoso entre Brasil e Argentina para a copa de 1994.",
    "O fechamento do anel superior deste estádio só foi concluído em 1982.",
    "Foi palco de shows de estrelas internacionais, como Paul McCartney e Bon Jovi.",
    "Sua inauguração ocorreu no dia 4 de junho de 1972, num empate sem gols entre o time da casa e o Flamengo."]
  },
  {
    nome: "rua javari",
    nomeCompleto: "Estádio da Rua Javari",
    imagem: "images/rua_javari_sat.jpg",
    dicas: ["Foi palco de um dos últimos jogos oficiais no Brasil disputados sem iluminação artificial, em uma época em que isso já era raríssimo no futebol profissional",
  "Manteve por décadas uma configuração praticamente inalterada, resistindo a reformas profundas mesmo após mudanças nas exigências da CBF e da FIFA",
  "É conhecido por ter arquibancadas extremamente próximas do campo, criando um ambiente de forte pressão sobre os jogadores adversários",
  "Fica em um bairro tradicional de São Paulo e está ligado a um clube com forte identidade comunitária e raízes operárias",
  "Ficou famoso pelo gol que Pelé considerava o mais bonito da sua carreira, do qual não se tem registro"]
  },
  {
    nome: "caninde",
    nomeCompleto: "Estádio do Canindé",
    imagem: "images/caninde_sat.jpg",
    dicas: ["O estádio leva oficialmente o nome de um dirigente que teve papel decisivo na consolidação do clube durante o século XX.",
  "Sua área foi adquirida em uma região então pouco urbanizada, próxima a várzeas do rio Tietê, antes da grande expansão da cidade.",
  "É a casa de um clube tradicionalmente associado à comunidade portuguesa e a símbolos da imigração europeia.",
  "Fica localizado em um bairro da zona norte de São Paulo, próximo a importantes vias de acesso da capital.",
  "É conhecido por ter arquibancadas coladas ao campo e por uma torcida que canta o jogo inteiro, mesmo em fases difíceis."]
  },
  {
    nome: "pacaembu",
    nomeCompleto: "Estadio Municipal Paulo Machado de Carvalho - Pacaembu",
    imagem: "images/pacaembu_sat.jpg",
    dicas:["Este estádio faz parte de um complexo esportivo, que além do campo abriga um espaço para a prática de atividades físicas e o museu do futebol.",
    "Foi tombado em 1998, em virtude do seu estilo Art Déco, característico da época em que foi construído.",
    "Recebeu duas finais de Libertadores, de forma consecutiva, em 2011 e 2012.",
    "Seu nome faz homenagem ao chefe da delegação da seleção brasileira na copa de 1958.",
    "O Corinthians foi a equipe que mais atuou neste estádio, jogando por 1.690 vezes."]
  },
  {
    nome: "independencia",
    nomeCompleto: "Arena Independência",
    imagem: "images/independencia_sat.jpg",
    dicas: ["Foi palco de uma das maiores zebras do futebol mundial, quando a seleção amadora dos Estados Unidos bateu a Inglaterra por 1 a 0.",
    "O estádio pertencia ao governo, mas passou a ser do Sete de setembro, que depois foi anexado a outro clube da mesma cidade.",
    "Em 2013, foi peça fundamental para a conquista da primeira Libertadores de um cluve brasileiro.",
    "Na sua reforma, em 2012, foi criticado pela imprensa e torcedores pela quantidade de pontos cegos nas arquibancadas.",
    "Seu nome oficial homenageia um ex-presidente do Sete de Setembro, que ajudou a viabilizar e ampliar o estádio na época em que o clube era mandatário."]
  }
];
