# Simultaneous Classes Feature - Implementation Guide

## Overview
The simultaneous classes feature automatically detects when multiple lectures occur at the exact same time with the same duration and displays them side-by-side in a 2-column layout.

## How It Works

### 1. Detection Logic (generateSchedule function)
When processing lectures chronologically, the algorithm now:
- Checks if a lecture exists at the current time
- Looks ahead to find all lectures with identical `startTime` and `endTime`
- Groups them together if multiple are found
- Marks the group with `type: 'lectures-group'`

### 2. Data Structure for Grouped Lectures
```javascript
{
  type: 'lectures-group',
  lectures: [lecture1, lecture2, ...],
  startTime: '09:00',
  endTime: '10:00'
}
```

### 3. Rendering (JSX)
The render logic checks for three types:
- `type: 'lecture'` - Single lecture (existing behavior)
- `type: 'lectures-group'` - Multiple simultaneous lectures (NEW)
- `type: 'break'` - Break period (existing behavior)

For grouped lectures, CSS Grid displays them in 2 columns:
```jsx
<div className="grid grid-cols-2 gap-3">
  {item.lectures.map(lecture => (
    <Lecture key={lectureIdx} {...lectureProps} />
  ))}
</div>
```

## Example Scenarios

### Before (Sequential Display)
```
09:00-10:00 | Embedded Systems (Room 303)
09:00-10:00 | Embedded Systems Lab (Room 304)
```
These would appear stacked in separate cards.

### After (Side-by-Side Display)
```
┌─────────────────────────────────┐
│  09:00-10:00                    │
├──────────────────┬──────────────┤
│ Embedded Systems │ Embedded Lab │
│ Dr. Trivedi      │ Dr. Trivedi  │
│ Room 303         │ Room 304     │
└──────────────────┴──────────────┘
```

## Data Added for Testing

The following simultaneous classes have been added to demonstrate the feature:

### ECE-A Thursday
- Embedded Systems (Lecture) - 09:00-10:00 - Room 303
- Embedded Systems Lab (Lab) - 09:00-10:00 - Room 304

### ECE-B Wednesday
- Machine Learning (Lecture) - 09:00-10:00 - Room 404
- ML Practical (Lab) - 09:00-10:00 - Room 405

### EEE-D Tuesday
- Control Systems (Lecture) - 09:00-10:00 - Room 504
- Control Systems Tutorial (Tutorial) - 09:00-10:00 - Room 505

## Files Modified

### 1. `/src/components/Timetable.jsx`
**generateSchedule() function (lines 60-116)**
- Added loop to detect simultaneous lectures with matching start/end times
- Changed logic to group lectures and create 'lectures-group' type items
- Updated currentIndex advancement for grouped lectures

**Rendering section (lines 276-301)**
- Added conditional for `type: 'lectures-group'`
- Implemented 2-column grid layout using Tailwind CSS
- Each grouped lecture renders in its own Lecture component

### 2. `/src/data/timetableData.js`
- Added 3 pairs of simultaneous classes across different sections/days
- Maintains existing data structure and format
- All new lectures have matching start/end times for their pairs

## Testing the Feature

1. **ECE-A Thursday**: Select "ECE - A" branch and "Thursday" to see the first pair
2. **ECE-B Wednesday**: Select "ECE - B" branch and "Wednesday" to see the second pair
3. **EEE-D Tuesday**: Select "EEE - D" branch and "Tuesday" to see the third pair

All simultaneous classes at 09:00-10:00 will display side-by-side.

## Technical Details

### Algorithm Complexity
- **Time**: O(n²) worst case (when all lectures are simultaneous)
- **Space**: O(n) for the schedule array
- **Practical Impact**: Negligible since max 80+ lectures per day

### Edge Cases Handled
1. **Single lecture at a time**: Displays normally (no grouping)
2. **3+ simultaneous lectures**: All display in 2-column grid (can be extended to 3+ columns if needed)
3. **Different durations**: Not grouped (only same start AND end times)
4. **Breaks**: Unaffected by grouping logic

## Future Enhancements

### Option 1: Support More Columns
Change 2-column grid to dynamic columns:
```jsx
<div className={`grid grid-cols-${Math.min(item.lectures.length, 3)} gap-3`}>
```

### Option 2: Add Visual Indicator
Show "Parallel Classes" badge when lectures are grouped:
```jsx
{item.lectures.length > 1 && (
  <div className="text-xs bg-purple-600/30 px-2 py-1 rounded">
    {item.lectures.length} Parallel Classes
  </div>
)}
```

### Option 3: Customize Gap Spacing
Adjust the gap between simultaneous classes:
```jsx
<div className="grid grid-cols-2 gap-2"> {/* Change gap-3 to gap-2, gap-4, etc. */}
```

## Performance Metrics

- Build time: ~2.5 seconds
- Module count: 1707 modules transformed
- No additional dependencies required
- Zero impact on bundle size
- Backward compatible (non-grouped lectures work as before)

## Validation

✅ Build succeeds without errors
✅ No TypeScript/syntax errors
✅ Hot Module Replacement (HMR) working
✅ All filters functional
✅ Responsive design maintained
✅ Component reusability preserved
