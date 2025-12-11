import { useEffect, useRef } from 'react';

export default function TimelineIndicator({ timelineItems, allSchedule }) {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateTimeline = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutesFromMidnight = hours * 60 + minutes;

      // Calculate where the current time falls in our day
      if (lineRef.current && containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const dayStart = 8 * 60; // 08:00 in minutes
        const dayEnd = 17.5 * 60; // 17:30 in minutes
        
        if (totalMinutesFromMidnight >= dayStart && totalMinutesFromMidnight <= dayEnd) {
          const percentageOfDay = (totalMinutesFromMidnight - dayStart) / (dayEnd - dayStart);
          const dotTop = containerHeight * percentageOfDay;
          lineRef.current.style.top = `${dotTop}px`;
        }
      }
    };

    updateTimeline();
    const interval = setInterval(updateTimeline, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [allSchedule]);

  return (
    <div
      ref={containerRef}
      className="relative w-12 min-h-96"
    >
      <div className="absolute w-0.5 h-full bg-slate-600 left-1/2 transform -translate-x-1/2">
        <div
          ref={lineRef}
          className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg left-1/2 transform -translate-x-1/2"
          style={{ transition: 'top 0.3s ease-out' }}
        />
      </div>
    </div>
  );
}
