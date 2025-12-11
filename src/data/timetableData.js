// Mock timetable data with start and end times
export const TIMETABLE_DATA = [
  // ECE-A Monday
  { branch: 'ECE', section: 'A', day: 'Monday', startTime: '09:00', endTime: '10:00', lectureName: 'Data Structures', professor: 'Dr. Sharma', classType: 'Lecture', roomNo: '301' },
  { branch: 'ECE', section: 'A', day: 'Monday', startTime: '10:00', endTime: '11:50', lectureName: 'Digital Logic Lab', professor: 'Dr. Patel', classType: 'Lab', roomNo: 'Lab-A' },
  { branch: 'ECE', section: 'A', day: 'Monday', startTime: '12:00', endTime: '12:50', lectureName: 'Microprocessors Tutorial', professor: 'Prof. Kumar', classType: 'Tutorial', roomNo: '304' },
  { branch: 'ECE', section: 'A', day: 'Monday', startTime: '14:00', endTime: '15:00', lectureName: 'Communication Systems', professor: 'Dr. Singh', classType: 'Lecture', roomNo: '302' },
  { branch: 'ECE', section: 'A', day: 'Monday', startTime: '15:00', endTime: '16:50', lectureName: 'Object Oriented Programming', professor: 'Dr. Sharma', classType: 'Lecture', roomNo: '305' },
  
  // ECE-A Tuesday
  { branch: 'ECE', section: 'A', day: 'Tuesday', startTime: '09:00', endTime: '10:00', lectureName: 'Analog Electronics', professor: 'Dr. Verma', classType: 'Lecture', roomNo: '305' },
  { branch: 'ECE', section: 'A', day: 'Tuesday', startTime: '10:00', endTime: '11:50', lectureName: 'Circuit Analysis Lab', professor: 'Prof. Sharma', classType: 'Lab', roomNo: 'Lab-B' },
  { branch: 'ECE', section: 'A', day: 'Tuesday', startTime: '12:00', endTime: '12:50', lectureName: 'Signal Processing', professor: 'Dr. Desai', classType: 'Lecture', roomNo: '303' },
  { branch: 'ECE', section: 'A', day: 'Tuesday', startTime: '14:00', endTime: '15:50', lectureName: 'Electromagnetic Theory', professor: 'Prof. Nair', classType: 'Lecture', roomNo: '301' },
  
  // ECE-A Wednesday
  { branch: 'ECE', section: 'A', day: 'Wednesday', startTime: '09:00', endTime: '10:00', lectureName: 'Power Systems', professor: 'Dr. Joshi', classType: 'Lecture', roomNo: '304' },
  { branch: 'ECE', section: 'A', day: 'Wednesday', startTime: '10:00', endTime: '11:50', lectureName: 'Power Lab', professor: 'Prof. Reddy', classType: 'Lab', roomNo: 'Lab-C' },
  { branch: 'ECE', section: 'A', day: 'Wednesday', startTime: '12:00', endTime: '12:50', lectureName: 'Control Systems Tutorial', professor: 'Dr. Iyer', classType: 'Tutorial', roomNo: '305' },
  { branch: 'ECE', section: 'A', day: 'Wednesday', startTime: '14:00', endTime: '15:50', lectureName: 'VLSI Design', professor: 'Prof. Saxena', classType: 'Lecture', roomNo: '302' },
  
  // ECE-A Thursday
  { branch: 'ECE', section: 'A', day: 'Thursday', startTime: '09:00', endTime: '10:00', lectureName: 'Embedded Systems', professor: 'Dr. Trivedi', classType: 'Lecture', roomNo: '303' },
  { branch: 'ECE', section: 'A', day: 'Thursday', startTime: '09:00', endTime: '10:00', lectureName: 'Embedded Systems Lab', professor: 'Dr. Trivedi', classType: 'Lab', roomNo: '304' },
  { branch: 'ECE', section: 'A', day: 'Thursday', startTime: '10:00', endTime: '11:50', lectureName: 'Embedded Lab', professor: 'Prof. Gupta', classType: 'Lab', roomNo: 'Lab-A' },
  { branch: 'ECE', section: 'A', day: 'Thursday', startTime: '12:00', endTime: '12:50', lectureName: 'Digital Signal Processing', professor: 'Dr. Kulkarni', classType: 'Lecture', roomNo: '304' },
  { branch: 'ECE', section: 'A', day: 'Thursday', startTime: '14:00', endTime: '15:50', lectureName: 'Wireless Communication', professor: 'Prof. Pillai', classType: 'Tutorial', roomNo: '301' },
  
  // ECE-A Friday
  { branch: 'ECE', section: 'A', day: 'Friday', startTime: '09:00', endTime: '10:00', lectureName: 'Antenna Theory', professor: 'Dr. Hegde', classType: 'Lecture', roomNo: '305' },
  { branch: 'ECE', section: 'A', day: 'Friday', startTime: '10:00', endTime: '11:50', lectureName: 'Antenna Lab', professor: 'Prof. Bhat', classType: 'Lab', roomNo: 'Lab-B' },
  { branch: 'ECE', section: 'A', day: 'Friday', startTime: '12:00', endTime: '12:50', lectureName: 'Microwave Engineering', professor: 'Dr. Rao', classType: 'Lecture', roomNo: '302' },
  { branch: 'ECE', section: 'A', day: 'Friday', startTime: '14:00', endTime: '15:50', lectureName: 'Optical Communication', professor: 'Prof. Das', classType: 'Tutorial', roomNo: '303' },
  
    // ECE-B Monday
    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '08:00', endTime: '08:50', lectureName: 'Electronic Devices Lab (B1)', professor: 'SSG', classType: 'Lab', roomNo: 'ED Lab' },
    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '08:00', endTime: '08:50', lectureName: 'Electronic Devices Lab (B2)', professor: 'DKU', classType: 'Lab', roomNo: 'ED Lab' },

    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '11:00', endTime: '11:50', lectureName: 'Digital System Design Lab (B1)', professor: 'SKD', classType: 'Lab', roomNo: 'DSD Lab' },

    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '13:30', endTime: '14:20', lectureName: 'Network Theory', professor: 'EEE', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '14:30', endTime: '15:20', lectureName: 'Signals and Systems', professor: 'AV', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '15:30', endTime: '16:20', lectureName: 'Probability and Random Processes', professor: 'DKU', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Monday', startTime: '16:30', endTime: '17:20', lectureName: 'Digital System Design', professor: 'SKD', classType: 'Lecture', roomNo: '233-A' },

    // ECE-B Tuesday
    { branch: 'ECE', section: 'B', day: 'Tuesday', startTime: '08:00', endTime: '08:50', lectureName: 'Electronic Devices', professor: 'DG', classType: 'Lecture', roomNo: '237' },
    { branch: 'ECE', section: 'B', day: 'Tuesday', startTime: '09:00', endTime: '09:50', lectureName: 'Network Theory', professor: 'EEE', classType: 'Lecture', roomNo: '237' },

    { branch: 'ECE', section: 'B', day: 'Tuesday', startTime: '12:00', endTime: '12:50', lectureName: 'Digital System Design Lab (B1)', professor: 'SKD', classType: 'Lab', roomNo: 'DSD Lab' },

    // ECE-B Wednesday
    { branch: 'ECE', section: 'B', day: 'Wednesday', startTime: '08:00', endTime: '08:50', lectureName: 'Probability and Random Processes', professor: 'DKU', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Wednesday', startTime: '09:00', endTime: '09:50', lectureName: 'Electronic Devices', professor: 'DG', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Wednesday', startTime: '10:00', endTime: '10:50', lectureName: 'UHV-II: Understanding Harmony', professor: 'SK2', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Wednesday', startTime: '11:00', endTime: '11:50', lectureName: 'Digital System Design', professor: 'SKD', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Wednesday', startTime: '12:00', endTime: '12:50', lectureName: 'Network Theory', professor: 'EEE', classType: 'Lecture', roomNo: '233-A' },

    // ECE-B Thursday
    { branch: 'ECE', section: 'B', day: 'Thursday', startTime: '08:00', endTime: '08:50', lectureName: 'Electronic Devices Lab (B2)', professor: 'DG', classType: 'Lab', roomNo: 'ED Lab' },

    { branch: 'ECE', section: 'B', day: 'Thursday', startTime: '13:30', endTime: '14:20', lectureName: 'Electronic Devices', professor: 'DG', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Thursday', startTime: '14:30', endTime: '15:20', lectureName: 'Signals and Systems', professor: 'AV', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Thursday', startTime: '15:30', endTime: '16:20', lectureName: 'Network Theory', professor: 'EEE', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Thursday', startTime: '16:30', endTime: '17:20', lectureName: 'UHV-II: Understanding Harmony', professor: 'SK2', classType: 'Lecture', roomNo: '233-A' },

    // ECE-B Friday
    { branch: 'ECE', section: 'B', day: 'Friday', startTime: '08:00', endTime: '08:50', lectureName: 'Signals and Systems', professor: 'AV', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Friday', startTime: '09:00', endTime: '09:50', lectureName: 'Electronic Devices', professor: 'DG', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Friday', startTime: '10:00', endTime: '10:50', lectureName: 'UHV-II: Understanding Harmony', professor: 'SK2', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Friday', startTime: '11:00', endTime: '11:50', lectureName: 'Probability and Random Processes', professor: 'DKU', classType: 'Lecture', roomNo: '233-A' },
    { branch: 'ECE', section: 'B', day: 'Friday', startTime: '12:00', endTime: '12:50', lectureName: 'Digital System Design', professor: 'SKD', classType: 'Lecture', roomNo: '233-A' },

  // EEE-D Monday
  { branch: 'EEE', section: 'D', day: 'Monday', startTime: '09:00', endTime: '10:00', lectureName: 'Circuit Theory', professor: 'Dr. Ghosh', classType: 'Lecture', roomNo: '504' },
  { branch: 'EEE', section: 'D', day: 'Monday', startTime: '10:00', endTime: '11:50', lectureName: 'Circuit Lab', professor: 'Prof. Roy', classType: 'Lab', roomNo: 'Lab-C' },
  { branch: 'EEE', section: 'D', day: 'Monday', startTime: '12:00', endTime: '12:50', lectureName: 'Electrical Measurements', professor: 'Dr. Pal', classType: 'Lecture', roomNo: '503' },
  { branch: 'EEE', section: 'D', day: 'Monday', startTime: '14:00', endTime: '15:50', lectureName: 'Basic Electronics', professor: 'Prof. Kumar', classType: 'Lecture', roomNo: '504' },
  
  // EEE-D Tuesday
  { branch: 'EEE', section: 'D', day: 'Tuesday', startTime: '09:00', endTime: '10:00', lectureName: 'Control Systems', professor: 'Dr. Sarkar', classType: 'Lecture', roomNo: '504' },
  { branch: 'EEE', section: 'D', day: 'Tuesday', startTime: '09:00', endTime: '10:00', lectureName: 'Control Systems Tutorial', professor: 'Prof. Sinha', classType: 'Tutorial', roomNo: '505' },
  { branch: 'EEE', section: 'D', day: 'Tuesday', startTime: '10:00', endTime: '11:50', lectureName: 'Control Lab', professor: 'Prof. Biswas', classType: 'Lab', roomNo: 'Lab-A' },
  { branch: 'EEE', section: 'D', day: 'Tuesday', startTime: '12:00', endTime: '12:50', lectureName: 'Power System Analysis', professor: 'Dr. Basak', classType: 'Lecture', roomNo: '501' },
  { branch: 'EEE', section: 'D', day: 'Tuesday', startTime: '14:00', endTime: '15:50', lectureName: 'Transmission Lines', professor: 'Prof. Das', classType: 'Lecture', roomNo: '503' },
  
  // EEE-D Wednesday
  { branch: 'EEE', section: 'D', day: 'Wednesday', startTime: '09:00', endTime: '10:00', lectureName: 'Electrical Machines', professor: 'Dr. Chowdhury', classType: 'Lecture', roomNo: '501' },
  { branch: 'EEE', section: 'D', day: 'Wednesday', startTime: '10:00', endTime: '11:50', lectureName: 'Machines Lab', professor: 'Prof. Menon', classType: 'Lab', roomNo: 'Lab-B' },
  { branch: 'EEE', section: 'D', day: 'Wednesday', startTime: '12:00', endTime: '12:50', lectureName: 'Power Electronics', professor: 'Dr. Chand', classType: 'Lecture', roomNo: '502' },
  { branch: 'EEE', section: 'D', day: 'Wednesday', startTime: '14:00', endTime: '15:50', lectureName: 'Power Electronics Lab', professor: 'Prof. Singh', classType: 'Lab', roomNo: 'Lab-C' },
  
  // EEE-D Thursday
  { branch: 'EEE', section: 'D', day: 'Thursday', startTime: '09:00', endTime: '10:00', lectureName: 'High Voltage Engineering', professor: 'Dr. Mohan', classType: 'Lecture', roomNo: '503' },
  { branch: 'EEE', section: 'D', day: 'Thursday', startTime: '10:00', endTime: '11:50', lectureName: 'HV Lab', professor: 'Prof. Kapoor', classType: 'Lab', roomNo: 'Lab-A' },
  { branch: 'EEE', section: 'D', day: 'Thursday', startTime: '12:00', endTime: '12:50', lectureName: 'Power Generation', professor: 'Dr. Khan', classType: 'Lecture', roomNo: '501' },
  { branch: 'EEE', section: 'D', day: 'Thursday', startTime: '14:00', endTime: '15:50', lectureName: 'Electrical Safety', professor: 'Prof. Saxena', classType: 'Tutorial', roomNo: '502' },
  
  // EEE-D Friday
  { branch: 'EEE', section: 'D', day: 'Friday', startTime: '09:00', endTime: '10:00', lectureName: 'Renewable Energy', professor: 'Dr. Banerjee', classType: 'Lecture', roomNo: '502' },
  { branch: 'EEE', section: 'D', day: 'Friday', startTime: '10:00', endTime: '11:50', lectureName: 'RE Lab', professor: 'Prof. Mukherjee', classType: 'Lab', roomNo: 'Lab-B' },
  { branch: 'EEE', section: 'D', day: 'Friday', startTime: '12:00', endTime: '12:50', lectureName: 'Solar Energy', professor: 'Dr. Pal', classType: 'Lecture', roomNo: '503' },
  { branch: 'EEE', section: 'D', day: 'Friday', startTime: '14:00', endTime: '15:50', lectureName: 'Energy Storage', professor: 'Prof. Verma', classType: 'Lecture', roomNo: '501' },
  
  // CSE-F Monday
  { branch: 'CSE', section: 'F', day: 'Monday', startTime: '09:00', endTime: '10:00', lectureName: 'Data Structures', professor: 'Dr. Bose', classType: 'Lecture', roomNo: '603' },
  { branch: 'CSE', section: 'F', day: 'Monday', startTime: '10:00', endTime: '11:50', lectureName: 'DSA Lab', professor: 'Prof. Chatterjee', classType: 'Lab', roomNo: 'Lab-C' },
  { branch: 'CSE', section: 'F', day: 'Monday', startTime: '12:00', endTime: '12:50', lectureName: 'Discrete Mathematics', professor: 'Dr. Gupta', classType: 'Lecture', roomNo: '601' },
  { branch: 'CSE', section: 'F', day: 'Monday', startTime: '14:00', endTime: '15:50', lectureName: 'Digital Logic', professor: 'Prof. Singh', classType: 'Lecture', roomNo: '602' },
  
  // CSE-F Tuesday
  { branch: 'CSE', section: 'F', day: 'Tuesday', startTime: '09:00', endTime: '10:00', lectureName: 'Database Systems', professor: 'Dr. Srivastava', classType: 'Lecture', roomNo: '602' },
  { branch: 'CSE', section: 'F', day: 'Tuesday', startTime: '10:00', endTime: '11:50', lectureName: 'Database Lab', professor: 'Prof. Agarwal', classType: 'Lab', roomNo: 'Lab-A' },
  { branch: 'CSE', section: 'F', day: 'Tuesday', startTime: '12:00', endTime: '12:50', lectureName: 'SQL Tutorial', professor: 'Dr. Sharma', classType: 'Tutorial', roomNo: '603' },
  { branch: 'CSE', section: 'F', day: 'Tuesday', startTime: '14:00', endTime: '15:50', lectureName: 'Database Design', professor: 'Prof. Nair', classType: 'Lecture', roomNo: '601' },
  
  // CSE-F Wednesday
  { branch: 'CSE', section: 'F', day: 'Wednesday', startTime: '09:00', endTime: '10:00', lectureName: 'Web Development', professor: 'Dr. Mishra', classType: 'Lecture', roomNo: '603' },
  { branch: 'CSE', section: 'F', day: 'Wednesday', startTime: '10:00', endTime: '11:50', lectureName: 'Web Dev Lab', professor: 'Prof. Nair', classType: 'Lab', roomNo: 'Lab-B' },
  { branch: 'CSE', section: 'F', day: 'Wednesday', startTime: '12:00', endTime: '12:50', lectureName: 'Full Stack Development', professor: 'Dr. Iyer', classType: 'Lecture', roomNo: '601' },
  { branch: 'CSE', section: 'F', day: 'Wednesday', startTime: '14:00', endTime: '15:50', lectureName: 'Frontend Frameworks', professor: 'Prof. Das', classType: 'Tutorial', roomNo: '602' },
  
  // CSE-F Thursday
  { branch: 'CSE', section: 'F', day: 'Thursday', startTime: '09:00', endTime: '10:00', lectureName: 'Operating Systems', professor: 'Dr. Deshmukh', classType: 'Lecture', roomNo: '602' },
  { branch: 'CSE', section: 'F', day: 'Thursday', startTime: '10:00', endTime: '11:50', lectureName: 'OS Lab', professor: 'Prof. Kulkarni', classType: 'Lab', roomNo: 'Lab-C' },
  { branch: 'CSE', section: 'F', day: 'Thursday', startTime: '12:00', endTime: '12:50', lectureName: 'Process Management', professor: 'Dr. Mehta', classType: 'Tutorial', roomNo: '603' },
  { branch: 'CSE', section: 'F', day: 'Thursday', startTime: '14:00', endTime: '15:50', lectureName: 'Memory Management', professor: 'Prof. Rao', classType: 'Lecture', roomNo: '601' },
  
  // CSE-F Friday
  { branch: 'CSE', section: 'F', day: 'Friday', startTime: '09:00', endTime: '10:00', lectureName: 'Algorithms', professor: 'Dr. Bhattacharya', classType: 'Lecture', roomNo: '601' },
  { branch: 'CSE', section: 'F', day: 'Friday', startTime: '10:00', endTime: '11:50', lectureName: 'Algorithms Lab', professor: 'Prof. Chatterjee', classType: 'Lab', roomNo: 'Lab-B' },
  { branch: 'CSE', section: 'F', day: 'Friday', startTime: '12:00', endTime: '12:50', lectureName: 'Compiler Design', professor: 'Dr. Das', classType: 'Lecture', roomNo: '602' },
  { branch: 'CSE', section: 'F', day: 'Friday', startTime: '14:00', endTime: '15:50', lectureName: 'Compiler Lab', professor: 'Prof. Dutta', classType: 'Lab', roomNo: 'Lab-C' },
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const BRANCH_SECTIONS = [
  { label: 'ECE - A', value: 'ECE-A' },
  { label: 'ECE - B', value: 'ECE-B' },
  { label: 'EEE - D', value: 'EEE-D' },
  { label: 'CSE - F', value: 'CSE-F' }
];

export const SEMESTERS = [
  { label: 'Semester 1', value: '1' },
  { label: 'Semester 2', value: '2' }
];
