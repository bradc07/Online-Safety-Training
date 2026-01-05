function Certificate({ completedCount, totalCount, onBack }) {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const allCompleted = completedCount === totalCount

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fade-in">
      <button
        className="btn btn-outline"
        onClick={onBack}
        style={{ marginBottom: '1.5rem' }}
      >
        ← Back to Home
      </button>

      {!allCompleted ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
          <h2 style={{ marginBottom: '1rem' }}>Certificate Locked</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
            Complete all {totalCount} case studies to unlock your certificate of completion.
          </p>
          <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.25rem', color: 'var(--color-primary)', marginTop: '1.5rem' }}>
            Progress: {completedCount} / {totalCount} completed
          </p>
          <div style={{ width: '200px', height: '12px', backgroundColor: 'var(--color-bg-dark)', borderRadius: '6px', margin: '1rem auto', overflow: 'hidden' }}>
            <div style={{
              width: `${(completedCount / totalCount) * 100}%`,
              height: '100%',
              backgroundColor: 'var(--color-success)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      ) : (
        <>
          <div className="certificate">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h1 className="certificate-title">Certificate of Completion</h1>
            <h2 className="certificate-subtitle">
              Online Safety in Practice:<br />
              Interactive Case Study Training
            </h2>
            <div className="certificate-school">
              Herne Hill School
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
              This certifies successful completion of all {totalCount} professional development<br />
              case studies covering online safety scenarios for school staff.
            </p>
            <div style={{ margin: '2rem 0', padding: '1rem', backgroundColor: 'var(--color-bg)', borderRadius: '8px' }}>
              <strong>Learning Objectives Covered:</strong>
              <ul style={{ textAlign: 'left', marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Responding to online content involving pupils</li>
                <li>Managing devices and privacy considerations</li>
                <li>Maintaining professional digital boundaries</li>
                <li>Navigating emerging technology in education</li>
                <li>Handling peer online incidents</li>
                <li>Recognizing safeguarding-technology intersections</li>
                <li>Personal device use and professional standards</li>
                <li>Supporting parents with online safety concerns</li>
              </ul>
            </div>
            <div className="certificate-footer">
              <div className="certificate-date">
                <strong>Date:</strong> {today}
              </div>
              <div className="certificate-signature">
                <strong>Signature:</strong> _________________
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={handlePrint}>
              Print Certificate
            </button>
          </div>
        </>
      )}

      <div className="card" style={{ marginTop: '2rem', textAlign: 'left' }}>
        <h3 style={{ marginBottom: '1rem' }}>CPD Record</h3>
        <p>
          This training can be recorded as Continuing Professional Development (CPD) in your portfolio.
          Suggested recording format:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
          <li><strong>Training Title:</strong> Online Safety in Practice: Interactive Case Studies</li>
          <li><strong>Provider:</strong> Herne Hill School (Internal CPD)</li>
          <li><strong>Duration:</strong> Approximately 2-3 hours (self-paced) or 60-90 minutes (facilitated)</li>
          <li><strong>Focus Areas:</strong> Online safety, safeguarding, professional conduct</li>
          <li><strong>Links to:</strong> KCSIE 2024, School Safeguarding Policy, Staff Code of Conduct</li>
        </ul>
      </div>
    </div>
  )
}

export default Certificate
