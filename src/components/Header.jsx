function Header({ progress, completedCount, totalCount, onLogoClick }) {
  return (
    <header className="app-header">
      <div className="container">
        <div className="header-content">
          <div className="header-title" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
            <h1>Staff Online Safety Training</h1>
            <span className="header-subtitle">Interactive Case Studies | Herne Hill School</span>
          </div>

          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="progress-text">
              {completedCount}/{totalCount} Complete
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
