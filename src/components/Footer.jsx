import logo from '../assets/images/Logo-CorpusFisio.jpeg'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          {/* Column 1: Brand */}
          <div className="footer__col footer__brand">
            <div className="footer__logo">
              {/* Usando filtro no logo para inverter cores se necessário, mas como o fundo é muito escuro e o logo tem cores vivas, uma versão com fundo claro sutil funciona bem */}
              <div className="footer__logo-bg">
                <img src={logo} alt="CorpusFisio Logo" />
              </div>
            </div>
            <p className="footer__desc">
              Cuidando da sua saúde com excelência e dedicação. Restaurando movimento e qualidade de vida.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer__col">
            <h4 className="footer__title">Serviços</h4>
            <ul className="footer__links">
              <li><a href="#servicos">Fisioterapia Ortopédica</a></li>
              <li><a href="#servicos">Fisioterapia Desportiva</a></li>
              <li><a href="#servicos">Reabilitação Pós-operatória</a></li>
              <li><a href="#servicos">Pilates em Aparelhos</a></li>
              <li><a href="#servicos">Pilates Clínico</a></li>
            </ul>
          </div>

          {/* Column 3: Institutional */}
          <div className="footer__col">
            <h4 className="footer__title">Institucional</h4>
            <ul className="footer__links">
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#equipe">Nossa Equipe</a></li>
              <li><a href="#planos">Planos e Valores</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer__col">
            <h4 className="footer__title">Contato Rápido</h4>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-label">WhatsApp</span>
                <a href="https://wa.me/5500000000000" className="footer__contact-value">(11) 99999-9999</a>
              </li>
              <li>
                <span className="footer__contact-label">Telefone Fixo</span>
                <span className="footer__contact-value">(11) 3333-3333</span>
              </li>
              <li>
                <span className="footer__contact-label">E-mail</span>
                <a href="mailto:contato@corpusfisio.com.br" className="footer__contact-value">contato@corpusfisio.com.br</a>
              </li>
              <li>
                <span className="footer__contact-label">Endereço</span>
                <span className="footer__contact-value">Av. das Clínicas, 1234 - Sala 501, SP</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear > 2026 ? currentYear : 2026} CorpusFisio. Todos os direitos reservados.
          </div>
          <div className="footer__signature">
            Desenvolvido com dedicação para sua saúde
          </div>
          <a href="#hero" className="footer__back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
