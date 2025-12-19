import { useState } from 'react';
import { Plus, Trash2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Attendance() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Get day name from date
  const getDayName = (date) => {
    const dayIndex = date.getDay();
    if (dayIndex === 0) return 'Monday';
    if (dayIndex === 6) return 'Friday';
    return daysOfWeek[dayIndex - 1];
  };

  // Add new subject
  const handleAddSubject = () => {
    if (newSubject.trim() && selectedDays.length > 0) {
      const newSubjectObj = {
        id: Date.now(),
        name: newSubject,
        days: selectedDays,
        attendance: {}
      };

      selectedDays.forEach((day) => {
        newSubjectObj.attendance[day] = null;
      });

      setSubjects([...subjects, newSubjectObj]);
      setNewSubject('');
      setSelectedDays([]);
      setShowAddForm(false);
    }
  };

  // Toggle day selection
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // Update attendance
  const updateAttendance = (subjectId, day, status) => {
    setSubjects(subjects.map(subject => {
      if (subject.id === subjectId) {
        return {
          ...subject,
          attendance: {
            ...subject.attendance,
            [day]: status
          }
        };
      }
      return subject;
    }));
  };

  // Clear attendance
  const clearAttendance = (subjectId, day) => {
    setSubjects(subjects.map(subject => {
      if (subject.id === subjectId) {
        return {
          ...subject,
          attendance: {
            ...subject.attendance,
            [day]: null
          }
        };
      }
      return subject;
    }));
  };

  // Delete subject
  const deleteSubject = (subjectId) => {
    setSubjects(subjects.filter(s => s.id !== subjectId));
  };

  // Get subjects for a day
  const getSubjectsForDay = (day) => {
    return subjects.filter(subject => subject.days.includes(day));
  };

  // Calculate attendance stats
  const calculateAttendance = (subjectId) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return { percentage: 0, attended: 0, total: 0, needed: 0 };

    const attended = Object.values(subject.attendance).filter(v => v === 'attended').length;
    const total = subject.days.length;
    const percentage = total > 0 ? Math.round((attended / total) * 100) : 0;

    let needed = 0;
    if (percentage < 75) {
      needed = Math.ceil((0.75 * total - attended) / 0.25);
    }

    return { percentage, attended, total, needed: Math.max(0, needed) };
  };

  const currentDayName = getDayName(currentDate);
  const subjectsForDay = getSubjectsForDay(currentDayName);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">📋</div>
        <h1 className="text-5xl font-bold text-white">Attendance Tracker</h1>
        <p className="text-xl text-slate-300">Track your class attendance daywise and maintain 75% minimum</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Add Subject Button */}
          {!showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Subject</span>
            </button>
          )}

          {/* Add Subject Form */}
          {showAddForm && (
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-4">
              <h3 className="text-xl font-bold text-white">Add New Subject</h3>

              <div>
                <label className="text-slate-300 font-semibold block mb-2">Subject Name</label>
                <input
                  type="text"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  placeholder="e.g., Mathematics, Data Structures"
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-3">Select Days (Monday - Friday)</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                        selectedDays.includes(day)
                          ? 'bg-blue-600 text-white border border-blue-400'
                          : 'bg-slate-700 text-slate-300 border border-slate-600 hover:border-blue-400'
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddSubject}
                  disabled={!newSubject.trim() || selectedDays.length === 0}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Add Subject
                </button>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setNewSubject('');
                    setSelectedDays([]);
                  }}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {subjects.length === 0 ? (
            <div className="text-center py-12 bg-slate-800 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-lg">No subjects added yet</p>
              <p className="text-slate-500 text-sm mt-2">Add a subject to start tracking attendance</p>
            </div>
          ) : (
            <>
              {/* Date Navigation */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000))}
                    className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="text-center flex-1 mx-4">
                    <div className="text-3xl font-bold text-white">{currentDayName}</div>
                    <div className="text-sm text-slate-400 mt-1">
                      {currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
                      if (nextDate <= new Date()) setCurrentDate(nextDate);
                    }}
                    className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) > new Date()}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <button
                  onClick={() => setCurrentDate(new Date())}
                  className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 py-2 rounded-lg text-sm font-semibold transition-colors border border-blue-600/30"
                >
                  Go to Today
                </button>
              </div>

              {/* Day View */}
              <div className="space-y-6">
                {subjectsForDay.length === 0 ? (
                  <div className="text-center py-12 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-slate-400 text-lg">No classes on {currentDayName}</p>
                    <p className="text-slate-500 text-sm mt-2">Select a different day or add subjects for this day</p>
                  </div>
                ) : (
                  subjectsForDay.map((subject) => (
                    <div key={subject.id} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                      {/* Subject Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
                          <p className="text-sm text-slate-400 mt-1">Class on {currentDayName}</p>
                        </div>
                        <button
                          onClick={() => deleteSubject(subject.id)}
                          className="bg-red-600/20 hover:bg-red-600/40 text-red-400 p-2 rounded-lg transition-colors"
                          title="Delete subject"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Status Badge */}
                      <div className="mb-4">
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${
                          subject.attendance[currentDayName] === 'attended'
                            ? 'bg-green-600/30 text-green-300'
                            : subject.attendance[currentDayName] === 'missed'
                            ? 'bg-red-600/30 text-red-300'
                            : subject.attendance[currentDayName] === 'cancelled'
                            ? 'bg-yellow-600/30 text-yellow-300'
                            : 'bg-slate-600/30 text-slate-400'
                        }`}>
                          {subject.attendance[currentDayName] ? subject.attendance[currentDayName].toUpperCase() : 'NOT MARKED'}
                        </span>
                      </div>

                      {/* Attendance Buttons */}
                      <div className="flex gap-3 flex-wrap">
                        <button
                          onClick={() => updateAttendance(subject.id, currentDayName, 'attended')}
                          className={`flex-1 min-w-max px-4 py-3 rounded-lg font-semibold transition-all ${
                            subject.attendance[currentDayName] === 'attended'
                              ? 'bg-green-600 text-white shadow-lg shadow-green-600/50'
                              : 'bg-slate-700 text-slate-300 hover:bg-green-600/30 hover:text-green-300'
                          }`}
                        >
                          ✓ Attended
                        </button>
                        <button
                          onClick={() => updateAttendance(subject.id, currentDayName, 'missed')}
                          className={`flex-1 min-w-max px-4 py-3 rounded-lg font-semibold transition-all ${
                            subject.attendance[currentDayName] === 'missed'
                              ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                              : 'bg-slate-700 text-slate-300 hover:bg-red-600/30 hover:text-red-300'
                          }`}
                        >
                          ✗ Missed
                        </button>
                        <button
                          onClick={() => updateAttendance(subject.id, currentDayName, 'cancelled')}
                          className={`flex-1 min-w-max px-4 py-3 rounded-lg font-semibold transition-all ${
                            subject.attendance[currentDayName] === 'cancelled'
                              ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/50'
                              : 'bg-slate-700 text-slate-300 hover:bg-yellow-600/30 hover:text-yellow-300'
                          }`}
                        >
                          ⊘ Cancelled
                        </button>
                        <button
                          onClick={() => clearAttendance(subject.id, currentDayName)}
                          disabled={subject.attendance[currentDayName] === null}
                          className="px-4 py-3 rounded-lg font-semibold bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 sticky top-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Summary
            </h3>

            {subjects.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-slate-400 text-sm">Add subjects to see summary</p>
              </div>
            ) : (
              <div className="space-y-4">
                {subjects.map((subject) => {
                  const { percentage, attended, total, needed } = calculateAttendance(subject.id);
                  const isGood = percentage >= 75;

                  return (
                    <div
                      key={subject.id}
                      className={`rounded-lg p-4 border transition-all ${
                        isGood
                          ? 'bg-green-600/10 border-green-600/30'
                          : 'bg-red-600/10 border-red-600/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white text-sm truncate">{subject.name}</h4>
                        <span className={`text-lg font-bold flex-shrink-0 ml-2 ${isGood ? 'text-green-400' : 'text-red-400'}`}>
                          {percentage}%
                        </span>
                      </div>

                      <div className="text-xs text-slate-300 mb-3">
                        <p>{attended} / {total} classes</p>
                      </div>

                      <div className="w-full bg-slate-700 rounded-full h-2 mb-3 overflow-hidden">
                        <div
                          className={`h-full transition-all ${isGood ? 'bg-green-500' : 'bg-red-500'}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>

                      {!isGood && (
                        <div className="flex items-start gap-2 p-2 rounded bg-red-600/20 border border-red-600/30">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-red-300">
                            Attend {needed} more class{needed !== 1 ? 'es' : ''} to reach 75%
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <p className="text-slate-300">
          💡 <span className="font-semibold">How it works:</span> Add subjects with their class days (Monday-Friday), navigate to any day to mark attendance, and check the sidebar for your overall attendance percentage. Keep your attendance above 75% to stay in good academic standing.
        </p>
      </div>
    </div>
  );
}
