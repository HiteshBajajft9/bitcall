// Transport data with bus timings for different categories and day types
export const STOPS = ['BIT MESRA', 'Doranda', 'St. Xavier College', 'Lalpur'];

export const BUS_SCHEDULES = [
  {
    id: 'staff-weekday',
    category: 'Staff Bus',
    dayType: 'Monday to Friday',
    timings: {
      'BIT MESRA': ['05:40AM', '06:30AM', '07:00AM', '08:10AM', '05:40PM', '05:40PM'],
      'Doranda': ['06:50AM', '08:00AM'],
      'St. Xavier College': ['07:00AM', '08:10AM', '01:00PM', '07:30PM', '08:00PM'],
      'Lalpur': ['07:05AM', '08:15AM', '01:05PM', '07:35PM', '08:05PM']
    }
  },
  {
    id: 'staff-saturday',
    category: 'Staff Bus',
    dayType: 'Saturday',
    timings: {
      'BIT MESRA': ['05:40AM', '06:30AM', '07:00AM', '09:10AM'],
      'Doranda': ['06:50AM', '08:00AM'],
      'St. Xavier College': ['07:00AM', '08:10AM', '01:00PM'],
      'Lalpur': ['07:05AM', '08:15AM', '01:05PM']
    }
  },
  {
    id: 'staff-sunday-holiday',
    category: 'Staff Bus',
    dayType: 'Sunday & Holiday',
    timings: {
      'BIT MESRA': ['09:10AM'],
      'Doranda': [],
      'St. Xavier College': ['01:00PM'],
      'Lalpur': ['01:05PM']
    }
  },
  {
    id: 'student-daily',
    category: 'Student Bus',
    dayType: 'Monday to Sunday',
    timings: {
      'BIT MESRA': ['11:00AM', '01:10PM', '03:30PM', '05:30PM'],
      'Doranda': [],
      'St. Xavier College': ['12:00PM', '03:30PM', '05:30PM', '07:00PM'],
      'Lalpur': ['12:05PM', '03:35PM', '05:35PM', '07:05PM']
    }
  }
];
