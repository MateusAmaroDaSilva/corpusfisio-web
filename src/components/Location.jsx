import './Location.css'

export default function Location() {
  return (
    <section id="localizacao" className="location">
      <div className="container">
        <div className="location__grid">
          <div className="location__content reveal-left">
            <span className="section-label">Onde Estamos</span>
            <h2 className="section-title">Venha conhecer nosso espaço</h2>
            <p className="location__desc">
              Um ambiente projetado para transmitir paz, conforto e segurança durante 
              todo o seu tratamento. Fácil acesso e estacionamento no local.
            </p>

            <div className="location__details">
              <div className="location__item">
                <div className="location__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4>Endereço</h4>
                  <p>Av. das Clínicas, 1234 - Sala 501<br />Edifício Medical Center, Bairro Saúde<br />São Paulo - SP, 01234-567</p>
                </div>
              </div>

              <div className="location__item">
                <div className="location__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 07h às 20h<br />Sábado: 08h às 13h</p>
                </div>
              </div>

              <div className="location__item">
                <div className="location__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Contatos Rápidos</h4>
                  <p>WhatsApp: (11) 99999-9999<br />Fixo: (11) 3333-3333<br />contato@corpusfisio.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location__map reveal-right">
            <div className="location__map-wrapper">
              {/* Google Maps Embed placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117006.14389921473!2d-46.73693245366405!3d-23.585579979708945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f5b17%3A0x6b44c8033604f323!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714570000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Clínica CorpusFisio"
              ></iframe>
              <div className="location__map-overlay">
                <a 
                  href="https://goo.gl/maps/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', marginRight: '8px' }}>
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  Traçar Rota
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
