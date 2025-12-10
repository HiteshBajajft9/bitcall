import { useState } from 'react'

function App() {
  const [activeMenu, setActiveMenu] = useState('STUDY')
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [showSyllabus, setShowSyllabus] = useState(false)

  const menuOptions = ['STUDY', 'PRACTICE', 'PROJECTS', 'RESOURCES', 'COMMUNITY']

  const semesterData = {
    semester1: {
      name: 'Semester 1',
      subjects: [
        'Data Structures',
        'Web Development Basics',
        'Database Management',
        'Object-Oriented Programming',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Mathematics for Computing',
        'Digital Logic Design'
      ]
    },
    semester2: {
      name: 'Semester 2',
      subjects: [
        'Advanced Algorithms',
        'Full Stack Development',
        'Cloud Computing',
        'Mobile App Development',
        'Cybersecurity Basics',
        'Machine Learning Fundamentals',
        'Microservices Architecture',
        'Data Science Essentials',
        'Advanced Databases'
      ]
    }
  }

  const modules = [
    'Module 1: Introduction',
    'Module 2: Core Concepts',
    'Module 3: Implementation',
    'Module 4: Advanced Topics',
    'Module 5: Best Practices',
    'Module 6: Review & Assessment'
  ]

  const menuContent = {
    STUDY: {
      title: 'Study Materials',
      description: 'Learn and explore comprehensive study materials designed to enhance your knowledge.',
      icon: '📚'
    },
    PRACTICE: {
      title: 'Practice Problems',
      description: 'Sharpen your skills with challenging practice problems and coding exercises.',
      icon: '💻'
    },
    PROJECTS: {
      title: 'Projects',
      description: 'Build real-world projects and add them to your portfolio.',
      icon: '🛠️'
    },
    RESOURCES: {
      title: 'Learning Resources',
      description: 'Access curated links, documentation, and helpful learning resources.',
      icon: '📖'
    },
    COMMUNITY: {
      title: 'Community',
      description: 'Connect with other learners, share ideas, and get help from the community.',
      icon: '👥'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-950 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                BitHub
              </div>
              <p className="text-slate-400 text-sm">Your Learning Platform</p>
            </div>
            <div className="text-slate-400 text-sm">
              Welcome back!
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto">
            {menuOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveMenu(option)}
                className={`px-6 py-4 font-semibold text-sm transition-all duration-300 whitespace-nowrap border-b-2 ${
                  activeMenu === option
                    ? 'border-blue-400 text-blue-400 bg-slate-700/50'
                    : 'border-transparent text-slate-300 hover:text-slate-100 hover:bg-slate-700/30'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {activeMenu === 'STUDY' ? (
          // Study Materials Section with Submenu
          <div className="space-y-8">
            {!selectedSubject ? (
              // Semesters View
              <>
                {/* Syllabus Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setShowSyllabus(!showSyllabus)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>📄</span>
                    <span>{showSyllabus ? 'Hide' : 'View'} Syllabus PDF</span>
                  </button>
                </div>

                {/* Syllabus Preview */}
                {showSyllabus && (
                  <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Course Syllabus</h3>
                    <div className="bg-slate-900 rounded p-4 h-64 flex items-center justify-center border-2 border-dashed border-slate-600">
                      <div className="text-center">
                        <p className="text-slate-400 text-lg mb-2">📄 Syllabus PDF</p>
                        <p className="text-slate-500 text-sm">PDF preview will be displayed here</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Header */}
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">📚</div>
                  <h1 className="text-5xl font-bold text-white">Study Materials</h1>
                  <p className="text-xl text-slate-300">Choose a semester to explore subjects and download notes</p>
                </div>

                {/* Semesters */}
                <div className="space-y-12 mt-12">
                  {['semester1', 'semester2'].map((semKey) => (
                    <div key={semKey}>
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {semesterData[semKey].name}
                        </span>
                        <span className="text-2xl">📖</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {semesterData[semKey].subjects.map((subject, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedSubject(subject)}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer group"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                📝
                              </div>
                              <span className="text-slate-500 text-sm">Click to view</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                              {subject}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4">
                              Access modules and notes for this subject
                            </p>
                            <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                              <span>View Modules</span>
                              <span>→</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              // Subject Modules View
              <div className="space-y-8 animate-fadeIn">
                {/* Back Button */}
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold mb-6 transition-colors duration-300"
                >
                  <span>←</span>
                  <span>Back to Semesters</span>
                </button>

                {/* Subject Header */}
                <div className="space-y-4">
                  <div className="text-6xl mb-4">📚</div>
                  <h1 className="text-5xl font-bold text-white">{selectedSubject}</h1>
                  <p className="text-xl text-slate-300">
                    Select a module to view or download notes
                  </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          📄
                        </div>
                        <span className="text-slate-500 text-sm">Click to open</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                        {module}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">
                        Download notes and materials for this module
                      </p>
                      <div className="flex items-center space-x-3">
                        <button className="text-green-400 hover:text-green-300 font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                          <span>Open Notes</span>
                          <span>→</span>
                        </button>
                        <button className="text-slate-400 hover:text-slate-300 font-semibold text-sm flex items-center space-x-2 transition-all duration-300">
                          <span>⬇️</span>
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info Box */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mt-8">
                  <p className="text-slate-300">
                    💡 <span className="font-semibold">Tip:</span> Click "Open Notes" to view the module in your browser, or "Download" to save the PDF locally.
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Other Menu Items (PRACTICE, PROJECTS, RESOURCES, COMMUNITY)
          <div className="space-y-8 animate-fadeIn">
            {/* Content Header */}
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">{menuContent[activeMenu].icon}</div>
              <h1 className="text-5xl font-bold text-white">
                {menuContent[activeMenu].title}
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                {menuContent[activeMenu].description}
              </p>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {menuContent[activeMenu].icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {menuContent[activeMenu].title} {item}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Explore this {menuContent[activeMenu].title.toLowerCase()} section and expand your knowledge.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer Info */}
            <div className="mt-16 text-center text-slate-400 text-sm">
              <p>Click on any menu option above to see different content sections</p>
            </div>
          </div>
        )}
      </main>

      {/* CSS for animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default App
