import { useEffect, useState } from 'react'
import './App.css'

function App() {
const servicos = [
{
numero: '01',
titulo: 'Desenvolvimento',
descricao: 'Criamos soluções digitais modernas, rápidas e pensadas para proporcionar uma experiência marcante.',
imagem: '/images/servico1.jpg'
},
{
numero: '02',
titulo: 'Design & Interface',
descricao: 'Interfaces sofisticadas que combinam estética, usabilidade e tecnologia para destacar sua presença digital.',
imagem: '/images/servico2.jpg'
},
{
numero: '03',
titulo: 'Tecnologia',
descricao: 'Utilizamos tecnologias modernas para transformar ideias em produtos digitais funcionais e escaláveis.',
imagem: '/images/servico3.jpg'
},
{
numero: '04',
titulo: 'Estratégia Digital',
descricao: 'Planejamento e soluções digitais desenvolvidas para gerar resultados e fortalecer sua marca.',
imagem: '/images/servico4.jpg'
}
]
const [servicoAtual, setServicoAtual] = useState(0)
const [menuAberto, setMenuAberto] = useState(false)
const [progresso, setProgresso] = useState(0)
const proximoServico = () => {
setServicoAtual((atual) => {
return (atual + 1) % servicos.length
})
setProgresso(0)
}
const servicoAnterior = () => {
setServicoAtual((atual) => {
return (atual - 1 + servicos.length) % servicos.length
})
setProgresso(0)
}
const selecionarServico = (index) => {
setServicoAtual(index)
setProgresso(0)
}
useEffect(() => {
const intervalo = setInterval(() => {
setProgresso((valor) => {
if (valor >= 100) {
setServicoAtual((atual) => {
return (atual + 1) % servicos.length
})
return 0
}
return valor + 1
})
}, 50)
return () => clearInterval(intervalo)
}, [])
useEffect(() => {
const moverMouse = (e) => {
const x = (e.clientX / window.innerWidth - 0.5) * 2
const y = (e.clientY / window.innerHeight - 0.5) * 2
document.documentElement.style.setProperty('--mouse-x', `${x}`)
document.documentElement.style.setProperty('--mouse-y', `${y}`)
}
window.addEventListener('mousemove', moverMouse)
return () => {
window.removeEventListener('mousemove', moverMouse)
}
}, [])
const fecharMenu = () => {
setMenuAberto(false)
}
return (
<div className="site" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}> <div className="background-effects"> <div className="grid"></div> <div className="orb orb-1"></div> <div className="orb orb-2"></div> <div className="orb orb-3"></div> </div> <nav className="navbar"> <a
       href="#inicio"
       className="logo"
       onClick={fecharMenu}
     > <span>R</span>LOGO </a>
<div className={menuAberto ? 'nav-links aberto' : 'nav-links'}> <a
         href="#inicio"
         onClick={fecharMenu}
       >
Início </a> <a
         href="#sobre"
         onClick={fecharMenu}
       >
Sobre </a> <a
         href="#servicos"
         onClick={fecharMenu}
       >
Serviços </a> <a
         href="#contato"
         onClick={fecharMenu}
       >
Contato </a> <a
         href="#contato"
         className="nav-button"
         onClick={fecharMenu}
       >
Começar → </a> </div>
<button
className={menuAberto ? 'menu ativo' : 'menu'}
onClick={() => setMenuAberto(!menuAberto)}
aria-label="Abrir menu"
> <span></span> <span></span> <span></span> </button> </nav> <main> <section id="inicio" className="hero"> <div className="hero-content"> <div className="hero-badge"> <span></span>
INOVAÇÃO DIGITAL </div> <h1>
Ideias que se <strong> transformam</strong> <br />
em realidade. </h1> <p>
Criamos experiências digitais modernas para marcas
que querem ir além do comum. </p> <div className="hero-buttons"> <a
             href="#servicos"
             className="main-button"
           >
Explorar projetos <span>↗</span> </a> <a
             href="#sobre"
             className="secondary-button"
           >
Conheça-nos </a> </div> <div className="hero-stats"> <div> <strong>10+</strong> <span>Projetos</span> </div> <div> <strong>98%</strong> <span>Satisfação</span> </div> <div> <strong>24/7</strong> <span>Suporte</span> </div> </div> </div> <div className="hero-visual"> <div className="visual-glow"></div> <div className="tech-ring ring-1"></div> <div className="tech-ring ring-2"></div> <div className="tech-ring ring-3"></div> <div className="floating-card card-top"> <span className="card-icon">✦</span> <div> <strong>Design</strong> <small>Experiência</small> </div> </div> <div className="main-visual"> <div className="visual-lines"></div> <div className="visual-center"> <div className="center-circle"> <span>R</span> </div> </div> <span className="visual-label">
SYSTEM // 01 </span> </div> <div className="floating-card card-bottom"> <span className="status-dot"></span> <div> <strong>ONLINE</strong> <small>System active</small> </div> </div> </div> </section> <section id="sobre" className="section about"> <div className="section-heading"> <span className="section-label">
01 / SOBRE </span> <h2>
Construindo o <span>futuro</span> digital. </h2> </div> <div className="about-content"> <div className="about-text"> <p className="large-text">
Não acreditamos em soluções genéricas.
Cada projeto nasce de uma ideia e é transformado
em uma experiência única. </p> <p>
Unimos tecnologia, design e estratégia para criar
produtos digitais capazes de gerar impacto real. </p> <a
             href="#contato"
             className="text-link"
           >
Conheça nossa visão <span>→</span> </a> </div> <div className="about-cards"> <div className="about-card"> <span>01</span> <h3>Inovação</h3> <p>
Soluções pensadas para o futuro. </p> </div> <div className="about-card"> <span>02</span> <h3>Precisão</h3> <p>
Cada detalhe possui um propósito. </p> </div> <div className="about-card"> <span>03</span> <h3>Impacto</h3> <p>
Resultados que podem ser percebidos. </p> </div> </div> </div> </section> <section id="servicos" className="section services"> <div className="section-heading center"> <span className="section-label">
02 / SERVIÇOS </span> <h2>
O que podemos <span>criar</span>. </h2> <p>
Soluções digitais feitas para transformar ideias. </p> </div> <div className="carousel"> <button
           className="carousel-button esquerda"
           onClick={servicoAnterior}
           aria-label="Serviço anterior"
         >
← </button> <div className="service"> <div className="service-image"> <img
               src={servicos[servicoAtual].imagem}
               alt={servicos[servicoAtual].titulo}
             /> <div className="image-overlay"></div> <div className="image-grid"></div> <span className="image-number">
{servicos[servicoAtual].numero} / 04 </span> </div> <div
             className="service-content"
             key={servicoAtual}
           > <span className="service-number">
{servicos[servicoAtual].numero} </span> <h3>
{servicos[servicoAtual].titulo} </h3> <p>
{servicos[servicoAtual].descricao} </p> <a
               href="#contato"
               className="service-link"
             >
Saiba mais <span>↗</span> </a> </div> </div> <button
           className="carousel-button direita"
           onClick={proximoServico}
           aria-label="Próximo serviço"
         >
→ </button> </div> <div className="carousel-bottom"> <div className="carousel-dots">
{servicos.map((_, index) => (
<button
key={index}
className={
index === servicoAtual
? 'dot ativo'
: 'dot'
}
onClick={() => selecionarServico(index)}
aria-label={`Ir para serviço ${index + 1}`}
></button>
))} </div> <div className="progress">
<span
style={{
width: `${progresso}%`
}}
></span> </div> <span className="slide-counter">
0{servicoAtual + 1} / 04 </span> </div> </section> <section className="cta"> <div className="cta-glow"></div> <span className="section-label">
03 / PRÓXIMO PASSO </span> <h2>
Vamos criar algo <br /> <span>extraordinário?</span> </h2> <p>
Uma boa ideia merece uma experiência à altura. </p> <a
         href="#contato"
         className="main-button"
       >
Iniciar projeto <span>↗</span> </a> </section> <section id="contato" className="contact"> <div className="contact-heading"> <span className="section-label">
04 / CONTATO </span> <h2>
Vamos conversar. </h2> <p>
Tem uma ideia? Estamos prontos para ouvir. </p> </div> <div className="contact-links"> <a href="#"> <span>WhatsApp</span> <strong>↗</strong> </a> <a href="#"> <span>Instagram</span> <strong>↗</strong> </a> <a href="#"> <span>E-mail</span> <strong>↗</strong> </a> </div> </section> </main> <footer> <div className="footer-logo">
LOGO </div> <span>
© 2026 — Todos os direitos reservados. </span> <span>
Designed for the future. </span> </footer> </div>
)
}

export default App
