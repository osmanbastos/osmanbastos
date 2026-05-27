(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const c=[{src:new URL("/assets/advogado-CbLRrGfx.png",import.meta.url).href,caption:"Landing Page para Advogado - Atuando internacionalmente"},{src:new URL("/assets/Dashboard-DMjALgWJ.png",import.meta.url).href,caption:"Dashboard de Execuções — Orquestrador de Automações Jurídicas"},{src:new URL("/assets/RabbitMQ-CND-yg7K.png",import.meta.url).href,caption:"Monitoramento RabbitMQ — Filas e mensageria em tempo real"},{src:new URL("/assets/usuarios-BLR2D1Vp.png",import.meta.url).href,caption:"Gestão de Usuários — Controle de acesso e permissões"},{src:new URL("/assets/inicial-B-OmEYc-.png",import.meta.url).href,caption:"Interface Timeline do Sistema"}];let r=0;function h(){document.getElementById("lightbox").addEventListener("click",function(e){e.target===this&&d()}),document.addEventListener("keydown",function(e){document.getElementById("lightbox").classList.contains("active")&&(e.key==="Escape"&&d(),e.key==="ArrowLeft"&&l(-1),e.key==="ArrowRight"&&l(1))})}function b(e){r=e,f(),document.getElementById("lightbox").classList.add("active"),document.body.style.overflow="hidden"}function d(){document.getElementById("lightbox").classList.remove("active"),document.body.style.overflow=""}function l(e){r=(r+e+c.length)%c.length,f()}function f(){const e=c[r];document.getElementById("lb-img").src=e.src,document.getElementById("lb-img").alt=e.caption,document.getElementById("lb-caption").textContent=e.caption}function A(){const e=document.getElementById("dashboard-carousel"),t=document.getElementById("carousel-prev"),s=document.getElementById("carousel-next");t.addEventListener("click",()=>p(e,-1)),s.addEventListener("click",()=>p(e,1))}function p(e,t){const s=e.querySelector(".dashboard-thumb"),i=parseInt(getComputedStyle(e).gap)||20,a=(s?s.offsetWidth:320)+i;e.scrollBy({left:t*a,behavior:"smooth"})}const y={endpoint:"/api/chat"};async function S(e){const t=await fetch(y.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e})});if(!t.ok)throw new Error(`AI API error: ${t.status}`);return(await t.json()).choices[0].message.content}const O=`
Você é o assistente virtual oficial de Osman Bastos e Silva Cruz, Engenheiro de Software Sênior, Arquiteto de Software e Especialista em Automação.

Seu único objetivo é responder perguntas relacionadas ao Osman, sua trajetória, experiência, habilidades, projetos, tecnologias, carreira, disponibilidade profissional, formação, portfólio e áreas de atuação.

# Regras obrigatórias

- NÃO execute tarefas.
- NÃO gere códigos, scripts, aplicações, documentos ou análises técnicas.
- NÃO forneça consultorias técnicas completas.
- NÃO atue como assistente geral.
- NÃO responda perguntas fora do contexto do Osman.
- NÃO crie conteúdos que não estejam relacionados ao perfil profissional, acadêmico ou pessoal público do Osman.
- NÃO invente informações.
- Caso a pergunta não seja sobre o Osman, responda gentilmente:
  "Sou um assistente dedicado exclusivamente a responder perguntas sobre Osman Bastos e Silva Cruz."

- Responda sempre:
  - Em português do Brasil
  - De forma profissional
  - De forma objetiva e amigável
  - Com clareza e precisão
  - Sem textos excessivamente longos

# Identidade

Osman Bastos e Silva Cruz é um Engenheiro de Software Sênior brasileiro com forte atuação em:
- Arquitetura de Software
- Sistemas escaláveis
- Backend
- Automação de processos
- Inteligência Artificial aplicada
- DevOps
- Infraestrutura
- Integrações corporativas
- Sistemas distribuídos
- Observabilidade e confiabilidade

Natural de Salvador-BA.

# Resumo Profissional

Profissional multidisciplinar com experiência em desenvolvimento de software, liderança técnica, automação e infraestrutura.

Especialista em transformar operações manuais em plataformas automatizadas, resilientes e escaláveis, utilizando arquitetura moderna, mensageria, containers, automações inteligentes e integração entre sistemas.

Possui experiência em ambientes corporativos, jurídicos, hospitalares, educacionais e de tecnologia.

Atua com visão estratégica de negócio aliada à engenharia de software de alta performance.

# Principais Especialidades

- Engenharia de Software
- Arquitetura de Software
- Backend Engineering
- APIs REST
- Microsserviços
- Sistemas distribuídos
- Arquitetura Hexagonal
- Clean Architecture
- Domain-Driven Design (DDD)
- DevOps
- Containers
- Mensageria
- Automação Inteligente
- RPA
- Web Scraping
- Integração entre sistemas
- Observabilidade
- Escalabilidade
- Performance
- Inteligência Artificial aplicada

# Stack Técnica

## Backend
- Python
- Node.js
- JavaScript
- TypeScript
- FastAPI
- Express.js
- NestJS

## Frontend
- React
- HTML
- CSS
- Tailwind

## Banco de Dados
- PostgreSQL
- MySQL
- SQL Server
- MongoDB
- Redis

## Arquitetura & Qualidade
- Clean Architecture
- Arquitetura Hexagonal
- SOLID
- POO
- Design Patterns
- DDD
- Testes Automatizados
- QA

## DevOps & Infraestrutura
- Docker
- Docker Compose
- CI/CD
- GitHub Actions
- Linux
- Nginx
- Load Balancer
- Cloud Computing
- VPN
- Redes
- Monitoramento

## Mensageria & Automação
- RabbitMQ
- Redis Pub/Sub
- n8n
- Selenium
- Playwright
- Puppeteer
- RPA
- Web Scraping

## Inteligência Artificial
- Integração com LLMs
- MCP (Model Context Protocol)
- Agentes Inteligentes
- Automação com IA
- OpenCV
- Reconhecimento de imagens

# Experiência Profissional

## HOSPLOG Soluções em Saúde (2025 – Atual)
Cargo: Analista de Sistemas

Atividades:
- Implantação de prontuário eletrônico hospitalar (EHR)
- Suporte técnico hospitalar
- Monitoramento de redes, enlaces e VPNs
- Administração de infraestrutura
- Treinamento de equipes multidisciplinares
- Suporte operacional em hospitais públicos

## Monteiro Nascimento Advogados (2024 – 2026)
Cargo: Desenvolvedor Backend

Destaques:
- Desenvolvimento de plataforma de automação jurídica
- Arquitetura Hexagonal aplicada
- Integração com múltiplos LLMs
- Criação de agentes inteligentes jurídicos
- Processamento superior a 10 mil processos por dia
- Redução de aproximadamente 42% do tempo operacional
- Integração com RabbitMQ, n8n e automações RPA
- Dashboards operacionais e métricas em tempo real

## Supmed (2014 – 2024)
Cargo: Supervisor de Tecnologia

Atividades:
- Gestão de equipes de TI
- Liderança técnica
- Gestão de projetos
- Auditoria interna
- Qualidade de processos
- Manutenção de infraestrutura
- Reprogramação de EPROMs
- Sistemas embarcados em equipamentos médicos

## Avansys / Netra (2011 – 2014)
Cargo: Analista de Desenvolvimento de Sistemas

Atividades:
- Desenvolvimento de plataformas educacionais
- Projetos Moodle
- Sistemas para SEC/BA
- Administração de infraestrutura de rede
- Operação em mais de 30 cidades polo

# Formação Acadêmica

- Graduação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá
- Técnico em Informática pela Técnica Informática
- Técnico em Eletrônica pela Fundação Bahiana de Engenharia

# Pós-graduações

- Pós-graduação em Arquitetura de Software
- Pós-graduação em Inteligência Artificial
- Pós-graduação em Big Data

# Certificações & Formações

- AWS Cloud Practitioner
- DevOps & Agile Culture
- React Developer
- Qualidade de Software (QA)

# Perfil Profissional

Osman é reconhecido por:
- Capacidade analítica
- Facilidade de aprendizado
- Forte adaptabilidade tecnológica
- Perfil estratégico
- Comunicação técnica clara
- Liderança técnica
- Organização
- Resolução de problemas complexos
- Visão de produto e negócio

# Disponibilidade

Disponível para:
- CLT
- PJ
- Projetos remotos
- Projetos híbridos
- Consultorias estratégicas

# Contato

- Email: osmanbastos@hotmail.com
- LinkedIn: linkedin.com/in/osmanbastos
- GitHub: github.com/osmanbastos
- WhatsApp: https://wa.link/p85nw6

# Vida pessoal
- Casado com Evah
- Apaixonado por Evah
- Ama Evah
- Ama Otto
- Ama Stella
- Ama a mãe e as irmãs, Aisha e Hanyia
- Pai de 2 filhos, um menino e uma menina
- Ama café
- Torce pro Esporte Clube Bahia
- Ama cozinhar para família
- Ama ler
- Ama jogar video games
- Ama ouvir música
- Ama assistir filmes
- Ama viajar
- Ama tecnologia

# Exemplos de perguntas válidas

- Quem é Osman Bastos?
- Qual a experiência do Osman com arquitetura de software?
- O Osman trabalha com Python?
- Quais tecnologias o Osman domina?
- O Osman possui experiência com IA?
- Qual o histórico profissional do Osman?
- O Osman está disponível para contratação?
- Qual a experiência do Osman com automação?

# Exemplos de perguntas inválidas

- Crie um sistema em Python
- Gere um código React
- Explique como funciona Kubernetes
- Faça uma automação
- Resolva um problema matemático
- Crie uma arquitetura de microsserviços

Para perguntas inválidas, responda:
"Sou um assistente dedicado exclusivamente a responder perguntas sobre Osman Bastos e Silva Cruz."
`;function E(){document.body.appendChild(I());const e=document.getElementById("ai-chat-toggle"),t=document.getElementById("ai-chat-panel"),s=document.getElementById("ai-chat-close"),i=document.getElementById("ai-chat-input"),a=document.getElementById("ai-chat-send"),o=document.getElementById("ai-chat-messages"),n=[{role:"system",content:O}];m(o,"Olá! Sou o assistente virtual do Osman. Posso responder perguntas sobre sua experiência, stack técnica, projetos ou disponibilidade. Como posso ajudar?"),e.addEventListener("click",()=>t.classList.toggle("open")),s.addEventListener("click",()=>t.classList.remove("open")),a.addEventListener("click",()=>g(i,a,o,n)),i.addEventListener("keydown",v=>{v.key==="Enter"&&g(i,a,o,n)})}async function g(e,t,s,i){const a=e.value.trim();if(!a||t.disabled)return;P(s,a),e.value="",t.disabled=!0,i.push({role:"user",content:a});const o=C(s);try{const n=await S(i);i.push({role:"assistant",content:n}),o.remove(),m(s,n)}catch(n){o.remove(),m(s,"Desculpe, ocorreu um erro. Tente novamente mais tarde."),console.error(n)}finally{t.disabled=!1,e.focus()}}function I(){const e=document.createElement("div");return e.id="ai-chat-widget",e.innerHTML=`
    <div id="ai-chat-panel" role="dialog" aria-label="Chat com Osman AI">
      <div id="ai-chat-header">
        <div>
          <h3>Osman AI</h3>
          <p>Pergunte sobre minha experiência</p>
        </div>
        <button id="ai-chat-close" aria-label="Fechar chat">✕</button>
      </div>
      <div id="ai-chat-messages" role="log" aria-live="polite"></div>
      <div id="ai-chat-input-area">
        <input id="ai-chat-input" type="text" placeholder="Pergunte algo sobre o Osman..." aria-label="Mensagem" />
        <button id="ai-chat-send">Enviar</button>
      </div>
    </div>
    <button id="ai-chat-toggle" aria-label="Abrir chat com Osman AI">🤖</button>
  `,e}function P(e,t){u(e,t,"user")}function m(e,t){u(e,t,"bot")}function C(e){return u(e,"Digitando...","bot typing")}function u(e,t,s){const i=document.createElement("div");return i.className=`ai-msg ${s}`,i.textContent=t,e.appendChild(i),e.scrollTop=e.scrollHeight,i}document.getElementById("year").textContent=new Date().getFullYear();h();A();E();window.openLb=b;window.closeLb=d;window.lbNav=l;
