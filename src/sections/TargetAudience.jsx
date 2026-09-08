export default function TargetAudience({ businessTypes, areasOfAction }) {
  return (
    <section className="w-full py-16 lg:py-24 px-6 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-6xl">
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-[#b535f6] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            04 / Público
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            Para <span className="text-[#b535f6]">quem</span> é.
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed">
            Metodologia adaptável para diferentes modelos de negócio que
            precisam estruturar, posicionar e escalar sua marca no ambiente
            digital de forma sólida.
          </p>
        </div>

        {/* Bloco 1: Tipos de negócios */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-lg lg:text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#b535f6] rounded-full block"></span>
            Tipos de negócios
          </h3>

          {/* Mobile: 2 colunas | Desktop (lg): 6 colunas */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
            {businessTypes.map((type, index) => (
              <div
                key={`biz-${index}`}
                className="bg-white/2 border border-white/5 hover:border-[#b535f6]/40 hover:bg-[#b535f6]/2 transition-all duration-300 rounded-xl p-4 lg:p-5 flex items-center justify-center text-center cursor-default group"
              >
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2: Onde atuamos */}
        <div>
          <h3 className="text-lg lg:text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#b535f6] rounded-full block"></span>
            Onde atuamos
          </h3>

          {/* Mobile: 2 colunas | Desktop (lg): 6 colunas */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
            {areasOfAction.map((area, index) => (
              <div
                key={`area-${index}`}
                className="bg-white/2 border border-white/5 hover:border-[#b535f6]/40 hover:bg-[#b535f6]/2 transition-all duration-300 rounded-xl p-4 lg:p-5 flex items-center justify-center text-center cursor-default group"
              >
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
