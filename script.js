// =======================
// ORDEM ALEATÓRIA FIXA
// =======================
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// salva a ordem uma única vez para todos os usuários
let ordemEstadios = JSON.parse(localStorage.getItem("ordem_estadios"));
if (!ordemEstadios) {
  ordemEstadios = embaralhar(estadios.map((_, i) => i));
  localStorage.setItem("ordem_estadios", JSON.stringify(ordemEstadios));
}

// =======================
// ESTÁDIO DO DIA
// =======================
const dataInicial = new Date("2026-03-01T00:00:00-03:00");
const agora = new Date();

// força horário de Brasília
const utcOffset = -3; // GMT-3
const hoje = new Date(
  agora.getUTCFullYear(),
  agora.getUTCMonth(),
  agora.getUTCDate(),
  agora.getUTCHours() + utcOffset,
  agora.getUTCMinutes(),
  agora.getUTCSeconds()
);

const msPorDia = 1000 * 60 * 60 * 24;
let diasPassados = Math.floor((hoje - dataInicial) / msPorDia);
if (diasPassados < 0) diasPassados = 0;

// índice fixo para o estádio do dia
const indiceOrdem = diasPassados % ordemEstadios.length;
const estadioAtual = estadios[ordemEstadios[indiceOrdem]];

// chave única do dia
const chaveDoDia = `lacanchagame_${indiceOrdem}`;

// =======================
// VARIÁVEIS DO JOGO
// =======================
let tentativa = 1;

const respostaCorreta = estadioAtual.nome
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[_-]/g, " ")
  .trim();

const dicas = estadioAtual.dicas;

const dicasDiv = document.getElementById("dicas");
const imagem = document.getElementById("imagem");
const input = document.getElementById("resposta");
const bolas = document.querySelectorAll(".bola");
const creditoImagem = document.getElementById("creditoImagem");

// imagem dinâmica
imagem.style.backgroundImage = `url(${estadioAtual.imagem})`;

// =======================
// BLOQUEIO DIÁRIO
// =======================
const jaJogouHoje = localStorage.getItem(chaveDoDia);

if (jaJogouHoje) {
  bloquearJogo();
  mostrarBloqueio();
} else {
  const primeiraDica = document.createElement("p");
  primeiraDica.innerText = `Dica 1: ${dicas[0]}`;
  dicasDiv.appendChild(primeiraDica);
}

// =======================
// FUNÇÃO PRINCIPAL
// =======================
function verificar() {
  const respostaUsuario = input.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[_-]/g, " ")
    .trim();

  input.value = "";

  // ACERTO
  if (respostaUsuario === respostaCorreta) {
    imagem.style.clipPath = "inset(0 0 0 0)";
    mostrarResultado(true);
    mostrarCreditoImagem();
    localStorage.setItem(chaveDoDia, "jogado");
    bloquearJogo();
    return;
  }

  // ERRO
  bolas[tentativa - 1].classList.add("erro");
  tentativa++;

  // FIM DE JOGO
  if (tentativa > dicas.length) {
    imagem.style.clipPath = "inset(0 0 0 0)";
    mostrarResultado(false);
    mostrarCreditoImagem();
    localStorage.setItem(chaveDoDia, "jogado");
    bloquearJogo();
    return;
  }

  // nova dica
  const novaDica = document.createElement("p");
  novaDica.innerText = `Dica ${tentativa}: ${dicas[tentativa - 1]}`;
  dicasDiv.appendChild(novaDica);

  // revelar imagem
  const porcentagemEscondida = 100 - tentativa * 15;
  imagem.style.clipPath = `inset(0 0 ${porcentagemEscondida}% 0)`;
}

// =======================
// FUNÇÕES AUXILIARES
// =======================
function bloquearJogo() {
  input.disabled = true;
}

function mostrarCreditoImagem() {
  if (creditoImagem) {
    creditoImagem.classList.add("visivel");
  }
}

function mostrarBloqueio() {
  const resultado = document.getElementById("resultado");
  const mensagem = document.getElementById("mensagemFinal");
  const estatistica = document.getElementById("estatistica");

  mensagem.innerText = "⏳ Você já jogou o desafio de hoje";
  estatistica.innerText = "Volte amanhã para um novo estádio ⚽";

  resultado.classList.remove("oculto");
  mostrarCreditoImagem();
  iniciarContador();
}

function mostrarResultado(acertou) {
  const resultado = document.getElementById("resultado");
  const mensagem = document.getElementById("mensagemFinal");
  const estatistica = document.getElementById("estatistica");

  const link = "https://lacanchagame.com.br/";
  let textoShare = "";

  if (acertou) {
    mensagem.innerText = "🎉 Acertei o estádio de hoje!";
    estatistica.innerText = `Resolvi em ${tentativa} chutes no La Cancha ⚽`;

    textoShare = `Resolvi o estádio de hoje no La Cancha em ${tentativa} chutes! ⚽🔥\nAcesse: ${link}`;
  } else {
    mensagem.innerText = "❌ Não foi dessa vez!";
    estatistica.innerText = "Não resolvi o desafio de hoje no La Cancha 😢";

    textoShare = `Não resolvi o desafio de hoje no La Cancha 😢⚽\nAcesse: ${link}`;
  }

  const textoCodificado = encodeURIComponent(textoShare);

  document.getElementById("shareTwitter").href =
    `https://twitter.com/intent/tweet?text=${textoCodificado}`;

  document.getElementById("shareWhats").href =
    `https://wa.me/?text=${textoCodificado}`;

  resultado.classList.remove("oculto");
  iniciarContador();
}

// =======================
// CONTADOR PARA 00:00
// =======================
function iniciarContador() {
  function atualizar() {
    const agora = new Date();
    const proximoDia = new Date(agora);
    proximoDia.setHours(24, 0, 0, 0);

    const diff = proximoDia - agora;
    if (diff <= 0) return;

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const texto = `⏳ Novo desafio em ${h}h ${m}m ${s}s`;

    document.querySelectorAll(".contador").forEach(el => {
      el.innerText = texto;
    });
  }

  atualizar();
  setInterval(atualizar, 1000);
}