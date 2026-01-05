import { useState, useEffect } from 'react'

const STAGES = [
  { id: 'scenario', label: 'Scenario', icon: '📖' },
  { id: 'response', label: 'Response', icon: '🤔' },
  { id: 'reflection', label: 'Reflection', icon: '💭' },
  { id: 'discussion', label: 'Discussion', icon: '👥' },
  { id: 'expert', label: 'Expert Analysis', icon: '🎓' },
  { id: 'policy', label: 'Policy', icon: '📋' },
  { id: 'takeaways', label: 'Takeaways', icon: '📌' }
]

function CaseStudy({
  caseData,
  savedResponse,
  isCompleted,
  onComplete,
  onSaveResponse,
  onBack,
  onNextCase,
  hasNextCase
}) {
  const [currentStage, setCurrentStage] = useState(0)
  const [selectedOption, setSelectedOption] = useState(savedResponse || null)
  const [expandedSections, setExpandedSections] = useState({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStage])

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    onSaveResponse(option)
  }

  const handleNextStage = () => {
    if (currentStage < STAGES.length - 1) {
      setCurrentStage(currentStage + 1)
    } else {
      onComplete()
    }
  }

  const handlePrevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1)
    }
  }

  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId]
    })
  }

  const renderStageContent = () => {
    const stage = STAGES[currentStage]

    switch (stage.id) {
      case 'scenario':
        return (
          <div className="fade-in">
            <span className="stage-label scenario">Stage 1: The Scenario</span>
            <div className="scenario-box">
              {caseData.scenario.map((paragraph, idx) => (
                <p key={idx} className="scenario-text">{paragraph}</p>
              ))}
              {caseData.awareness && (
                <ul className="awareness-list">
                  {caseData.awareness.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)' }}>
              Take a moment to consider what you would do in this situation before proceeding.
            </p>
          </div>
        )

      case 'response':
        return (
          <div className="fade-in">
            <span className="stage-label response">Stage 2: Initial Response</span>
            <p style={{ marginBottom: '1.5rem' }}>
              Select your instinctive response. There's no judgement here - this captures your gut reaction.
            </p>
            <h3 className="options-title">Response Options</h3>
            <div className="options-container">
              {caseData.options.map((option) => (
                <div
                  key={option.letter}
                  className={`option-card ${selectedOption === option.letter ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(option.letter)}
                >
                  <div className={`option-letter ${option.letter.toLowerCase()}`}>
                    {option.letter}
                  </div>
                  <div className="option-text">{option.text}</div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'reflection':
        return (
          <div className="fade-in">
            <span className="stage-label reflection">Stage 3: Reflection Prompts</span>
            <p style={{ marginBottom: '1.5rem' }}>
              Before revealing expert thinking, consider these questions:
            </p>
            <ol className="reflection-list">
              {caseData.reflectionPrompts.map((prompt, idx) => (
                <li key={idx} className="reflection-item">
                  <div className="reflection-question">{prompt.question}</div>
                  {prompt.subtext && (
                    <div style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                      {prompt.subtext}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )

      case 'discussion':
        return (
          <div className="fade-in">
            <span className="stage-label discussion">Stage 4: Discussion Points</span>
            <p style={{ marginBottom: '1.5rem' }}>
              For group training sessions, use these prompts to facilitate discussion:
            </p>

            {caseData.discussionPoints.pairs && (
              <div className="discussion-group">
                <div className="discussion-label">In pairs, discuss:</div>
                <ul className="discussion-list">
                  {caseData.discussionPoints.pairs.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {caseData.discussionPoints.group && (
              <div className="discussion-group">
                <div className="discussion-label">As a group:</div>
                <ul className="discussion-list">
                  {caseData.discussionPoints.group.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )

      case 'expert':
        return (
          <div className="fade-in">
            <span className="stage-label expert">Stage 5: Expert Analysis</span>
            <div className="expert-section">
              {caseData.expertAnalysis.intro && (
                <p style={{ marginBottom: '1.5rem' }}>{caseData.expertAnalysis.intro}</p>
              )}

              {caseData.expertAnalysis.optionAnalysis && (
                <div style={{ marginBottom: '1.5rem' }}>
                  {caseData.expertAnalysis.optionAnalysis.map((analysis) => (
                    <div key={analysis.letter} className={`option-analysis ${analysis.letter.toLowerCase()}`}>
                      <div className="option-analysis-header">
                        Option {analysis.letter}: {analysis.verdict}
                      </div>
                      <p style={{ margin: 0 }}>{analysis.explanation}</p>
                    </div>
                  ))}
                </div>
              )}

              {caseData.expertAnalysis.keyPoints && (
                <div style={{ marginBottom: '1.5rem' }}>
                  {caseData.expertAnalysis.keyPoints.map((point, idx) => (
                    <p key={idx}><strong>{point.title}:</strong> {point.content}</p>
                  ))}
                </div>
              )}

              {caseData.expertAnalysis.bestPractice && (
                <div className="best-practice">
                  <div className="best-practice-title">
                    ✅ Best Practice Response
                  </div>
                  <ol>
                    {caseData.expertAnalysis.bestPractice.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {caseData.expertAnalysis.doNot && (
                <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(201, 68, 68, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: 'var(--color-error)' }}>Do NOT:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    {caseData.expertAnalysis.doNot.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )

      case 'policy':
        return (
          <div className="fade-in">
            <span className="stage-label policy">Stage 6: Policy Connections</span>
            <p style={{ marginBottom: '1.5rem' }}>
              This case study connects to the following school policies and statutory guidance:
            </p>
            <div className="policy-list">
              {caseData.policyConnections.map((policy, idx) => (
                <div key={idx} className="policy-item">
                  <div className="policy-icon">📄</div>
                  <div>
                    <div className="policy-name">{policy.name}</div>
                    <div className="policy-desc">{policy.relevance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'takeaways':
        return (
          <div className="fade-in">
            <span className="stage-label takeaways">Stage 7: Key Takeaways</span>
            <p style={{ marginBottom: '1.5rem' }}>
              Remember these principles:
            </p>
            <div className="takeaways-grid">
              {caseData.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="takeaway-item">
                  <div className="takeaway-pin">📌</div>
                  <div className="takeaway-content">
                    <strong>{takeaway.principle}</strong>
                    <span>{takeaway.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="case-study">
      <button
        className="btn btn-outline"
        onClick={onBack}
        style={{ marginBottom: '1.5rem' }}
      >
        ← Back to Cases
      </button>

      <div className="case-header">
        <div className="case-number">Case Study {caseData.id}</div>
        <h2 className="case-title">"{caseData.title}"</h2>
        <div className="case-theme">{caseData.theme}</div>
      </div>

      <div className="stage-nav">
        {STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            className={`stage-dot ${idx === currentStage ? 'active' : ''} ${idx < currentStage ? 'completed' : ''}`}
            onClick={() => setCurrentStage(idx)}
            title={stage.label}
          />
        ))}
      </div>

      <div style={{ minHeight: '400px' }}>
        {renderStageContent()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid var(--color-border)' }}>
        <button
          className="btn btn-outline"
          onClick={handlePrevStage}
          disabled={currentStage === 0}
          style={{ opacity: currentStage === 0 ? 0.5 : 1 }}
        >
          ← Previous
        </button>

        <div style={{ textAlign: 'center', fontFamily: 'var(--font-retro)', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
          {STAGES[currentStage].icon} {STAGES[currentStage].label}
          <br />
          <span style={{ fontSize: '0.9rem' }}>
            Stage {currentStage + 1} of {STAGES.length}
          </span>
        </div>

        {currentStage < STAGES.length - 1 ? (
          <button
            className="btn btn-primary"
            onClick={handleNextStage}
            disabled={currentStage === 1 && !selectedOption}
            style={{ opacity: (currentStage === 1 && !selectedOption) ? 0.5 : 1 }}
          >
            Next →
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {!isCompleted && (
              <button className="btn btn-accent" onClick={onComplete}>
                Mark Complete ✓
              </button>
            )}
            {hasNextCase && (
              <button className="btn btn-primary" onClick={onNextCase}>
                Next Case →
              </button>
            )}
          </div>
        )}
      </div>

      {isCompleted && (
        <div style={{ textAlign: 'center', marginTop: '1rem', padding: '0.75rem', backgroundColor: 'rgba(61, 139, 64, 0.1)', borderRadius: '8px' }}>
          <span style={{ color: 'var(--color-success)', fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>
            ✓ Case Study Completed
          </span>
        </div>
      )}
    </div>
  )
}

export default CaseStudy
