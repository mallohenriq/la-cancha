// ==========================================
// CONFIGURAÇÃO DE DATAS
// ==========================================
// A contagem oficial começa amanhã: 18 de Maio de 2026
const DATA_INICIO = new Date(2026, 4, 18); // Mês 4 é Maio no JavaScript

const agora = new Date();
const utc = agora.getTime() + (agora.getTimezoneOffset() * 60000);
const hojeBrasil = new Date(utc - (3600000 * 3));

const params = new URLSearchParams(window.location.search);
const dataUrl = params.get('d');
const dataDeJogo = dataUrl ? new Date(dataUrl + "T00:00:00") : hojeBrasil;

let diaCompeticao = Math.floor((dataDeJogo - DATA_INICIO) / (1000 * 60 * 60 * 24)) + 1;
// Se alguém tentar acessar antes da data, força o Dia 1
if (diaCompeticao < 1) diaCompeticao = 1; 
// ==========================================
// LÓGICA DE SELEÇÃO DOS ESTÁDIOS (CORRIGIDA)
// ==========================================
let indiceDoDia;
const indicesReservados = [0, 60, 61, 62, 63]; 

// Estádios Fixos do Calendário
if (diaCompeticao === 5) indiceDoDia = 0; // Maracanã
else if (diaCompeticao === 18) indiceDoDia = 61; // Stadio Olimpico
else if (diaCompeticao === 22) indiceDoDia = 62; // San Siro
else if (diaCompeticao === 26) indiceDoDia = 63; // Juventus Stadium
else if (diaCompeticao === 64) indiceDoDia = 60; // MetLife Stadium (Final)
else {
    // 1. Pega todos os índices disponíveis (59 estádios para sorteio)
    const disponiveisParaSorteio = [];
    for (let i = 0; i < estadios.length; i++) {
        if (!indicesReservados.includes(i)) disponiveisParaSorteio.push(i);
    }
    
    // 2. Função para embaralhar como um baralho (semente fixa garante a mesma ordem sempre)
    function embaralharComSemente(array, semente) {
        let m = array.length, t, i;
        while (m) {
            semente = (semente * 9301 + 49297) % 233280;
            i = Math.floor((semente / 233280) * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    // 3. Cria a ordem oficial do campeonato (embaralhada usando o ano 2026 como semente)
    const ordemOficial = embaralharComSemente(disponiveisParaSorteio, 2026);

    // 4. Descobre quantos "dias normais" (sem contar os fixos) já se passaram
    let diasNormaisDecorridos = 0;
    const diasFixos = [5, 18, 22, 26, 64];
    for (let d = 1; d <= diaCompeticao; d++) {
        if (!diasFixos.includes(d)) diasNormaisDecorridos++;
    }

    // 5. Pega o estádio exato da lista, garantindo que NUNCA vai repetir
    indiceDoDia = ordemOficial[(diasNormaisDecorridos - 1) % ordemOficial.length];
}

const estadioAtual = estadios[indiceDoDia];
let tentativa = 1;
// ==========================================
// INTERFACE E DOM
// ==========================================
const input = document.getElementById("resposta");
const imagemDiv = document.getElementById("imagem");
const modalCalendario = document.getElementById("modal-calendario");
const listaSugestoes = document.getElementById("lista-sugestoes"); 
const chaveDoDia = `lacancha_copa_dia_${diaCompeticao}`;

function normalizar(t) { return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim(); }

imagemDiv.style.backgroundImage = `url(${estadioAtual.imagem})`;

// ==========================================
// SISTEMA DE TRAVA DEFINITIVA (LOCALSTORAGE)
// ==========================================
const estadoSalvo = localStorage.getItem(chaveDoDia);

if (estadoSalvo) {
    // Bloqueia interações se já jogou
    input.disabled = true;
    document.getElementById("confirmar").disabled = true;
    imagemDiv.style.clipPath = "inset(0 0 0 0)";
    
    setTimeout(() => {
        finalizar(estadoSalvo === "vitoria", true);
    }, 100);
} else {
    // Libera o jogo e mostra a primeira dica
    document.getElementById("dicas").innerHTML = `<p>Dica 1: ${estadioAtual.dicas[0]}</p>`;
}
// ==========================================
// CAIXA DE SELEÇÃO (AUTOCOMPLETE)
// ==========================================
input.addEventListener("input", function() {
    const val = normalizar(this.value);
    listaSugestoes.innerHTML = "";
    if (!val) { 
        listaSugestoes.classList.add("oculto"); 
        return; 
    }
    const filtrados = estadios.filter(e => 
        normalizar(e.nome).includes(val) || 
        normalizar(e.nomeCompleto).includes(val)
    );

    filtrados.forEach(e => {
        const li = document.createElement("li");
        li.innerText = e.nomeCompleto;
        li.onclick = () => {
            input.value = e.nomeCompleto;
            listaSugestoes.classList.add("oculto");
            verificar();
        };
        listaSugestoes.appendChild(li);
    });

    if (filtrados.length > 0) listaSugestoes.classList.remove("oculto");
    else listaSugestoes.classList.add("oculto");
});

document.addEventListener("click", (e) => {
    if (e.target !== input) listaSugestoes.classList.add("oculto");
});

// CALENDÁRIO E PROGRESSO
document.getElementById("btn-calendario").onclick = () => modalCalendario.classList.remove("oculto");
document.getElementById("fechar-calendario").onclick = () => modalCalendario.classList.add("oculto");

function updateProgress(isCorrect) {
    const dots = document.querySelectorAll(".dot");
    if (tentativa <= dots.length) {
        dots[tentativa - 1].innerText = isCorrect ? "🏆" : "🌎";
    }
}

// ==========================================
// LÓGICA DO JOGO
// ==========================================
function verificar() {
    const resp = normalizar(input.value);
    if(!resp) return;
    
    listaSugestoes.classList.add("oculto");
    
    if (resp === normalizar(estadioAtual.nome) || resp === normalizar(estadioAtual.nomeCompleto)) {
        updateProgress(true);
        localStorage.setItem(chaveDoDia, "vitoria"); 
        finalizar(true);
    } else {
        updateProgress(false);
        tentativa++;
        if (tentativa > 5) {
            localStorage.setItem(chaveDoDia, "derrota");
            finalizar(false);
        } else {
            imagemDiv.style.clipPath = `inset(0 0 ${80 - (tentativa-1)*20}% 0)`;
            const p = document.createElement("p");
            p.innerText = `Dica ${tentativa}: ${estadioAtual.dicas[tentativa-1]}`;
            document.getElementById("dicas").appendChild(p);
        }
    }
    input.value = "";
}
function finalizar(acertou, jaEstavaSalvo = false) {
    input.disabled = true;
    document.getElementById("confirmar").disabled = true;
    imagemDiv.style.clipPath = "inset(0 0 0 0)";
    document.getElementById("resultado").classList.remove("oculto");
    
    document.getElementById("resultadoImagem").src = estadioAtual.imagem;
    document.getElementById("resultadoNome").innerText = estadioAtual.nomeCompleto;
    document.getElementById("mensagemFinal").innerText = acertou ? "🥳 Acertei o estádio de hoje!" : "❌ Não foi desta vez!";
    
    if (jaEstavaSalvo) {
        document.getElementById("estatistica").innerText = "Você já jogou o desafio de hoje! ⚽";
    } else {
        document.getElementById("estatistica").innerText = acertou ? `Resolvi em ${tentativa} chutes no La Cancha ⚽` : "O desafio da Copa hoje estava difícil! 😢";
    }
    
    document.getElementById("info-local").innerText = estadioAtual.local;
    document.getElementById("info-pop").innerText = estadioAtual.populacao;
    document.getElementById("info-part").innerText = estadioAtual.participacoes;
    document.getElementById("info-ultima").innerText = estadioAtual.ultimaCopa;
    document.getElementById("info-titulos").innerHTML = estadioAtual.titulos + (diaCompeticao === 5 ? " <span class='destaque-especial'>(Maior campeão)</span>" : "");
    
    let paisHTML = estadioAtual.pais;
    if ([18, 22, 26].includes(diaCompeticao)) paisHTML += " <span class='destaque-especial'>(Não está nesta edição)</span>";
    document.getElementById("info-pais").innerHTML = paisHTML;

    const msg = acertou ? `Acertei o estádio da Copa (Dia ${diaCompeticao}) em ${tentativa} chutes!` : `Desafio da Copa difícil hoje! Dia ${diaCompeticao} `;
    const link = `\n\n🔗 Jogue: lacanchagame.com.br/copa`;
    document.getElementById("shareTwitter").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(msg + link)}`;
    document.getElementById("shareWhats").href = `https://wa.me/?text=${encodeURIComponent(msg + link)}`;
}

// ==========================================
// CALENDÁRIO DINÂMICO
// ==========================================
const lista = document.getElementById("lista-dias");
const diasDecorridos = Math.floor((hojeBrasil - DATA_INICIO) / 86400000) + 1;

// O calendário só exibe os dias se já tivermos passado do Dia 1
if (diasDecorridos > 0) {
    for (let i = 1; i <= diasDecorridos; i++) {
        const d = new Date(DATA_INICIO); d.setDate(DATA_INICIO.getDate() + (i - 1));
        const a = document.createElement("a");
        a.href = `?d=${d.toISOString().split('T')[0]}`;
        a.innerText = `Dia ${i}`;
        a.className = "dia-link";
        lista.appendChild(a);
    }
}
