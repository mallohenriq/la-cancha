const estadios = [
  // dono de tudo (5)
  {
    nome: "Maracanã",
    nomeCompleto: "Estádio Jornalista Mário Filho (Maracanã)",
    imagem: "imagescopa/maracana_sat.jpg",
    local: "Rio de Janeiro",
    pais: "Brasil",
    populacao: "214 milhões",
    participacoes: "22",
    titulos: "5",
    ultimaCopa: "2022",
    dicas: [
      "Localizado na América do Sul, é o maior país da região.",
      "Possui a maior biodiversidade do mundo com a Floresta Amazônica.",
      "Única seleção a participar de todas as edições da Copa do Mundo.",
      "Maior campeã mundial com cinco títulos conquistados.",
      "Foi o palco do milésimo gol de Pelé e de duas finais de Copa."
    ]
  },
  // todos
  {
    nome: "Azteca",
    nomeCompleto: "Estádio Banorte (Azteca)",
    imagem: "imagescopa/azteca_sat.jpg",
    local: "Cidade do México",
    pais: "México",
    populacao: "129 milhões",
    participacoes: "17",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Localizado na América do Norte, faz fronteira com os EUA.",
      "Berço de civilizações antigas como os Astecas e Maias.",
      "Primeiro país a sediar a Copa do Mundo duas vezes.",
      "Sediou o 'Gol do Século' e a 'Mão de Deus' de Maradona em 1986.",
      "Dono da maior sequência de eliminações seguidas nas oitavas (7 vezes)."
    ]
  },
  {
    nome: "Estádio Akron",
    nomeCompleto: "Estádio Akron",
    imagem: "imagescopa/akron_sat.jpg",
    local: "Guadalajara",
    pais: "México",
    populacao: "129 milhões",
    participacoes: "17",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Situado na América do Norte, é famoso pela culinária e Tequila.",
      "País com o maior número de falantes de espanhol no mundo.",
      "Sediou a abertura da Copa de 1970, vencida pelo Brasil.",
      "Chegou às quartas de final em 1970 e 1986 atuando em casa.",
      "Sua seleção é a que mais vezes disputou o jogo de abertura da Copa."
    ]
  },
  {
    nome: "Estádio BBVA",
    nomeCompleto: "Estádio BBVA",
    imagem: "imagescopa/bbva_sat.jpg",
    local: "Guadalupe",
    pais: "México",
    populacao: "129 milhões",
    participacoes: "17",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação norte-americana conhecida por suas praias e desertos.",
      "Possui uma das sete maravilhas do mundo moderno: Chichén Itzá.",
      "Possui o recorde de seleção com mais derrotas na história das Copas.",
      "Sua melhor campanha foi o 6º lugar no mundial de 1986.",
      "Será o primeiro país a sediar três Copas do Mundo (2026)."
    ]
  },
  {
    nome: "Estádio FNB",
    nomeCompleto: "First National Bank Stadium",
    imagem: "imagescopa/fnbank_sat.jpg",
    local: "Joanesburgo",
    pais: "África do Sul",
    populacao: "60 milhões",
    participacoes: "3",
    titulos: "0",
    ultimaCopa: "2010",
    dicas: [
      "Localizado no extremo sul da África, possui 11 línguas oficiais.",
      "Conhecido como a 'Nação Arco-Íris' após o fim do Apartheid.",
      "Primeira nação africana a sediar uma Copa do Mundo (2010).",
      "Siphiwe Tshabalala marcou o primeiro gol do mundial em solo africano.",
      "Único anfitrião da história eliminado na fase de grupos da Copa."
    ]
  },
  {
    nome: "Daegu Stadium",
    nomeCompleto: "Daegu Blue Arc Stadium",
    imagem: "imagescopa/daegu_sat.jpg",
    local: "Daegu",
    pais: "Coreia do Sul",
    populacao: "51 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Localizado no leste da Ásia, ocupa a parte sul de uma península.",
      "Nação líder em tecnologia global e cultura K-Pop.",
      "Sua melhor campanha foi o 4º lugar histórico em 2002.",
      "Seleção asiática com o maior número de participações em Copas.",
      "Eliminou a então campeã Alemanha na fase de grupos em 2018."
    ]
  },
  {
    nome: "BC Place",
    nomeCompleto: "BC Place Stadium",
    imagem: "imagescopa/bcplace_sat.jpg",
    local: "Vancouver",
    pais: "Canadá",
    populacao: "38 milhões",
    participacoes: "2",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Segundo maior país do mundo em extensão territorial.",
      "Localizado na América do Norte, é famoso pelo xarope de ácer.",
      "Participou apenas das Copas de 1986 e 2022 até hoje.",
      "Alphonso Davies marcou o primeiro gol do país em Copas em 2022.",
      "Será uma das sedes da Copa do Mundo de 2026."
    ]
  },
  {
    nome: "BMO Field",
    nomeCompleto: "BMO Field",
    imagem: "imagescopa/bmo_sat.jpg",
    local: "Toronto",
    pais: "Canadá",
    populacao: "38 milhões",
    participacoes: "2",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação bilíngue (inglês e francês) da América do Norte.",
      "Possui a maior costa litorânea de todo o planeta.",
      "Sua seleção ficou 36 anos sem se classificar (1986 a 2022).",
      "Terminou em primeiro lugar nas Eliminatórias da CONCACAF para 2022.",
      "Será sede de jogos da Copa pela primeira vez em 2026."
    ]
  },
  {
    nome: "Lusail Stadium",
    nomeCompleto: "Estádio Nacional de Lusail",
    imagem: "imagescopa/lusail_sat.jpg",
    local: "Lusail",
    pais: "Catar",
    populacao: "2,9 milhões",
    participacoes: "1",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Pequeno país localizado na península arábica, no Golfo Pérsico.",
      "Nação com um dos maiores PIBs per capita do mundo.",
      "Foi o primeiro país do Oriente Médio a sediar uma Copa (2022).",
      "É o anfitrião com a pior campanha técnica da história (0 pontos).",
      "Estreou em Copas do Mundo apenas em 2022 como país-sede."
    ]
  },
  {
    nome: "St. Jakob Park",
    nomeCompleto: "St. Jakob-Park",
    imagem: "imagescopa/stjakob_sat.jpg",
    local: "Basileia",
    pais: "Suíça",
    populacao: "8,7 milhões",
    participacoes: "12",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País europeu famoso pelos Alpes, relógios e chocolates.",
      "Conhecido mundialmente por sua neutralidade política histórica.",
      "Sediou a Copa do Mundo de 1954, o 'Milagre de Berna'.",
      "Chegou às quartas de final em três ocasiões (1934, 1938 e 1954).",
      "Protagonizou o jogo com mais gols da história das Copas (7x5 vs Áustria)."
    ]
  },
  {
    nome: "Estádio Príncipe Moulay",
    nomeCompleto: "Estádio Príncipe Moulay Abdellah",
    imagem: "imagescopa/princemoulay_sat.jpg",
    local: "Rabat",
    pais: "Marrocos",
    populacao: "37 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Situado no norte da África, banhado pelo Atlântico e Mediterrâneo.",
      "Famoso por suas cidades imperiais e o deserto do Saara.",
      "Primeira seleção africana a chegar a uma semifinal de Copa (2022).",
      "Liderou seu grupo em 1986, eliminando Portugal e Inglaterra.",
      "Sofreu apenas 1 gol de adversários até a semifinal de 2022."
    ]
  },
  {
    nome: "Stade Sylvio Cator",
    nomeCompleto: "Stade Sylvio Cator",
    imagem: "imagescopa/sylviocator_sat.jpg",
    local: "Porto Príncipe",
    pais: "Haiti",
    populacao: "11 milhões",
    participacoes: "1",
    titulos: "0",
    ultimaCopa: "1974",
    dicas: [
      "Nação insular no Caribe que divide ilha com a Rep. Dominicana.",
      "Primeira república negra independente do mundo.",
      "Sua única participação em Copas do Mundo foi na Alemanha em 1974.",
      "Emmanuel Sanon marcou o único gol do país na história do torneio.",
      "Encerrou a invencibilidade de 1142 minutos do goleiro Dino Zoff."
    ]
  },
  {
    nome: "Hampden Park",
    nomeCompleto: "Hampden Park",
    imagem: "imagescopa/hampdenpark_sat.jpg",
    local: "Glasgow",
    pais: "Escócia",
    populacao: "5,5 milhões",
    participacoes: "8",
    titulos: "0",
    ultimaCopa: "1998",
    dicas: [
      "País do Reino Unido famoso por seus castelos e montanhas.",
      "Berço do golfe e famosa pelo uso do kilt e da gaita de foles.",
      "Detém o recorde de mais eliminações na 1ª fase sem nunca avançar.",
      "Disputou o jogo de abertura da Copa de 1998 contra o Brasil.",
      "Sua última participação em mundiais foi na França, há 26 anos."
    ]
  },
  {
    nome: "Mercedes-Benz Stadium",
    nomeCompleto: "Mercedes-Benz Stadium",
    imagem: "imagescopa/mbstadium_sat.jpg",
    local: "Atlanta",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Potência da América do Norte, banhada por dois oceanos.",
      "País com a maior economia do mundo e sede de Hollywood.",
      "Conquistou o 3º lugar na primeira Copa da história (1930).",
      "Sediou a Copa do Mundo de 1994, vencida pelo Brasil.",
      "Venceu a Inglaterra em 1950 no maior vexame da história inglesa."
    ]
  },
  {
    nome: "Gillette Stadium",
    nomeCompleto: "Gillette Stadium",
    imagem: "imagescopa/gilete_sat.jpg",
    local: "Foxborough",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Localizado na América do Norte, possui 50 estados diferentes.",
      "Nação onde o basquete e o futebol americano são os esportes principais.",
      "Landon Donovan é o maior artilheiro do país em Copas (5 gols).",
      "Chegou às quartas de final em 2002, perdendo para a Alemanha.",
      "Será um dos anfitriões da Copa de 2026 ao lado de México e Canadá."
    ]
  },
  {
    nome: "AT&T Stadium",
    nomeCompleto: "AT&T Stadium",
    imagem: "imagescopa/att_sat.jpg",
    local: "Arlington",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Grande país da América do Norte com vasta diversidade climática.",
      "Sede de grandes empresas de tecnologia como Google e Apple.",
      "Ficou 40 anos sem disputar uma Copa (1950 até 1990).",
      "Bateu o recorde de público médio em uma Copa no ano de 1994.",
      "Sua seleção é conhecida pelo apelido de 'The Stars and Stripes'."
    ]
  },
  {
    nome: "Lincoln Financial Field",
    nomeCompleto: "Lincoln Financial Field",
    imagem: "imagescopa/lffstadium_sat.jpg",
    local: "Filadélfia",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação norte-americana que possui o Grand Canyon e o Alasca.",
      "País onde o esporte 'soccer' cresce rapidamente em popularidade.",
      "Classificou-se para as oitavas em 3 das últimas 4 Copas disputadas.",
      "O goleiro Tim Howard fez 16 defesas em um só jogo em 2014 (recorde).",
      "A Copa de 1994 no país foi a primeira decidida nos pênaltis."
    ]
  },
  {
    nome: "NRG Stadium",
    nomeCompleto: "NRG Stadium",
    imagem: "imagescopa/nrgstadium_sat.jpg",
    local: "Houston",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Localizado entre o Canadá e o México, na América do Norte.",
      "Terceiro país mais populoso de todo o mundo.",
      "Eliminou a Colômbia de Valderrama na Copa de 1994.",
      "O capitão Tyler Adams liderou a seleção mais jovem em 2022.",
      "A seleção feminina do país é a maior campeã mundial da história."
    ]
  },
  {
    nome: "Arrowhead Stadium",
    nomeCompleto: "Arrowhead Stadium",
    imagem: "imagescopa/arrow_sat.jpg",
    local: "Kansas City",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País norte-americano famoso por suas metrópoles como Nova York.",
      "Nação que possui a maior rede rodoviária do planeta.",
      "Christian Pulisic é a principal estrela atual da seleção masculina.",
      "Seu melhor resultado recente foi o 8º lugar no mundial da Coreia/Japão.",
      "O país já sediou nove estádios diferentes na Copa de 1994."
    ]
  },
  {
    nome: "SoFi Stadium",
    nomeCompleto: "SoFi Stadium",
    imagem: "imagescopa/sofa_sat.jpg",
    local: "Inglewood",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Ocupa grande parte da América do Norte, com 6 fusos horários.",
      "Nação conhecida pelo conceito do 'Sonho Americano'.",
      "Bert Patenaude marcou o primeiro hat-trick da história das Copas (1930).",
      "A seleção não se classificou para a Copa da Rússia em 2018.",
      "É um dos países com mais estádios de grande porte no mundo."
    ]
  },
  {
    nome: "Hard Rock Stadium",
    nomeCompleto: "Hard Rock Stadium",
    imagem: "imagescopa/hardrock_sat.jpg",
    local: "Miami Gardens",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Banhado pelos oceanos Pacífico e Atlântico na América do Norte.",
      "País que inventou o sistema de GPS e a internet.",
      "Chegou à semifinal apenas uma vez, na primeira edição do torneio.",
      "Fez um jogo histórico contra o Irã na Copa de 1998.",
      "A MLS é a liga nacional que fornece a base da seleção atual."
    ]
  },
  {
    nome: "Lewis Stadium",
    nomeCompleto: "Lewis Stadium",
    imagem: "imagescopa/hamilton_sat.jpg",
    local: "St. Louis",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação norte-americana que comprou o Alasca da Rússia em 1867.",
      "País que possui a maior diversidade de parques nacionais.",
      " Clint Dempsey marcou gols em três Copas diferentes (2006, 10, 14).",
      "Sua defesa sofreu o gol mais rápido da Copa 2014 (30 segundos).",
      "Os EUA foram um dos fundadores da CONCACAF."
    ]
  },
  {
    nome: "Lumen Field",
    nomeCompleto: "Lumen Field",
    imagem: "imagescopa/lumen_sat.jpg",
    local: "Seattle",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Estado soberano da América do Norte com forte influência cultural.",
      "País com o maior número de aeroportos ativos no mundo.",
      "A seleção usa o uniforme branco como principal desde os anos 50.",
      "Venceu o México nas oitavas de final de 2002 (2 a 0).",
      "A cidade de Seattle é famosa pela sua paixão pelo 'soccer'."
    ]
  },
  {
    nome: "Defensores del Chaco",
    nomeCompleto: "Estádio Defensores del Chaco",
    imagem: "imagescopa/gatito2017_sat.jpg",
    local: "Assunção",
    pais: "Paraguai",
    populacao: "7 milhões",
    participacoes: "8",
    titulos: "0",
    ultimaCopa: "2010",
    dicas: [
      "País da América do Sul que não possui saída para o mar.",
      "Nação bilíngue onde se fala oficialmente Espanhol e Guarani.",
      "Sua melhor campanha foi em 2010, chegando às quartas de final.",
      "Quase eliminou a campeã Espanha em 2010 (perdeu de 1 a 0).",
      "Sua última participação foi na África do Sul, há 14 anos."
    ]
  },
  {
    nome: "Accor Stadium",
    nomeCompleto: "Stadium Australia",
    imagem: "imagescopa/accor_sat.jpg",
    local: "Sydney",
    pais: "Austrália",
    populacao: "25 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País continental localizado na Oceania, famoso por cangurus.",
      "Nação com a maior barreira de corais de todo o mundo.",
      "Migrou da confederação da Oceania para a Ásia em 2006.",
      "Tim Cahill é o maior artilheiro do país em Copas (5 gols).",
      "Chegou às oitavas de final em 2006 e 2022."
    ]
  },
  {
    nome: "Olympiastadion",
    nomeCompleto: "Olympiastadion Berlin",
    imagem: "imagescopa/olympiastadium_sat.jpg",
    local: "Berlim",
    pais: "Alemanha",
    populacao: "83 milhões",
    participacoes: "20",
    titulos: "4",
    ultimaCopa: "2022",
    dicas: [
      "Potência europeia conhecida por sua engenharia e cerveja.",
      "País que possui a maior economia da União Europeia.",
      "Tetracampeã mundial (1954, 1974, 1990 e 2014).",
      "Miroslav Klose é o maior artilheiro da história das Copas (16 gols).",
      "Sua seleção aplicou o histórico 7 a 1 no Brasil em 2014."
    ]
  },
  {
    nome: "Ergilio Hato",
    nomeCompleto: "Estádio Ergilio Hato",
    imagem: "imagescopa/ergilio_sat.jpg",
    local: "Willemstad",
    pais: "Curaçao",
    populacao: "155 mil",
    participacoes: "0",
    titulos: "0",
    ultimaCopa: "Nenhuma",
    dicas: [
      "Ilha caribenha que faz parte do Reino dos Países Baixos.",
      "Famosa por suas casas coloridas e águas cristalinas.",
      "Nunca se classificou para uma fase final de Copa do Mundo.",
      "Até 2010, seus jogadores defendiam as Antilhas Holandesas.",
      "Sua seleção é filiada à CONCACAF e busca vaga inédita em 2026."
    ]
  },
  {
    nome: "Alassane Ouattara",
    nomeCompleto: "Stade Olympique Alassane Ouattara",
    imagem: "imagescopa/alassane_sat.jpg",
    local: "Abidjan",
    pais: "Costa do Marfim",
    populacao: "28 milhões",
    participacoes: "3",
    titulos: "0",
    ultimaCopa: "2014",
    dicas: [
      "Nação do oeste africano, maior produtora de cacau do mundo.",
      "Conhecida pelo apelido de 'Os Elefantes'.",
      "Participou de 3 Copas seguidas (2006, 2010 e 2014).",
      "Didier Drogba é o maior ídolo e artilheiro da história da seleção.",
      "Nunca conseguiu avançar da fase de grupos em mundiais."
    ]
  },
  {
    nome: "Olímpico Atahualpa",
    nomeCompleto: "Estádio Olímpico Atahualpa",
    imagem: "imagescopa/atahualpa_sat.jpg",
    local: "Quito",
    pais: "Equador",
    populacao: "18 milhões",
    participacoes: "4",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País sul-americano atravessado pela linha do equador.",
      "Dono das Ilhas Galápagos, local de estudos de Charles Darwin.",
      "Sua melhor campanha foi em 2006, chegando às oitavas de final.",
      "Enner Valencia marcou os últimos 6 gols do país em Copas.",
      "Venceu o jogo de abertura da Copa de 2022 contra o Catar."
    ]
  },
  {
    nome: "Johann Cruijff ArenA",
    nomeCompleto: "Johann Cruijff ArenA",
    imagem: "imagescopa/ajaxarena_sat.jpg",
    local: "Amsterdã",
    pais: "Países Baixos",
    populacao: "17 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País europeu famoso por canais, tulipas e moinhos de vento.",
      "Grande parte do seu território está abaixo do nível do mar.",
      "É a seleção com mais finais disputadas sem nunca vencer (3 vezes).",
      "Ficou famosa pelo 'Futebol Total' na década de 70.",
      "Goleou a então campeã Espanha por 5 a 1 no mundial de 2014."
    ]
  },
  {
    nome: "Nacional do Japão",
    nomeCompleto: "Estádio Nacional do Japão",
    imagem: "imagescopa/japao_sat.jpg",
    local: "Tóquio",
    pais: "Japão",
    populacao: "125 milhões",
    participacoes: "7",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Arquipélago no leste asiático conhecido como 'Terra do Sol Nascente'.",
      "Nação líder mundial em robótica e animações (animes).",
      "Sediou a primeira Copa do Mundo na Ásia (2002) em parceria.",
      "Venceu Alemanha e Espanha na mesma Copa em 2022.",
      "Chegou às oitavas de final em 4 ocasiões (2002, 10, 18, 22)."
    ]
  },
  {
    nome: "Hammadi Agrebi",
    nomeCompleto: "Estádio Olímpico Hammadi Agrebi",
    imagem: "imagescopa/agrebi_sat.jpg",
    local: "Radès",
    pais: "Tunísia",
    populacao: "12 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação do norte da África que abriga as ruínas de Cartago.",
      "Possui vasta costa mediterrânea e parte do deserto do Saara.",
      "Primeira seleção africana a vencer um jogo em Copas (1978).",
      "Venceu a França (então campeã) na fase de grupos de 2022.",
      "Nunca passou da primeira fase em suas 6 participações."
    ]
  },
  {
    nome: "Rei Balduíno",
    nomeCompleto: "Estádio Rei Balduíno",
    imagem: "imagescopa/reibalduino_sat.jpg",
    local: "Bruxelas",
    pais: "Bélgica",
    populacao: "11 milhões",
    participacoes: "14",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Pequeno país europeu sede da União Europeia e da OTAN.",
      "Famoso mundialmente por seus waffles, batatas fritas e cervejas.",
      "Sua melhor campanha foi o 3º lugar na Copa da Rússia em 2018.",
      "Eliminou o Brasil nas quartas de final do mundial de 2018.",
      "Ficou conhecida recentemente pela sua 'Geração de Ouro'."
    ]
  },
  {
    nome: "Internacional do Cairo",
    nomeCompleto: "Estádio Internacional do Cairo",
    imagem: "imagescopa/cairo_sat.jpg",
    local: "Cairo",
    pais: "Egito",
    populacao: "109 milhões",
    participacoes: "3",
    titulos: "0",
    ultimaCopa: "2018",
    dicas: [
      "Nação que liga a África ao Oriente Médio, famosa pelas pirâmides.",
      "País atravessado pelo Rio Nilo, um dos mais longos do mundo.",
      "Primeira seleção africana a disputar uma Copa do Mundo (1934).",
      "Teve o jogador mais velho a atuar em Copas: Essam El-Hadary (45 anos).",
      "Sua maior estrela, Mohamed Salah, marcou 2 gols em 2018."
    ]
  },
  {
    nome: "Azadi",
    nomeCompleto: "Estádio Azadi",
    imagem: "imagescopa/azadi_sat.jpg",
    local: "Teerã",
    pais: "Irã",
    populacao: "87 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País do Oriente Médio, antigo Império Persa.",
      "Dono de uma das maiores reservas de petróleo e gás do mundo.",
      "Venceu os EUA em 1998 em um dos jogos mais políticos das Copas.",
      "Sua seleção é conhecida pelo apelido de 'Team Melli'.",
      "Quase empatou com a Argentina de Messi em 2014 (perdeu no fim)."
    ]
  },
  {
    nome: "Eden Park",
    nomeCompleto: "Eden Park",
    imagem: "imagescopa/edenpark_sat.jpg",
    local: "Auckland",
    pais: "Nova Zelândia",
    populacao: "5 milhões",
    participacoes: "2",
    titulos: "0",
    ultimaCopa: "2010",
    dicas: [
      "País insular na Oceania, local de filmagem de 'Senhor dos Anéis'.",
      "Famoso pela cultura Maori e a dança Haka.",
      "Única seleção invicta na Copa de 2010 (3 empates).",
      "Foi eliminada em 2010 sem perder, ficando à frente da Itália.",
      "Sua primeira participação foi no mundial da Espanha em 1982."
    ]
  },
  {
    nome: "Santiago Bernabéu",
    nomeCompleto: "Estádio Santiago Bernabéu",
    imagem: "imagescopa/santiberna_sat.jpg",
    local: "Madri",
    pais: "Espanha",
    populacao: "47 milhões",
    participacoes: "16",
    titulos: "1",
    ultimaCopa: "2022",
    dicas: [
      "País da Península Ibérica famoso por touradas e flamenco.",
      "Nação com o segundo maior número de turistas no mundo.",
      "Campeã mundial em 2010 com o famoso estilo 'Tiki-taka'.",
      "Andrés Iniesta marcou o gol do título na prorrogação contra a Holanda.",
      "Sediou a Copa de 1982, vencida pela Itália."
    ]
  },
  {
    nome: "Nacional de Praia",
    nomeCompleto: "Estádio Nacional de Cabo Verde",
    imagem: "imagescopa/praia_sat",
    local: "Praia",
    pais: "Cabo Verde",
    populacao: "560 mil",
    participacoes: "0",
    titulos: "0",
    ultimaCopa: "Nenhuma",
    dicas: [
      "Arquipélago vulcânico no Oceano Atlântico, ao largo da África.",
      "País de língua portuguesa conhecido por sua música 'Morna'.",
      "É a sua primeira participação em copas do mundo.",
      "Chegou às quartas de final da Copa Africana de Nações em 2013.",
      "Sua seleção é carinhosamente chamada de 'Tubarões Azuis'."
    ]
  },
  {
    nome: "Internacional Rei Fahd",
    nomeCompleto: "Estádio Internacional Rei Fahd",
    imagem: "imagescopa/reifahd_sat.jpg",
    local: "Riade",
    pais: "Arábia Saudita",
    populacao: "35 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Maior país do Oriente Médio, berço do Islamismo.",
      "Nação que abriga as cidades sagradas de Meca e Medina.",
      "Venceu a futura campeã Argentina na estreia da Copa de 2022.",
      "Sua melhor campanha foi o 12º lugar em 1994 (oitavas de final).",
      "Saeed Al-Owairan marcou um dos gols mais bonitos da história em 1994."
    ]
  },
  {
    nome: "Centenário",
    nomeCompleto: "Estádio Centenário",
    imagem: "imagescopa/centenario_sat.jpg",
    local: "Montevidéu",
    pais: "Uruguai",
    populacao: "3,5 milhões",
    participacoes: "14",
    titulos: "2",
    ultimaCopa: "2022",
    dicas: [
      "Pequeno país sul-americano famoso pelo churrasco e mate.",
      "Nação com o maior consumo de carne bovina per capita.",
      "Primeiro campeão mundial da história (1930) e sediou o torneio.",
      "Protagonizou o 'Maracanazo' em 1950, vencendo o Brasil na final.",
      "Chegou à semifinal em 2010 com grande atuação de Diego Forlán."
    ]
  },
  {
    nome: "Stade de France",
    nomeCompleto: "Stade de France",
    imagem: "imagescopa/stade_france_sat.jpg",
    local: "Saint-Denis",
    pais: "França",
    populacao: "67 milhões",
    participacoes: "16",
    titulos: "2",
    ultimaCopa: "2022",
    dicas: [
      "País europeu famoso pela moda, museu do Louvre e Torre Eiffel.",
      "Nação com o maior número de fusos horários devido a territórios.",
      "Bicampeã mundial (1998 e 2018).",
      "Zidane marcou dois gols de cabeça na final de 1998.",
      "Kylian Mbappé marcou um hat-trick na final de 2022, mas foi vice."
    ]
  },
  {
    nome: "Léopold Sédar Senghor",
    nomeCompleto: "Stade Léopold Sédar Senghor",
    imagem: "imagescopa/leopold_sat.jpg",
    local: "Dakar",
    pais: "Senegal",
    populacao: "17 milhões",
    participacoes: "3",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação do oeste africano, ponto mais ocidental do continente.",
      "Famosa pelo Rally Dakar e a Ilha de Gorée.",
      "Chocou o mundo ao vencer a campeã França na estreia de 2002.",
      "Chegou às quartas de final em sua primeira participação (2002).",
      "É a seleção apelidada de 'Os Leões de Teranga'."
    ]
  },
  {
    nome: "Ullevaal Stadion",
    nomeCompleto: "Ullevaal Stadion",
    imagem: "imagescopa/ullevaal_sat.jpg",
    local: "Oslo",
    pais: "Noruega",
    populacao: "5,4 milhões",
    participacoes: "3",
    titulos: "0",
    ultimaCopa: "1998",
    dicas: [
      "País nórdico conhecido por seus fiordes e a Aurora Boreal.",
      "Nação que lidera o ranking de Índice de Desenvolvimento Humano.",
      "Venceu o Brasil por 2 a 1 na fase de grupos da Copa de 1998.",
      "Chegou às oitavas de final em 1994 e 1998.",
      "É uma das poucas seleções que tem histórico positivo contra o Brasil."
    ]
  },
  {
    nome: "Más Monumental",
    nomeCompleto: "Estádio Monumental de Núñez",
    imagem: "imagescopa/masmonumental_sat.jpg",
    local: "Buenos Aires",
    pais: "Argentina",
    populacao: "45 milhões",
    participacoes: "18",
    titulos: "3",
    ultimaCopa: "2022",
    dicas: [
      "País sul-americano berço do Tango e da Patagônia.",
      "Possui o pico mais alto das Américas: o Aconcágua.",
      "Tricampeã mundial (1978, 1986 e 2022).",
      "Messi liderou o time na conquista do tricampeonato no Catar.",
      "Protagonizou com o Brasil a maior rivalidade do futebol sul-americano."
    ]
  },
  {
    nome: "5 de Julho de 1962",
    nomeCompleto: "Estádio 5 de Julho de 1962",
    imagem: "imagescopa/cincojulho_sat.jpg",
    local: "Argel",
    pais: "Argélia",
    populacao: "44 milhões",
    participacoes: "4",
    titulos: "0",
    ultimaCopa: "2014",
    dicas: [
      "Maior país da África e do mundo árabe em extensão.",
      "Banhado pelo Mediterrâneo e dominado pelo deserto do Saara.",
      "Venceu a poderosa Alemanha Ocidental na Copa de 1982.",
      "Levou a Alemanha à prorrogação nas oitavas de final de 2014.",
      "Sua seleção é conhecida pelo apelido de 'As Raposas do Deserto'."
    ]
  },
  {
    nome: "Ernst-Happel",
    nomeCompleto: "Ernst-Happel-Stadion",
    imagem: "imagescopa/ernst_sat.jpg",
    local: "Viena",
    pais: "Áustria",
    populacao: "9 milhões",
    participacoes: "7",
    titulos: "0",
    ultimaCopa: "1998",
    dicas: [
      "País europeu alpino berço de compositores como Mozart.",
      "Nação famosa por sua arquitetura imperial e valsas.",
      "Conquistou o 3º lugar na Copa do Mundo de 1954.",
      "Participou do 'Jogo da Vergonha' contra a Alemanha em 1982.",
      "Sua última vitória em Copas foi contra os EUA em 1990."
    ]
  },
  {
    nome: "Internacional de Amã",
    nomeCompleto: "Estádio Internacional de Amã",
    imagem: "imagescopa/aman_sat.jpg",
    local: "Amã",
    pais: "Jordânia",
    populacao: "11 milhões",
    participacoes: "0",
    titulos: "0",
    ultimaCopa: "Nenhuma",
    dicas: [
      "País do Oriente Médio que abriga a cidade antiga de Petra.",
      "Faz fronteira com o Mar Morto, o ponto mais baixo da Terra.",
      "Nunca se classificou para uma fase final de Copa do Mundo.",
      "Chegou à repescagem intercontinental para a Copa 2014.",
      "Foi vice-campeã da Copa da Ásia em 2023."
    ]
  },
  {
    nome: "Estádio da Luz",
    nomeCompleto: "Estádio do Sport Lisboa e Benfica - Luz",
    imagem: "imagescopa/slbluz_sat.jpg",
    local: "Lisboa",
    pais: "Portugal",
    populacao: "10 milhões",
    participacoes: "8",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Nação mais ocidental da Europa continental, famosa pelo fado.",
      "País com as fronteiras mais antigas da Europa.",
      "Sua melhor campanha foi o 3º lugar em 1966 com Eusébio.",
      "Cristiano Ronaldo marcou gols em 5 edições diferentes (recorde).",
      "Chegou à semifinal em 2006, sob o comando de Felipão."
    ]
  },
  {
    nome: "Milliy Stadium",
    nomeCompleto: "Milliy Stadium",
    imagem: "imagescopa/milliy_sat.jpg",
    local: "Tashkent",
    pais: "Uzbequistão",
    populacao: "35 milhões",
    participacoes: "0",
    titulos: "0",
    ultimaCopa: "Nenhuma",
    dicas: [
      "País da Ásia Central, importante parada da Rota da Seda.",
      "Um dos dois únicos países 'duplamente encravados' no mundo.",
      "Busca sua classificação inédita para a Copa do Mundo FIFA.",
      "É uma potência regional na Ásia Central, vencendo a Copa da Ásia em 1994.",
      "Quase se classificou para as Copas de 2006 e 2014 via repescagem."
    ]
  },
  {
    nome: "Atanasio Girardot",
    nomeCompleto: "Estádio Atanasio Girardot",
    imagem: "imagescopa/atanasio_sat.jpg",
    local: "Medellín",
    pais: "Colômbia",
    populacao: "51 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2018",
    dicas: [
      "Nação sul-americana famosa pelo café e esmeraldas.",
      "Único país da América do Sul com costas no Atlântico e Pacífico.",
      "James Rodríguez foi o artilheiro da Copa de 2014 (6 gols).",
      "Chegou às quartas de final em 2014, sua melhor campanha.",
      "Goleou a Argentina por 5 a 0 nas Eliminatórias para a Copa 94."
    ]
  },
  {
    nome: "Wembley",
    nomeCompleto: "Wembley Stadium",
    imagem: "imagescopa/wembley_sat.jpg",
    local: "Londres",
    pais: "Inglaterra",
    populacao: "56 milhões",
    participacoes: "16",
    titulos: "1",
    ultimaCopa: "2022",
    dicas: [
      "Nação do Reino Unido, berço do futebol moderno.",
      "Famosa pela monarquia, chá das cinco e os Beatles.",
      "Campeã mundial em 1966 atuando em casa.",
      "Geoff Hurst é o único a marcar 3 gols em uma final de Copa.",
      "Harry Kane foi o artilheiro da Copa de 2018 (6 gols)."
    ]
  },
  {
    nome: "Stadion Maksimir",
    nomeCompleto: "Stadion Maksimir",
    imagem: "imagescopa/maksimir_sat.jpg",
    local: "Zagreb",
    pais: "Croácia",
    populacao: "4 milhões",
    participacoes: "6",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País europeu com mais de mil ilhas no Mar Adriático.",
      "Nação famosa pela invenção da gravata e o seriado Game of Thrones.",
      "Foi vice-campeã mundial em 2018, perdendo para a França.",
      "Conquistou o 3º lugar em sua estreia como país independente (1998).",
      "Luka Modric foi eleito o melhor jogador da Copa de 2018."
    ]
  },
  {
    nome: "Accra Sports",
    nomeCompleto: "Accra Sports Stadium",
    imagem: "imagescopa/accra_sat.jpg",
    local: "Acra",
    pais: "Gana",
    populacao: "32 milhões",
    participacoes: "4",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "País africano no Golfo da Guiné, segundo maior produtor de ouro.",
      "Primeira nação africana a declarar independência do Reino Unido.",
      "Ficou a um pênalti de ser a 1ª africana em uma semifinal (2010).",
      "Asamoah Gyan é o maior artilheiro africano em Copas (6 gols).",
      "Sua seleção é conhecida pelo apelido de 'Black Stars'."
    ]
  },
  {
    nome: "Rommel Fernández",
    nomeCompleto: "Estádio Rommel Fernández Gutiérrez",
    imagem: "imagescopa/rommel_sat.jpg",
    local: "Cidade do Panamá",
    pais: "Panamá",
    populacao: "4,3 milhões",
    participacoes: "1",
    titulos: "0",
    ultimaCopa: "2018",
    dicas: [
      "Nação da América Central famosa pelo canal que liga dois oceanos.",
      "Único lugar do mundo onde se vê o sol nascer no Pacífico e se pôr no Atlântico.",
      "Sua única participação em Copas foi na Rússia em 2018.",
      "Felipe Baloy marcou o primeiro e único gol do país em Copas.",
      "Classificou-se para 2018 eliminando os Estados Unidos."
    ]
  },
  {
    nome: "Strawberry Arena",
    nomeCompleto: "Strawberry Arena",
    imagem: "imagescopa/strawberry_sat.jpg",
    local: "Solna",
    pais: "Suécia",
    populacao: "10 milhões",
    participacoes: "12",
    titulos: "0",
    ultimaCopa: "2018",
    dicas: [
      "País nórdico berço da IKEA, ABBA e do prêmio Nobel.",
      "Conhecido por seu sistema de bem-estar social exemplar.",
      "Foi vice-campeã mundial em 1958, perdendo para o Brasil de Pelé.",
      "Conquistou o 3º lugar nos mundiais de 1950 e 1994.",
      "Sediou a Copa de 1958, a primeira vencida pelo Brasil."
    ]
  },
  {
    nome: "Olímpico Atatürk",
    nomeCompleto: "Estádio Olímpico Atatürk",
    imagem: "imagescopa/ataturk_sat.jpg",
    local: "Istambul",
    pais: "Turquia",
    populacao: "85 milhões",
    participacoes: "2",
    titulos: "0",
    ultimaCopa: "2002",
    dicas: [
      "Nação transcontinental que une a Europa e a Ásia.",
      "País famoso por seus bazares, mesquitas e o chá turco.",
      "Conquistou o 3º lugar histórico na Copa de 2002.",
      "Hakan Sukur marcou o gol mais rápido da história das Copas (11 seg).",
      "Eliminou o anfitrião Japão e a Coreia do Sul em 2002."
    ]
  },
  {
    nome: "Fortuna Arena",
    nomeCompleto: "Fortuna Arena",
    imagem: "imagescopa/fortuna_sat.jpg",
    local: "Praga",
    pais: "Chéquia",
    populacao: "10,5 milhões",
    participacoes: "9",
    titulos: "0",
    ultimaCopa: "2006",
    dicas: [
      "País europeu famoso por Praga, a 'Cidade das Cem Torres'.",
      "Nação com o maior consumo de cerveja per capita do mundo.",
      "Foi vice-campeã mundial duas vezes como Tchecoslováquia (1934 e 1962).",
      "Perdeu a final de 1962 para o Brasil de Garrincha e Amarildo.",
      "Sua única Copa como país independente foi na Alemanha em 2006."
    ]
  },
  {
    nome: "Bilino Polje",
    nomeCompleto: "Estádio Bilino Polje",
    imagem: "imagescopa/dzeko_sat.jpg",
    local: "Zenica",
    pais: "Bósnia e Herzegovina",
    populacao: "3,2 milhões",
    participacoes: "1",
    titulos: "0",
    ultimaCopa: "2014",
    dicas: [
      "Nação balcânica montanhosa famosa por sua herança cultural mista.",
      "Sua capital, Sarajevo, sediou os Jogos Olímpicos de Inverno de 1984.",
      "Sua única participação em Copas foi no Brasil em 2014.",
      "Venceu o Irã por 3 a 1 para conquistar sua primeira vitória em Copas.",
      "Edin Dzeko é o maior artilheiro e ídolo da história da seleção."
    ]
  },
  {
    nome: "Estádio dos Mártires",
    nomeCompleto: "Stade des Martyrs",
    imagem: "imagescopa/martires_sat.jpg",
    local: "Kinshasa",
    pais: "RD Congo",
    populacao: "95 milhões",
    participacoes: "1",
    titulos: "0",
    ultimaCopa: "1974",
    dicas: [
      "Segundo maior país da África, coberto por densas florestas tropicais.",
      "País com as maiores reservas de cobalto e cobre do mundo.",
      "Participou da Copa de 1974 sob o antigo nome de Zaire.",
      "Foi a primeira seleção da África subsaariana a disputar uma Copa.",
      "Ficou famosa pelo lance inusitado da falta contra o Brasil em 74."
    ]
  },
  {
    nome: "Internacional de Basra",
    nomeCompleto: "Estádio Internacional de Basra",
    imagem: "imagescopa/basra_sat.jpg",
    local: "Basra",
    pais: "Iraque",
    populacao: "43 milhões",
    participacoes: "1",
    titulos: "0",
    ultimaCopa: "1986",
    dicas: [
      "Berço da Mesopotâmia, uma das civilizações mais antigas do mundo.",
      "Atravessado pelos rios Tigre e Eufrates na Ásia Ocidental.",
      "Sua única participação em Copas foi no México em 1986.",
      "Ahmed Radhi marcou o único gol do país em mundiais até hoje.",
      "Venceu a Copa da Ásia de 2007 em meio à guerra no país."
    ]
  },

  // estádio da final
  {
    nome: "MetLife Stadium",
    nomeCompleto: "MetLife Stadium",
    imagem: "imagescopa/metlife_sat.jpg",
    local: "East Rutherford",
    pais: "Estados Unidos",
    populacao: "333 milhões",
    participacoes: "11",
    titulos: "0",
    ultimaCopa: "2022",
    dicas: [
      "Localizado próximo a Nova York, na América do Norte.",
      "País que possui o maior sistema universitário do mundo.",
      "Palco escolhido para sediar a final da Copa do Mundo de 2026.",
      "Sua melhor marca foi o 3º lugar na edição inaugural em 1930.",
      "Eliminou a Colômbia e avançou às oitavas na Copa de 1994."
    ]
  },

  // todo mundo indo pra acapulco, menos os amigos (18,22,26)
  {
    nome: "Stadio Olimpico",
    nomeCompleto: "Estádio Olímpico de Roma",
    imagem: "imagescopa/olimpico_sat.jpg",
    local: "Roma",
    pais: "Itália",
    populacao: "59 milhões",
    participacoes: "18",
    titulos: "4",
    ultimaCopa: "2014 - Não estará presente.",
    dicas: [
      "País europeu em formato de bota, berço do Império Romano.",
      "Nação com o maior número de patrimônios da UNESCO no mundo.",
      "Tetracampeã mundial, vencendo em 1934, 1938, 1982 e 2006.",
      "Única seleção europeia a vencer duas Copas seguidas (34 e 38).",
      "Ficou de fora das últimas duas edições da Copa (2018 e 2022)."
    ]
  },
  {
    nome: "San Siro",
    nomeCompleto: "Estádio Giuseppe Meazza",
    imagem: "imagescopa/konami_sat.jpg",
    local: "Milão",
    pais: "Itália",
    populacao: "59 milhões",
    participacoes: "18",
    titulos: "4",
    ultimaCopa: "2014 - Não estará presente.",
    dicas: [
      "Nação mediterrânea famosa pela pizza, massas e alta costura.",
      "País que abriga dois enclaves: Vaticano e San Marino.",
      "Dino Zoff foi o campeão mais velho da história (40 anos em 1982).",
      "Venceu a França nos pênaltis na final de 2006 na Alemanha.",
      "Sua seleção é conhecida mundialmente como a 'Azzurra'."
    ]
  },
  {
    nome: "Juventus Stadium",
    nomeCompleto: "Allianz Stadium",
    imagem: "imagescopa/velhasenhora_sat.jpg",
    local: "Turim",
    pais: "Itália",
    populacao: "59 milhões",
    participacoes: "18",
    titulos: "4",
    ultimaCopa: "2014 - Não estará presente.",
    dicas: [
      "País europeu famoso por marcas como Ferrari e Lamborghini.",
      "Possui o maior número de vulcões ativos da Europa.",
      "Protagonizou a 'Tragédia do Sarriá' eliminando o Brasil em 1982.",
      "Roberto Baggio perdeu o pênalti que deu o título ao Brasil em 94.",
      "Sediou a Copa do Mundo em duas ocasiões (1934 e 1990)."
    ]
  }
];
