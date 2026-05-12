import './About.css'

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text reveal-left">
            <span className="section-label">Sobre a Clínica</span>
            <h2 className="section-title">
              Mais do que tratar sintomas,<br />
              <em>restauramos sua qualidade de vida</em>
            </h2>
            <p className="about__description">
              A <strong>CorpusFisio</strong> nasceu do sonho de criar um espaço onde saúde, ciência e
              acolhimento caminham juntos. Fundada por fisioterapeutas com anos de experiência clínica
              e acadêmica, nossa clínica é referência em tratamento especializado e Pilates terapêutico.
            </p>
            <p className="about__description">
              Acreditamos que cada corpo tem sua própria história, suas limitações e seu potencial único.
              Por isso, cada plano de tratamento é <strong>100% individualizado</strong> — desde a
              avaliação funcional detalhada até o acompanhamento contínuo dos seus resultados.
            </p>

            <div className="about__signature">
              <div className="about__signature-line"></div>
              <span>Dra. Maria Clara & Dr. Rafael — Fundadores</span>
            </div>
          </div>

          <div className="about__methodology reveal-right">
            <h3 className="about__method-title">Nossa Metodologia</h3>
            <p className="about__method-intro">
              Um caminho claro e cuidadoso para sua recuperação:
            </p>

            <div className="about__steps">
              <div className="about__step">
                <div className="about__step-number">01</div>
                <div className="about__step-content">
                  <h4>Avaliação Completa</h4>
                  <p>
                    Realizamos uma avaliação funcional detalhada, entendendo seu histórico,
                    seus objetivos e mapeando cada ponto que precisa de atenção. Nada genérico — tudo feito sob medida.
                  </p>
                </div>
              </div>

              <div className="about__step">
                <div className="about__step-number">02</div>
                <div className="about__step-content">
                  <h4>Tratamento Personalizado</h4>
                  <p>
                    Com base na avaliação, traçamos um plano terapêutico que combina técnicas
                    de fisioterapia e/ou Pilates clínico, sempre com foco em resultados concretos e no seu conforto.
                  </p>
                </div>
              </div>

              <div className="about__step">
                <div className="about__step-number">03</div>
                <div className="about__step-content">
                  <h4>Acompanhamento Contínuo</h4>
                  <p>
                    Reavaliamos periodicamente sua evolução, ajustando o plano conforme
                    necessário. Você nunca está sozinho — estamos lado a lado em cada etapa da sua recuperação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
