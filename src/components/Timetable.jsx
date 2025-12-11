import { useState, useEffect } from 'react';
import Lecture from './Lecture';
import Break from './Break';
import { TIMETABLE_DATA, DAYS, BRANCH_SECTIONS, SEMESTERS } from '../data/timetableData';

export default function Timetable() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    
    // If it's Saturday (6) or Sunday (0), default to Monday
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return 'Monday';
    }
    
    return dayName;
  });
  const [selectedBranchSection, setSelectedBranchSection] = useState('ECE-A');
  const [selectedSemester, setSelectedSemester] = useState('1');

  // Update date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter lectures based on selected filters
  const filteredLectures = TIMETABLE_DATA.filter(lecture => {
    const [branch, section] = selectedBranchSection.split('-');
    const matches = (
      lecture.day === selectedDay &&
      lecture.branch === branch &&
      lecture.section === section
    );
    return matches;
  }).sort((a, b) => {
    const timeA = parseInt(a.startTime.replace(':', ''));
    const timeB = parseInt(b.startTime.replace(':', ''));
    return timeA - timeB;
  });

  // Convert time string to minutes for calculations
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const minutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  };

  // Generate the full day schedule with breaks
  const generateSchedule = () => {
    const schedule = [];
    const sortedLectures = filteredLectures;
    
    let currentIndex = 0;
    let currentTime = timeToMinutes('08:00');
    const dayEndTime = timeToMinutes('17:30');

    while (currentTime < dayEndTime) {
      // Check if there's a lecture at current time
      if (currentIndex < sortedLectures.length) {
        const lecture = sortedLectures[currentIndex];
        const lectureStart = timeToMinutes(lecture.startTime);
        const lectureEnd = timeToMinutes(lecture.endTime);

        if (lectureStart <= currentTime && lectureEnd > currentTime) {
          // Check for simultaneous lectures (same start time and end time)
          const simultaneousLectures = [lecture];
          let nextIndex = currentIndex + 1;
          
          while (nextIndex < sortedLectures.length) {
            const nextLecture = sortedLectures[nextIndex];
            const nextStart = timeToMinutes(nextLecture.startTime);
            const nextEnd = timeToMinutes(nextLecture.endTime);
            
            // If same start and end time, add to simultaneous group
            if (nextStart === lectureStart && nextEnd === lectureEnd) {
              simultaneousLectures.push(nextLecture);
              nextIndex++;
            } else {
              break;
            }
          }

          // Add as group if multiple simultaneous lectures, otherwise add single lecture
          if (simultaneousLectures.length > 1) {
            schedule.push({ 
              type: 'lectures-group', 
              lectures: simultaneousLectures, 
              startTime: lecture.startTime,
              endTime: lecture.endTime
            });
            currentIndex += simultaneousLectures.length;
          } else {
            schedule.push({ type: 'lecture', data: lecture });
            currentIndex++;
          }
          
          currentTime = lectureEnd;
          continue;
        } else if (lectureStart > currentTime) {
          // Add break until next lecture
          const breakEnd = Math.min(lectureStart, dayEndTime);
          const breakStartMins = currentTime;
          const breakEndMins = breakEnd;
          
          if (breakEndMins > breakStartMins) {
            schedule.push({
              type: 'break',
              startTime: minutesToTime(breakStartMins),
              endTime: minutesToTime(breakEndMins)
            });
          }
          currentTime = breakEnd;
          continue;
        }
      }

      // If no more lectures, add remaining time as break
      if (currentIndex >= sortedLectures.length && currentTime < dayEndTime) {
        schedule.push({
          type: 'break',
          startTime: minutesToTime(currentTime),
          endTime: minutesToTime(dayEndTime)
        });
        break;
      }

      currentIndex++;
    }

    return schedule;
  };

  const schedule = generateSchedule();

  // Get all breaks from the schedule
  const breaks = schedule.filter(item => item.type === 'break');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">📅</div>
        <h1 className="text-5xl font-bold text-white">BIT Planner</h1>
        <p className="text-xl text-slate-300">Select your filters to view your personalized timetable</p>
        
        {/* Current Date and Time Display */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="bg-slate-700/50 rounded-lg px-6 py-3 border border-slate-600">
            <div className="text-slate-400 text-sm">📅 Current Date</div>
            <div className="text-white font-semibold text-lg">
              {currentDateTime.toLocaleDateString('en-GB', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
              })}
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg px-6 py-3 border border-slate-600">
            <div className="text-slate-400 text-sm">🕐 Current Time</div>
            <div className="text-white font-semibold text-lg font-mono">
              {currentDateTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: true 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-6">Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Day Filter */}
          <div className="space-y-3">
            <label className="text-white font-semibold block">Day</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors duration-300"
            >
              {DAYS.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          {/* Branch and Section Filter */}
          <div className="space-y-3">
            <label className="text-white font-semibold block">Branch - Section</label>
            <select
              value={selectedBranchSection}
              onChange={(e) => setSelectedBranchSection(e.target.value)}
              className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors duration-300"
            >
              {BRANCH_SECTIONS.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Semester Filter */}
          <div className="space-y-3">
            <label className="text-white font-semibold block">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none transition-colors duration-300"
            >
              {SEMESTERS.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Filters Display */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="bg-blue-600/30 border border-blue-400 rounded-full px-4 py-2">
            <span className="text-blue-200 text-sm">
              📅 <span className="font-semibold">{selectedDay}</span>
            </span>
          </div>
          <div className="bg-green-600/30 border border-green-400 rounded-full px-4 py-2">
            <span className="text-green-200 text-sm">
              🏫 <span className="font-semibold">{BRANCH_SECTIONS.find(b => b.value === selectedBranchSection)?.label}</span>
            </span>
          </div>
          <div className="bg-purple-600/30 border border-purple-400 rounded-full px-4 py-2">
            <span className="text-purple-200 text-sm">
              📚 <span className="font-semibold">{SEMESTERS.find(s => s.value === selectedSemester)?.label}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Timetable Section - Card View */}
      <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-6">
          {BRANCH_SECTIONS.find(b => b.value === selectedBranchSection)?.label} - {selectedDay}
        </h2>

        {filteredLectures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg mb-4">📭 No lectures scheduled for the selected filters</p>
            <p className="text-slate-500 text-sm">Try selecting different filters to view available lectures</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Schedule Cards - Left Column (2 columns on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              {schedule.map((item, idx) => (
                <div key={idx}>
                  {item.type === 'lecture' ? (
                    <Lecture
                      lectureName={item.data.lectureName}
                      professor={item.data.professor}
                      classType={item.data.classType}
                      roomNo={item.data.roomNo}
                      branch={item.data.branch}
                      section={item.data.section}
                      startTime={item.data.startTime}
                      endTime={item.data.endTime}
                      timeActive={false}
                    />
                  ) : item.type === 'lectures-group' ? (
                    <div className="grid grid-cols-2 gap-3">
                      {item.lectures.map((lecture, lectureIdx) => (
                        <Lecture
                          key={lectureIdx}
                          lectureName={lecture.lectureName}
                          professor={lecture.professor}
                          classType={lecture.classType}
                          roomNo={lecture.roomNo}
                          branch={lecture.branch}
                          section={lecture.section}
                          startTime={lecture.startTime}
                          endTime={lecture.endTime}
                          timeActive={false}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600 text-center">
                      <div className="text-sm font-semibold text-slate-400">
                        ☕ Break • {item.startTime} - {item.endTime}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Sidebar - Breaks Summary */}
            <div className="lg:col-span-1 space-y-6">
              {/* Breaks Section */}
              <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Breaks Today</h3>
                
                {breaks.length === 0 ? (
                  <div className="p-4 rounded-lg bg-slate-600/30 border border-slate-600 text-center">
                    <span className="text-slate-400 text-sm">No breaks today</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {breaks.map((breakItem, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-600/30 border border-slate-600">
                        <div className="text-sm font-semibold text-slate-200">
                          {breakItem.startTime} - {breakItem.endTime}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          Break Time
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Daily Schedule Info */}
              <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Daily Schedule</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-slate-200">🌅 Morning Classes</div>
                    <div className="text-slate-400 text-xs ml-6">08:00 - 12:50</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">🍽️ Lunch Recess</div>
                    <div className="text-slate-400 text-xs ml-6">13:00 - 13:30</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">🌆 Afternoon Classes</div>
                    <div className="text-slate-400 text-xs ml-6">13:30 - 17:30</div>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-600/30">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Today's Summary</h3>
                <div className="space-y-2 text-sm text-blue-200">
                  <div className="flex justify-between">
                    <span>Total Classes:</span>
                    <span className="font-semibold">{filteredLectures.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Break Time:</span>
                    <span className="font-semibold">{breaks.length > 0 ? breaks.reduce((acc, b) => {
                      const start = timeToMinutes(b.startTime);
                      const end = timeToMinutes(b.endTime);
                      return acc + (end - start);
                    }, 0) + ' mins' : '0 mins'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <p className="text-slate-300">
          💡 <span className="font-semibold">Tip:</span> View your daily schedule with detailed lecture information. The right sidebar shows all breaks and your daily schedule overview. Use filters to customize your timetable.
        </p>
      </div>
    </div>
  );
}
