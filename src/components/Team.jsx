import './Team.css'

export default function Team() {
  const team = [
    {
      name: 'Dra. Maria Clara',
      role: 'Fisioterapeuta Especialista',
      bio: 'Apaixonada por devolver a liberdade de movimento aos pacientes. Especialista em reabilitação ortopédica e dor crônica.',
      initials: 'MC'
    },
    {
      name: 'Dr. Rafael Costa',
      role: 'Instrutor Master de Pilates',
      bio: 'Acredita no poder do corpo forte e equilibrado. Foco no tratamento de patologias da coluna através do Pilates Clínico.',
      initials: 'RC'
    },
    {
      name: 'Dra. Juliana Mendes',
      role: 'Fisioterapeuta Desportiva',
      bio: 'Especialista em fazer atletas amadores e profissionais retornarem ao esporte com ainda mais performance e segurança.',
      initials: 'JM'
    }
  ]

  return (
    <section id="equipe" className="team">
      <div className="container">
        <div className="team__header reveal">
          <span className="section-label">Nossa Equipe</span>
          <h2 className="section-title">Profissionais que cuidam de você</h2>
          <p className="section-subtitle">
            Conheça os especialistas dedicados a entender o seu corpo e 
            construir, junto com você, o melhor caminho para a sua recuperação.
          </p>
        </div>

        <div className="team__grid">
          {team.map((member, index) => (
            <div className="team__card reveal" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
              <div className="team__card-image-wrapper">
                <div className="team__card-avatar">
                  {member.initials}
                </div>
                <div className="team__card-overlay">
                  <div className="team__card-socials">
                    <button aria-label="LinkedIn">In</button>
                    <button aria-label="Instagram">Ig</button>
                  </div>
                </div>
              </div>
              <div className="team__card-info">
                <h4 className="team__card-name">{member.name}</h4>
                <span className="team__card-role">{member.role}</span>
                <p className="team__card-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
