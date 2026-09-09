import { useState } from "react";

const DEFAULT_FAQS = [
  {
    question: "A consultoria é realmente 100% gratuita?",
    answer:
      "Sim, totalmente gratuita. Este é um projeto de extensão universitária do curso de Ciência da Computação da Uninassau Paulista (PEX-MDL-54), voltado ao apoio comunitário e ao fortalecimento do comércio local de Paulista-PE. Não cobramos nenhum valor nem taxa oculta.",
  },
  {
    question: "Onde e como acontecem os encontros da consultoria?",
    answer:
      "Os encontros são presenciais e realizados diretamente no seu próprio comércio, loja ou ponto de venda no município de Paulista-PE. Nossa equipe vai até você em data e horário combinados para não atrapalhar o fluxo do seu atendimento.",
  },
  {
    question: "Preciso ter computador ou equipamentos caros para participar?",
    answer:
      "Não. O treinamento é 100% prático e focado no uso do seu próprio celular. Ensinamos você a usar as ferramentas gratuitas do Instagram e do WhatsApp Business, além de técnicas simples de iluminação natural e fotografia de produtos.",
  },
  {
    question: "Quem são as pessoas que realizarão a consultoria?",
    answer:
      "A consultoria é conduzida por estudantes extensionistas do curso de Ciência da Computação da Uninassau Paulista (Lucas, Marcos, Marcondes, Thiago e Tiago), sob orientação docente, aplicando metodologias práticas de presença digital adaptadas à realidade local.",
  },
  {
    question: "Quem pode participar do projeto?",
    answer:
      "Microempreendedores individuais (MEI), comerciantes de rua, feirantes e pequenos lojistas que atuam no município de Paulista-PE (com foco no Centro e bairros vizinhos) e desejam melhorar sua visibilidade e atrair novos clientes.",
  },
  {
    question: "Como faço para agendar a consultoria?",
    answer:
      "Basta preencher o formulário de diagnóstico rápido aqui no site ou clicar no botão do WhatsApp para falar diretamente conosco. Nossa equipe entrará em contato para alinhar o melhor dia e horário da visita.",
  },
];

export default function FAQs({ faqs = DEFAULT_FAQS }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-16 lg:py-24 px-6 flex flex-col items-center bg-transparent"
    >
      <div className="w-full max-w-4xl">
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-[#b535f6] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            08 / Dúvidas Frequentes
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            Perguntas frequentes<span className="text-[#b535f6]">.</span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-xl leading-relaxed">
            Tudo o que você precisa saber sobre a consultoria presencial e gratuita
            de presença digital para o comércio de Paulista-PE.
          </p>
        </div>

        <br />

        {/* Lista de Acordeão */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`faq-${index}`}
                className={`bg-white/2 border transition-all duration-300 rounded-xl overflow-hidden
                  ${isOpen ? "border-[#b535f6]/50 bg-white/3" : "border-white/5 hover:border-[#b535f6]/30"}
                `}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 lg:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#b535f6] shrink-0"></span>
                    <span className="text-white font-medium text-base lg:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#b535f6] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-400 text-sm lg:text-base leading-relaxed border-t border-white/5 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
