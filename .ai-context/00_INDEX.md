# 🧭 Contexto da Aplicação - Consultoria de Presença Digital (PEX-MDL-54)

> **Documento Referencial Primário do Vault `.ai-context`**  
> Este documento centraliza a visão geral do projeto de extensão universitária, a equipe discente, o contexto acadêmico e serve como índice navegável para todos os módulos técnicos, regras de negócio e padrões da aplicação.

---

## 🗺️ Mapa de Navegação do Vault

Explore as áreas do vault através dos links abaixo:

### 📁 01_ARQUITETURA / (Visão Técnica & Infraestrutura)
- [[01_ARQUITETURA/stack|stack.md]]: Tecnologias do core (React 19, Vite 8, Tailwind CSS v4, Oxlint) e integrações externas (Web3Forms API e WhatsApp).
- [[01_ARQUITETURA/fluxo-dados|fluxo-dados.md]]: Como as informações trafegam no sistema, diagrama de sequência da submissão de diagnóstico e fluxo de atendimento direto.

### 📁 02_REGRAS_NEGOCIO / (Lógica da Aplicação & Contexto Social)
- [[02_REGRAS_NEGOCIO/perfis-usuario|perfis-usuario.md]]: Mapeamento de perfis (Empreendedor Local, Aluno Extensionista, Orientador Acadêmico), dores do cliente e matriz de permissões.
- [[02_REGRAS_NEGOCIO/casos-uso|casos-uso.md]]: Regras fundamentais do negócio (gratuidade incondicional, territorialidade em Paulista-PE, LGPD) e especificação detalhada de casos de uso (UC01 a UC05).

### 📁 03_PADROES_CODIGO / (Guia para IA e Desenvolvedores)
- [[03_PADROES_CODIGO/convencoes|convencoes.md]]: Padrões de nomenclatura, estilo de código, mobile-first, paleta de cores e checagem de linter com Oxlint.
- [[03_PADROES_CODIGO/componentes|componentes.md]]: Diretrizes para componentes reutilizáveis (`src/components/`) e blocos de página (`src/sections/`).

### 📁 04_CHATS_MEMORIA / (Memória de Decisões Técnicas)
- [[04_CHATS_MEMORIA/decisoes-adr|decisoes-adr.md]]: Registro de Decisões de Arquitetura (ADRs) com justificativas para SPA Vite, Tailwind v4, Web3Forms, Oxlint e WhatsApp.

---

## 📌 Visão Geral do Projeto

Landing page focada na atração e conversão de micro e pequenos empreendedores (formais MEI e informais) do município de **Paulista - PE** para o agendamento de consultorias e mentorias presenciais gratuitas de **Personal Branding** e posicionamento digital em redes sociais (Instagram e WhatsApp Business).

---

## 🏛️ Contexto Acadêmico & Institucional

- **Instituição de Ensino:** Uninassau Paulista
- **Curso:** Bacharelado em Ciência da Computação (Disciplina de Extensão Universitária)
- **Código do Projeto:** `PEX-MDL-54`
- **Local de Intervenção em Campo:** Centro do município de Paulista-PE (Av. Marechal Floriano Peixoto, s/n e comércio adjacente)
- **Equipe Discente:**
  - Lucas Ximenes de Albuquerque (Matrícula: `01893483`)
  - Marcos Antônio de Lima Lira Neto (Matrícula: `01898289`)
  - Marcondes Paixão Silva de Albuquerque Júnior (Matrícula: `01901595`)
  - Thiago Layme Firmino de Lima (Matrícula: `01258187`)
  - Tiago da Silva dos Santos (Matrícula: `01885658`)

---

## 💡 Proposta de Valor & Metodologia da Mentoria

1. **Problema dos Comerciantes:** Micro e pequenos comerciantes locais possuem orçamento restrito, pouco domínio prático de ferramentas digitais e forte dependência de pedestres locais.
2. **Solução Extensionista:** Orientação prática, gratuita e "mão na massa", realizada no próprio estabelecimento comercial do empreendedor, utilizando o smartphone do comerciante.
3. **Pilares da Capacitação:**
   - **Diagnóstico de Maturidade:** Análise rápida de perfis existentes no Instagram e WhatsApp.
   - **Otimização de Perfil:** Criação de biografia clara, links de contato e configuração do catálogo no WhatsApp Business.
   - **Personal Branding e Conteúdo:** Dicas práticas de enquadramento, iluminação e fotografia de produtos para alimentar o feed e stories com autonomia.

---

## 📅 Cronograma de Execução (2026)

| Mês | Etapa | Foco Principal |
| :--- | :--- | :--- |
| **Agosto** | Levantamento de Oportunidades | Diagnóstico de necessidades no Centro de Paulista-PE |
| **Setembro** | Benchmark e Mapeamento | Estruturação da arquitetura e landing page de captação |
| **Outubro** | Desenvolvimento & Testes | Finalização da solução digital e validação dos fluxos |
| **Novembro** | Entrega & Ação em Campo | Visitas e mentorias presenciais aos comerciantes locais |
| **Dezembro** | Relatório Final & Avaliação | Consolidação dos feedbacks e apresentação acadêmica |

---

## 🤖 Diretrizes Globais para o Agente de IA (agy)

Ao gerar, editar código ou planejar soluções para este repositório:
1. **Foco Mobile-First Estrito:** O público-alvo acessa primariamente através de smartphones via conexões móveis. Garanta layouts responsivos, código limpo e carregamento veloz.
2. **Linguagem Acessível e Clara:** A interface e os conteúdos devem ser simples, sem jargões complexos da área técnica ou de marketing avançado.
3. **Gratuidade em Evidência:** Nunca apresentar valores ou termos que induzam o usuário a pensar que se trata de um serviço pago.
4. **Respeito ao Linter:** Validar edições com `npm run lint` (`oxlint`) antes de concluir qualquer intervenção de código.