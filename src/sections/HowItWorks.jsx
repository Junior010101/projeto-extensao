export default function HowItWorks({ steps }) {
  return (
    <section id="como-funciona" className="py-20 px-4">
      {/* Cabeçalho da Sessão (Padrão do Projeto) */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-purple-400 font-mono text-sm tracking-wider uppercase block">
          03 / Método
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold mt-3 tracking-tight">
          Como <span className="text-purple-400">funciona</span>.
        </h2>
        <p className="text-gray-400 text-sm lg:text-base mt-3">
          Uma jornada estruturada para transformar a sua operação com
          acompanhamento prático.
        </p>
      </div>

      <br />

      {/* Grid com os 4 Cards do Método (1 col no Mobile, 4 cols no Desktop lg:) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="group relative bg-[#130722]/80 border border-purple-900/40 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:bg-[#1a0b30]"
          >
            {/* Topo do Card */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-purple-400 bg-purple-950/80 border border-purple-800/50 px-3 py-1 rounded-full">
                Etapa {item.step}
              </span>
              <span className="text-3xl font-black text-purple-900/50 group-hover:text-purple-500/30 transition-colors">
                {item.step}
              </span>
            </div>

            {/* Conteúdo */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
