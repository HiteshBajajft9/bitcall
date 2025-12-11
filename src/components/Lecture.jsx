import { Calendar, User, Users, MapPin, BookOpen, FileText, FlaskConical, Tag } from "lucide-react"

// Determine type badge
const getTypeBadge = (type) => {
  switch (type?.toLowerCase()) {
    case 'lecture':
      return { label: 'Lecture', icon: <BookOpen className="h-3 w-3" /> }
    case 'lab':
      return { label: 'Lab', icon: <FlaskConical className="h-3 w-3" /> }
    case 'tutorial':
      return { label: 'Tutorial', icon: <FileText className="h-3 w-3" /> }
    default:
      return { label: type, icon: <Tag className="h-3 w-3" /> }
  }
}

// Reusable Lecture Component
export default function Lecture({ 
  lectureName, 
  professor, 
  classType, 
  roomNo, 
  branch, 
  section,
  startTime,
  endTime,
  timeActive = false
}) {
  const { label, icon } = getTypeBadge(classType)
  
  let borderClasses = "border border-slate-600"
  if (timeActive) {
    borderClasses = "border-4 border-blue-400"
  }

  return (
    <div
      className={`relative p-4 rounded-lg bg-slate-800 ${borderClasses} shadow-md hover:scale-[1.01] transition-transform duration-300`}
      style={{ wordBreak: 'break-word' }}
    >
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
        <Calendar className="h-3 w-3" />
        <span>{startTime} - {endTime}</span>
        <div className="flex-1 border-t border-slate-600 mx-2" />
      </div>

      <h2 className="text-lg font-bold mb-2 text-white">{lectureName}</h2>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-3" />

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-slate-600 bg-slate-700/50 text-xs text-slate-200">
          {icon} {label}
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-slate-600 bg-slate-700/50 text-xs text-slate-200">
          <User className="h-3 w-3" /> {professor}
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-slate-600 bg-slate-700/50 text-xs text-slate-200">
          <Users className="h-3 w-3" /> {branch}-{section}
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-slate-600 bg-slate-700/50 text-xs text-slate-200">
          <MapPin className="h-3 w-3" /> {roomNo}
        </div>
      </div>
    </div>
  );
}
