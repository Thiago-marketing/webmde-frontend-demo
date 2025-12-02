/* ============================================================
   WebMDE - App.js
   Funções globais: tema, sidebar, interações e inicialização
============================================================ */

/* ------------------------------------------------------------
   SELETORES BÁSICOS
------------------------------------------------------------ */
const html = document.documentElement;
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

const sidebarToggleBtn = document.getElementById("sidebarToggle");
const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
const themeToggleBtn = document.getElementById("themeToggle");

/* ============================================================
   TEMA (Dark / Clean)
============================================================ */

/** 
 * Carrega o tema salvo no localStorage 
 * Se não houver nada salvo, mantém o tema default (dark)
 */
function loadTheme() {
  const savedTheme = localStorage.getItem("webmde-theme");

  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  }
}

/**
 * Troca o tema e salva no localStorage
 */
function toggleTheme() {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "clean" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("webmde-theme", newTheme);
}

themeToggleBtn?.addEventListener("click", toggleTheme);


/* ============================================================
   SIDEBAR - Mobile / Desktop
============================================================ */

/**
 * Abre o menu lateral no mobile
 */
function openSidebar() {
  sidebar.classList.add("open");
  backdrop.classList.add("visible");
}

/**
 * Fecha o menu lateral no mobile
 */
function closeSidebar() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("visible");
}


/** Toggle do botão hamburger (mobile) */
sidebarToggleBtn?.addEventListener("click", openSidebar);

/** Botão X dentro da sidebar */
sidebarCloseBtn?.addEventListener("click", closeSidebar);

/** Clicar no backdrop fecha o menu */
backdrop?.addEventListener("click", closeSidebar);


/* ============================================================
   USUÁRIO / SESSÃO (placeholder para integração futura)
============================================================ */

/**
 * Funções placeholder – depois ligaremos no SQL/Backend real
 */
function loadUserInfo() {
  // Quando integrar ao WebMDE real:
  // - pegar info da sessão
  // - nome, email, hotel atual
  // - permissões
  // - foto/avatar

  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userInitial = document.getElementById("userInitial");

  if (userName) userName.textContent = "Carregando usuário...";
  if (userEmail) userEmail.textContent = "";
  if (userInitial) userInitial.textContent = "U";
}


/* ============================================================
   PLACEHOLDERS DE GRÁFICOS
============================================================ */
/**
 * Aqui podemos futuramente:
 * - Incluir Chart.js
 * - Trazer dados do SQL Server
 * - Atualizar gráficos em tempo real
 *
 * Por enquanto, só estrutura base.
 */

function initCharts() {
  // Exemplo de placeholder de gráfico:
  // console.log("Charts iniciados...");
}


/* ============================================================
   INICIALIZAÇÃO GERAL
============================================================ */

function init() {
  loadTheme();
  loadUserInfo();
  initCharts();
}

document.addEventListener("DOMContentLoaded", init);
