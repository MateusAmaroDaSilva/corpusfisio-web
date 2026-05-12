import heroBg from '../assets/images/hero-bg.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <img src={heroBg} alt="" aria-hidden="true" />
        <div className="hero__overlay"></div>
      </div>

      {/* Organic floating shapes */}
      <div className="hero__shapes" aria-hidden="true">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Referência em Fisioterapia & Pilates
        </div>

        <h1 className="hero__title">
          Onde a ciência do<br />
          <span className="hero__title-accent">movimento</span> encontra<br />
          o cuidado que você merece
        </h1>

        <p className="hero__subtitle">
          Na <strong>CorpusFisio</strong>, unimos a excelência da fisioterapia baseada em evidências
          com os benefícios transformadores do Pilates terapêutico. Seu corpo é a nossa prioridade,
          e cada sessão é um passo rumo à sua melhor versão.
        </p>

        <div className="hero__actions">
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma avaliação na CorpusFisio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
            id="hero-cta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Agendar minha avaliação
          </a>
          <a href="#servicos" className="btn btn--secondary" id="hero-services-btn">
            Conhecer serviços
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">2.500+</span>
            <span className="hero__stat-label">Pacientes atendidos</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">8+</span>
            <span className="hero__stat-label">Anos de experiência</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Satisfação dos pacientes</span>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,80 L1440,120 L0,120 Z" fill="var(--color-cream)" />
        </svg>
      </div>
    </section>
  )
}
