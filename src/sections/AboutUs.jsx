export default function AboutUs({ team }) {
  return (
    <section className="w-full py-16 lg:py-24 px-6 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-6xl">
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-[#b535f6] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            07 / Quem Somos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            A <span className="text-[#b535f6]">equipe</span> por trás da
            estratégia.
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed">
            Profissionais sêniores, de diferentes áreas do digital, unidos por
            um único propósito: construir e escalar negócios sólidos e
            lucrativos.
          </p>
        </div>

        <br />

        {/* Grid de Equipe - Mobile: 2 colunas | Desktop (lg): 5 colunas */}
        <div className="flex flex-wrap lg:grid lg:grid-cols-5 justify-center gap-8 lg:gap-6">
          {team.map((member, index) => (
            <div
              key={`team-${index}`}
              className="flex flex-col items-center text-center w-[40%] lg:w-auto group"
            >
              {/* Círculo / Foto de Perfil */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/2 border border-white/5 group-hover:border-[#b535f6]/50 group-hover:shadow-[0_0_20px_rgba(128, 30, 177, 0.15)] transition-all duration-300 mb-5 flex items-center justify-center overflow-hidden relative">
                {/* Ícone de placeholder para foto */}
                <img src={member.image} alt="imagem do membro da equipe" />
              </div>

              {/* Informações do Membro */}
              <h3 className="text-white font-semibold text-base lg:text-lg mb-1">
                {member.name}
              </h3>
              <span className="text-[#b535f6] text-xs font-medium uppercase tracking-wider mb-3 block">
                {member.role}
              </span>
              <p className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-45 lg:max-w-none">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
