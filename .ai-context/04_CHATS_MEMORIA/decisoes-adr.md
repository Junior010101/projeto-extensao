# 🏛️ Memória de Decisões de Arquitetura (ADRs)

Este registro documenta as decisões arquiteturais e técnicas tomadas ao longo da evolução do projeto **Consultoria de Presença Digital** (PEX-MDL-54), detalhando seus motivos e impactos.

---

## 📑 Índice de Decisões

- [ADR-001: Adoção de SPA com React 19 + Vite](#adr-001-adoção-de-spa-com-react-19--vite)
- [ADR-002: Adoção do Tailwind CSS v4 com @tailwindcss/vite](#adr-002-adoção-do-tailwind-css-v4-com-tailwindcssvite)
- [ADR-003: Arquitetura Backendless com Web3Forms para Captação de Leads](#adr-003-arquitetura-backendless-com-web3forms-para-captação-de-leads)
- [ADR-004: Oxlint como Ferramenta Primária de Linter](#adr-004-oxlint-como-ferramenta-primária-de-linter)
- [ADR-005: Canal de Atendimento e Conversão Direta via WhatsApp](#adr-005-canal-de-atendimento-e-conversão-direta-via-whatsapp)

---

### ADR-001: Adoção de SPA com React 19 + Vite

- **Status:** Aceito
- **Data:** Setembro/2026
- **Contexto:**
  O projeto necessitava de uma landing page rápida, moderna e de fácil manutenção pela equipe discente de Ciência da Computação, com foco principal em conversão e exibição de informações para comerciantes locais. Avaliou-se o uso de frameworks SSR (como Next.js ou Remix) versus uma SPA estática simples com Vite.
- **Decisão:**
  Adotar **React 19** com empacotamento via **Vite 8**.
- **Consequências:**
  - *Positivas:* Inicialização instantânea em desenvolvimento (HMR), saída estática pura (`dist/`) que pode ser hospedada com custo zero (Vercel, Netlify, Cloudflare Pages ou GitHub Pages), curva de aprendizado menor e menor superfície de falhas.
  - *Negativas:* Não possui Server-Side Rendering nativo out-of-the-box (o que não é crítico para a landing page em questão).

---

### ADR-002: Adoção do Tailwind CSS v4 com `@tailwindcss/vite`

- **Status:** Aceito
- **Data:** Setembro/2026
- **Contexto:**
  Necessidade de estilizar a interface com agilidade, mantendo consistência visual, modo escuro elegante e suporte estrito a dispositivos móveis (mobile-first), sem a complexidade de arquivos CSS manuais gigantes.
- **Decisão:**
  Utilizar **Tailwind CSS v4** integrado nativamente pelo plugin `@tailwindcss/vite`.
- **Consequências:**
  - *Positivas:* Dispensa configurações legadas (`tailwind.config.js` redundante), compilação ultrarrápida baseada em Rust/Lightning CSS e facilidade de criar interfaces responsivas via classes utilitárias.
  - *Negativas:* Classes utilitárias longas no JSX exigem organização e disciplina da equipe.

---

### ADR-003: Arquitetura Backendless com Web3Forms para Captação de Leads

- **Status:** Aceito
- **Data:** Setembro/2026
- **Contexto:**
  O formulário de diagnóstico digital coleta dados cadastrais e de presença nas redes dos comerciantes. Manter um servidor backend dedicado (Node.js/Express ou Python) e um banco de dados relacional exigiria provisionamento, custos de hospedagem, manutenção de segurança e credenciais de banco.
- **Decisão:**
  Adotar a API do **Web3Forms** para processamento assíncrono dos formulários diretamente a partir do frontend, autenticando via `VITE_WEB3FORMS_ACCESS_KEY` e recebendo os dados por e-mail.
- **Consequências:**
  - *Positivas:* Custo zero de infraestrutura de servidor, zero necessidade de gerenciar banco de dados, entrega confiável das informações diretamente no e-mail dos extensionistas para ação rápida.
  - *Negativas:* Dependência de serviço de terceiros para entrega dos e-mails; mitigado pelo fluxo alternativo de contato direto via WhatsApp.

---

### ADR-004: Oxlint como Ferramenta Primária de Linter

- **Status:** Aceito
- **Data:** Setembro/2026
- **Contexto:**
  Garantir a integridade do código, boas práticas do React e conformidade com as regras de hooks sem a lentidão e configurações extensas do ecossistema ESLint tradicional.
- **Decisão:**
  Configurar o **Oxlint** (`oxlint`) como ferramenta de validação estática no script `npm run lint`.
- **Consequências:**
  - *Positivas:* Execução em milissegundos, verificação eficaz de regras de hooks e de componentes React, configuração enxuta no `.oxlintrc.json`.
  - *Negativas:* Menor quantidade de plugins de nicho em comparação ao ecossistema tradicional do ESLint, o que é plenamente satisfatório para o escopo do projeto.

---

### ADR-005: Canal de Atendimento e Conversão Direta via WhatsApp

- **Status:** Aceito
- **Data:** Setembro/2026
- **Contexto:**
  Microempreendedores locais e feirantes de Paulista-PE têm rotinas corridas e frequentemente abandonam páginas com formulários que exigem digitação de muitos dados.
- **Decisão:**
  Implementar botões de conversão direta com link `wa.me`, já com mensagem contextualizada, permitindo que o comerciante inicie o contato com apenas um clique.
- **Consequências:**
  - *Positivas:* Aumento significativo na taxa de conversão, comunicação imediata e humanizada com o público-alvo.
  - *Negativas:* Dados chegam de maneira menos estruturada do que no formulário, exigindo que o discente conduza as perguntas no próprio chat.

---

*Documento mantido dentro do vault `.ai-context` como histórico de decisões de arquitetura.*
