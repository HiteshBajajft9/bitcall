import { useState } from 'react';
import { Plus, Trash2, AlertCircle } from 'lucide-react';

export default function Attendance() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Add new subject
  const handleAddSubject = () => {
    if (newSubject.trim() && selectedDays.length > 0) {
      const newSubjectObj = {
        id: Date.now(),
        name: newSubject,
        days: selectedDays,
        attendance: {}
      };

      // Initialize attendance records for each day
      selectedDays.forEach((day) => {
        newSubjectObj.attendance[day] = null; // null = not selected, 'attended', 'missed', 'cancelled'
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

  // Update attendance for a specific class
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

  // Clear attendance for a specific class
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

  // Calculate attendance percentage and needed classes
  const calculateAttendance = (subjectId) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return { percentage: 0, attended: 0, total: 0, needed: 0 };

    const attended = Object.values(subject.attendance).filter(v => v === 'attended').length;
    const total = subject.days.length;
    const percentage = total > 0 ? Math.round((attended / total) * 100) : 0;

    // Calculate classes needed to reach 75%
    let needed = 0;
    if (percentage < 75) {
      // (attended + x) / (total + x) >= 0.75
      // attended + x >= 0.75 * (total + x)
      // attended + x >= 0.75 * total + 0.75 * x
      // 0.25 * x >= 0.75 * total - attended
      // x >= (0.75 * total - attended) / 0.25
      needed = Math.ceil((0.75 * total - attended) / 0.25);
    }

    return { percentage, attended, total, needed: Math.max(0, needed) };
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">📋</div>
        <h1 className="text-5xl font-bold text-white">Attendance Tracker</h1>
        <p className="text-xl text-slate-300">Track your class attendance and maintain 75% minimum</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
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

              {/* Subject Name Input */}
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

              {/* Days Selection */}
              <div>
                <label className="text-slate-300 font-semibold block mb-3">Select Days</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
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

          {/* Subjects List */}
          <div className="space-y-6">
            {subjects.length === 0 ? (
              <div className="text-center py-12 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-lg">No subjects added yet</p>
                <p className="text-slate-500 text-sm mt-2">Add a subject to start tracking attendance</p>
              </div>
            ) : (
              subjects.map((subject) => (
                <div key={subject.id} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  {/* Subject Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
                    <button
                      onClick={() => deleteSubject(subject.id)}
                      className="bg-red-600/20 hover:bg-red-600/40 text-red-400 p-2 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Class Attendance Grid */}
                  <div className="space-y-3">
                    {subject.days.map((day) => (
                      <div key={day} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-white">{day}</span>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            subject.attendance[day] === 'attended'
                              ? 'bg-green-600/30 text-green-300'
                              : subject.attendance[day] === 'missed'
                              ? 'bg-red-600/30 text-red-300'
                              : subject.attendance[day] === 'cancelled'
                              ? 'bg-yellow-600/30 text-yellow-300'
                              : 'bg-slate-600/30 text-slate-400'
                          }`}>
                            {subject.attendance[day] ? subject.attendance[day].toUpperCase() : 'NOT SET'}
                          </span>
                        </div>

                        {/* Attendance Buttons */}
                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() => updateAttendance(subject.id, day, 'attended')}
                            className={`flex-1 min-w-max px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                              subject.attendance[day] === 'attended'
                                ? 'bg-green-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-green-600/30 hover:text-green-300'
                            }`}
                          >
                            ✓ Attended
                          </button>
                          <button
                            onClick={() => updateAttendance(subject.id, day, 'missed')}
                            className={`flex-1 min-w-max px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                              subject.attendance[day] === 'missed'
                                ? 'bg-red-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-red-600/30 hover:text-red-300'
                            }`}
                          >
                            ✗ Missed
                          </button>
                          <button
                            onClick={() => updateAttendance(subject.id, day, 'cancelled')}
                            className={`flex-1 min-w-max px-3 py-2 rounded-lg font-semibold text-sm transition-all ${
                              subject.attendance[day] === 'cancelled'
                                ? 'bg-yellow-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-yellow-600/30 hover:text-yellow-300'
                            }`}
                          >
                            ⊘ Cancelled
                          </button>
                          <button
                            onClick={() => clearAttendance(subject.id, day)}
                            disabled={subject.attendance[day] === null}
                            className="px-3 py-2 rounded-lg font-semibold text-sm bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Sidebar - Attendance Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 sticky top-6">
            <h3 className="text-xl font-bold text-white mb-6">📊 Attendance Summary</h3>

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
                        <h4 className="font-semibold text-white text-sm">{subject.name}</h4>
                        <span className={`text-lg font-bold ${isGood ? 'text-green-400' : 'text-red-400'}`}>
                          {percentage}%
                        </span>
                      </div>

                      <div className="text-xs text-slate-300 mb-3">
                        <p>{attended} / {total} classes attended</p>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-700 rounded-full h-2 mb-3 overflow-hidden">
                        <div
                          className={`h-full transition-all ${isGood ? 'bg-green-500' : 'bg-red-500'}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>

                      {/* Required Classes Message */}
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
          💡 <span className="font-semibold">How it works:</span> Add subjects with their class days, mark attendance for each day, and track your percentage in the sidebar. Keep your attendance above 75% to stay in good academic standing.
        </p>
      </div>
    </div>
  );
}
