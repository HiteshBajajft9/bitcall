// Break Component
export default function Break({ startTime, endTime, breakType = 'Break' }) {
  return (
    <div className="bg-slate-700 rounded-lg px-3 py-2 border border-slate-600 hover:border-slate-500 transition-all duration-300">
      <div className="text-slate-300 text-sm font-semibold whitespace-nowrap">
        🕐 {breakType}
      </div>
    </div>
  );
}
