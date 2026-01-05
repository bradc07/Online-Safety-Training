function HomeScreen({
  caseStudies,
  completedCases,
  onSelectCase,
  onViewFacilitator,
  onViewCertificate,
  onResetProgress
}) {
  return (
    <div className="home-screen fade-in">
      <div className="home-hero">
        <div className="home-icon">📚</div>
        <h1 className="home-title">Online Safety Case Studies</h1>
        <p className="home-description">
          Interactive professional development scenarios exploring the nuanced,
          real-world online safety challenges staff encounter daily.
          These cases embrace genuine ambiguity to encourage reflection and discussion.
        </p>
      </div>

      <div className="case-grid">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className={`case-preview ${completedCases.includes(caseStudy.id) ? 'completed' : ''}`}
            onClick={() => onSelectCase(caseStudy.id)}
          >
            <div className="case-preview-number">
              Case Study {caseStudy.id}
              {completedCases.includes(caseStudy.id) && ' ✓'}
            </div>
            <h3 className="case-preview-title">{caseStudy.title}</h3>
            <p className="case-preview-theme">{caseStudy.theme}</p>
          </div>
        ))}
      </div>

      <div className="facilitator-section">
        <h2 className="facilitator-title">Training Resources</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn btn-secondary" onClick={onViewFacilitator}>
            Facilitator Guide
          </button>
          <button className="btn btn-accent" onClick={onViewCertificate}>
            View Certificate
          </button>
          {completedCases.length > 0 && (
            <button className="btn btn-outline" onClick={onResetProgress}>
              Reset Progress
            </button>
          )}
        </div>
      </div>

      <div className="card" style={{ textAlign: 'left', marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>About This Training</h3>
        <p>
          Unlike training with clear right/wrong answers, these case studies deliberately
          include incomplete information, competing priorities, and situations where
          reasonable people might disagree.
        </p>
        <p>
          <strong>The goal:</strong> Develop professional judgement, know when to escalate,
          and understand the principles that guide good decision-making.
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Aligned with:</strong> KCSIE 2024, school safeguarding policies,
          and the "Love, Care, Excellence" values of Herne Hill School.
        </p>
      </div>
    </div>
  )
}

export default HomeScreen
