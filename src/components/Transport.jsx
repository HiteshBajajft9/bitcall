import { Bus, MapPin, Clock } from 'lucide-react';
import { BUS_SCHEDULES } from '../data/transportData';

export default function Transport() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">🚌</div>
        <h1 className="text-5xl font-bold text-white">Transport Schedule</h1>
        <p className="text-xl text-slate-300">Bus timings for all stops and categories</p>
      </div>

      {/* Bus Schedules Grid */}
      <div className="space-y-8">
        {BUS_SCHEDULES.map((schedule) => (
          <div key={schedule.id} className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            {/* Schedule Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Bus className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">{schedule.category}</h2>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-yellow-400" />
                <p className="text-lg">{schedule.dayType}</p>
              </div>
              
              {/* Gradient divider */}
              <div className="mt-4 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-transparent rounded-full"></div>
            </div>

            {/* Timings Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(schedule.timings).map(([stop, timings]) => (
                <div
                  key={stop}
                  className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-500/50 transition-colors duration-300"
                >
                  {/* Stop Name */}
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-white">{stop}</h3>
                      <div className="w-full h-0.5 bg-gradient-to-r from-red-400 to-transparent mt-2"></div>
                    </div>
                  </div>

                  {/* Timings List */}
                  <div className="space-y-2">
                    {timings.length > 0 ? (
                      timings.map((time, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg bg-slate-600/30 border border-slate-600/50 hover:bg-slate-600/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-slate-200 font-mono font-semibold">{time}</span>
                        </div>
                      ))
                    ) : (
                      <div className="py-2 px-3 text-slate-500 text-sm italic">
                        No buses scheduled
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <p className="text-slate-300">
          💡 <span className="font-semibold">Note:</span> Staff buses have different schedules for weekdays, weekends, and holidays. Student buses run with the same timings throughout the week (Monday to Sunday).
        </p>
      </div>
    </div>
  );
}
