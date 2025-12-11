import { Bus, MapPin, Clock } from 'lucide-react';
import { BUS_SCHEDULES, STOPS } from '../data/transportData';

export default function Transport() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">🚌</div>
        <h1 className="text-5xl font-bold text-white">Transport Schedule</h1>
        <p className="text-xl text-slate-300">Bus timings across all stops</p>
      </div>

      {/* Bus Schedules */}
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

            {/* Horizontal Bus Runs Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Stop Headers */}
                <thead>
                  <tr>
                    {STOPS.map((stop) => (
                      <th key={stop} className="bg-slate-700/50 text-center px-4 py-3 border-b border-slate-600 text-slate-200 font-semibold whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          <MapPin className="w-4 h-4 text-red-400" />
                          <span className="text-sm">{stop}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Bus Runs as Rows */}
                <tbody>
                  {/* Generate rows for maximum timings across all stops */}
                  {Array.from({
                    length: Math.max(...STOPS.map(stop => schedule.timings[stop]?.length || 0))
                  }).map((_, runIndex) => (
                    <tr key={runIndex} className="hover:bg-slate-700/30 transition-colors">
                      {/* Timing for each stop */}
                      {STOPS.map((stop) => {
                        const timing = schedule.timings[stop]?.[runIndex];
                        return (
                          <td
                            key={`${stop}-${runIndex}`}
                            className="text-center px-4 py-3 border-b border-slate-600/30 text-slate-200"
                          >
                            {timing ? (
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="font-mono font-semibold text-sm">{timing}</span>
                              </div>
                            ) : (
                              <span className="text-slate-500 text-xs italic">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <p className="text-slate-300">
          💡 <span className="font-semibold">Note:</span> Each row represents one bus run across all stops. Timings are synchronized horizontally - left to right shows the bus journey from one stop to the next. Staff buses have different schedules for weekdays, weekends, and holidays. Student buses run with the same timings throughout the week.
        </p>
      </div>
    </div>
  );
}
