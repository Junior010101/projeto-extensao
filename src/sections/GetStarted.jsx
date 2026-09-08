import { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    hasSocial: "yes",
    socialLinks: "",
    digitalSituation: "",
    niche: "",
    moment: "",
    goal: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      access_key: import.meta.env.WEB3FORMS_ACCESS_KEY, // Obtenha gratuitamente em web3forms.com
      subject: `🚀 Novo Lead: ${formData.name} (${formData.niche})`,
      from_name: "Landing Page B2C Infos",
      nome: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      nicho: formData.niche,
      possui_redes: formData.hasSocial === "yes" ? "Sim" : "Não / Do zero",
      canais_ou_situacao:
        formData.hasSocial === "yes"
          ? formData.socialLinks
          : formData.digitalSituation,
      momento_atual: formData.moment,
      objetivo: formData.goal,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "Diagnóstico enviado com sucesso! Verifique seu e-mail e WhatsApp.",
        );

        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          hasSocial: "yes",
          socialLinks: "",
          digitalSituation: "",
          niche: "",
          moment: "",
          goal: "",
        });
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      alert("Erro de conexão ao enviar o formulário.");
    }
  };

  return (
    <section
      className="w-full py-16 lg:py-24 px-6 flex flex-col items-center bg-transparent"
      id="contato"
    >
      <div className="w-full max-w-4xl">
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="text-[#b535f6] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            09 / Vamos Começar
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            Solicite seu diagnóstico gratuito
            <span className="text-[#b535f6]">.</span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-xl leading-relaxed">
            Preencha os dados abaixo para receber sua análise de perfil, plano
            de ação e acesso ao suporte.
          </p>
        </div>

        <br />

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/2 border border-white/5 rounded-2xl p-6 lg:p-10 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">
                E-mail Principal *
              </label>
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">
                WhatsApp (com DDD) *
              </label>
              <input
                type="text"
                required
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">
                Segmento / Nicho *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: E-commerce de Moda, Prestador de Serviço..."
                value={formData.niche}
                onChange={(e) =>
                  setFormData({ ...formData, niche: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            </div>
          </div>

          {/* Campo Dinâmico de Presença Digital */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium">
              Você possui redes sociais ou canais ativos?
            </label>
            <div className="flex gap-6 mb-2">
              <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="hasSocial"
                  checked={formData.hasSocial === "yes"}
                  onChange={() =>
                    setFormData({ ...formData, hasSocial: "yes" })
                  }
                  className="accent-[#b535f6]"
                />
                Sim, possuo canais
              </label>
              <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="hasSocial"
                  checked={formData.hasSocial === "no"}
                  onChange={() => setFormData({ ...formData, hasSocial: "no" })}
                  className="accent-[#b535f6]"
                />
                Estou do zero / Não tenho
              </label>
            </div>

            {formData.hasSocial === "yes" ? (
              <input
                type="text"
                placeholder="Cole os links do seu Instagram, LinkedIn ou Site"
                value={formData.socialLinks}
                onChange={(e) =>
                  setFormData({ ...formData, socialLinks: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            ) : (
              <textarea
                rows={3}
                placeholder="Explique brevemente sua situação atual e qual é o seu ponto de partida..."
                value={formData.digitalSituation}
                onChange={(e) =>
                  setFormData({ ...formData, digitalSituation: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors resize-none"
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">
                Momento Atual do Negócio *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Pré-faturamento, faturando R$ 10k/mês..."
                value={formData.moment}
                onChange={(e) =>
                  setFormData({ ...formData, moment: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">
                Principal objetivo para os próximos 3 meses *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Escalar vendas, estruturar autoridade..."
                value={formData.goal}
                onChange={(e) =>
                  setFormData({ ...formData, goal: e.target.value })
                }
                className="bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b535f6] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-4 rounded-xl font-medium text-white bg-[#b535f6] hover:bg-[#a02dc2] shadow-[0_0_20px_rgba(181,53,246,0.3)] transition-all duration-300 cursor-pointer text-base"
          >
            Receber Diagnóstico e Plano de Ação
          </button>

          <p className="text-center text-gray-500 text-xs mt-2">
            Seus dados estão seguros. Ao enviar, você concorda em receber o
            material automatizado e suporte via WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
