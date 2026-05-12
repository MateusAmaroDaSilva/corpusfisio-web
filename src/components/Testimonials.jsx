import { useState } from 'react'
import './Testimonials.css'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Roberto Almeida',
      info: '45 anos, Arquiteto',
      text: 'Cheguei à clínica com uma dor lombar insuportável que me impedia de trabalhar. Com poucas semanas de fisioterapia focada, o alívio foi imenso. A equipe não apenas tratou a dor, mas me ensinou a prevenir novas crises.',
      tag: 'Fisioterapia'
    },
    {
      id: 2,
      name: 'Carla Nogueira',
      info: '32 anos, Professora',
      text: 'O Pilates na CorpusFisio mudou minha qualidade de vida. Hoje tenho muito mais disposição, minha postura melhorou 100% e as dores de cabeça tensionais desapareceram. É o meu momento sagrado da semana.',
      tag: 'Pilates'
    },
    {
      id: 3,
      name: 'Sônia Freitas',
      info: '68 anos, Aposentada',
      text: 'Fiz a reabilitação pós-operatória do meu joelho aqui. O carinho, a paciência e a competência técnica de toda a equipe foram fundamentais para eu voltar a andar sem medo. Atendimento de altíssima qualidade.',
      tag: 'Reabilitação'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="testimonials__inner reveal">
          <div className="testimonials__header">
            <span className="section-label section-label--light">Prova Social</span>
            <h2 className="section-title">Histórias de superação</h2>
          </div>

          <div className="testimonials__carousel">
            <div className="testimonials__slides-wrapper">
              <div className="testimonials__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((item) => (
                  <div className="testimonials__slide" key={item.id}>
                    <div className="testimonials__quote-icon">"</div>
                    <p className="testimonials__text">{item.text}</p>
                    <div className="testimonials__author">
                      <div className="testimonials__author-info">
                        <h4 className="testimonials__author-name">{item.name}</h4>
                        <span className="testimonials__author-desc">{item.info}</span>
                      </div>
                      <span className="testimonials__tag">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials__controls">
              <div className="testimonials__dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`testimonials__dot ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para o depoimento ${idx + 1}`}
                  ></button>
                ))}
              </div>
              
              <div className="testimonials__arrows">
                <button onClick={prevTestimonial} aria-label="Depoimento anterior">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button onClick={nextTestimonial} aria-label="Próximo depoimento">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
