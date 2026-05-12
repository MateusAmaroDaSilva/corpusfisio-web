import { useState } from 'react'
import fisioImg from '../assets/images/fisioterapia.png'
import pilatesImg from '../assets/images/pilates.png'
import './Services.css'

export default function Services() {
  const [activeTab, setActiveTab] = useState('fisio')

  const fisioServices = [
    { title: 'Fisioterapia Ortopédica', desc: 'Tratamento de lesões ósseas, musculares e articulares, focando no alívio da dor e restauração da função.' },
    { title: 'Fisioterapia Desportiva', desc: 'Prevenção e reabilitação de lesões em atletas, otimizando o retorno seguro à prática esportiva.' },
    { title: 'Reabilitação Pós-operatória', desc: 'Acompanhamento especializado após cirurgias, acelerando a cicatrização e recuperação dos movimentos.' },
    { title: 'Fisioterapia Neurológica', desc: 'Intervenção em disfunções do sistema nervoso, visando melhorar a coordenação, equilíbrio e autonomia.' }
  ]

  const pilatesServices = [
    { title: 'Pilates em Aparelhos', desc: 'Exercícios em equipamentos específicos que oferecem resistência e suporte, ideais para ganho de força e flexibilidade.' },
    { title: 'Pilates Solo (Mat Pilates)', desc: 'Prática no colchonete utilizando o peso do próprio corpo para fortalecer o "core" e melhorar a postura.' },
    { title: 'Pilates Clínico', desc: 'Metodologia adaptada por fisioterapeutas para tratar patologias específicas, especialmente dores na coluna.' },
    { title: 'Pilates para Gestantes', desc: 'Acompanhamento seguro durante a gravidez, preparando o corpo para o parto e prevenindo desconfortos.' }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services__header reveal">
          <span className="section-label">Nossos Serviços</span>
          <h2 className="section-title">Especialidades que transformam</h2>
          <p className="section-subtitle">
            Escolha o caminho ideal para sua reabilitação ou manutenção da saúde.
            Nossa equipe está pronta para orientar a melhor abordagem para o seu caso.
          </p>
        </div>

        <div className="services__tabs reveal">
          <button 
            className={`services__tab ${activeTab === 'fisio' ? 'active' : ''}`}
            onClick={() => setActiveTab('fisio')}
          >
            Fisioterapia Especializada
          </button>
          <button 
            className={`services__tab ${activeTab === 'pilates' ? 'active' : ''}`}
            onClick={() => setActiveTab('pilates')}
          >
            Pilates Terapêutico
          </button>
        </div>

        <div className="services__content">
          {/* Fisioterapia Tab */}
          <div className={`services__pane ${activeTab === 'fisio' ? 'active' : ''}`}>
            <div className="services__pane-inner">
              <div className="services__image">
                <img src={fisioImg} alt="Sessão de Fisioterapia" />
                <div className="services__image-badge">Alívio & Recuperação</div>
              </div>
              <div className="services__list">
                {fisioServices.map((service, index) => (
                  <div className="services__card" key={index}>
                    <div className="services__card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="services__card-title">{service.title}</h4>
                      <p className="services__card-desc">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pilates Tab */}
          <div className={`services__pane ${activeTab === 'pilates' ? 'active' : ''}`}>
            <div className="services__pane-inner">
              <div className="services__list">
                {pilatesServices.map((service, index) => (
                  <div className="services__card" key={index}>
                    <div className="services__card-icon services__card-icon--purple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="services__card-title">{service.title}</h4>
                      <p className="services__card-desc">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="services__image services__image--right">
                <img src={pilatesImg} alt="Sessão de Pilates" />
                <div className="services__image-badge services__image-badge--purple">Força & Postura</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
