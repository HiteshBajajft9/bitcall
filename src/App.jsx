import { useState } from 'react'
import { Timetable, Transport, Study } from './components'

function App() {
  const [activeMenu, setActiveMenu] = useState('STUDY')

  const menuOptions = ['STUDY', 'TRANSPORT', 'CLUBS', 'CONTACTS', 'TIME TABLE']

  const menuContent = {
    STUDY: {
      title: 'Study Materials',
      description: 'Learn and explore comprehensive study materials designed to enhance your knowledge.',
      icon: '📚'
    },
    TRANSPORT: {
      title: 'Transport',
      description: 'View transportation options, schedules, and routes available for campus travel.',
      icon: '🚗'
    },
    CLUBS: {
      title: 'Clubs',
      description: 'Discover various clubs and student organizations on campus.',
      icon: '🎭'
    },
    CONTACTS: {
      title: 'Contacts',
      description: 'Find contact information for departments, faculty, and support services.',
      icon: '📞'
    },
    'TIME TABLE': {
      title: 'Time Table',
      description: 'View your personalized timetable and schedule.',
      icon: '📅'
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
        {activeMenu === 'TIME TABLE' ? (
          <Timetable />
        ) : activeMenu === 'STUDY' ? (
          <Study />
        ) : activeMenu === 'TRANSPORT' ? (
          <Transport />
        ) : activeMenu === 'CLUBS' ? (
          // Clubs Section
          <div className="space-y-8 animate-fadeIn">
            {/* Content Header */}
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">🎭</div>
              <h1 className="text-5xl font-bold text-white">Clubs</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">Discover various clubs and student organizations on campus</p>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎭</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Club {item}</h3>
                  <p className="text-slate-400 text-sm mb-4">Join this club to explore activities and events.</p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : activeMenu === 'CONTACTS' ? (
          // Contacts Section
          <div className="space-y-8 animate-fadeIn">
            {/* Content Header */}
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">📞</div>
              <h1 className="text-5xl font-bold text-white">Contacts</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">Find contact information for departments, faculty, and support services</p>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📞</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact {item}</h3>
                  <p className="text-slate-400 text-sm mb-4">Get in touch with this department or service.</p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                    <span>View Contact</span>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Fallback for any other menu items
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
