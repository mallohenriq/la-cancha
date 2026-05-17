// ==========================================
// DATA E FUSO HORÁRIO (UTC-3 BRASÍLIA)
// ==========================================
const dataAtual = new Date();
const utc = dataAtual.getTime() + (dataAtual.getTimezoneOffset() * 60000);
const hojeBrasil = new Date(utc - (3600000 * 3));

const ano = hojeBrasil.getFullYear();
const mes = hojeBrasil.getMonth() + 1; 
const dia = hojeBrasil.getDate();

// ==========================================
// SELEÇÃO DO ESTÁDIO (SORTEIO GLOBAL)
// ==========================================
const semente = (ano * 10000) + (mes * 100) + dia;
const indiceDoDia = Math.abs(semente * 1103515245 + 12345) % estadios.length;

const estadioAtual = estadios[indiceDoDia];
const chaveDoDia = `lacancha_classic_${ano}_${mes}_${dia}`;

// ==========================================
// VARIÁVEIS E DOM
// ==========================================
let tentativa = 1;

const input = document.getElementById("resposta");
const imagemDiv = document.getElementById("imagem");
const dicasDiv = document.getElementById("dicas");
const listaSugestoes = document.getElementById("lista-sugestoes");
const dots = document.querySelectorAll(".dot");

function normalizar(t) { 
    return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim(); 
}

imagemDiv.style.backgroundImage = `url(${estadioAtual.imagem})`;
dicasDiv.innerHTML = `<p>Dica 1: ${estadioAtual.dicas[0]}</p>`;

// ==========================================
// BLOQUEIO DIÁRIO (LOCALSTORAGE)
// ==========================================
if (localStorage.getItem(chaveDoDia)) {
    finalizar(localStorage.getItem(chaveDoDia) === "vitoria");
}

// ==========================================
// AUTOCOMPLETE PREMIUM (COM ÍCONE)
// ==========================================
input.addEventListener("input", function() {
    const val = normalizar(this.value);
    listaSugestoes.innerHTML = "";
    
    if (!val || val.length < 2) { 
        listaSugestoes.classList.add("oculto"); 
        return; 
    }
    
    const filtrados = estadios.filter(e => 
        normalizar(e.nome).includes(val) || 
        normalizar(e.nomeCompleto).includes(val)
    );

    filtrados.forEach(e => {
        const li = document.createElement("li");
        li.innerHTML = `<span></span> ${e.nomeCompleto}`; 
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

// ==========================================
// LÓGICA DO JOGO
// ==========================================
function updateProgress(acertou) {
    if (tentativa <= dots.length) {
        dots[tentativa - 1].innerText = acertou ? "⚽" : "❌";
    }
}

function verificar() {
    const resp = normalizar(input.value);
    if (!resp) return;

    listaSugestoes.classList.add("oculto");
    const correto = normalizar(estadioAtual.nome);
    const completo = normalizar(estadioAtual.nomeCompleto);

    if (resp === correto || resp === completo) {
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
            // Revelar mais da imagem
            imagemDiv.style.clipPath = `inset(0 0 ${80 - (tentativa-1)*20}% 0)`;
            // Adicionar nova dica
            const p = document.createElement("p");
            p.innerText = `Dica ${tentativa}: ${estadioAtual.dicas[tentativa-1]}`;
            dicasDiv.appendChild(p);
        }
    }
    input.value = "";
}

function finalizar(acertou) {
    input.disabled = true;
    document.getElementById("confirmar").disabled = true;
    imagemDiv.style.clipPath = "inset(0 0 0 0)";
    
    const modal = document.getElementById("resultado");
    const msg = document.getElementById("mensagemFinal");
    const est = document.getElementById("estatistica");
    
    modal.classList.remove("oculto");
    document.getElementById("resultadoImagem").src = estadioAtual.imagem;
    document.getElementById("resultadoNome").innerText = estadioAtual.nomeCompleto;

    if (acertou) {
        msg.innerText = "🎉 Acertei o estádio de hoje!";
        est.innerText = `Resolvi em ${tentativa} chutes no La Cancha ⚽`;
    } else {
        msg.innerText = "❌ Não foi desta vez!";
        est.innerText = "O desafio de hoje estava difícil! 😢";
    }

    configurarCompartilhamento(acertou);
    iniciarContador();
}

// ==========================================
// COMPARTILHAMENTO E CONTADOR
// ==========================================
function configurarCompartilhamento(acertou) {
    const link = "https://lacanchagame.com.br";
    const texto = acertou 
        ? `🎉 Acertei o estádio de hoje no La Cancha em ${tentativa} chutes! ⚽🔥` 
        : `O estádio de hoje no La Cancha estava difícil! 😢⚽`;
    
    const fullMsg = `${texto}\n\nJogue agora: ${link}`;
    const enc = encodeURIComponent(fullMsg);
    
    document.getElementById("shareTwitter").href = `https://twitter.com/intent/tweet?text=${enc}`;
    document.getElementById("shareWhats").href = `https://wa.me/?text=${enc}`;
}

function iniciarContador() {
    function atualizar() {
        const agora = new Date();
        const amanha = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + 1);
        const diff = amanha - agora;
        
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        
        const txt = `⏳ Novo desafio em ${h}h ${m}m ${s}s`;
        document.getElementById("contador").innerText = txt;
        document.getElementById("contadorFinal").innerText = txt;
    }
    atualizar();
    setInterval(atualizar, 1000);
}
