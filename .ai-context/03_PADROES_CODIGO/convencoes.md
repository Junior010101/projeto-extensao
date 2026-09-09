# 📐 Convenções de Código, Nomenclatura e Linting

Este documento define os padrões técnicos que o agente de Inteligência Artificial (agy) e os desenvolvedores devem seguir rigorosamente ao criar, refatorar ou auditar código neste repositório.

---

## 🎯 Filosofia Geral

1. **Simplicidade e Desempenho:** Evitar abstrações prematuras ou dependências pesadas. O projeto é uma landing page rápida com foco em dispositivos móveis.
2. **Consistência:** Seguir a estrutura já estabelecida no repositório.
3. **Mobile-First:** Toda estilização deve ser concebida primeiro para telas de celulares (360px–414px) e depois expandida para telas maiores.

---

## 📂 Estrutura de Diretórios do Projeto

```
projeto-extensao/
├── .ai-context/           # Vault de documentação e contexto para o agente de IA
├── docs/                  # Documentos acadêmicos e PDFs oficiais da disciplina
├── public/                # Ativos estáticos públicos (favicons, imagens estáticas)
├── src/
│   ├── components/        # Componentes UI reutilizáveis (Button, Header, Footer)
│   ├── sections/          # Seções completas da landing page (Hero, Services, FAQs, etc.)
│   ├── styles/            # Estilos adicionais ou customizações
│   ├── App.jsx            # Componente raiz da SPA que orquestra as seções
│   ├── index.css          # Ponto de entrada do Tailwind CSS v4 (@import "tailwindcss")
│   └── main.jsx           # Ponto de montagem React DOM
├── .env.example           # Modelo de variáveis de ambiente
├── .oxlintrc.json         # Configuração do linter Oxlint
├── package.json           # Dependências e scripts
└── vite.config.js         # Configuração de plugins do Vite
```

---

## 🏷️ Padrões de Nomenclatura

| Elemento | Padrão | Exemplo |
| :--- | :--- | :--- |
| **Componentes React** | `PascalCase.jsx` | `Button.jsx`, `GetStarted.jsx`, `HowItWorks.jsx` |
| **Seções da Página** | `PascalCase.jsx` | `Hero.jsx`, `AboutUs.jsx`, `Pricing.jsx` |
| **Funções & Hooks** | `camelCase` | `handleSubmit()`, `formatWhatsAppNumber()` |
| **Estados & Variáveis** | `camelCase` | `formData`, `isMenuOpen`, `isLoading` |
| **Constantes Estáticas** | `UPPER_SNAKE_CASE` | `BENEFITS`, `CUSTOMER_ITEMS`, `FAQS_LIST` |
| **Arquivos de Vault / Docs**| `kebab-case.md` | `stack.md`, `fluxo-dados.md`, `casos-uso.md` |
| **Variáveis de Ambiente** | `VITE_UPPER_SNAKE` | `VITE_WEB3FORMS_ACCESS_KEY` |

---

## ⚛️ Padrões React 19

- **Componentes Funcionais com Export Default ou Named:**
  ```jsx
  // Exemplo de componente padrão
  export default function HeroSection({ onCtaClick }) {
    return (
      <section id="hero" className="py-16 px-4">
        {/* Conteúdo */}
      </section>
    );
  }
  ```
- **Hooks Nativos:** Priorizar `useState` e `useRef`. Só usar `useEffect` quando houver real efeito colateral ou sincronização externa.
- **Formulários Controlados:** Sempre manter os inputs controlados por um estado único de objeto quando houver múltiplos campos:
  ```jsx
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  ```

---

## 🎨 Estilização com Tailwind CSS v4

- **Adoção Mobile-First:** Aplicar classes padrão para telas pequenas e utilizar prefixos responsivos progressivos (`sm:`, `md:`, `lg:`, `xl:`):
  ```jsx
  <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-8">
  ```
- **Paleta de Cores do Projeto:**
  - Fundos: Tons escuros modernos (`bg-[#0a0a0f]`, `bg-[#13121a]`, `bg-black/40`).
  - Destaques / Acentos: Tons roxos e violetas (`text-purple-400`, `bg-purple-600`, `border-purple-500/30`).
  - Textos: Textos com bom contraste para leitura externa ao sol (`text-white`, `text-slate-300`, `text-[#9490ac]`).
- **Acessibilidade (a11y):**
  - Todos os botões e links clicáveis devem ter indicação visual de foco e estados de `:hover` e `:active`.
  - Imagens devem conter atributo `alt` descritivo.
  - Rótulos e inputs devem possuir correspondência clara.

---

## 🔍 Linting & Validação de Código (Oxlint)

O projeto utiliza o **Oxlint** para garantir alta performance de linting:
```bash
npm run lint
```

### Regras Ativas no `.oxlintrc.json`
- `react/rules-of-hooks`: Garante que hooks só sejam chamados no nível superior e dentro de componentes/hooks React.
- `react/only-export-components`: Assegura a compatibilidade total com o Fast Refresh do Vite.

### Diretriz para a IA:
Antes de finalizar qualquer edição em arquivos `.jsx` ou `.js`, garanta que o código passe sem avisos ou erros pelo `oxlint`.

---

*Documento mantido dentro do vault `.ai-context` como guia de estilo de código.*
