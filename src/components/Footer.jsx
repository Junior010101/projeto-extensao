export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 border-t border-white/5 bg-transparent text-gray-400 text-sm">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Coluna 1: Sobre / Marca */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-bold text-lg tracking-tight">
            B2C Infos | Mentoria Digital
            <span className="text-[#b535f6]">.</span>
          </span>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            Mentoria de presença digital de alta performance para acelerar o seu
            negócio e gerar resultados exponenciais.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-semibold text-sm tracking-wide">
            Navegação
          </span>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            <li>
              <a
                href="#sobre"
                className="hover:text-[#b535f6] transition-colors"
              >
                Metodologia
              </a>
            </li>
            <li>
              <a
                href="#investimento"
                className="hover:text-[#b535f6] transition-colors"
              >
                Planos e Preços
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#b535f6] transition-colors">
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-[#b535f6] transition-colors"
              >
                Solicitar Diagnóstico
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato & Suporte */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-semibold text-sm tracking-wide">
            Contato & Suporte
          </span>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            <li>
              <span className="text-gray-500">
                Suporte especializado via WhatsApp
              </span>
            </li>
            <li>
              <span className="text-gray-500">lucasximenes2007@gmail.com</span>
            </li>
            <li>
              <span className="text-gray-500">Atendimento direcionado</span>
            </li>
          </ul>
        </div>
      </div>

      <br />
      {/* Linha Divisória e Copyright */}
      <div className="w-full max-w-6xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <span>
          © {new Date().getFullYear()} B2C Infos | Mentoria Digital. Todos os
          direitos reservados.
        </span>
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer transition-colors">
            Termos de Uso
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Política de Privacidade
          </span>
        </div>
      </div>
    </footer>
  );
}
