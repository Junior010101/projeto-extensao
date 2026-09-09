const DEFAULT_PLANS = [
  {
    name: "Diagnóstico",
    description:
      "Ideal para entender o cenário atual e dar os primeiros passos.",
    price: "R$ 0",
    period: "/único",
    highlighted: false,
    features: [
      "Análise completa de perfil",
      "Plano de ação para 30 dias",
      "1 Sessão individual de 1h",
      "Material de apoio em PDF",
    ],
    buttonText: "Começar agora",
    acao: () => {
      const element = document.getElementById("contato");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  {
    name: "Consultoria de Presença Digital",
    description:
      "Acompanhamento presencial no comércio para estruturar sua presença digital.",
    price: "R$ 0",
    period: "/gratuito",
    highlighted: true,
    badge: "Extensão Uninassau",
    features: [
      "Análise completa de perfil no Instagram",
      "Otimização de bio e catálogo no WhatsApp Business",
      "Encontro presencial no comércio em Paulista-PE",
      "Treinamento prático de fotos de produtos no celular",
      "Material de apoio prático em PDF",
    ],
    buttonText: "Agendar visita",
    acao: () => {
      const phone = "5581995412735";
      const message = encodeURIComponent(
        "Olá! Gostaria de mais informações sobre os serviços.",
      );
      window.location.href = `https://wa.me/${phone}?text=${message}`;
    },
  },
];

export default function Pricing({ plans = DEFAULT_PLANS }) {
  return (
    <section
      id="investimento"
      className="w-full py-16 lg:py-24 px-6 flex flex-col items-center bg-transparent"
    >
      <div className="w-full max-w-6xl">
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-[#b535f6] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            06 / Planos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            O investimento <span className="text-[#b535f6]">ideal</span>.
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed">
            Escolha o nível de acompanhamento adequado para o momento atual do
            seu negócio. Sem taxas ocultas, focados em gerar retorno sobre o seu
            investimento.
          </p>
        </div>

        <br />
        <br />

        {/* Grid de Planos - Mobile: 1 coluna | Desktop (lg): 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {plans.map((plan, index) => (
            <div
              key={`plan-${index}`}
              className={`relative flex flex-col rounded-2xl p-6 lg:p-8 transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-white/3 border border-[#b535f6]/50 shadow-[0_0_30px_rgba(181,53,246,0.15)] lg:-translate-y-4"
                    : "bg-white/2 border border-white/5 hover:border-[#b535f6]/30"
                }
              `}
            >
              {/* Badge de Destaque (se houver) */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b535f6] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Info do Plano */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <br />
              <p className="text-gray-400 text-sm h-10 mb-6">
                {plan.description}
              </p>
              <br />
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl lg:text-5xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                )}
              </div>
              <br />

              {/* Linha Divisória */}
              <hr className="border-white/5 mb-6" />
              <br />
              {/* Lista de Benefícios */}
              <ul className="flex flex-col gap-4 mb-8 grow">
                {plan.features
                  .filter(
                    (feature) =>
                      !feature
                        .toLowerCase()
                        .includes("suporte via whatsapp por 7 dias"),
                  )
                  .map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-[#b535f6] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
              </ul>
              <br />
              {/* Botão de Ação */}
              <button
                onClick={plan.acao}
                className={`w-full py-4 rounded-xl font-medium text-sm transition-all duration-300
                  ${
                    plan.highlighted
                      ? "bg-[#b535f6] text-white hover:bg-[#a02dc2] shadow-[0_0_20px_rgba(181,53,246,0.3)]"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <br />
        <br />

        {/* Bloco inferior (representado pelas linhas horizontais largas no rascunho) */}
        <div className="mt-8 lg:mt-12 bg-white/2 border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h4 className="text-white font-semibold text-lg mb-1">
              Ainda tem dúvidas sobre qual escolher?
            </h4>
            <p className="text-gray-400 text-sm">
              Nossa equipe pode analisar seu negócio e recomendar o melhor
              caminho.
            </p>
          </div>
          <button
            onClick={() => {
              const phone = "5581995412735";
              const message = encodeURIComponent(
                "Olá! Gostaria de mais informações sobre os serviços.",
              );
              window.location.href = `https://wa.me/${phone}?text=${message}`;
            }}
            className="border border-white/10 hover:border-[#b535f6]/50 text-white bg-transparent px-6 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
          >
            Falar com um especialista
          </button>
        </div>
      </div>
    </section>
  );
}
