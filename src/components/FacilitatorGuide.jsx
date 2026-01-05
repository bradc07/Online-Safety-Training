function FacilitatorGuide({ onBack }) {
  return (
    <div className="fade-in">
      <button
        className="btn btn-outline"
        onClick={onBack}
        style={{ marginBottom: '1.5rem' }}
      >
        ← Back to Home
      </button>

      <h1 style={{ marginBottom: '0.5rem' }}>Facilitator Guide</h1>
      <p style={{ fontFamily: 'var(--font-retro)', fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
        For INSET day training and staff meeting sessions
      </p>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Suggested Session Structure (60-90 minutes)</h3>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Introduction (5 mins)</strong> - Set context: these are meant to be hard; no wrong answers
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Case Study 1 (15-20 mins)</strong> - Full walkthrough with discussion
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Case Study 2 (15-20 mins)</strong> - Pair discussion focus
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Case Study 3 or 4 (15-20 mins)</strong> - Table discussions
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Group Debrief (10 mins)</strong> - What patterns emerged? What surprised you?
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Policy Check (5 mins)</strong> - What gaps have we identified?
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Close (5 mins)</strong> - Key takeaways, signpost to resources
          </li>
        </ol>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Facilitator Tips</h3>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Resist the urge to give "the answer" too quickly</strong> - Let staff wrestle with the complexity
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Let staff sit in the discomfort of ambiguity</strong> - That's where real learning happens
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Validate when people disagree</strong> - That's the point; these scenarios have genuine complexity
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Note down policy gaps for follow-up</strong> - These sessions often reveal areas needing clarification
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Keep discussion confidential</strong> - No naming real situations or specific children
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Acknowledge emotion</strong> - Some scenarios may trigger strong feelings; validate this
          </li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Discussion Facilitation Techniques</h3>

        <h4 style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Think-Pair-Share</h4>
        <p>Give individuals 2 minutes to think, then pairs discuss for 3 minutes, then share with group.</p>

        <h4 style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Four Corners</h4>
        <p>Assign each response option to a corner. Staff move to their choice, then defend their position.</p>

        <h4 style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Devil's Advocate</h4>
        <p>After staff share initial reactions, ask: "What's the strongest argument against your approach?"</p>

        <h4 style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Role Play Extension</h4>
        <p>After discussing a case, have volunteers act out the recommended approach.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Adapting for Different Audiences</h3>

        <h4 style={{ color: 'var(--color-secondary)', marginTop: '1rem' }}>Teaching Staff</h4>
        <p>Focus on Cases 1, 4, 5, 7 - classroom and homework-related scenarios</p>

        <h4 style={{ color: 'var(--color-secondary)', marginTop: '1rem' }}>Support Staff</h4>
        <p>Focus on Cases 1, 2, 8 - playground supervision and parent interactions</p>

        <h4 style={{ color: 'var(--color-secondary)', marginTop: '1rem' }}>Senior Leaders</h4>
        <p>All cases, with emphasis on policy implications in Cases 2, 3, 4</p>

        <h4 style={{ color: 'var(--color-secondary)', marginTop: '1rem' }}>Governors</h4>
        <p>Cases 2, 3, 6 - oversight and policy development focus</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Follow-Up Resources</h3>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>UK Safer Internet Centre</strong> - saferinternet.org.uk
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>CEOP Education</strong> - thinkuknow.co.uk
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Internet Matters</strong> - internetmatters.org
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>National Online Safety</strong> - nationalonlinesafety.com
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>KCSIE 2024</strong> - Latest statutory guidance
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>DfE Mobile Phones Guidance (2024)</strong> - Principles for device management
          </li>
        </ul>
      </div>

      <div className="card" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Print Materials</h3>
        <p style={{ marginBottom: '1rem' }}>
          To print case studies for offline use, navigate to each case and use your browser's print function (Ctrl+P / Cmd+P).
          The print stylesheet will format content appropriately.
        </p>
        <p style={{ marginBottom: 0 }}>
          Completion certificates can be printed from the Certificate page after completing all case studies.
        </p>
      </div>
    </div>
  )
}

export default FacilitatorGuide
