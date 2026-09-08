export default function Results({ resultsData }) {
  return (
    <section
      id="resultados"
      className="w-full py-16 lg:py-24 px-6 flex flex-col items-center bg-transparent"
    >
      <div className="w-full max-w-6xl">
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-[#b535f6] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            05 / Resultados
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            O que acontece na prática<span className="text-[#b535f6]">.</span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed">
            Não vendemos teorias. Construímos estratégias validadas que geram
            escala, autoridade e previsibilidade para negócios reais.
          </p>
        </div>

        <br />

        {/* Grid de Resultados - Mobile: 1 coluna | Desktop (lg): 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {resultsData.map((item, index) => (
            <div
              key={`result-${index}`}
              className="bg-white/2 border border-white/5 hover:border-[#b535f6]/40 hover:bg-[#b535f6]/2 transition-all duration-300 rounded-2xl p-8 flex flex-col items-start text-left group"
            >
              {/* Métrica em destaque */}
              <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tighter group-hover:text-[#b535f6] transition-colors duration-300">
                {item.metric}
              </h3>

              {/* Linha decorativa */}
              <div className="w-8 h-1 bg-[#b535f6] rounded-full mb-6"></div>

              {/* Informações do case */}
              <h4 className="text-lg lg:text-xl font-semibold text-white mb-1">
                {item.title}
              </h4>
              <span className="text-[#b535f6] text-xs font-semibold uppercase tracking-wider mb-4 block">
                {item.client}
              </span>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
