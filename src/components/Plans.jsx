import './Plans.css'

export default function Plans() {
  const plans = [
    {
      name: 'Plano Mensal',
      subtitle: 'Para manutenção da saúde',
      price: 'Fale conosco',
      period: '',
      features: [
        '1 a 2 sessões por semana',
        'Sessões de 50 minutos',
        'Reavaliação a cada 3 meses',
        'Acesso ao grupo de dicas VIP'
      ],
      recommended: false
    },
    {
      name: 'Plano Trimestral',
      subtitle: 'O caminho ideal para resultados',
      price: 'Melhor custo-benefício',
      period: '',
      features: [
        '2 a 3 sessões por semana',
        'Sessões de 50 a 60 minutos',
        'Avaliação física completa inclusa',
        'Reavaliação mensal de progresso',
        'Acompanhamento online via WhatsApp'
      ],
      recommended: true
    },
    {
      name: 'Pacote Reabilitação',
      subtitle: 'Tratamento intensivo para dores',
      price: '10 sessões',
      period: '',
      features: [
        'Frequência definida na avaliação',
        'Sessões focadas na analgesia',
        'Técnicas manuais avançadas',
        'Exercícios terapêuticos direcionados',
        'Prioridade de agendamento'
      ],
      recommended: false
    }
  ]

  return (
    <section id="planos" className="plans">
      <div className="container">
        <div className="plans__header reveal">
          <span className="section-label">Invista em Você</span>
          <h2 className="section-title">Planos e Agendamento</h2>
          <p className="section-subtitle">
            Oferecemos opções flexíveis para que seu tratamento ou prática de Pilates 
            se encaixe perfeitamente na sua rotina e no seu orçamento.
          </p>
        </div>

        <div className="plans__grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plans__card reveal ${plan.recommended ? 'plans__card--recommended' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.recommended && (
                <div className="plans__badge">Mais Escolhido</div>
              )}
              
              <div className="plans__card-header">
                <h3 className="plans__name">{plan.name}</h3>
                <p className="plans__subtitle">{plan.subtitle}</p>
                <div className="plans__price-wrapper">
                  <span className="plans__price">{plan.price}</span>
                  {plan.period && <span className="plans__period">/{plan.period}</span>}
                </div>
              </div>

              <div className="plans__features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plans__action">
                <a 
                  href={`https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre o ${plan.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.recommended ? 'btn--primary' : 'btn--outline'}`}
                >
                  Consultar valores
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="plans__info reveal">
          <p>
            Trabalhamos com reembolso para diversos convênios médicos. 
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">Fale com nossa recepção</a> para saber mais.
          </p>
        </div>
      </div>
    </section>
  )
}
