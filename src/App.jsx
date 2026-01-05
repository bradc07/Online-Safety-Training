import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import CaseStudy from './components/CaseStudy'
import FacilitatorGuide from './components/FacilitatorGuide'
import Certificate from './components/Certificate'
import { caseStudies } from './data/caseStudies'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [currentCase, setCurrentCase] = useState(null)
  const [completedCases, setCompletedCases] = useState(() => {
    const saved = localStorage.getItem('completedCases')
    return saved ? JSON.parse(saved) : []
  })
  const [responses, setResponses] = useState(() => {
    const saved = localStorage.getItem('responses')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('completedCases', JSON.stringify(completedCases))
  }, [completedCases])

  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(responses))
  }, [responses])

  const handleSelectCase = (caseId) => {
    setCurrentCase(caseId)
    setCurrentView('case')
  }

  const handleCompleteCase = (caseId) => {
    if (!completedCases.includes(caseId)) {
      setCompletedCases([...completedCases, caseId])
    }
  }

  const handleSaveResponse = (caseId, response) => {
    setResponses({ ...responses, [caseId]: response })
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setCurrentCase(null)
  }

  const handleViewFacilitator = () => {
    setCurrentView('facilitator')
  }

  const handleViewCertificate = () => {
    setCurrentView('certificate')
  }

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCompletedCases([])
      setResponses({})
      localStorage.removeItem('completedCases')
      localStorage.removeItem('responses')
    }
  }

  const progress = (completedCases.length / caseStudies.length) * 100

  return (
    <div className="app-layout">
      <Header
        progress={progress}
        completedCount={completedCases.length}
        totalCount={caseStudies.length}
        onLogoClick={handleBackToHome}
      />

      <main className="main-content">
        <div className="container">
          {currentView === 'home' && (
            <HomeScreen
              caseStudies={caseStudies}
              completedCases={completedCases}
              onSelectCase={handleSelectCase}
              onViewFacilitator={handleViewFacilitator}
              onViewCertificate={handleViewCertificate}
              onResetProgress={handleResetProgress}
            />
          )}

          {currentView === 'case' && currentCase !== null && (
            <CaseStudy
              caseData={caseStudies.find(c => c.id === currentCase)}
              savedResponse={responses[currentCase]}
              isCompleted={completedCases.includes(currentCase)}
              onComplete={() => handleCompleteCase(currentCase)}
              onSaveResponse={(response) => handleSaveResponse(currentCase, response)}
              onBack={handleBackToHome}
              onNextCase={() => {
                const currentIndex = caseStudies.findIndex(c => c.id === currentCase)
                if (currentIndex < caseStudies.length - 1) {
                  handleSelectCase(caseStudies[currentIndex + 1].id)
                } else {
                  handleBackToHome()
                }
              }}
              hasNextCase={caseStudies.findIndex(c => c.id === currentCase) < caseStudies.length - 1}
            />
          )}

          {currentView === 'facilitator' && (
            <FacilitatorGuide onBack={handleBackToHome} />
          )}

          {currentView === 'certificate' && (
            <Certificate
              completedCount={completedCases.length}
              totalCount={caseStudies.length}
              onBack={handleBackToHome}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p className="footer-content">
            Staff Online Safety Training | Herne Hill School | Love, Care, Excellence
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
