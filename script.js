// =======================
// ORDEM ALEATÓRIA FIXA PARA TODOS
// =======================
const ordemEstadios = [
  10, 3, 5, 1, 7, 2, 4, 6, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 33, 34, 32, 31
]; // coloque aqui todos os índices dos seus estádios na ordem que quiser

// =======================
// ESTÁDIO DO DIA
// =======================
function pegarDataBrasil() {
  const agora = new Date();
  // Ajusta para GMT-3 (horário de Brasília)
  const offset = -3 * 60; // minutos
  const utc = agora.getTime() + agora.getTimezoneOffset() * 60000;
  return new Date(utc + offset * 60000);
}

const dataInicial = new Date("2026-03-01T00:00:00-03:00");
const hoje = pegarDataBrasil();

const msPorDia = 1000 * 60 * 60 * 24;
let diasPassados = Math.floor((hoje - dataInicial) / msPorDia);
if (diasPassados < 0) diasPassados = 0;

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

  const link = "https://lacanchagame.com.br";
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
// CONTADOR / TRAVA MEIA-NOITE
// =======================
function iniciarContador() {
  function atualizar() {
    const agora = pegarDataBrasil();
    const amanha = new Date(agora);
    amanha.setHours(24, 0, 0, 0);

    const diff = amanha - agora;
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