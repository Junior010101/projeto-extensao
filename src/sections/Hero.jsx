export default function Hero({ beneficios, alcance, engajamento }) {
  return (
    <section className="relative overflow-hidden px-8 py-36 lg:px-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-36 lg:grid-cols-12 lg:gap-8">
          {/* Conteúdo Principal (Esquerda) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-widest text-violet-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600" />
              INOVAÇÃO DIGITAL
            </div>

            {/* Título Principal */}
            <h1 className="text-5xl font-black tracking-tighter text-white lg:w-xl lg:text-[5rem] lg:leading-[0.95]">
              Ideias que se{" "}
              <span className="text-purple-500 drop-shadow-[0_0_10px_#4b2e67]">
                transformam
              </span>{" "}
              em realidade.
            </h1>

            {/* Subtítulo */}
            <p className="mb-8 max-w-135 select-none text-sm font-light leading-[25.2px] text-[#A99BFB] lg:text-lg">
              Criamos experiências digitais modernas para marcas que querem ir
              além do comum.
            </p>

            {/* Lista de Benefícios */}
            <ul className="flex flex-col gap-3 pt-2">
              {beneficios.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="material-symbols-outlined text-sm font-bold">
                      check
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-200 lg:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mídia / Visual (Direita) */}
          <div className="relative mt-8 flex items-center justify-center lg:col-span-5 lg:mt-0">
            {/* Brilho de Fundo */}
            <div className="absolute -inset-4 rounded-full bg-linear-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />

            {/* Card Flutuante 1 */}
            <div className="animate-float-slow absolute -top-4 left-0 z-20 flex max-w-[85%] items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-3.5 shadow-xl backdrop-blur-md">
              <div className="flex shrink-0 rounded-xl bg-purple-100 p-2.5 text-purple-600">
                <span className="material-symbols-outlined text-xl">
                  auto_awesome
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-500">
                  Resultados de Alcance
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {alcance} este mês
                </p>
              </div>
            </div>

            {/* Card Flutuante 2 */}
            <div className="animate-float-fast absolute -bottom-6 right-0 z-20 flex max-w-[85%] items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-3.5 shadow-xl backdrop-blur-md">
              <div className="flex shrink-0 rounded-xl bg-blue-100 p-2.5 text-blue-600">
                <span className="material-symbols-outlined text-xl">
                  trending_up
                </span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-500">
                  Engajamento
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {engajamento} Visitas/dia
                </p>
              </div>
            </div>

            {/* Mockup do Celular */}
            <div className="relative z-10 w-full max-w-md -rotate-3 transition-transform duration-300 hover:rotate-0 lg:max-w-xl lg:-rotate-6">
              <img
                src="/assets/images/telefone.svg"
                alt="Mockup do Celular exibindo aplicação"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
