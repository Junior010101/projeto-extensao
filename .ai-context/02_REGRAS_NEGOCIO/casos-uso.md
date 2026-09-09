# 📜 Regras Fundamentais do Sistema & Casos de Uso

Este documento estabelece as regras de negócio basilares e os casos de uso do projeto de extensão **Consultoria de Presença Digital** (PEX-MDL-54).

---

## ⚖️ Regras de Negócio Fundamentais (RN)

### RN01 - Gratuidade Integral e Incondicional
- **Regra:** Todas as etapas — desde a navegação na landing page, preenchimento de diagnóstico até a mentoria presencial no comércio — são 100% gratuitas.
- **Justificativa:** Trata-se de um projeto de extensão universitária da Uninassau Paulista sem fins lucrativos, visando o desenvolvimento socioeconômico da comunidade local.
- **Impacto no Sistema:** A seção de "Preços" / "Planos" da landing page deve reforçar o valor R$ 0,00 (gratuito) para que o comerciante não hesite por receio de cobranças futuras.

### RN02 - Territorialidade e Elegibilidade
- **Regra:** O atendimento presencial prioritário destina-se aos micro e pequenos empreendedores com ponto comercial ou atuação no município de **Paulista - PE** (especialmente o Centro, Av. Marechal Floriano Peixoto e feiras livres).
- **Critério:** Comerciantes de outras regiões podem receber orientações digitais remotas, mas as visitas em campo são exclusivas de Paulista-PE.

### RN03 - Metodologia de Autonomia ("Mão na Massa")
- **Regra:** A equipe discente não atua como agência terceirizada de marketing, mas sim como educadores digitais.
- **Prática:** O treinamento é realizado diretamente no aparelho celular do próprio comerciante, ensinando-o a criar fotos, gravar stories e gerenciar catálogos para que mantenha sua presença digital de forma autônoma após o projeto.

### RN04 - Proteção de Dados, Privacidade e Ética (LGPD)
- **Regra:**
  1. Nenhum membro da equipe discente solicitará senhas pessoais de redes sociais, bancos ou e-mails do comerciante.
  2. Os dados fornecidos no formulário (nome, WhatsApp, nicho, etc.) serão utilizados exclusivamente para agendamento da mentoria e compilação de estatísticas acadêmicas anônimas para o relatório de extensão.

### RN05 - Comunicação Clara e Acessível (Sem Tecnicismos)
- **Regra:** Todos os textos, botões, CTAs e materiais devem utilizar vocabulário simples, direto e empático, evitando jargões técnicos em inglês (ex: evitar termos como "churn", "leads qualificados", "branding omnichannel" na copy da landing page).

---

## 🎯 Especificação dos Casos de Uso (UC)

### UC01: Visualizar Proposta de Valor e Seções Informativas
- **Ator:** Empreendedor Local / Visitante.
- **Pré-condição:** Conexão com a internet e navegador web no smartphone ou desktop.
- **Fluxo Principal:**
  1. O usuário acessa o endereço da landing page.
  2. Visualiza a seção de abertura (`Hero`) com chamada impactante sobre vendas e visibilidade no Centro de Paulista.
  3. Rola pelas seções de dores (`Customer`), serviços oferecidos (`Services`), como funciona o processo (`HowItWorks`) e equipe (`AboutUs`).
  4. Identifica que a mentoria é gratuita e presencial.

---

### UC02: Submeter Diagnóstico de Presença Digital
- **Ator:** Empreendedor Local.
- **Pré-condição:** Acesso à seção de diagnóstico (`GetStarted`).
- **Fluxo Principal:**
  1. O usuário preenche os campos do formulário:
     - Nome completo.
     - E-mail e número do WhatsApp.
     - Indicador se já possui redes sociais ativas ou começará do zero.
     - Nicho do comércio (ex.: confeitaria, barbearia, moda, eletrônicos).
     - Momento atual e principal objetivo.
  2. Clica no botão "Enviar Diagnóstico".
  3. O sistema valida os campos, envia via API Web3Forms e exibe confirmação em tela.
  4. Os dados chegam à equipe da Uninassau para triagem e agendamento.
- **Fluxo de Exceção:** Caso falte conexão, o formulário avisa o usuário e exibe botão alternativo para enviar mensagem direta via WhatsApp.

---

### UC03: Iniciar Contato Rápido via WhatsApp
- **Ator:** Empreendedor Local.
- **Pré-condição:** Ter o aplicativo do WhatsApp instalado no aparelho.
- **Fluxo Principal:**
  1. O usuário clica em um dos botões de CTA ("Falar no WhatsApp" ou botão flutuante).
  2. O navegador dispara o link `wa.me` com o número da equipe discente e mensagem inicial pré-formatada.
  3. O app do WhatsApp é aberto diretamente na conversa.
  4. O usuário envia a mensagem e a equipe responde para marcar a visita.

---

### UC04: Agendar e Realizar Mentoria Presencial no Comércio
- **Atores:** Empreendedor Local e Equipe Discente.
- **Pré-condição:** Contato inicial estabelecido via diagnóstico ou WhatsApp.
- **Fluxo Principal:**
  1. A equipe alinha a data e o horário comercial mais conveniente para não atrapalhar o atendimento da loja.
  2. A equipe comparece ao local de comércio em Paulista-PE.
  3. Executa as três etapas da consultoria:
     - **Diagnóstico ao vivo:** Avaliação rápida do perfil do Instagram e WhatsApp Business.
     - **Otimização prática:** Configuração de biografia objetiva, link de contato, foto de perfil nítida e catálogo de produtos.
     - **Capacitação em criação de conteúdo:** Demonstração prática de iluminação simples e fotografia de produtos com o próprio celular do comerciante.
  4. Finalização com coleta de feedback do comerciante para o relatório da disciplina.

---

### UC05: Consultar Perguntas Frequentes (FAQ)
- **Ator:** Empreendedor Local.
- **Fluxo Principal:**
  1. O usuário acessa a seção `FAQs`.
  2. Clica nas perguntas para expandir as respostas sobre gratuidade, necessidade de equipamento especial, duração da consultoria e localização.

---

*Documento mantido dentro do vault `.ai-context` como especificação de requisitos e casos de uso.*
