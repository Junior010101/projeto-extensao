import { useState, useEffect } from "react";

export default function Services({ servicos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Timer para avançar automaticamente o carrossel e atualizar a barra de progresso
  useEffect(() => {
    const intervalTime = 50; // Atualiza a cada 50ms para fluidez
    const totalDuration = 10000; // 5 segundos por card
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) =>
            current === servicos.length - 1 ? 0 : current + 1,
          );
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, servicos.length]);

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? servicos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === servicos.length - 1 ? 0 : prev + 1));
  };

  const servicoAtual = servicos[currentIndex];

  return (
    <section className="text-white py-20 lg:pt-5 px-14 lg:px-44 min-h-screen flex flex-col justify-between select-none">
      {/* Cabeçalho - Serviços */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-purple-400 font-mono text-sm tracking-wider uppercase block">
          02 / Serviços
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
          O que podemos <span className="text-purple-400">criar</span>.
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-3">
          Soluções digitais feitas para transformar ideias.
        </p>
      </div>

      <br />

      {/* Carrossel Principal */}
      <div className="relative max-w-6xl mx-auto w-full flex items-center justify-center">
        {/* Botão Anterior */}
        <button
          onClick={handlePrev}
          className="absolute -left-12 lg:-left-20 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#a855f7]/40 bg-[#7c3aed]/20 flex items-center justify-center text-purple-300 hover:border-purple-400 hover:bg-purple-800/40 transition-all shadow-lg"
          aria-label="Anterior"
        >
          <span className="material-icons-outlined text-lg">&larr;</span>
        </button>

        {/* Card do Carrossel */}
        <div className="w-full border border-purple-950 bg-[#0e061a]/60 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          {/* Lado da Imagem com efeito de grid */}
          <div className="relative min-h-75 lg:min-h-105 bg-linear-to-br from-purple-950/20 to-black overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-purple-950/55">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e106515_1px,transparent_1px),linear-gradient(to_bottom,#2e106515_1px,transparent_1px)] bg-size-[2rem_2rem]" />
            <img
              src={servicoAtual.imagem}
              alt={servicoAtual.titulo}
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <span className="absolute bottom-6 left-6 text-xs text-gray-500 font-mono tracking-widest">
              0{currentIndex + 1} / 0{servicos.length}
            </span>
          </div>

          {/* Lado do Conteúdo */}
          <div className="p-8 lg:p-14 flex flex-col justify-center">
            <div>
              <span className="text-sm font-mono text-[#a855f7] mb-2 block">
                {servicoAtual.numero}
              </span>
              <br />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                {servicoAtual.titulo}
              </h3>
              <p className="text-gray-400 font-extralight text-sm leading-relaxed">
                {servicoAtual.descricao}
              </p>
            </div>
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          className="absolute -right-12 lg:-right-20 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#a855f7]/40 bg-[#7c3aed]/20 flex items-center justify-center text-purple-300 hover:border-purple-400 hover:bg-purple-800/40 transition-all shadow-lg"
          aria-label="Próximo"
        >
          <span className="material-icons-outlined text-lg">&rarr;</span>
        </button>
      </div>

      {/* Barra de Progresso Inferior com Indicadores (Bolinhas/Pills) */}
      <div className="max-w-6xl mx-auto w-full mt-12 flex items-center justify-between gap-6">
        {/* Indicadores em formato de pílulas/bolinhas */}
        <div className="flex items-center gap-2">
          {servicos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setProgress(0);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300  ${
                currentIndex === index
                  ? "w-8 bg-[#a855f7] drop-shadow-[0_0_10px_#a15ce2]"
                  : "w-2 bg-purple-950 hover:bg-purple-800"
              }`}
              aria-label={`Ir para card ${index + 1}`}
            />
          ))}
        </div>

        {/* Temporizador / Linha de Progresso */}
        <div className="relative flex-1 h-0.5 bg-purple-950 rounded-full overflow-hidden mx-5">
          <div
            className="absolute top-0 left-0 h-full bg-[#a855f7] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-xs text-gray-500 font-mono tracking-widest">
          0{currentIndex + 1} / 0{servicos.length}
        </div>
      </div>
    </section>
  );
}
