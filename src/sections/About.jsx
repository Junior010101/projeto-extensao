export default function About({ customerPains }) {
  return (
    <section id="sobre" className="text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl">
        <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">
          01 / Sobre
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
          Construindo <span className="text-purple-400"> valor </span>
          com o digital.
        </h2>

        <br />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 1 Card Grande sobre o que acreditamos */}
          <div className="lg:col-span-5 bg-white/3 border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <span className="text-purple-400 font-mono text-xs uppercase tracking-widest block mb-4">
                Nossa Crença
              </span>
              <h3 className="text-2xl font-semibold text-white mb-6 leading-snug">
                Não acreditamos em fórmulas mágicas.
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Acreditamos que o verdadeiro sucesso vem da conexão, de
                processos claros e de suporte estratégico de ponta a ponta.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-zinc-400 text-sm">
                Unimos mentoria de alto nível e estratégia para tirar você do
                operacional cego.
              </p>
            </div>
          </div>

          {/* 4 Cards Pequenos focando nas dores deles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customerPains.map((pain) => (
              <div
                key={pain.id}
                className="bg-white/2 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-purple-400 font-mono text-xs mb-3 block">
                    {pain.id} / Desafio Real
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {pain.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
