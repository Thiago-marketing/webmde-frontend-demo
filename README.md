# 🌐 WebMDE Frontend Demo  
Front demonstrativo do novo Web MDE — versão moderna e responsiva, criada para apresentar o redesign completo do painel gerencial da MDE Sistemas.

Este projeto é **100% estático** (HTML + CSS + JS) e tem como objetivo demonstrar a nova interface e usabilidade antes da integração com o back-end real na Locaweb.

---

## 🚀 Funcionalidades Demonstradas

### ✔ Dashboard Gerencial  
- Indicadores principais (ocupação, receita, check-ins e check-outs)  
- Gráficos de ocupação e faturamento  
- Próximas chegadas  
- Movimentação do caixa do dia  

### ✔ Mapa de Apartamentos  
- UHs organizadas em grid responsivo  
- Status visual por cor: Livre, Ocupado, Limpeza, Manutenção e Bloqueado  
- Informações rápidas do hóspede e da UH  
- Pensado para integração futura com dados reais do SQL Server  

### ✔ Fechamento de Caixa  
- Resumo geral do período  
- Entradas e saídas detalhadas  
- Formas de recebimento  
- Contas abertas e fechadas  

---

## 📁 Estrutura do Projeto

/
├── index.html # Dashboard principal
├── pages/
│ ├── apartamentos.html # Mapa de UHs
│ └── fechamento.html # Fechamento de caixa
├── css/
│ └── app.css # Tema global (dark/clean) + layout premium
└── js/
└── app.js # Scripts de UI, toggles e interações



---

## 🛠 Tecnologias Utilizadas
- **HTML5**  
- **CSS3 (custom design system)**  
- **JavaScript Vanilla**  
- **Google Fonts – Inter**  
- **Deploy automático via Vercel**  

Nenhum framework foi utilizado — o objetivo é permitir integração direta no WebMDE atual, independente da linguagem usada no back-end.

---

## 🔗 Deploy na Vercel  
Acesse a versão online para navegação e apresentação:

➡ *URL será adicionada aqui após o primeiro deploy na Vercel.*

---

## 📌 Objetivo do Projeto  
Este repositório demonstra como o WebMDE pode evoluir visualmente sem alterar o back-end existente. Após validação visual, o layout será conectado ao banco SQL Server (WebMDE atual) quando o time técnico liberar:

- Linguagem e arquitetura do WebMDE  
- String de conexão  
- Local dos arquivos no servidor Locaweb  
- Procedures e consultas utilizadas  
- Fluxo de deploy interno  

---

## 👨‍💻 Autor  
**Thiago (MDE Sistemas)**  
Desenvolvimento visual, estrutura, UX/UI e integração inicial.  

---

## 📅 Status  
🟢 Em desenvolvimento  
🔜 Aguardando informações técnicas do Beraldo para integração dinâmica  
