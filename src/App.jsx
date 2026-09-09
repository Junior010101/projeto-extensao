import Footer from "./components/Footer";
import { Header } from "./components/Header";
import About from "./sections/About";
import AboutUs from "./sections/AboutUs";
import ConfidenceBar from "./sections/ConfidenceBar";
import FAQs from "./sections/FAQs";
import GetStarted from "./sections/GetStarted";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Results from "./sections/Results";
import Services from "./sections/Services";
import TargetAudience from "./sections/TargetAudience";

const BENEFITS = ["Consultoria de presença digital - Paulista - PE"];
const ALCANCE = "0%";
const ENGAJAMENTO = "0";

const ITENS = [
  { value: "0", label: "PROJETOS" },
  { value: "100%", label: "SATISFAÇÃO" },
  { value: "24/7", label: "SUPORTE" },
];

const CUSTOMER = [
  {
    id: "01",
    title: "Solidão na Gestão",
    description:
      "Você lidera sozinho, toma decisões sem respaldo e sente o peso de carregar a comunidade nas costas.",
  },
  {
    id: "02",
    title: "Silêncio e Baixo Engajamento",
    description:
      "Membros entram, mas ninguém interage. Falta aquela energia viva e participativa no dia a dia.",
  },
  {
    id: "03",
    title: "Monetização Sem Previsibilidade",
    description:
      "Sabe que gera valor real, mas tem dificuldade em estruturar um modelo de negócio lucrativo e escalável.",
  },
  {
    id: "04",
    title: "Excesso de Informação",
    description:
      "Tenta aplicar mil estratégias diferentes da internet, mas trava por falta de um método validado e direção.",
  },
];

const SERVICOS = [
  {
    id: "1",
    numero: "01",
    titulo: "Desenvolvimento",
    descricao:
      "Criamos soluções digitais modernas, rápidas e pensadas para proporcionar uma experiência marcante.",
    imagem:
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
  },
  {
    id: "2",
    numero: "02",
    titulo: "Mentoria Individual",
    descricao:
      "Acompanhamento estratégico personalizado para alinhar sua essência, comunicação e modelo de negócios no digital.",
    imagem:
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
  },
  {
    id: "3",
    numero: "03",
    titulo: "Estratégia de Conteúdo",
    descricao:
      "Definição de linhas editoriais e roteiros magnéticos focados em atrair o seu público-alvo e gerar alto engajamento.",
    imagem:
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
  },
  {
    id: "4",
    numero: "04",
    titulo: "Monetização de Marca",
    descricao:
      "Transforme sua audiência em faturamento com estruturas de produtos digitais e infoprodutos.",
    imagem:
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Diagnóstico Inicial",
    description:
      "Analisamos o momento atual do seu negócio, identificando gargalos e oportunidades de crescimento imediato.",
  },
  {
    step: "02",
    title: "Plano Estratégico",
    description:
      "Desenhamos um mapa de ação personalizado com metas claras, processos e métricas de acompanhamento.",
  },
  {
    step: "03",
    title: "Sessões Individuais",
    description:
      "Encontros quinzenais para alinhamento estratégico, mentoria prática e direcionamento de tomadas de decisão.",
  },
  {
    step: "04",
    title: "Escala & Acompanhamento",
    description:
      "Ajustes finos no método para garantir previsibilidade, novos canais de tração e crescimento sustentável.",
  },
];

const NEGOCIOS = [
  "E-commerces",
  "Prestadores de Serviço",
  "Infoprodutores",
  "Especialistas",
  "Negócios Locais",
  "Startups",
];

const AREAS = [
  "Instagram",
  "LinkedIn",
  "YouTube",
  "TikTok",
  "Tráfego Pago",
  "SEO & Web",
];

const RESULTS = [
  {
    metric: "+240%",
    title: "Crescimento em Vendas",
    client: "E-commerce de Moda",
    description:
      "Reestruturação completa da esteira de produtos e posicionamento no Instagram, reduzindo o custo de aquisição pela metade em 60 dias.",
  },
  {
    metric: "10k+",
    title: "Leads Qualificados",
    client: "Lançamento de Infoproduto",
    description:
      "Estratégia de captação e nutrição de audiência focada em autoridade, gerando o maior pico de faturamento da história do especialista.",
  },
  {
    metric: "3x",
    title: "Mais Engajamento",
    client: "Prestador de Serviço",
    description:
      "Criação de linha editorial magnética no LinkedIn e Instagram, lotando a agenda de consultorias premium em apenas 4 semanas.",
  },
];

const PLANS = [
  {
    name: "Diagnóstico",
    description:
      "Ideal para entender o cenário atual e dar os primeiros passos.",
    price: "R$ 0",
    period: "/único",
    highlighted: false,
    features: [
      "Análise completa de perfil",
      "Plano de ação para 30 dias",
      "1 Sessão individual de 1h",
      "Material de apoio em PDF",
    ],
    buttonText: "Começar agora",
    acao: () => {
      const to = "contato";
      if (to) {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
  },
  {
    name: "Consultoria Elite",
    description:
      "Acompanhamento lado a lado para escalar sua presença digital.",
    price: "Sob Consulta",
    period: "/mês",
    highlighted: true, // Plano em destaque
    badge: "Unico que temos",
    features: [
      "Tudo do plano Diagnóstico",
      "Encontros quinzenais via Zoom",
      "Análise de métricas e conversão",
      "Revisão de campanhas (Ads)",
      "Suporte diário via WhatsApp",
      "Projeto 100% personalizado",
      "Acesso direto aos fundadores",
    ],
    buttonText: "Quero escalar",
    acao: () => {
      const phone = "558187364790";
      const message = encodeURIComponent(
        "Olá! Gostaria de mais informações sobre os serviços.",
      );
      window.location.href = `https://wa.me/${phone}?text=${message}`;
    },
  },
];

const TEAM = [
  {
    name: "Lucas Ximenes",
    role: "Estrategista Principal / Lider",
    image: "https://avatars.githubusercontent.com/u/170953106?v=4",
    description:
      "Especialista em growth e posicionamento de marcas de alto valor.",
  },
  {
    name: "Marcondes Paixão",
    role: "Head de Conteúdo",
    image: "https://avatars.githubusercontent.com/u/162238592?v=4",
    description: "Copywriter focado em narrativas que convertem.",
  },
  {
    name: "Marcos Antônio",
    role: "Gestor de Tráfego",
    image: "https://avatars.githubusercontent.com/u/184113392?v=4",
    description:
      "Engenheiro de dados especializado em escala e otimização de ROI.",
  },
  {
    name: "Thiago Layme",
    role: "Especialista em BI",
    image: "https://avatars.githubusercontent.com/u/277160569?v=4",
    description:
      "Analista de métricas garantindo previsibilidade para as operações.",
  },
  {
    name: "Thiago da Silva",
    role: "Diretor de Arte",
    image: "https://avatars.githubusercontent.com/u/211912997?v=4",
    description:
      "Responsável por traduzir estratégias em identidades visuais premium.",
  },
];

const FAQS = [
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

function App() {
  return (
    <>
      <Header />
      <Hero beneficios={BENEFITS} engajamento={ENGAJAMENTO} alcance={ALCANCE} />
      <a
        href="https://wa.me/558187364790"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entre em contato"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-400 active:scale-95"
      >
        <span className="material-symbols-outlined text-8xl">
          contact_support
        </span>
      </a>
      <ConfidenceBar items={ITENS} />
      <About customerPains={CUSTOMER} />
      <Services servicos={SERVICOS} />
      <HowItWorks steps={STEPS} />
      <TargetAudience areasOfAction={AREAS} businessTypes={NEGOCIOS} />
      <Results resultsData={RESULTS} />
      <Pricing plans={PLANS} />
      <AboutUs team={TEAM} />
      <FAQs faqs={FAQS} />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
