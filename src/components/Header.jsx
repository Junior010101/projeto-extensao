import { useState, useEffect } from "react";
import { Button } from "./Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Trava/Destrava o scroll do body conforme o estado do menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: garante que o scroll volte ao normal se o componente for desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMobileNavigate = (id) => {
    setIsOpen(false);
    // Pequeno timeout para aguardar a destrava do overflow do body
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed backdrop-blur-md bg-[#07000DB8] border-b border-[#2e0254b8] w-full px-6 py-5 z-50">
      <nav className="relative flex items-center justify-between min-[820px]:justify-center max-w-7xl mx-auto">
        {/* Espaçador para equilibrar o layout mobile */}
        <div className="w-11 min-[820px]:hidden" />

        {/* Logotipo Centralizada no Mobile (Barra Normal) */}
        <a
          href="#"
          className="min-[820px]:hidden absolute left-1/2 -translate-x-1/2 z-50"
          onClick={(e) => {
            e.preventDefault();
            handleMobileNavigate("#");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/assets/images/logotipo.png"
            alt="logotipo do site"
            className="w-10 h-auto object-contain"
          />
        </a>

        {/* --- MENU DESKTOP (>= 820px) --- */}
        <div className="hidden min-[820px]:flex items-center justify-center gap-8">
          <Button to={"sobre"}>Sobre</Button>
          <Button to={"como-funciona"}>Como funciona</Button>
          <Button to={"resultados"}>Resultados</Button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/assets/images/logotipo.png"
              alt="logotipo do site"
              className="w-10 h-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>
          <Button to={"investimento"}>Investimento</Button>
          <Button to={"faq"}>Dúvidas Frequentes</Button>
        </div>

        {/* Botão Começar (Desktop) */}
        <div className="hidden min-[820px]:block absolute right-0">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleMobileNavigate("contato");
            }}
            className="inline-flex items-center justify-center rounded-lg border border-[#a855f7]/35 bg-[#7c3aed]/10 px-4.75 py-2.75 text-[13px] font-medium text-[#c084fc] hover:border-purple-500 hover:bg-[#7c3aed]/20 hover:text-white transition-all duration-300 ease-in-out cursor-pointer select-none"
          >
            Começar &rarr;
          </a>
        </div>

        {/* --- BOTÃO HAMBÚRGUER / FECHAR --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir/Fechar Menu"
          className="min-[820px]:hidden p-2.5 rounded-xl border border-purple-500/30 bg-purple-950/20 text-purple-300 hover:text-white transition-all duration-300 active:scale-95 z-50"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 w-screen h-dvh bg-[#07000D] z-40 flex flex-col justify-between px-6 pt-20 pb-8 min-[820px]:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="w-full border-b border-purple-900/30" />

        {/* Links de Navegação Vertical */}
        <div className="flex flex-col gap-5 my-auto py-4">
          <div>
            <Button onClick={() => handleMobileNavigate("sobre")}>Sobre</Button>
          </div>
          <div>
            <Button onClick={() => handleMobileNavigate("como-funciona")}>
              Como funciona
            </Button>
          </div>
          <div>
            <Button onClick={() => handleMobileNavigate("resultados")}>
              Resultados
            </Button>
          </div>
          <div>
            <Button onClick={() => handleMobileNavigate("investimento")}>
              Investimento
            </Button>
          </div>
          <div>
            <Button onClick={() => handleMobileNavigate("faq")}>
              Dúvidas Frequentes
            </Button>
          </div>
        </div>

        {/* Botão Começar no Mobile */}
        <div className="pt-4 border-t border-purple-900/30 w-full">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleMobileNavigate("contato");
            }}
            className="w-full inline-flex items-center justify-center rounded-xl border border-[#a855f7]/40 bg-[#7c3aed]/20 py-3 text-sm font-medium text-[#c084fc] hover:text-white transition-colors"
          >
            Começar &rarr;
          </a>
        </div>
      </div>
    </header>
  );
};
